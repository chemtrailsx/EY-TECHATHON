import { useCartStore } from "@/store/useCartStore";

export default function ProductCard({ product }) {
  const addToCart = useCartStore((state) => state.addToCart);

  return (
    <div className="product-card">
      <img
        src={product.image}
        alt={product.name}
        className="product-image"
      />

      <div className="product-info">
        <h4>{product.name}</h4>
        <p className="brand">{product.brand}</p>
        <p className="price">₹{product.price}</p>

        <button
          className="add-btn"
          onClick={() => addToCart(product)}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
}
