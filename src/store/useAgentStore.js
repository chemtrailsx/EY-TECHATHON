import { create } from "zustand";

export const useAgentStore = create((set) => ({
  messages: [
    {
      role: "agent",
      content: "Hello! I’m your AI sales assistant. How can I help today?"
    }
  ],
  isThinking: false,

  addUserMessage: (content) =>
    set((state) => ({
      messages: [...state.messages, { role: "user", content }],
      isThinking: true
    })),

  addAgentMessage: (content, products = null) =>
  set((state) => ({
    messages: [
      ...state.messages,
      { role: "agent", content, products }
    ],
    isThinking: false
  }))

}));
