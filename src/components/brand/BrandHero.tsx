import { Brand } from "@/types";
import { Button } from "@/components/ui/Button";

interface BrandHeroProps {
  brand: Brand;
}

export function BrandHero({ brand }: BrandHeroProps) {
  return (
    <section className="relative py-16 md:py-24 border-b border-border">
      {/* Gradient accent */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          background: `radial-gradient(ellipse at top, ${brand.accentColor}, transparent 60%)`,
        }}
      />

      <div className="relative max-w-4xl mx-auto text-center px-4">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 bg-surface border border-border rounded-full text-xs text-text-secondary mb-6">
          <span className="w-2 h-2 rounded-full bg-green-500" />
          Made in {brand.origin}
        </div>

        <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">
          {brand.name}
        </h1>

        <p className="text-lg text-text-secondary mb-4 max-w-2xl mx-auto">
          {brand.tagline}
        </p>

        <p className="text-sm text-text-secondary mb-8 max-w-xl mx-auto leading-relaxed">
          {brand.description}
        </p>

        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Button href={brand.website} external variant="outline" size="md">
            Visit {brand.name} &rarr;
          </Button>
          <Button
            href={`https://www.instagram.com/${brand.instagram}`}
            external
            variant="ghost"
            size="md"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @{brand.instagram}
          </Button>
        </div>
      </div>
    </section>
  );
}
