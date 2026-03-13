import Link from "next/link";
import Image from "next/image";
import { Brand } from "@/types";

interface BrandCardProps {
  brand: Brand;
}

export function BrandCard({ brand }: BrandCardProps) {
  return (
    <Link
      href={`/brands/${brand.slug}`}
      className="group block hover-lift rounded-xl overflow-hidden bg-surface border border-border/50 hover:border-accent/30 transition-all duration-500"
    >
      <div className="relative h-48 img-zoom bg-background">
        <Image
          src={brand.heroUrl}
          alt={brand.name}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
        <div className="absolute bottom-4 left-4">
          <div className="inline-flex items-center gap-2 px-2 py-1 bg-black/40 backdrop-blur-sm rounded-full text-xs text-white/80 mb-2">
            <span className="w-1.5 h-1.5 rounded-full bg-green-500" />
            {brand.origin}
          </div>
          <h3 className="text-xl font-display font-bold text-white">
            {brand.name}
          </h3>
        </div>
      </div>

      <div className="p-4">
        <p className="text-sm text-text-secondary line-clamp-2">
          {brand.tagline}
        </p>
        <p className="text-xs text-accent mt-2 group-hover:underline">
          Explore collection &rarr;
        </p>
      </div>
    </Link>
  );
}
