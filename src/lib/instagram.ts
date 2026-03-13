import { WishlistItem } from "@/types";
import { getProductBySlug } from "@/data/products";
import { getBrandBySlug } from "@/data/brands";

export interface CustomerInfo {
  name: string;
  phone: string;
}

export function buildWishlistMessage(
  items: WishlistItem[],
  customer?: CustomerInfo
): string {
  const itemLines = items
    .map((item, idx) => {
      const product = getProductBySlug(item.productSlug);
      if (!product) return null;
      const brand = getBrandBySlug(item.brandSlug);
      const sizePart = item.selectedSize
        ? ` | Size: ${item.selectedSize}`
        : "";
      return `${idx + 1}. ${product.name}${sizePart} | $${product.price}${brand ? ` (${brand.name})` : ""}`;
    })
    .filter(Boolean);

  const totalPrice = items.reduce((sum, item) => {
    const product = getProductBySlug(item.productSlug);
    return sum + (product?.price ?? 0);
  }, 0);

  const itemCount = items.length;

  const lines: string[] = [
    `--- INDIETHREAD ORDER ---`,
    ``,
    `Hi! I'd like to order the following via IndieThread (Kansas City):`,
    ``,
    ...itemLines,
    ``,
    `Items: ${itemCount} | Total: $${totalPrice}`,
  ];

  if (customer?.name || customer?.phone) {
    lines.push(``);
    if (customer.name) lines.push(`Name: ${customer.name}`);
    if (customer.phone) lines.push(`Contact: ${customer.phone}`);
  }

  lines.push(
    ``,
    `Pickup/delivery in Kansas City, MO.`,
    ``,
    `--- via indiethread.com ---`
  );

  return lines.join("\n");
}

export function getInstagramDMUrl(handle: string): string {
  return `https://ig.me/m/${handle}`;
}
