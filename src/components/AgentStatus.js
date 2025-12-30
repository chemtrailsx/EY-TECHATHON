export default function AgentStatus() {
  return (
    <aside className="agent-status">
      <h3>Agent Console</h3>

      <div className="status-block">
        <span className="status-dot online" />
        <p>Agent Online</p>
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
