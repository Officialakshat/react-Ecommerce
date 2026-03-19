import { useState } from "react";

export default function AddToWishlist({ product, onToggle }) {
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
