import { Brand } from "@/types";

export const brands: Brand[] = [
  {
    slug: "charactr",
    name: "Charactr",
    tagline: "Indian style with character.",
    description:
      "Born in India, Charactr blends bold graphic design with premium heavyweight cotton. Each piece features intricate embossed and textured artwork that you can feel. Now available in Kansas City through IndieThread.",
    origin: "India",
    website: "https://www.charactr.in",
    instagram: "charactr.in",
    logoUrl: "/images/brands/charactr/logo.png",
    heroUrl: "/images/products/release-me/01.webp",
    accentColor: "#8B5CF6",
    featured: true,
  },
];

export function getBrandBySlug(slug: string): Brand | undefined {
  return brands.find((b) => b.slug === slug);
}

export function getFeaturedBrands(): Brand[] {
  return brands.filter((b) => b.featured);
}
