import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Layout from "./layout/layout";
import Contact from "./pages/Contact";
// import FeaturedProducts  from "./pages/Category";
import NewArrivals from "./pages/NewArrivals";
import BestDeals from "./pages/BestDeals";
import Brands from "./pages/Brands";
import LoginPage from "./pages/Login";
import AddToCart from "./pages/Cart";
import Signup from "./pages/Signup";
import Wishlist from "./pages/Wishlist";
import Products from "./pages/ProductCard";
import ProductCard from "./pages/ProductCard";
import Categories from "./pages/Category";
import FeaturedProducts from "./pages/FeaturedProducts";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="category" element={<Categories />} />
          <Route path="newArrivals" element={<NewArrivals />} />
          <Route path="addCart" element={<AddToCart />} />
          <Route path="bestDeals" element={<BestDeals />} />
          <Route path="cart" element={<Cart />} />
          <Route path="brands" element={<Brands />} />
          <Route path="login" element={<LoginPage />} />
          <Route path="products" element={<FeaturedProducts />} />
          <Route path="wishlist" element={<Wishlist />} />
          <Route path="signup" element={<Signup />} />
          <Route path="checkout" element={<Checkout />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
