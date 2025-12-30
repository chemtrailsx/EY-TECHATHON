"use client";

import MessageBubble from "./MessageBubble";
import TypingIndicator from "./TypingIndicator";
import { useAgentStore } from "@/store/useAgentStore";
import { detectIntent } from "@/lib/detectIntent";
import { searchProducts, extractBudget } from "@/lib/searchProducts";
import { useAgentContextStore } from "@/store/useAgentContextStore";

export default function AgentChat() {
  const {
    messages,
    isThinking,
    addUserMessage,
    addAgentMessage
  } = useAgentStore();

  const {
    setIntent,
    setBudget,
    addContext
  } = useAgentContextStore();

  async function handleSend(e) {
    if (e.key === "Enter" && e.target.value.trim()) {
      const userInput = e.target.value;
      e.target.value = "";

      addUserMessage(userInput);
      addContext(userInput);

      const intent = detectIntent(userInput);
      setIntent(intent);

      const budget = extractBudget(userInput);
      if (budget) setBudget(budget);

      /* 🟢 PRODUCT SEARCH */
      if (intent === "Product Discovery") {
        const results = searchProducts(userInput);

        if (results.length === 0) {
          addAgentMessage(
            "I couldn’t find products matching that request."
          );
        } else {
          addAgentMessage(
            `I found ${results.length} products that match your request.`,
            results
          );
        }

        return;
      }

      /* 🔵 FALLBACK TO LLM CHAT */
      try {
        const res = await fetch("http://localhost:5000/api/chat", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ message: userInput })
        });

        const data = await res.json();
        addAgentMessage(data.text);
      } catch {
        addAgentMessage("Something went wrong. Please try again.");
      }
    }
  }

  return (
    <section className="chat-main">
      <div className="messages">
        {messages.map((msg, idx) => (
          <MessageBubble
            key={idx}
            role={msg.role}
            content={msg.content}
            products={msg.products}
          />
        ))}

        {isThinking && <TypingIndicator />}
      </div>

      <div className="chat-input">
        <input
          placeholder="Ask the agent anything..."
          onKeyDown={handleSend}
        />
      </div>
    </section>
  );
}
