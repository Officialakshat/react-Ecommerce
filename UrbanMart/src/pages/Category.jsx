// ── Categories Data ──
const categories = [
  { icon: "🛋️", label: "Furniture" },
  { icon: "💡", label: "Lighting" },
  { icon: "🎧", label: "Electronics" },
  { icon: "👗", label: "Fashion" },
  { icon: "🌿", label: "Plants" },
  { icon: "🍳", label: "Kitchen" },
];

// ── Products Data ──
const products = [
  {
    id: 1,
    name: "Ceramic Table Lamp",
    price: 1299,
    original: 1899,
    tag: "Best Seller",
    tagColor: "bg-[#C9B194] text-white",
    img: "https://www.ikea.com/in/en/images/products/blidvaeder-table-lamp-off-white-ceramic-beige__1059594_pe849715_s5.jpg?f=xl",
  },
  {
    id: 2,
    name: "Sony WH-1000XM5",
    price: 24990,
    original: 29990,
    tag: "30% OFF",
    tagColor: "bg-red-100 text-red-600",
    img: "https://luxebook.in/wp-content/uploads/2022/11/MW75S2_Hero_800x800_61a84578-4026-4bc0-8724-c48ab6b36229_800x800.png",
  },
  {
    id: 3,
    name: "Linen Tote Bag",
    price: 599,
    original: 999,
    tag: "New",
    tagColor: "bg-green-100 text-green-700",
    img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80",
  },
  {
    id: 4,
    name: "Minimal Wall Clock",
    price: 1499,
    original: 1999,
    tag: "Trending",
    tagColor: "bg-blue-100 text-blue-600",
    img: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80",
  },
];

// ══════════════════════════════════════
// CATEGORIES COMPONENT
// ══════════════════════════════════════
export function Categories() {
  return (
    <section className="bg-white py-12 px-5 sm:px-8 lg:px-12">
      {/* Heading */}
      <div className="text-center mb-8">
        <p className="text-xs font-medium tracking-widest text-[#C9B194] uppercase mb-1">
          Shop by
        </p>
        <h2
          className="text-2xl sm:text-3xl font-bold text-gray-900"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          Categories
        </h2>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-3 sm:grid-cols-6 gap-3 max-w-3xl mx-auto">
        {categories.map(({ icon, label }) => (
          <button
            key={label}
            className="flex flex-col items-center gap-2 p-4 rounded-2xl bg-[#fdf9f5] hover:bg-[#f5ede0] border border-[#ede5da] hover:border-[#C9B194] hover:scale-105 transition-all duration-200 group"
          >
            <span className="text-2xl">{icon}</span>
            <span className="text-[12px] font-medium text-gray-600 group-hover:text-[#9a7f5e]">
              {label}
            </span>
          </button>
        ))}
      </div>
    </section>
  );
}

// ══════════════════════════════════════
// FEATURED PRODUCTS COMPONENT
// ══════════════════════════════════════
export function FeaturedProducts() {
  return (
    <section className="bg-[#fdf9f5] py-12 px-5 sm:px-8 lg:px-12">
      {/* Heading */}
      <div className="flex items-end justify-between mb-8 max-w-6xl mx-auto">
        <div>
          <p className="text-xs font-medium tracking-widest text-[#C9B194] uppercase mb-1">
            Hand Picked
          </p>
          <h2
            className="text-2xl sm:text-3xl font-bold text-gray-900"
            style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
          >
            Featured Products
          </h2>
        </div>
        <a
          href="#"
          className="text-sm text-[#C9B194] hover:text-[#9a7f5e] font-medium transition-colors hidden sm:block"
        >
          View all →
        </a>
      </div>

      {/* Product Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-6xl mx-auto">
        {products.map((p) => (
          <div
            key={p.id}
            className="group bg-white rounded-2xl overflow-hidden border border-[#ede5da] hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
          >
            {/* Image */}
            <div className="relative overflow-hidden bg-[#fdf0e2] h-44 sm:h-52">
              <img
                src={p.img}
                alt={p.name}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
              {/* Tag */}
              <span
                className={`absolute top-2 left-2 text-[10px] font-semibold px-2 py-0.5 rounded-full ${p.tagColor}`}
              >
                {p.tag}
              </span>
              {/* Wishlist */}
              <button className="absolute top-2 right-2 w-7 h-7 bg-white/80 hover:bg-white rounded-full flex items-center justify-center shadow-sm opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                <svg
                  width="13"
                  height="13"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#C9B194"
                  strokeWidth="2"
                >
                  <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
                </svg>
              </button>
            </div>

            {/* Info */}
            <div className="p-3">
              <p className="text-[13px] font-medium text-gray-800 truncate mb-1">
                {p.name}
              </p>
              <div className="flex items-center gap-1.5">
                <span className="text-[14px] font-bold text-gray-900">
                  ₹{p.price.toLocaleString()}
                </span>
                <span className="text-[11px] text-gray-400 line-through">
                  ₹{p.original.toLocaleString()}
                </span>
              </div>
              <button className="mt-2.5 w-full bg-[#1a1a1a] hover:bg-[#C9B194] text-white text-[12px] font-medium py-2 rounded-xl transition-colors duration-200">
                Add to Cart
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Mobile: View all */}
      <div className="text-center mt-6 sm:hidden">
        <a href="#" className="text-sm text-[#C9B194] font-medium">
          View all products →
        </a>
      </div>
    </section>
  );
}
