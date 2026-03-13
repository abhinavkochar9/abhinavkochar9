"use client";
import Link from "next/link";
import { useEffect } from "react";

interface MobileNavProps {
  isOpen: boolean;
  onClose: () => void;
}

export function MobileNav({ isOpen, onClose }: MobileNavProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 md:hidden">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm animate-fade-in"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="absolute right-0 top-0 bottom-0 w-72 bg-background border-l border-border animate-slide-in-right">
        <div className="flex items-center justify-between p-6 border-b border-border">
          <span className="text-lg font-display font-bold">
            Indie<span className="text-accent">Thread</span>
          </span>
          <button
            onClick={onClose}
            className="p-2 text-text-secondary hover:text-foreground transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18" />
              <line x1="6" y1="6" x2="18" y2="18" />
            </svg>
          </button>
        </div>

        <nav className="p-6 flex flex-col gap-2">
          {[
            { href: "/", label: "Home" },
            { href: "/brands", label: "Brands" },
            { href: "/wishlist", label: "My Selections" },
            { href: "/about", label: "About" },
          ].map((link, i) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={onClose}
              className="text-lg text-text-secondary hover:text-foreground hover:pl-2 transition-all duration-200 py-3 border-b border-border/50"
              style={{ animationDelay: `${i * 50}ms` }}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="absolute bottom-8 left-6 right-6">
          <a
            href="https://www.instagram.com/charactr.in"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-text-secondary hover:text-accent transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
            </svg>
            @charactr.in
          </a>
        </div>
      </div>
    </div>
  );
}
