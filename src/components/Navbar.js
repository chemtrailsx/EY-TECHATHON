import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="navbar">
      <h2 className="brand">
        EY <span>Sales Agent</span>
      </h2>

      <div className="nav-links">
        <Link href="/chat">Agent</Link>
        <Link href="/dashboard">Insights</Link>
      </div>
    </nav>
  );
}
