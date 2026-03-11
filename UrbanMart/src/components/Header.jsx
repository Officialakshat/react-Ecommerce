import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="h-20 bg-gray-300  text-green-500 flex justify-between items-center px-6 gap-5 ">
      <div className="flex items-center gap-4">
        <img
          className="h-14 w-14 "
          src="https://cdn-icons-png.flaticon.com/512/2662/2662459.png"
          alt=""
        />
        <p className="text-3xl font-semibold">UrbanMart</p>
      </div>
      <div className="space-x-6 text-xl font-semibold">
        <Link to="/">Home</Link>
        <Link to="/cart">Cart</Link>
        <Link to="/checkout">Checkout</Link>
        <Link to="/productDetails">Product Details</Link>
      </div>
    </nav>
  );
}

export default Header;
