import Link from "next/link";
import { siteConfig } from "@/data/site";

export function Footer() {
  return (
    <footer className="border-t border-border bg-surface/50 mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h3 className="text-lg font-display font-bold mb-3">
              Indie<span className="text-accent">Thread</span>
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {siteConfig.description}
            </p>
            <p className="text-sm text-text-secondary mt-2">
              {siteConfig.location}
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">
              Navigate
            </h4>
            <div className="flex flex-col gap-2">
              {[
                { href: "/", label: "Home" },
                { href: "/brands", label: "Brands" },
                { href: "/wishlist", label: "My Selections" },
                { href: "/about", label: "About" },
              ].map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm text-text-secondary hover:text-foreground transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          {/* Social */}
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider text-text-secondary mb-4">
              Connect
            </h4>
            <a
              href={`https://www.instagram.com/${siteConfig.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-sm text-text-secondary hover:text-accent transition-colors"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
              @{siteConfig.instagram}
            </a>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-border text-center text-xs text-text-secondary">
          &copy; {new Date().getFullYear()} {siteConfig.name}. Bringing the best of India to {siteConfig.location}.
        </div>
      </div>
    </footer>
  );
}
