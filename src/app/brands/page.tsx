import type { Metadata } from "next";
import { brands } from "@/data/brands";
import { BrandCard } from "@/components/brand/BrandCard";

export const metadata: Metadata = {
  title: "Brands",
  description: "Discover Indian brands available in Kansas City through IndieThread.",
};

export default function BrandsPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="text-center mb-12 animate-fade-in-up">
        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-2">
          Our Partners
        </p>
        <h1 className="text-4xl md:text-5xl font-display font-bold mb-4">
          Brands
        </h1>
        <p className="text-text-secondary max-w-lg mx-auto">
          Curated Indian brands, bringing authentic style to Kansas City.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 stagger-children">
        {brands.map((brand) => (
          <BrandCard key={brand.slug} brand={brand} />
        ))}
      </div>

      {/* Coming soon */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-2 px-6 py-3 bg-surface border border-border rounded-full text-sm text-text-secondary">
          <span className="w-2 h-2 rounded-full bg-yellow-500 animate-pulse" />
          More brands coming soon
        </div>
      </div>
    </div>
  );
}
