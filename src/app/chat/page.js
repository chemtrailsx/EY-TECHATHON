import SidePanel from "@/components/SidePanel";
import AgentChat from "@/components/AgentChat";
import CartPanel from "@/components/CartPanel";
import AgentMemory from "@/components/AgentMemory";

export default function ChatPage() {
  return (
    <div className="chat-layout">
      {/* LEFT: Agent Console + Memory */}
      <div className="left-panel">
        <SidePanel />
        <AgentMemory />
      </div>

      {/* CENTER: Chat */}
      <AgentChat />

      {/* RIGHT: Cart */}
      <CartPanel />
    </div>
  );
}
