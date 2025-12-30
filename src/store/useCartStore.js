import { create } from "zustand";

export const useCartStore = create((set, get) => ({
  items: [],

  addToCart: (product) => {
    const items = get().items;
    const existing = items.find((i) => i.id === product.id);

    if (existing) {
      set({
        items: items.map((i) =>
          i.id === product.id
            ? { ...i, quantity: i.quantity + 1 }
            : i
        )
      });
    } else {
      set({
        items: [...items, { ...product, quantity: 1 }]
      });
    }
  },

  removeFromCart: (productId) =>
    set({
      items: get().items.filter((i) => i.id !== productId)
    }),

  clearCart: () => set({ items: [] })
}));
