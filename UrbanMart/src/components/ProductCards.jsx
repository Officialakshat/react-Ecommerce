import React, { useState } from "react";

// ─── AddToCart ─────────────────────────────────────────────────────────────
export function AddToCart({ product, onAdd }) {
  const [state, setState] = useState("idle"); // idle | adding | added
  const [qty, setQty] = useState(1);

  const handleAdd = () => {
    if (state !== "idle") return;
    setState("adding");
    setTimeout(() => {
      setState("added");
      if (onAdd) onAdd({ ...product, quantity: qty });
      setTimeout(() => setState("idle"), 2000);
    }, 700);
  };

  const btnClass = {
    idle: "bg-yellow-500 text-blue-950 hover:bg-yellow-400 hover:-translate-y-px",
    adding: "bg-yellow-500/20 text-yellow-500 cursor-not-allowed",
    added: "bg-green-900 text-green-400 cursor-default",
  }[state];

  return (
    <div className="flex items-center gap-3">
      {/* Qty Stepper */}
      <div className="flex items-center h-11 border border-yellow-600/30 rounded bg-yellow-600/5">
        <button
          onClick={() => setQty((q) => Math.max(1, q - 1))}
          className="w-9 h-full text-yellow-500 text-lg hover:bg-yellow-600/10 transition-colors"
        >
          −
        </button>
        <span className="w-8 text-center text-sm font-bold text-stone-100 border-x border-yellow-600/20">
          {qty}
        </span>
        <button
          onClick={() => setQty((q) => q + 1)}
          className="w-9 h-full text-yellow-500 text-lg hover:bg-yellow-600/10 transition-colors"
        >
          +
        </button>
      </div>

      {/* Button */}
      <button
        onClick={handleAdd}
        disabled={state !== "idle"}
        className={`flex-1 h-11 flex items-center justify-center gap-2 rounded text-xs font-bold tracking-widest uppercase transition-all duration-300 ${btnClass}`}
      >
        {state === "idle" && (
          <>
            <CartIcon /> Add to Cart
          </>
        )}
        {state === "adding" && <Spinner />}
        {state === "added" && (
          <>
            <CheckIcon /> Added!
          </>
        )}
      </button>
    </div>
  );
}

// ─── AddToWishlist ─────────────────────────────────────────────────────────
export function AddToWishlist({ product, onToggle }) {
  const [wished, setWished] = useState(false);

  const handleToggle = () => {
    const next = !wished;
    setWished(next);
    if (onToggle) onToggle({ ...product, wishlisted: next });
  };

  return (
    <button
      onClick={handleToggle}
      aria-label={wished ? "Remove from wishlist" : "Add to wishlist"}
      className={`group w-11 h-11 flex items-center justify-center rounded border transition-all duration-200
        ${
          wished
            ? "border-red-800 bg-red-900/20"
            : "border-yellow-600/30 bg-yellow-600/5 hover:border-red-700/50 hover:bg-red-900/10"
        }`}
    >
      <svg
        width="17"
        height="17"
        viewBox="0 0 24 24"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
        className={`transition-all duration-300 ${
          wished
            ? "fill-red-800 stroke-red-800 scale-110"
            : "fill-none stroke-stone-500 group-hover:stroke-red-600"
        }`}
      >
        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
      </svg>
    </button>
  );
}

// ─── ProductCard Demo ──────────────────────────────────────────────────────
const DEMO_PRODUCT = {
  id: 1,
  name: "Luxe Amber Collection",
  price: 149,
  originalPrice: 249,
  rating: 4.9,
  reviews: 218,
  badge: "40% OFF",
};

