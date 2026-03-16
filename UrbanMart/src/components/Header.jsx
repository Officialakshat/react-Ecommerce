import { useState } from "react";
import { Link } from "react-router-dom";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "Categories", path: "/category" },
  { name: "NewArrivals", path: "/newArrivals" },
  { name: "Deals", path: "/bestDeals" },
  { name: "Brands", path: "/brands" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-[#ede5da]">
      {/* ── TOP BAR ── */}
      <div className="flex items-center justify-between gap-4 px-5 sm:px-8 lg:px-12 py-3">
        {/* Logo */}
        <a
          href="#"
          className="shrink-0 text-[#C9B194] text-2xl sm:text-[28px] font-bold tracking-tight leading-none"
          style={{ fontFamily: "'Cormorant Garamond', Georgia, serif" }}
        >
          UrbanMart
        </a>

        {/* Desktop Search Bar */}
        <div className="hidden lg:flex flex-1 max-w-120 items-center bg-[#f8f5f1] border border-[#ede5da] rounded-full overflow-hidden focus-within:border-[#C9B194] focus-within:ring-[3px] focus-within:ring-[#C9B19428] transition-all duration-200">
          <svg
            className="ml-4 shrink-0 text-[#9a7f5e]"
            width="15"
            height="15"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search products, brands…"
            className="flex-1 bg-transparent outline-none border-none px-3 py-2.5 text-[13.5px] text-gray-800 placeholder-[#b0a090]"
          />
          <button className="m-1 shrink-0 bg-[#C9B194] hover:bg-[#b89e7e] text-white text-xs font-medium rounded-full px-5 py-2 transition-all duration-200 hover:-translate-y-px">
            Search
          </button>
        </div>

        {/* Desktop Actions */}
        <div className="hidden lg:flex items-center gap-2.5 shrink-0">
          <button className="border-[1.5px] border-[#C9B194] text-[#C9B194] hover:bg-[#C9B19415] text-[13px] font-medium rounded-full px-5 py-2 transition-all duration-200 hover:-translate-y-px">
            Log in
          </button>
          <button className="bg-[#C9B194] hover:bg-[#b89e7e] text-white text-[13px] font-medium rounded-full px-5 py-2 transition-all duration-200 hover:-translate-y-px">
            Sign up
          </button>

          {/* Wishlist */}
          <button className="relative w-9 h-9 flex items-center justify-center bg-[#f8f5f1] hover:bg-[#efe8de] rounded-full transition-all duration-200 hover:scale-105">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9B194"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9B194] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* Cart */}
          <button className="relative w-9 h-9 flex items-center justify-center bg-[#f8f5f1] hover:bg-[#efe8de] rounded-full transition-all duration-200 hover:scale-105">
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9B194"
              strokeWidth="2"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9B194] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </button>
        </div>

        {/* Mobile: icons + search toggle + hamburger */}
        <div className="flex lg:hidden items-center gap-2">
          {/* Wishlist */}
          <button className="relative w-9 h-9 flex items-center justify-center bg-[#f8f5f1] rounded-full">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9B194"
              strokeWidth="2"
            >
              <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9B194] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              2
            </span>
          </button>

          {/* Cart */}
          <button className="relative w-9 h-9 flex items-center justify-center bg-[#f8f5f1] rounded-full">
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#C9B194"
              strokeWidth="2"
            >
              <path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4z" />
              <line x1="3" y1="6" x2="21" y2="6" />
              <path d="M16 10a4 4 0 0 1-8 0" />
            </svg>
            <span className="absolute -top-1 -right-1 w-4 h-4 bg-[#C9B194] text-white text-[9px] font-bold rounded-full flex items-center justify-center">
              3
            </span>
          </button>

          {/* Search toggle */}
          <button
            onClick={() => setSearchOpen((o) => !o)}
            className="w-9 h-9 flex items-center justify-center bg-[#f8f5f1] hover:bg-[#efe8de] rounded-full transition-colors duration-200"
          >
            <svg
              width="15"
              height="15"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#6B7280"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
          </button>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen((o) => !o)}
            className="w-9 h-9 flex flex-col items-center justify-center gap-1.25 bg-[#f8f5f1] hover:bg-[#efe8de] rounded-full transition-colors duration-200"
            aria-label="Toggle menu"
          >
            <span
              className={`block w-4.5 h-[1.5px] bg-gray-500 rounded-full transition-all duration-300 origin-center ${menuOpen ? "rotate-45 translate-y-[6.5px]" : ""}`}
            />
            <span
              className={`block w-4.5 h-[1.5px] bg-gray-500 rounded-full transition-all duration-300 ${menuOpen ? "opacity-0 scale-x-0" : ""}`}
            />
            <span
              className={`block w-4.5 h-[1.5px] bg-gray-500 rounded-full transition-all duration-300 origin-center ${menuOpen ? "-rotate-45 -translate-y-[6.5px]" : ""}`}
            />
          </button>
        </div>
      </div>

      {/* ── MOBILE SEARCH SLIDE ── */}
      <div
        className={`lg:hidden px-5 border-t border-[#f5ede0] overflow-hidden transition-all duration-300 ${searchOpen ? "max-h-20 py-3 opacity-100" : "max-h-0 py-0 opacity-0"}`}
      >
        <div className="flex items-center bg-[#f8f5f1] border border-[#ede5da] rounded-full overflow-hidden focus-within:border-[#C9B194] focus-within:ring-[3px] focus-within:ring-[#C9B19428] transition-all duration-200">
          <svg
            className="ml-4 shrink-0 text-[#9a7f5e]"
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.35-4.35" />
          </svg>
          <input
            type="text"
            placeholder="Search products…"
            className="flex-1 bg-transparent outline-none border-none px-3 py-2.5 text-sm text-gray-800 placeholder-[#b0a090]"
          />
          <button className="m-1 bg-[#C9B194] text-white text-xs font-medium rounded-full px-4 py-2">
            Go
          </button>
        </div>
      </div>

      {/* ── MOBILE MENU DRAWER ── */}
      <div
        className={`lg:hidden border-t border-[#f5ede0] overflow-hidden transition-all duration-300 ${menuOpen ? "max-h-125 opacity-100" : "max-h-0 opacity-0"}`}
      >
        <div className="px-5 pt-2 pb-5 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              href="#"
              className="text-gray-600 hover:text-gray-900 hover:bg-[#fdf5ec] px-3 py-2.5 rounded-xl text-[15px] transition-colors duration-150"
            >
              {link.name}
            </Link>
          ))}
          <div className="flex gap-2.5 mt-3 pt-3 border-t border-[#ede5da]">
            <button className="flex-1 border-[1.5px] border-[#C9B194] text-[#C9B194] rounded-full py-2 text-sm font-medium">
              Log in
            </button>
            <button className="flex-1 bg-[#C9B194] text-white rounded-full py-2 text-sm font-medium">
              Sign up
            </button>
          </div>
        </div>
      </div>

      {/* ── DESKTOP BOTTOM NAV LINKS ── */}
      <div className="hidden lg:flex items-center gap-7 px-12 pb-3 border-t border-[#f5ede0]">
        {navLinks.map((link, i) => (
          <Link
            key={link.name}
            to={link.path}
            href="#"
            className={`relative py-1 text-[13.5px] transition-colors duration-200 group ${
              i === 0
                ? "text-gray-900 font-medium"
                : "text-gray-500 hover:text-gray-900 font-normal"
            }`}
          >
            {link.name}

            <span
              className={`absolute left-0 bottom-0 h-[1.5px] bg-[#C9B194] transition-all duration-300 ${
                i === 0 ? "w-full" : "w-0 group-hover:w-full"
              }`}
            />
          </Link>
        ))}
      </div>
    </nav>
  );
}
