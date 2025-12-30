export function detectIntent(query) {
  const q = query.toLowerCase();

  if (q.includes("add to cart")) return "Add To Cart";
  if (q.includes("checkout")) return "Checkout";
  if (
    q.includes("show") ||
    q.includes("find") ||
    q.includes("under")
  )
    return "Product Discovery";

  return "General Chat";
}
