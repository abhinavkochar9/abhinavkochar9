"use client";
import Image from "next/image";
import Link from "next/link";
import { Product } from "@/types";
import { formatPrice } from "@/lib/utils";
import { getBrandBySlug } from "@/data/brands";

interface ProductCardProps {
  product: Product;
  index?: number;
}

export function ProductCard({ product, index = 0 }: ProductCardProps) {
  const brand = getBrandBySlug(product.brandSlug);
  const hasBack = !!product.backImage;

  return (
    <Link
      href={`/brands/${product.brandSlug}/${product.slug}`}
      className="group block"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="hover-lift rounded-xl overflow-hidden bg-surface border border-border/50 hover:border-accent/30 transition-all duration-500">
        {/* Image with flip */}
        <div
          className="relative aspect-[3/4] bg-background"
          style={{ perspective: "1000px" }}
        >
          <div
            className={`relative w-full h-full transition-transform duration-700 ease-in-out ${hasBack ? "[transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]" : "img-zoom"}`}
          >
            {/* Front face */}
            <div className={`absolute inset-0 ${hasBack ? "[backface-visibility:hidden]" : ""}`}>
              <Image
                src={product.images[0]}
                alt={product.name}
                fill
                sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                className="object-cover"
                loading={index < 4 ? "eager" : "lazy"}
              />

              {/* Overlay gradient on hover (only when no back image) */}
              {!hasBack && (
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              )}
            </div>

            {/* Back face */}
            {hasBack && (
              <div className="absolute inset-0 [backface-visibility:hidden] [transform:rotateY(180deg)]">
                <Image
                  src={product.backImage!}
                  alt={`${product.name} — back design`}
                  fill
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                  className="object-cover"
                  loading="lazy"
                />
                {/* Subtle overlay with "Back Design" label */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="text-xs font-medium text-white/80 uppercase tracking-wider">Back Design</span>
                </div>
              </div>
            )}
          </div>

          {/* Price badge — stays on top of flip */}
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur-sm px-3 py-1 rounded-full z-10">
            <span className="text-sm font-semibold text-white">
              {formatPrice(product.price)}
            </span>
          </div>

          {/* Flip hint icon */}
          {hasBack && (
            <div className="absolute top-3 left-3 z-10 bg-black/50 backdrop-blur-sm px-2 py-1 rounded-full flex items-center gap-1 opacity-70 group-hover:opacity-0 transition-opacity duration-300">
              <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-white">
                <path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8" />
                <path d="M21 3v5h-5" />
                <path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16" />
                <path d="M8 16H3v5" />
              </svg>
              <span className="text-[10px] text-white font-medium">Flip</span>
            </div>
          )}

          {/* View Details on hover (non-flip cards) */}
          {!hasBack && (
            <div className="absolute bottom-4 left-4 right-4 opacity-0 group-hover:opacity-100 transform translate-y-4 group-hover:translate-y-0 transition-all duration-500 z-10">
              <span className="text-sm font-medium text-white">View Details</span>
            </div>
          )}
        </div>

        {/* Info */}
        <div className="p-4">
          {brand && (
            <p className="text-xs text-accent font-medium mb-1 uppercase tracking-wider">
              {brand.name}
            </p>
          )}
          <h3 className="text-sm font-medium text-foreground group-hover:text-accent transition-colors duration-300 line-clamp-1">
            {product.name}
          </h3>
        </div>
      </div>
    </Link>
  );
}
