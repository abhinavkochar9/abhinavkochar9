"use client";
import Image from "next/image";
import Link from "next/link";
import { getFeaturedBrands } from "@/data/brands";
import { AnimatedSection } from "@/components/ui/AnimatedSection";

export function BrandSpotlight() {
  const brands = getFeaturedBrands();
  const brand = brands[0];
  if (!brand) return null;

  return (
    <section className="py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <AnimatedSection>
          <div className="relative rounded-2xl overflow-hidden bg-surface border border-border">
            <div className="grid md:grid-cols-2">
              {/* Image */}
              <div className="relative h-64 md:h-auto">
                <Image
                  src="/images/products/the-milf-tee/01.jpg"
                  alt={brand.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-surface md:block hidden" />
                <div className="absolute inset-0 bg-gradient-to-t from-surface to-transparent md:hidden" />
              </div>

              {/* Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center relative">
                {/* Glow */}
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-accent/20 rounded-full blur-3xl" />

                <p className="text-xs uppercase tracking-[0.2em] text-accent mb-3 relative">
                  Featured Brand
                </p>
                <h2 className="text-3xl md:text-4xl font-display font-bold mb-4 relative">
                  {brand.name}
                </h2>
                <p className="text-text-secondary mb-6 leading-relaxed relative">
                  {brand.description}
                </p>
                <div className="flex gap-4 flex-wrap relative">
                  <Link
                    href={`/brands/${brand.slug}`}
                    className="px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 active:scale-95"
                  >
                    Shop {brand.name}
                  </Link>
                  <a
                    href={brand.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-6 py-3 border border-border text-text-secondary font-medium rounded-lg hover:border-accent hover:text-accent transition-all duration-300"
                  >
                    Visit Website &rarr;
                  </a>
                </div>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </div>
    </section>
  );
}
