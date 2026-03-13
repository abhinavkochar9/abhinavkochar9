"use client";
import { useState } from "react";
import Link from "next/link";
import { useWishlist } from "@/hooks/useWishlist";
import { WishlistItem } from "@/components/wishlist/WishlistItem";
import { InstagramDMButton } from "@/components/wishlist/InstagramDMButton";
import { formatPrice } from "@/lib/utils";
import { getProductBySlug } from "@/data/products";
import { buildWishlistMessage } from "@/lib/instagram";

export default function WishlistPage() {
  const { items, clear } = useWishlist();
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [showPreview, setShowPreview] = useState(false);

  const totalPrice = items.reduce((sum, item) => {
    const product = getProductBySlug(item.productSlug);
    return sum + (product?.price ?? 0);
  }, 0);

  const customer =
    name || phone ? { name: name.trim(), phone: phone.trim() } : undefined;

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <div className="animate-fade-in-up">
        <h1 className="text-3xl font-display font-bold mb-2">
          My Selections
        </h1>
        <p className="text-text-secondary mb-8">
          {items.length === 0
            ? "Your bag is empty. Browse our collection to add items."
            : `${items.length} item${items.length > 1 ? "s" : ""} selected`}
        </p>
      </div>

      {items.length === 0 ? (
        <div className="text-center py-16 animate-fade-in">
          <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-surface border border-border flex items-center justify-center">
            <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" className="text-text-secondary">
              <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z"/>
              <line x1="3" y1="6" x2="21" y2="6"/>
              <path d="M16 10a4 4 0 01-8 0"/>
            </svg>
          </div>
          <p className="text-text-secondary mb-6">Nothing here yet</p>
          <Link
            href="/brands/charactr"
            className="inline-flex px-6 py-3 bg-accent text-white font-medium rounded-lg hover:bg-accent-hover transition-all duration-300"
          >
            Browse Collection
          </Link>
        </div>
      ) : (
        <div className="animate-fade-in-up" style={{ animationDelay: "100ms", animationFillMode: "forwards" }}>
          {/* Items */}
          <div className="space-y-3 mb-8">
            {items.map((item) => (
              <WishlistItem
                key={`${item.productSlug}-${item.selectedSize}`}
                item={item}
              />
            ))}
          </div>

          {/* Your Details */}
          <div className="bg-surface border border-border rounded-xl p-6 mb-4">
            <h3 className="text-sm font-semibold text-foreground mb-4">Your Details</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label htmlFor="customer-name" className="text-xs text-text-secondary mb-1 block">
                  Name
                </label>
                <input
                  id="customer-name"
                  type="text"
                  placeholder="Your name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
              <div>
                <label htmlFor="customer-phone" className="text-xs text-text-secondary mb-1 block">
                  Phone / WhatsApp
                </label>
                <input
                  id="customer-phone"
                  type="tel"
                  placeholder="Your number"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  className="w-full px-3 py-2 bg-background border border-border rounded-lg text-sm text-foreground placeholder:text-text-secondary/50 focus:outline-none focus:border-accent transition-colors"
                />
              </div>
            </div>
            <p className="text-[11px] text-text-secondary/60 mt-2">
              This info is included in your DM so we can reach you about pickup/delivery.
            </p>
          </div>

          {/* Summary + DM */}
          <div className="bg-surface border border-border rounded-xl p-6 mb-4">
            <div className="flex items-center justify-between mb-4">
              <span className="text-text-secondary">Total</span>
              <span className="text-2xl font-bold text-accent">
                {formatPrice(totalPrice)}
              </span>
            </div>
            <p className="text-xs text-text-secondary mb-6">
              Tap the button below — your order message will be copied to clipboard. Just paste it in the Instagram DM.
            </p>
            <InstagramDMButton customer={customer} />
          </div>

          {/* Message Preview */}
          <div className="mb-6">
            <button
              onClick={() => setShowPreview(!showPreview)}
              className="text-xs text-text-secondary hover:text-accent transition-colors flex items-center gap-1 mx-auto cursor-pointer"
            >
              <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
                <circle cx="12" cy="12" r="3"/>
              </svg>
              {showPreview ? "Hide" : "Preview"} message
            </button>
            {showPreview && (
              <div className="mt-3 p-4 bg-background border border-border rounded-lg">
                <p className="text-[11px] text-text-secondary/60 mb-2 uppercase tracking-wider">Message that will be copied:</p>
                <pre className="text-xs text-text-secondary whitespace-pre-wrap font-mono leading-relaxed">
                  {buildWishlistMessage(items, customer)}
                </pre>
              </div>
            )}
          </div>

          {/* Clear */}
          <button
            onClick={clear}
            className="text-sm text-text-secondary hover:text-red-400 transition-colors w-full text-center cursor-pointer"
          >
            Clear all selections
          </button>
        </div>
      )}
    </div>
  );
}
