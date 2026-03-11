import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id == id);

  return (
    <div>
      <h1>{product.name}</h1>
      <img src={product.image} width="200" />
      <p>Price: ₹{product.price}</p>

      <button>Add To Cart</button>
    </div>
  );
}

export default ProductDetails;
