"use client";

import ReactMarkdown from "react-markdown";
import ProductCard from "./ProductCard";

export default function MessageBubble({ role, content, products }) {
  return (
    <div className={`bubble ${role}`}>
      {/* ✅ Proper Markdown rendering */}
      <ReactMarkdown
        components={{
          p: ({ children }) => (
            <p style={{ marginBottom: "10px", lineHeight: "1.6" }}>
              {children}
            </p>
          ),
          li: ({ children }) => (
            <li style={{ marginLeft: "18px", marginBottom: "6px" }}>
              {children}
            </li>
          ),
          strong: ({ children }) => (
            <strong style={{ fontWeight: 600 }}>{children}</strong>
          )
        }}
      >
        {content}
      </ReactMarkdown>

      {/* 🛒 Product cards */}
      {products && products.length > 0 && (
        <div className="product-list">
          {products.map((product) => (
            <ProductCard
              key={product.id}
              product={product}
              onAddToCart={() =>
                console.log("Add to cart:", product)
              }
            />
          ))}
        </div>
      )}
    </div>
  );
}
