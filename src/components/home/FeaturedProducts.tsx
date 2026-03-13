import { getFeaturedProducts } from "@/data/products";
import { ProductGrid } from "@/components/product/ProductGrid";

export function FeaturedProducts() {
  const products = getFeaturedProducts();

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <ProductGrid
        products={products}
        title="The Collection"
        subtitle="Handpicked for KC"
      />
    </div>
  );
}
