import { products } from "@/data/products";

/* 🔍 Extract budget like "under 3000" or "under ₹3000" */
export function extractBudget(query) {
  const match = query.match(/under\s?₹?(\d+)/i);
  return match ? `₹${match[1]}` : null;
}

/* 🛒 Deterministic catalogue search */
export function searchProducts(query) {
  const q = query.toLowerCase();

  let maxPrice = Infinity;
  const priceMatch = q.match(/under\s?₹?(\d+)/i);
  if (priceMatch) {
    maxPrice = parseInt(priceMatch[1], 10);
  }

  return products.filter((product) => {
    const matchesCategory =
      q.includes(product.category) ||
      product.tags.some((tag) => q.includes(tag));

    const matchesPrice = product.price <= maxPrice;

    return matchesCategory && matchesPrice && product.inStock;
  });
}
