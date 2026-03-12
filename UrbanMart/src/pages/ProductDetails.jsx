import { useParams } from "react-router-dom";
import products from "../data/products";

function ProductDetails() {
  const { id } = useParams();

  const product = products.find((p) => p.id == id);

  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-100 p-6">
      <div className="bg-white shadow-lg rounded-xl p-8 flex gap-10 max-w-4xl w-full">
        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="w-80 rounded-lg hover:scale-105 transition duration-300"
          />
        </div>

        {/* Details Section */}
        <div className="flex-1 flex flex-col justify-center">
          <h1 className="text-3xl font-semibold mb-4">{product.name}</h1>

          <p className="text-2xl font-bold text-gray-700 mb-6">
            ₹{product.price}
          </p>

          <button className="bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition">
            Add To Cart
          </button>
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
