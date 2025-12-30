"use client";

import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CheckoutPage() {
  const { items, clearCart } = useCartStore();
  const router = useRouter();
  const [placing, setPlacing] = useState(false);

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  function placeOrder() {
    setPlacing(true);

    // simulate API call
    setTimeout(() => {
      clearCart();
      router.push("/order-success");
    }, 1200);
  }

  if (items.length === 0) {
    return (
      <main style={{ padding: 40 }}>
        <h2>Your cart is empty</h2>
      </main>
    );
  }

  return (
    <main style={{ padding: 40, maxWidth: 800, margin: "0 auto" }}>
      <h1>Checkout</h1>

      <section style={{ marginTop: 20 }}>
        <h3>Order Summary</h3>

        {items.map((item) => (
          <div
            key={item.id}
            style={{
              display: "flex",
              justifyContent: "space-between",
              marginBottom: 10
            }}
          >
            <span>
              {item.name} × {item.quantity}
            </span>
            <span>₹{item.price * item.quantity}</span>
          </div>
        ))}

        <hr style={{ margin: "16px 0" }} />
        <strong>Total: ₹{total}</strong>
      </section>

      <section style={{ marginTop: 30 }}>
        <h3>Delivery Address</h3>
        <input
          placeholder="Enter delivery address"
          className="checkout-input"
        />
      </section>

      <section style={{ marginTop: 20 }}>
        <h3>Payment Method</h3>
        <select className="checkout-input">
          <option>Cash on Delivery</option>
          <option>UPI</option>
          <option>Card</option>
        </select>
      </section>

      <button
        onClick={placeOrder}
        disabled={placing}
        className="checkout-btn"
        style={{ marginTop: 30 }}
      >
        {placing ? "Placing Order..." : "Place Order"}
      </button>
    </main>
  );
}
