import type { Metadata } from "next";
import Link from "next/link";
import { siteConfig } from "@/data/site";

export const metadata: Metadata = {
  title: "About",
  description: `Learn about ${siteConfig.name} — how we bring the best Indian brands to ${siteConfig.location}.`,
};

export default function AboutPage() {
  const steps = [
    {
      num: "01",
      title: "Browse",
      desc: "Explore curated Indian brands and find pieces you love.",
    },
    {
      num: "02",
      title: "Select",
      desc: "Add items to your selections. Pick your size and build your wishlist.",
    },
    {
      num: "03",
      title: "Reach Out",
      desc: "DM us on Instagram with your selections. We'll confirm availability.",
    },
    {
      num: "04",
      title: "Get It",
      desc: "We arrange local pickup or delivery right here in Kansas City.",
    },
  ];

  return (
    <div className="max-w-4xl mx-auto px-4 py-16">
      {/* Hero */}
      <div className="text-center mb-20 animate-fade-in-up">
        <p className="text-xs uppercase tracking-[0.2em] text-accent mb-4">
          The Story
        </p>
        <h1 className="text-4xl md:text-6xl font-display font-bold mb-6">
          Authentic Indian Style,
          <br />
          <span className="text-accent">Local to KC</span>
        </h1>
        <p className="text-lg text-text-secondary max-w-2xl mx-auto leading-relaxed">
          IndieThread is a marketplace connecting Kansas City with the best
          independent brands from India. We believe great style
          shouldn&apos;t be limited by borders.
        </p>
      </div>

      {/* How it works */}
      <section className="mb-20">
        <h2 className="text-2xl font-display font-bold text-center mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 stagger-children">
          {steps.map((step) => (
            <div
              key={step.num}
              className="relative p-6 bg-surface border border-border rounded-xl hover-lift group"
            >
              <span className="text-5xl font-display font-bold text-accent/10 absolute top-4 right-4 group-hover:text-accent/20 transition-colors duration-300">
                {step.num}
              </span>
              <h3 className="text-lg font-semibold mb-2 relative">
                {step.title}
              </h3>
              <p className="text-sm text-text-secondary leading-relaxed relative">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Why */}
      <section className="mb-20">
        <div className="bg-surface border border-border rounded-2xl p-8 md:p-12 relative overflow-hidden">
          <div className="absolute -top-20 -left-20 w-40 h-40 bg-accent/10 rounded-full blur-3xl" />
          <div className="relative">
            <h2 className="text-2xl font-display font-bold mb-4">
              Why IndieThread?
            </h2>
            <div className="space-y-4 text-text-secondary leading-relaxed">
              <p>
                India has an incredible emerging design scene that most
                people in the US never get to experience. Brands are pushing
                boundaries with bold graphics, premium materials, and
                unique cultural storytelling.
              </p>
              <p>
                We&apos;re here to bridge that gap. Every piece on IndieThread
                is hand-selected for quality and design. We bring them to
                Kansas City so you can experience them in person before
                you commit.
              </p>
              <p>
                No international shipping hassles. No customs delays.
                Just great Indian brands, available locally.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <div className="text-center">
        <h2 className="text-2xl font-display font-bold mb-4">
          Ready to explore?
        </h2>
        <div className="flex items-center justify-center gap-4 flex-wrap">
          <Link
            href="/brands/charactr"
            className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover hover:shadow-[0_0_30px_rgba(139,92,246,0.3)] transition-all duration-300 active:scale-95"
          >
            Shop the Collection
          </Link>
          <a
            href={`https://www.instagram.com/${siteConfig.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="px-8 py-4 border border-border text-text-secondary font-medium rounded-lg hover:border-accent hover:text-accent transition-all duration-300"
          >
            Follow Us &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
