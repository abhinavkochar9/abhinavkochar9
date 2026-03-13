import { Brand } from "@/types";
import { Button } from "@/components/ui/Button";

interface RequestFromBrandProps {
  brand: Brand;
}

export function RequestFromBrand({ brand }: RequestFromBrandProps) {
  return (
    <section className="py-16 px-4">
      <div className="max-w-3xl mx-auto text-center bg-surface border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
        {/* Accent glow */}
        <div
          className="absolute -top-20 left-1/2 -translate-x-1/2 w-60 h-60 rounded-full opacity-20 blur-3xl"
          style={{ background: brand.accentColor }}
        />

        <div className="relative">
          <h3 className="text-2xl md:text-3xl font-display font-bold mb-3">
            Don&apos;t see what you want?
          </h3>
          <p className="text-text-secondary mb-8 max-w-lg mx-auto">
            Browse the full {brand.name} catalog on their website and tell us what
            you&apos;d like us to bring to KC. We&apos;ll order it for the next batch.
          </p>

          <div className="flex items-center justify-center gap-4 flex-wrap">
            <Button href={brand.website} external variant="primary" size="lg">
              Browse {brand.name} Catalog
            </Button>
            <Button
              href={`https://ig.me/m/${brand.instagram}`}
              external
              variant="outline"
              size="lg"
            >
              DM Your Request
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
