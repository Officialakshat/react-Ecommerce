import { Link } from "react-router-dom";

function ProductCard({ product }) {
  return (
    <div>
      <img src={product.image} width="200" />

      <h3>{product.name}</h3>
      <p>₹{product.price}</p>

      <Link to={`/product/${product.id}`}>View Product</Link>
    </div>
  );
}

export default ProductCard;
