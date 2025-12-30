"use client";

import { useAgentContextStore } from "@/store/useAgentContextStore";

export default function SidePanel() {
  const { status } = useAgentContextStore();

  return (
    <aside className="agent-status">
      <h3>Agent Console</h3>

      <div className="status-block">
        <span className={`status-dot ${status}`} />
        <span>
          {status === "online" ? "Agent Online" : "Offline"}
        </span>
      </div>

      <div className="status-section">
        <h4>Active Agents</h4>
        <ul>
          <li>Recommendation Agent</li>
          <li>Inventory Agent</li>
          <li>Payment Agent</li>
          <li>Care Agent</li>
        </ul>
      </div>
    </aside>
  );
}
