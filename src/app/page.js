import Link from "next/link";

export default function Home() {
  return (
    <section className="hero">
      <div className="hero-inner">
        <h1>One Continuous Conversation.</h1>

        <p>
          An intelligent sales agent that understands intent,
          context, and converts conversations into outcomes.
        </p>

        <div className="hero-actions">
          <Link href="/chat" className="primary-btn">
            Launch Agent
          </Link>
        </div>
      </div>
    </section>
  );
}