export default function ProductCard() {
  const [toast, setToast] = useState(null);

  const handleAdd = (item) => {
    setToast(`${item.quantity}× "${item.name}" added to cart`);
    setTimeout(() => setToast(null), 3000);
  };

  return (
    <div className="min-h-screen bg-[#1a1a2e] flex flex-col items-center justify-center p-10 gap-6">
      <p className="text-[10px] tracking-[3px] uppercase text-yellow-600/50 font-semibold">
        UrbanMart — Product Card
      </p>

      <div className="w-full max-w-sm bg-[#16213e] border border-yellow-600/20 rounded-xl overflow-hidden shadow-2xl">
        {/* Image */}
        <div className="relative bg-[#0f3460] h-52 flex items-center justify-center">
          <ProductIllustration />
          <span className="absolute top-3 left-3 bg-red-900 text-yellow-400 text-[11px] font-bold tracking-wide px-3 py-1 rounded-full">
            {DEMO_PRODUCT.badge}
          </span>
          <div className="absolute top-3 right-3">
            <AddToWishlist product={DEMO_PRODUCT} />
          </div>
        </div>

        {/* Body */}
        <div className="p-5">
          <p className="text-[10px] font-bold tracking-[2px] uppercase text-yellow-500 mb-2">
            Luxury Collection
          </p>

          <h2 className="font-serif text-xl font-bold text-stone-100 mb-3 leading-snug">
            {DEMO_PRODUCT.name}
          </h2>

          {/* Rating */}
          <div className="flex items-center gap-2 mb-4">
            <div className="flex gap-0.5">
              {[1, 2, 3, 4].map((s) => (
                <span key={s} className="text-yellow-500 text-sm">
                  ★
                </span>
              ))}
              <span className="text-yellow-500/40 text-sm">★</span>
            </div>
            <span className="text-xs text-stone-500">
              {DEMO_PRODUCT.rating} ({DEMO_PRODUCT.reviews} reviews)
            </span>
          </div>

          {/* Price */}
          <div className="flex items-baseline gap-3 mb-5">
            <span className="font-serif text-2xl font-bold text-stone-100">
              ${DEMO_PRODUCT.price}
            </span>
            <span className="text-sm text-stone-600 line-through">
              ${DEMO_PRODUCT.originalPrice}
            </span>
            <span className="text-xs font-bold text-green-400">Save $100</span>
          </div>

          <div className="h-px bg-white/5 mb-5" />

          <AddToCart product={DEMO_PRODUCT} onAdd={handleAdd} />
        </div>
      </div>

      {/* Toast */}
      {toast && (
        <div className="fixed bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2 bg-green-900 border border-green-400/30 text-green-400 text-sm font-semibold px-5 py-3 rounded-lg shadow-xl whitespace-nowrap">
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
      width="15"
      height="15"
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
      width="14"
      height="14"
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
      <circle
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="3"
        strokeOpacity="0.2"
      />
      <path
        d="M12 2a10 10 0 0110 10"
        stroke="#D4AF37"
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
}

function ProductIllustration() {
  return (
    <svg viewBox="0 0 240 180" width="200" fill="none">
      <rect x="80" y="40" width="80" height="100" rx="8" fill="#D4AF37" />
      <rect x="80" y="40" width="80" height="28" rx="8" fill="#B8960C" />
      <rect x="80" y="62" width="80" height="6" fill="#B8960C" />
      <text
        x="120"
        y="58"
        textAnchor="middle"
        fill="#1a1a2e"
        fontSize="9"
        fontWeight="700"
      >
        PREMIUM
      </text>
      <text x="120" y="88" textAnchor="middle" fill="#1a1a2e" fontSize="7">
        ✦ COLLECTION ✦
      </text>
      <rect
        x="96"
        y="98"
        width="48"
        height="14"
        rx="3"
        fill="rgba(26,26,46,0.3)"
      />
      <text
        x="120"
        y="109"
        textAnchor="middle"
        fill="#D4AF37"
        fontSize="7"
        fontWeight="600"
      >
        FINEST QUALITY
      </text>
      <text x="30" y="40" fill="#D4AF37" fontSize="12" opacity="0.5">
        ✦
      </text>
      <text x="195" y="55" fill="#D4AF37" fontSize="8" opacity="0.4">
        ✦
      </text>
    </svg>
  );
}
