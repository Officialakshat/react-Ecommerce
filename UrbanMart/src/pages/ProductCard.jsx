import useWishlist from "../hooks/useWishlist";

// const Products = [
//   {
//     id: 1,
//     name: "Ceramic Table Lamp",
//     category: "Lighting",
//     price: 1299,
//     original: 1899,
//     tag: "Best Seller",
//     tagColor: "bg-[#C9B194] text-white",
//     rating: 4.5,
//     reviews: 128,
//     img: "https://www.ikea.com/in/en/images/products/blidvaeder-table-lamp-off-white-ceramic-beige__1059594_pe849715_s5.jpg?f=xl",
//   },
//   {
//     id: 2,
//     name: "Sony WH-1000XM5",
//     category: "Electronics",
//     price: 24990,
//     original: 29990,
//     tag: "30% OFF",
//     tagColor: "bg-red-100 text-red-600",
//     rating: 5,
//     reviews: 340,
//     img: "https://luxebook.in/wp-content/uploads/2022/11/MW75S2_Hero_800x800_61a84578-4026-4bc0-8724-c48ab6b36229_800x800.png",
//   },
//   {
//     id: 3,
//     name: "Linen Tote Bag",
//     category: "Fashion",
//     price: 599,
//     original: 999,
//     tag: "New",
//     tagColor: "bg-green-100 text-green-700",
//     rating: 4,
//     reviews: 56,
//     img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80",
//   },
//   {
//     id: 4,
//     name: "Minimal Wall Clock",
//     category: "Decor",
//     price: 1499,
//     original: 1999,
//     tag: "Trending",
//     tagColor: "bg-blue-100 text-blue-600",
//     rating: 4,
//     reviews: 89,
//     img: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80",
//   },
// ];

export default function ProductCard({ item }) {
  const { toggleWishlist, isWishlisted } = useWishlist();
  const wishlisted = isWishlisted(item.id);
  const discount = item
    ? Math.round(((item - item.price) / item.original) * 100)
    : null;

  return (
    <div className="group relative bg-white rounded-2xl overflow-hidden border border-[#ede5da] hover:border-[#C9B19460] hover:shadow-[0_8px_30px_#C9B19420] hover:-translate-y-1 transition-all duration-300 cursor-pointer min-w-60">
      {/* ── Image ── */}
      <div className="relative overflow-hidden bg-[#fdf5ec] h-48 sm:h-52">
        <img
          src={item.img}
          alt={item.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />

        {/* Top-left badge */}
        {item.tag && (
          <span
            className={`absolute top-2.5 left-2.5 text-[10px] font-semibold px-2.5 py-1 rounded-full ${item.tagColor || "bg-[#C9B194] text-white"}`}
          >
            {item.tag}
          </span>
        )}

        {/* Discount badge */}
        {discount && !item.tag && (
          <span className="absolute top-2.5 left-2.5 bg-red-500 text-white text-[10px] font-semibold px-2.5 py-1 rounded-full">
            -{discount}%
          </span>
        )}

        {/* Wishlist button */}
        <button
          onClick={(e) => {
            e.stopPropagation();
            toggleWishlist(item);
          }}
          className="absolute top-2.5 right-2.5 w-8 h-8 bg-white/90 hover:bg-white rounded-full flex items-center cursor-pointer justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-all duration-200 hover:scale-110"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill={wishlisted ? "#C9B194" : "#f1f1f1"}
            stroke="#C9B194"
            strokeWidth="2"
          >
            <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
          </svg>
        </button>

        {/* Quick add — slides up on hover */}
        <div className="absolute bottom-0 left-0 right-0 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
          <button className="w-full bg-[#1a1a1a]/90 hover:bg-[#1a1a1a] text-white text-[12px] font-medium py-2.5 backdrop-blur-sm transition-colors">
            Quick Add to Cart
          </button>
        </div>
      </div>

      {/* ── Info ── */}
      <div className="p-3.5">
        {/* Category */}
        <p className="text-[10px] font-medium text-[#C9B194] uppercase tracking-widest mb-0.5">
          {item.category || "General"}
        </p>

        {/* Name */}
        <p className="text-[13.5px] font-medium text-gray-800 truncate leading-snug mb-2">
          {item.name}
        </p>

        {/* Rating */}
        {item.rating && (
          <div className="flex items-center gap-1 mb-2">
            {[1, 2, 3, 4, 5].map((s) => (
              <svg
                key={s}
                width="10"
                height="10"
                viewBox="0 0 24 24"
                fill={s <= Math.round(item.rating) ? "#C9B194" : "none"}
                stroke="#C9B194"
                strokeWidth="2"
              >
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
              </svg>
            ))}
            <span className="text-[10px] text-gray-400 ml-0.5">
              ({item.reviews || 0})
            </span>
          </div>
        )}

        {/* Price row */}
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-1.5">
            <span className="text-[15px] font-bold text-gray-900">
              ₹{item.price}
            </span>
            {item.original && (
              <span className="text-[11px] text-gray-400 line-through">
                ₹{item.original}
              </span>
            )}
          </div>
          {/* {discount && (
            <span className="text-[10px] font-semibold text-green-600 bg-green-50 px-1.5 py-0.5 rounded-md">
              {discount}% off
            </span>
          )} */}
        </div>
      </div>
    </div>
  );
}
