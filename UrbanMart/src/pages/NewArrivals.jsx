import { useState } from "react";
import { useCartContext } from "../context/CartContext";
import useWishlist from "../hooks/useWishlist";

const newArrivals = [
  {
    id: 1,
    name: "Rattan Accent Chair",
    category: "Furniture",
    price: 8499,
    original: 1899,
    tag: "Best Seller",
    tagColor: "bg-[#C9B194] text-white",
    rating: 4.5,
    reviews: 128,
    img: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80",
    isNew: true,
  },
  {
    id: 2,
    name: "Jade Succulent Pot",
    category: "Plants",
    price: 349,
    img: "https://images.unsplash.com/photo-1501004318641-b39e6451bec6?w=400&q=80",
    isNew: true,
  },
  {
    id: 3,
    name: "Matte Black Kettle",
    category: "Kitchen",
    price: 2199,
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    isNew: true,
  },
  {
    id: 4,
    name: "Linen Throw Pillow",
    category: "Decor",
    price: 699,
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&q=80",
    isNew: true,
  },
  {
    id: 5,
    name: "Wooden Desk Organiser",
    category: "Office",
    price: 1299,
    img: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=400&q=80",
    isNew: false,
  },
  {
    id: 6,
    name: "Phone Stand",
    category: "Mobile accessories",
    price: 349,
    img: "https://m.media-amazon.com/images/I/51Gh0Nla3RL._AC_.jpg",
    isNew: true,
  },
  {
    id: 7,
    name: "Candle Set",
    category: "Decor",
    price: 349,
    img: "https://houseofaroma.in/wp-content/uploads/2023/10/simple-Pleasures-gift-sets-1.webp",
    isNew: true,
  },
];

export default function NewArrivals({ item }) {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const { addToCart, isInCart } = useCartContext();
  const [added, setAdded] = useState(false);

  const inCart = isInCart(item);

  const handleAddToCart = (e) => {
    e.stopPropagation();
    addToCart(item);
    setAdded(true);
    setTimeout(() => setAdded(false), 1800);
  };
  return (
    <section className="bg-white py-12 px-5 sm:px-8 lg:px-12">
      {/* Header */}
      <div className="flex items-end justify-between mb-8 max-w-6xl mx-auto">
        <div>
          <p className="text-xs font-medium tracking-widest text-[#C9B194] uppercase mb-1">
            Just In
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            New Arrivals
          </h2>
        </div>
        <a
          href="#"
          className="hidden sm:block text-sm text-[#C9B194] hover:text-[#9a7f5e] font-medium transition-colors"
        >
          View all →
        </a>
      </div>

      {/* Horizontal scroll on mobile, grid on md+ */}
      <div className="max-w-6xl mx-auto">
        <div className="flex gap-4 overflow-x-auto pb-3 md:grid md:grid-cols-5 md:overflow-visible scrollbar-hide">
          {newArrivals.map((item) => (
            <div
              key={item.id}
              className="group shrink-0 w-44 md:w-auto bg-[#fdf9f5] rounded-2xl overflow-hidden border border-[#ede5da] hover:shadow-md hover:-translate-y-1 transition-all duration-300 cursor-pointer"
            >
              {/* Image */}
              <div className="relative h-44 overflow-hidden bg-[#f5ede0]">
                <img
                  src={item.img}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <span className="absolute top-2 left-2 bg-[#1a1a1a] text-white text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
                  New
                </span>
                <button
                  onClick={() => toggleWishlist(item)}
                  className="absolute top-2 right-2 w-7 h-7 bg-white/80 hover:bg-white cursor-pointer rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <svg
                    width="12"
                    height="12"
                    viewBox="0 0 24 24"
                    fill={isWishlisted(item.id) ? "#C9B194" : "none"}
                    stroke="#C9B194"
                    strokeWidth="2"
                  >
                    <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                  </svg>
                </button>
              </div>

              {/* Info */}
              <div className="p-3">
                <p className="text-[10px] text-[#C9B194] font-medium uppercase tracking-wider mb-0.5">
                  {item.category}
                </p>
                <p className="text-[13px] font-medium text-gray-800 truncate mb-1">
                  {item.name}
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[14px] font-bold text-gray-900">
                    ₹{item.price.toLocaleString()}
                  </span>
                  <button
                    onClick={handleAddToCart}
                    className="text-[10px] bg-[#C9B194] hover:bg-[#b89e7e] text-white px-2.5 py-1 rounded-lg font-medium transition-colors"
                  >
                    Add
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Mobile view all */}
      <div className="text-center mt-5 sm:hidden">
        <a href="#" className="text-sm text-[#C9B194] font-medium">
          View all new arrivals →
        </a>
      </div>
    </section>
  );
}
