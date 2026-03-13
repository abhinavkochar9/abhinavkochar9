"use client";
import { useState } from "react";
import { Product } from "@/types";
import { getBrandBySlug } from "@/data/brands";
import { formatPrice } from "@/lib/utils";
import { useWishlist } from "@/hooks/useWishlist";
import { useToast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";

interface ProductInfoProps {
  product: Product;
}

export function ProductInfo({ product }: ProductInfoProps) {
  const [selectedSize, setSelectedSize] = useState<string | undefined>();
  const { add, isInWishlist } = useWishlist();
  const { showToast } = useToast();
  const brand = getBrandBySlug(product.brandSlug);
  const inWishlist = isInWishlist(product.slug, selectedSize);

  const handleAddToWishlist = () => {
    if (!selectedSize) {
      showToast("Please select a size first");
      return;
    }
    add({
      productSlug: product.slug,
      brandSlug: product.brandSlug,
      selectedSize,
    });
    showToast(`${product.name} (${selectedSize}) added to your selections!`);
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in-up" style={{ animationDelay: "200ms", animationFillMode: "forwards" }}>
      {/* Brand */}
      {brand && (
        <a
          href={brand.website}
          target="_blank"
          rel="noopener noreferrer"
          className="text-sm text-accent font-medium uppercase tracking-[0.15em] hover:underline w-fit"
        >
          {brand.name}
        </a>
      )}

      {/* Name */}
      <h1 className="text-3xl md:text-4xl font-display font-bold leading-tight">
        {product.name}
      </h1>

      {/* Price */}
      <div className="flex items-baseline gap-3">
        <span className="text-3xl font-bold text-accent">
          {formatPrice(product.price)}
        </span>
        <span className="text-sm text-text-secondary">+ free local delivery in KC</span>
      </div>

      {/* Description */}
      <p className="text-text-secondary leading-relaxed">
        {product.description}
      </p>

      {/* Size selector */}
      <div>
        <p className="text-sm font-medium mb-3">Select Size</p>
        <div className="flex flex-wrap gap-2">
          {product.sizes.map((size) => (
            <button
              key={size}
              onClick={() => setSelectedSize(size)}
              className={`px-4 py-2 rounded-lg border text-sm font-medium transition-all duration-200 cursor-pointer ${
                selectedSize === size
                  ? "border-accent bg-accent/10 text-accent shadow-[0_0_10px_rgba(139,92,246,0.2)]"
                  : "border-border text-text-secondary hover:border-foreground hover:text-foreground"
              }`}
            >
              {size}
            </button>
          ))}
        </div>
      </div>

      {/* CTA buttons */}
      <div className="flex flex-col gap-3 pt-2">
        <Button
          onClick={handleAddToWishlist}
          variant="primary"
          size="lg"
          className={`w-full text-base font-semibold ${
            inWishlist ? "bg-green-600 hover:bg-green-700" : "animate-pulse-glow"
          }`}
          disabled={inWishlist}
        >
          {inWishlist ? "Added to Selections" : "I Want This"}
        </Button>

        <Button
          href={product.originalUrl}
          external
          variant="outline"
          size="md"
          className="w-full"
        >
          View on {brand?.name ?? "Brand Site"} &rarr;
        </Button>
      </div>

      {/* Tags */}
      <div className="flex flex-wrap gap-2 pt-2">
        {product.tags.map((tag) => (
          <span
            key={tag}
            className="px-3 py-1 text-xs text-text-secondary bg-surface border border-border rounded-full"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
}
