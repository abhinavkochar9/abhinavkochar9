"use client";
import Image from "next/image";
import Link from "next/link";
import { WishlistItem as WishlistItemType } from "@/types";
import { getProductBySlug } from "@/data/products";
import { formatPrice } from "@/lib/utils";
import { useWishlist } from "@/hooks/useWishlist";

interface WishlistItemProps {
  item: WishlistItemType;
}

export function WishlistItem({ item }: WishlistItemProps) {
  const { remove } = useWishlist();
  const product = getProductBySlug(item.productSlug);

  if (!product) return null;

  return (
    <div className="flex gap-4 p-4 bg-surface border border-border rounded-xl group hover:border-border/80 transition-colors">
      {/* Image */}
      <Link
        href={`/brands/${item.brandSlug}/${item.productSlug}`}
        className="relative w-20 h-20 rounded-lg overflow-hidden flex-shrink-0 img-zoom"
      >
        <Image
          src={product.images[0]}
          alt={product.name}
          fill
          sizes="80px"
          className="object-cover"
        />
      </Link>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <Link
          href={`/brands/${item.brandSlug}/${item.productSlug}`}
          className="text-sm font-medium text-foreground hover:text-accent transition-colors line-clamp-1"
        >
          {product.name}
        </Link>
        {item.selectedSize && (
          <p className="text-xs text-text-secondary mt-1">
            Size: {item.selectedSize}
          </p>
        )}
        <p className="text-sm font-semibold text-accent mt-1">
          {formatPrice(product.price)}
        </p>
      </div>

      {/* Remove */}
      <button
        onClick={() => remove(item.productSlug, item.selectedSize)}
        className="self-center p-2 text-text-secondary hover:text-red-400 transition-colors opacity-0 group-hover:opacity-100"
      >
        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  );
}
