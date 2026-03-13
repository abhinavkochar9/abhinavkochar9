import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { products, getProductBySlug } from "@/data/products";
import { getBrandBySlug } from "@/data/brands";
import { ProductGallery } from "@/components/product/ProductGallery";
import { ProductInfo } from "@/components/product/ProductInfo";

interface Props {
  params: Promise<{ brandSlug: string; productSlug: string }>;
}

export async function generateStaticParams() {
  return products.map((p) => ({
    brandSlug: p.brandSlug,
    productSlug: p.slug,
  }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { productSlug } = await params;
  const product = getProductBySlug(productSlug);
  if (!product) return {};
  return {
    title: product.name,
    description: product.description,
    openGraph: {
      images: [product.images[0]],
    },
  };
}

export default async function ProductPage({ params }: Props) {
  const { brandSlug, productSlug } = await params;
  const product = getProductBySlug(productSlug);
  const brand = getBrandBySlug(brandSlug);

  if (!product || !brand || product.brandSlug !== brandSlug) {
    notFound();
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="flex items-center gap-2 text-sm text-text-secondary mb-8 animate-fade-in">
        <Link href="/" className="hover:text-foreground transition-colors">
          Home
        </Link>
        <span>/</span>
        <Link
          href={`/brands/${brand.slug}`}
          className="hover:text-foreground transition-colors"
        >
          {brand.name}
        </Link>
        <span>/</span>
        <span className="text-foreground">{product.name}</span>
      </nav>

      {/* Product layout */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
        <ProductGallery images={product.images} productName={product.name} />
        <ProductInfo product={product} />
      </div>
    </div>
  );
}
