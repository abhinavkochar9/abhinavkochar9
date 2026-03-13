"use client";
import { useState, useRef } from "react";
import Image from "next/image";

interface ProductGalleryProps {
  images: string[];
  productName: string;
}

export function ProductGallery({ images, productName }: ProductGalleryProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollRef = useRef<HTMLDivElement>(null);

  const scrollToIndex = (index: number) => {
    setActiveIndex(index);
    if (scrollRef.current) {
      const child = scrollRef.current.children[index] as HTMLElement;
      child?.scrollIntoView({ behavior: "smooth", block: "nearest", inline: "center" });
    }
  };

  return (
    <div className="flex flex-col gap-4">
      {/* Mobile: Swipeable carousel */}
      <div className="md:hidden">
        <div
          ref={scrollRef}
          className="carousel-scroll flex gap-0"
          onScroll={(e) => {
            const target = e.currentTarget;
            const index = Math.round(target.scrollLeft / target.clientWidth);
            setActiveIndex(index);
          }}
        >
          {images.map((src, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-full aspect-[3/4] relative bg-surface"
            >
              <Image
                src={src}
                alt={`${productName} - Photo ${i + 1}`}
                fill
                sizes="100vw"
                className="object-cover"
                priority={i === 0}
                loading={i === 0 ? "eager" : "lazy"}
              />
            </div>
          ))}
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-1.5 mt-3">
          {images.map((_, i) => (
            <button
              key={i}
              onClick={() => scrollToIndex(i)}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === activeIndex
                  ? "w-6 bg-accent"
                  : "w-1.5 bg-border hover:bg-text-secondary"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Desktop: Main image + thumbnails */}
      <div className="hidden md:flex gap-4">
        {/* Thumbnail strip */}
        <div className="flex flex-col gap-2 w-20 flex-shrink-0 max-h-[600px] overflow-y-auto scrollbar-thin">
          {images.map((src, i) => (
            <button
              key={i}
              onClick={() => setActiveIndex(i)}
              className={`relative aspect-square rounded-lg overflow-hidden border-2 transition-all duration-300 flex-shrink-0 ${
                i === activeIndex
                  ? "border-accent shadow-[0_0_10px_rgba(139,92,246,0.3)]"
                  : "border-transparent hover:border-border opacity-60 hover:opacity-100"
              }`}
            >
              <Image
                src={src}
                alt={`${productName} thumbnail ${i + 1}`}
                fill
                sizes="80px"
                className="object-cover"
              />
            </button>
          ))}
        </div>

        {/* Main image */}
        <div className="relative flex-1 aspect-[3/4] rounded-xl overflow-hidden bg-surface">
          <Image
            src={images[activeIndex]}
            alt={`${productName} - Photo ${activeIndex + 1}`}
            fill
            sizes="60vw"
            className="object-cover transition-opacity duration-500"
            priority
          />
        </div>
      </div>
    </div>
  );
}
