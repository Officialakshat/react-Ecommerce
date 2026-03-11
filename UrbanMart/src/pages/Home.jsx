import products from "../data/products";
import ProductCards from "../components/ProductCards";

function Home() {
  return (
    <div>
      <h1>Products</h1>

      {products.map((item) => (
        <ProductCards key={item.id} product={item} />
      ))}
    </div>
  );
}

export default Home;
