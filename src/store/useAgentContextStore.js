import { create } from "zustand";

export const useAgentContextStore = create((set) => ({
  status: "online",
  intent: "Product Discovery",
  budget: null,
  channel: "Web",
  recentContext: [],

  setIntent: (intent) => set({ intent }),
  setBudget: (budget) => set({ budget }),
  addContext: (text) =>
    set((state) => ({
      recentContext: [text, ...state.recentContext].slice(0, 5)
    }))
}));
