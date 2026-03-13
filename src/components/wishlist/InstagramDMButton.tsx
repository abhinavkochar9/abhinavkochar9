"use client";
import { useWishlist } from "@/hooks/useWishlist";
import {
  buildWishlistMessage,
  getInstagramDMUrl,
  CustomerInfo,
} from "@/lib/instagram";
import { siteConfig } from "@/data/site";
import { useToast } from "@/components/ui/Toast";
import { Button } from "@/components/ui/Button";

interface InstagramDMButtonProps {
  customer?: CustomerInfo;
}

export function InstagramDMButton({ customer }: InstagramDMButtonProps) {
  const { items } = useWishlist();
  const { showToast } = useToast();

  const handleClick = async () => {
    if (items.length === 0) return;

    const message = buildWishlistMessage(items, customer);
    try {
      await navigator.clipboard.writeText(message);
      showToast("Order message copied! Paste it in the Instagram DM");
    } catch {
      showToast("Open Instagram and share your selections");
    }

    window.open(getInstagramDMUrl(siteConfig.instagram), "_blank");
  };

  return (
    <Button
      onClick={handleClick}
      variant="primary"
      size="lg"
      className="w-full text-base font-semibold animate-pulse-glow"
      disabled={items.length === 0}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="20"
        height="20"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="mr-2"
      >
        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
        <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z" />
        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
      </svg>
      DM Us on Instagram
    </Button>
  );
}
