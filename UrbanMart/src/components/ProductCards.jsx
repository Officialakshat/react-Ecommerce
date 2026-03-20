import { useState } from "react";

const DEMO_PRODUCT = [
  {
    id: 1,
    name: "Luxe Amber Collection",
    category: "Decor",
    price: 12499,
    originalPrice: 20749,
    rating: 4.9,
    reviews: 218,
    badge: "40% OFF",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    isNew: true,
  },

  {
    id: 2,
    name: "Luxe Amber Collection",
    category: "Decor",
    price: 12499,
    originalPrice: 20749,
    rating: 4.9,
    reviews: 218,
    badge: "40% OFF",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=400&q=80",
    isNew: true,
  },
];
export default function ProductCard() {
  const [toast, setToast] = useState(null);

  const handleAdd = (item) => {
    setToast(`${item.quantity}× "${item.name}" added to cart`);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center p-10 gap-6">
      {/* Page label — matches NewArrivals "Just In" style */}
      <div className="text-center">
        <p className="text-xs font-medium tracking-widest text-[#C9B194] uppercase mb-1">
          Featured
        </p>
        <h2
          className="text-2xl sm:text-3xl font-bold text-gray-900"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Product Detail
        </h2>
      </div>

      {/* Card — mirrors NewArrivals card styling */}
      <div className="w-full max-w-xs bg-[#fdf9f5] rounded-2xl overflow-hidden border border-[#ede5da] hover:shadow-md hover:-translate-y-1 transition-all duration-300">
        {/* Image */}
        <div className="relative h-56 overflow-hidden bg-[#f5ede0]">
          <img
            src={DEMO_PRODUCT.img}
            alt={DEMO_PRODUCT.name}
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
          />
          {/* New badge — same as NewArrivals */}
          <span className="absolute top-2 left-2 bg-[#1a1a1a] text-white text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
            New
          </span>
          {/* Discount badge */}
          <span className="absolute top-2 left-12 bg-[#C9B194] text-white text-[9px] font-semibold px-2 py-0.5 rounded-full tracking-wide">
            {DEMO_PRODUCT.badge}
          </span>
          {/* Wishlist — same style as NewArrivals hover heart */}
          <div className="absolute top-2 right-2">
            {/* <AddToWishlist product={DEMO_PRODUCT} /> */}
          </div>
        </div>

        {/* Body */}
        <div className="p-4">
          {/* Category */}
          <p className="text-[10px] text-[#C9B194] font-medium uppercase tracking-wider mb-0.5">
            {DEMO_PRODUCT.category}
          </p>

          {/* Name */}
          <p className="text-[15px] font-semibold text-gray-800 mb-2 leading-snug">
            {DEMO_PRODUCT.name}
          </p>

          {/* Rating */}
          <div className="flex items-center gap-1.5 mb-3">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((s) => (
                <span key={s} className="text-[#C9B194] text-xs">
                  ★
                </span>
              ))}
              <span className="text-[#C9B194]/30 text-xs">★</span>
            </div>
            <span className="text-[10px] text-gray-400">
              {DEMO_PRODUCT.rating} ({DEMO_PRODUCT.reviews})
            </span>
          </div>

          {/* Price row */}
          <div className="flex items-baseline gap-2 mb-4">
            <span className="text-[16px] font-bold text-gray-900">
              ₹{DEMO_PRODUCT.price.toLocaleString()}
            </span>
            <span className="text-[12px] text-gray-400 line-through">
              ₹{DEMO_PRODUCT.originalPrice.toLocaleString()}
            </span>
            <span className="text-[10px] font-semibold text-[#a8c5a0]">
              Save ₹{DEMO_PRODUCT.originalPrice - DEMO_PRODUCT.price}
            </span>
          </div>

          {/* Divider */}
          <div className="h-px bg-[#ede5da] mb-4" />

          {/* Add to cart */}
          {/* <AddToCart product={DEMO_PRODUCT} onAdd={handleAdd} /> */}
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-[#fdf9f5] border border-[#C9B194]/40 text-[#9a7f5e] text-sm font-semibold px-5 py-3 rounded-xl shadow-lg whitespace-nowrap">
          <CheckIcon /> {toast}
        </div>
      )}
    </div>
  );
}

// ─── SVG Helpers ───────────────────────────────────────────────────────────
function CartIcon() {
  return (
    <svg
      width="14"
      height="14"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M6 2L3 7h18l-3-5H6z" />
      <path d="M3 7v13a2 2 0 002 2h14a2 2 0 002-2V7" />
      <path d="M9 11a3 3 0 006 0" />
    </svg>
  );
}

function CheckIcon() {
  return (
    <svg
      width="13"
      height="13"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2.5"
      strokeLinecap="round"
    >
      <polyline points="20 6 9 17 4 12" />
    </svg>
  );
}

function Spinner() {
  return (
    <svg
      className="animate-spin"
      width="16"
      height="16"
      viewBox="0 0 24 24"
      fill="none"
    >
      <circle cx="12" cy="12" r="10" stroke="#ede5da" strokeWidth="3" />
      <path
        d="M12 2a10 10 0 0110 10"
        stroke="#C9B194"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}
