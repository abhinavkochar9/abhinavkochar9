"use client";
import { useCallback, useSyncExternalStore } from "react";
import { WishlistItem } from "@/types";
import * as wishlistLib from "@/lib/wishlist";

let listeners: (() => void)[] = [];

function emitChange() {
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void) {
  listeners.push(listener);
  return () => {
    listeners = listeners.filter((l) => l !== listener);
  };
}

function getSnapshot(): WishlistItem[] {
  return wishlistLib.getWishlist();
}

const EMPTY: WishlistItem[] = [];
function getServerSnapshot(): WishlistItem[] {
  return EMPTY;
}

export function useWishlist() {
  const items = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);

  const add = useCallback(
    (item: Omit<WishlistItem, "addedAt">) => {
      wishlistLib.addToWishlist({
        ...item,
        addedAt: Date.now(),
      });
      emitChange();
    },
    []
  );

  const remove = useCallback((productSlug: string, size?: string) => {
    wishlistLib.removeFromWishlist(productSlug, size);
    emitChange();
  }, []);

  const clear = useCallback(() => {
    wishlistLib.clearWishlist();
    emitChange();
  }, []);

  const isInWishlist = useCallback(
    (productSlug: string, size?: string) =>
      items.some(
        (i) => i.productSlug === productSlug && i.selectedSize === size
      ),
    [items]
  );

  return { items, add, remove, clear, isInWishlist, count: items.length };
}
