export interface Brand {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  origin: string;
  website: string;
  instagram: string;
  logoUrl: string;
  heroUrl: string;
  accentColor: string;
  featured: boolean;
}

export interface Product {
  slug: string;
  name: string;
  brandSlug: string;
  price: number;
  currency: string;
  description: string;
  images: string[];
  backImage?: string;
  originalUrl: string;
  sizes: string[];
  tags: string[];
  featured: boolean;
  inStock: boolean;
}

export interface WishlistItem {
  productSlug: string;
  brandSlug: string;
  selectedSize?: string;
  addedAt: number;
}

export interface SiteConfig {
  name: string;
  tagline: string;
  description: string;
  instagram: string;
  location: string;
}
