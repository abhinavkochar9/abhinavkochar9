"use client";
import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="/images/products/release-me/01.webp"
          alt="IndieThread Hero"
          fill
          sizes="100vw"
          className="object-cover scale-105"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-background" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/40 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-5xl mx-auto px-4 text-center">
        {/* Badge */}
        <div
          className="inline-flex items-center gap-2 px-4 py-1.5 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-xs text-white/70 mb-8 animate-fade-in"
          style={{ animationDelay: "200ms", animationFillMode: "forwards", opacity: 0 }}
        >
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
          Now available in Kansas City
        </div>

        {/* Title */}
        <h1 className="mb-6">
          <span
            className="block text-5xl sm:text-6xl md:text-8xl font-display font-bold tracking-tight text-white animate-fade-in-up"
            style={{ animationDelay: "400ms", animationFillMode: "forwards", opacity: 0 }}
          >
            Indie<span className="text-accent">Thread</span>
          </span>
        </h1>

        {/* Tagline */}
        <p
          className="text-lg md:text-2xl text-white/70 mb-4 font-light animate-fade-in-up"
          style={{ animationDelay: "600ms", animationFillMode: "forwards", opacity: 0 }}
        >
          Indian Brands, Curated for KC
        </p>

        <p
          className="text-sm md:text-base text-white/50 mb-10 max-w-lg mx-auto animate-fade-in-up"
          style={{ animationDelay: "700ms", animationFillMode: "forwards", opacity: 0 }}
        >
          Premium products from India&apos;s boldest brands. Handpicked. Locally delivered.
        </p>

        {/* CTAs */}
        <div
          className="flex items-center justify-center gap-4 flex-wrap animate-fade-in-up"
          style={{ animationDelay: "900ms", animationFillMode: "forwards", opacity: 0 }}
        >
          <Link
            href="/brands/charactr"
            className="px-8 py-4 bg-accent text-white font-semibold rounded-lg hover:bg-accent-hover hover:shadow-[0_0_40px_rgba(139,92,246,0.4)] transition-all duration-300 active:scale-95"
          >
            Explore Collection
          </Link>
          <Link
            href="/about"
            className="px-8 py-4 border border-white/20 text-white/80 font-medium rounded-lg hover:bg-white/5 hover:border-white/40 transition-all duration-300 active:scale-95"
          >
            How It Works
          </Link>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="6 9 12 15 18 9"/>
        </svg>
      </div>
    </section>
  );
}
