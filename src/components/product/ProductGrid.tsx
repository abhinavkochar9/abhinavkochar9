"use client";
import { Product } from "@/types";
import { ProductCard } from "./ProductCard";
import { useInView } from "@/hooks/useInView";

interface ProductGridProps {
  products: Product[];
  title?: string;
  subtitle?: string;
}

export function ProductGrid({ products, title, subtitle }: ProductGridProps) {
  const { ref, isInView } = useInView();

  return (
    <section ref={ref} className="py-12">
      {(title || subtitle) && (
        <div className={`text-center mb-10 ${isInView ? "animate-fade-in-up" : "opacity-0"}`}>
          {subtitle && (
            <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
              {subtitle}
            </p>
          )}
          {title && (
            <h2 className="text-3xl md:text-4xl font-display font-bold">
              {title}
            </h2>
          )}
        </div>
      )}

      <div
        className={`grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 ${
          isInView ? "stagger-children" : ""
        }`}
      >
        {products.map((product, i) => (
          <ProductCard key={product.slug} product={product} index={i} />
        ))}
      </div>
    </section>
  );
}
