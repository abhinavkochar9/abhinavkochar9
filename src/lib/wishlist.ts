import { WishlistItem } from "@/types";

const STORAGE_KEY = "indiethread-wishlist";

let cachedItems: WishlistItem[] = [];
let cachedRaw: string | null = null;

export function getWishlist(): WishlistItem[] {
  if (typeof window === "undefined") return cachedItems;
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw !== cachedRaw) {
      cachedRaw = raw;
      cachedItems = raw ? JSON.parse(raw) : [];
    }
    return cachedItems;
  } catch {
    return cachedItems;
  }
}

function invalidateCache() {
  cachedRaw = null;
}

export function addToWishlist(item: WishlistItem): void {
  const current = getWishlist();
  const exists = current.find(
    (i) =>
      i.productSlug === item.productSlug && i.selectedSize === item.selectedSize
  );
  if (exists) return;
  const updated = [...current, { ...item, addedAt: Date.now() }];
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  invalidateCache();
}

export function removeFromWishlist(
  productSlug: string,
  size?: string
): void {
  const current = getWishlist();
  const updated = current.filter(
    (i) => !(i.productSlug === productSlug && i.selectedSize === size)
  );
  localStorage.setItem(STORAGE_KEY, JSON.stringify(updated));
  invalidateCache();
}

export function clearWishlist(): void {
  localStorage.removeItem(STORAGE_KEY);
  invalidateCache();
}
