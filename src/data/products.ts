import { Product } from "@/types";

export const products: Product[] = [
  {
    slug: "release-me",
    name: "Release Me Tee",
    brandSlug: "charactr",
    price: 35,
    currency: "USD",
    description:
      "Navy heavyweight tee featuring the Charactr logo in textured camo-pattern embossed lettering. Detailed 3D puff print with earth-tone and red accents on premium cotton.",
    images: Array.from({ length: 6 }, (_, i) =>
      `/images/products/release-me/${String(i + 1).padStart(2, "0")}.webp`
    ),
    backImage: "/images/products/release-me/03.webp",
    originalUrl:
      "https://www.charactr.in/products/release-me-tee?variant=46416808509609",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["streetwear", "graphic-tee", "embossed"],
    featured: true,
    inStock: true,
  },
  {
    slug: "the-milf-tee",
    name: "The MILF Tee",
    brandSlug: "charactr",
    price: 35,
    currency: "USD",
    description:
      "Deep teal oversized tee with the Charactr logo wrapped in floral butterfly motifs. 3D puff print with cream and rose-red embossed artwork on heavy cotton.",
    images: Array.from({ length: 13 }, (_, i) =>
      `/images/products/the-milf-tee/${String(i + 1).padStart(2, "0")}.jpg`
    ),
    backImage: "/images/products/the-milf-tee/07.jpg",
    originalUrl:
      "https://www.charactr.in/products/the-milf-tee?variant=46111862063273",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["streetwear", "graphic-tee", "floral"],
    featured: true,
    inStock: true,
  },
  {
    slug: "the-fortune-tee",
    name: "The Fortune Tee",
    brandSlug: "charactr",
    price: 35,
    currency: "USD",
    description:
      "Cream heavyweight tee with purple Charactr logo. Clean, minimal front design with full oversized streetwear fit. Premium cotton construction.",
    images: Array.from({ length: 12 }, (_, i) =>
      `/images/products/the-fortune-tee/${String(i + 1).padStart(2, "0")}.jpg`
    ),
    backImage: "/images/products/the-fortune-tee/05.jpg",
    originalUrl:
      "https://www.charactr.in/products/the-fortune-tee?variant=46416818012329",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["streetwear", "minimal", "cream"],
    featured: true,
    inStock: true,
  },
  {
    slug: "the-fortune-tshirt-black",
    name: "The Fortune Tee (Black)",
    brandSlug: "charactr",
    price: 35,
    currency: "USD",
    description:
      "Black heavyweight tee with dramatic back print featuring an abstract landscape in purple, red, and gold embossed artwork. Clean white Charactr logo on front.",
    images: Array.from({ length: 12 }, (_, i) =>
      `/images/products/the-fortune-tshirt-black/${String(i + 1).padStart(2, "0")}.jpg`
    ),
    backImage: "/images/products/the-fortune-tshirt-black/04.jpg",
    originalUrl:
      "https://www.charactr.in/products/the-fortune-tshirt-in-black?variant=46108861431977",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["streetwear", "graphic-tee", "embossed", "black"],
    featured: true,
    inStock: true,
  },
  {
    slug: "gods-will-tee",
    name: "God's Will Tee",
    brandSlug: "charactr",
    price: 35,
    currency: "USD",
    description:
      "Black tee with bold back print reading \"IT'S THE GOD'S WILL\" in cream puff print letters, surrounded by purple wave-like patterns. Clean front branding.",
    images: Array.from({ length: 12 }, (_, i) =>
      `/images/products/gods-will-tee/${String(i + 1).padStart(2, "0")}.jpg`
    ),
    backImage: "/images/products/gods-will-tee/05.jpg",
    originalUrl:
      "https://www.charactr.in/products/it-s-the-god-s-will-tee?variant=46111814254761",
    sizes: ["S", "M", "L", "XL", "XXL"],
    tags: ["streetwear", "graphic-tee", "typography"],
    featured: true,
    inStock: true,
  },
];

export function getProductBySlug(slug: string): Product | undefined {
  return products.find((p) => p.slug === slug);
}

export function getProductsByBrand(brandSlug: string): Product[] {
  return products.filter((p) => p.brandSlug === brandSlug);
}

export function getFeaturedProducts(): Product[] {
  return products.filter((p) => p.featured);
}
