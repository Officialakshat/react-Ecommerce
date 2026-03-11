import { Link } from "react-router-dom";

function Header() {
  return (
    <nav className="min-h-20 bg-gray-100  text-green-400 flex flex-col md:flex-row justify-between items-center px-6 gap-5 ">
      <div className="flex items-center gap-4 ">
        <img
          className="h-12 w-12 "
          src="https://cdn-icons-png.flaticon.com/512/2662/2662459.png"
          alt=""
        />
        <p className="text-2xl md:text-3xl font-semibold">UrbanMart</p>
      </div>
      <div className="space-x-6  font-semibold  justify-center items-center">
        <ul className="gap-4 flex flex-col md:flex-row">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <li>
            <Link to="/checkout">Checkout</Link>
          </li>
        </ul>
        {/* <Link to="/productDetails">Product Details</Link> */}
      </div>
    </nav>
  );
}

export default Header;
