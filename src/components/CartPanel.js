"use client";

import { useCartStore } from "@/store/useCartStore";
import { useRouter } from "next/navigation";

export default function CartPanel() {
  const { items, removeFromCart } = useCartStore();
  const router = useRouter();

  const total = items.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <aside className="side-panel cart-panel">
      <h3>Your Cart</h3>

      {/* Scrollable cart items */}
      <div className="cart-items">
        {items.length === 0 && (
          <p style={{ color: "var(--text-secondary)" }}>
            Cart is empty
          </p>
        )}

        {items.map((item) => (
          <div key={item.id} className="cart-item">
            <div>
              <strong>{item.name}</strong>
              <p>
                ₹{item.price} × {item.quantity}
              </p>
            </div>

            <button
              onClick={() => removeFromCart(item.id)}
              aria-label="Remove item"
            >
              ✕
            </button>
          </div>
        ))}
      </div>

      {/* Sticky footer */}
      {items.length > 0 && (
        <div className="cart-footer sticky-cart-footer">
          <p>Total: ₹{total}</p>

          <button
            className="checkout-btn"
            onClick={() => router.push("/checkout")}
          >
            Proceed to Checkout
          </button>
        </div>
      )}
    </aside>
  );
}
