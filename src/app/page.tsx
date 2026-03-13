import { Hero } from "@/components/home/Hero";
import { FeaturedProducts } from "@/components/home/FeaturedProducts";
import { BrandSpotlight } from "@/components/home/BrandSpotlight";
import { RequestFromBrand } from "@/components/brand/RequestFromBrand";
import { brands } from "@/data/brands";

export default function HomePage() {
  return (
    <>
      <Hero />
      <FeaturedProducts />
      <BrandSpotlight />
      <RequestFromBrand brand={brands[0]} />
    </>
  );
}
