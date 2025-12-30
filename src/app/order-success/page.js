"use client";

import Link from "next/link";

export default function OrderSuccess() {
  return (
    <main
      style={{
        padding: 60,
        textAlign: "center"
      }}
    >
      <h1>🎉 Order Placed Successfully!</h1>
      <p style={{ marginTop: 10 }}>
        Thank you for shopping with us.
      </p>

      <Link href="/chat">
        <button
          className="checkout-btn"
          style={{ marginTop: 30 }}
        >
          Continue Shopping
        </button>
      </Link>
    </main>
  );
}
