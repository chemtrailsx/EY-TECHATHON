"use client";

import { useAgentContextStore } from "@/store/useAgentContextStore";

export default function AgentMemory() {
  const { intent, budget, channel, recentContext } =
    useAgentContextStore();

  return (
    <aside className="side-panel">
      <h3>Agent Memory</h3>

      <p>
        <strong>Intent:</strong> {intent}
      </p>

      {budget && (
        <p>
          <strong>Budget:</strong> {budget}
        </p>
      )}

      <p>
        <strong>Channel:</strong> {channel}
      </p>

      <div className="memory-block">
        <h4>Recent Context</h4>
        <ul>
          {recentContext.map((item, idx) => (
            <li key={idx}>{item}</li>
          ))}
        </ul>
      </div>
    </aside>
  );
}
