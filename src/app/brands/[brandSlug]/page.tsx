import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { brands, getBrandBySlug } from "@/data/brands";
import { getProductsByBrand } from "@/data/products";
import { BrandHero } from "@/components/brand/BrandHero";
import { ProductGrid } from "@/components/product/ProductGrid";
import { RequestFromBrand } from "@/components/brand/RequestFromBrand";

interface Props {
  params: Promise<{ brandSlug: string }>;
}

export async function generateStaticParams() {
  return brands.map((brand) => ({ brandSlug: brand.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) return {};
  return {
    title: brand.name,
    description: `Shop ${brand.name} — ${brand.tagline}`,
  };
}

export default async function BrandPage({ params }: Props) {
  const { brandSlug } = await params;
  const brand = getBrandBySlug(brandSlug);
  if (!brand) notFound();

  const products = getProductsByBrand(brandSlug);

  return (
    <>
      <BrandHero brand={brand} />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ProductGrid products={products} />
      </div>
      <RequestFromBrand brand={brand} />
    </>
  );
}
