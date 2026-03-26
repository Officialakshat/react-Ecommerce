// import products from "../data/products";

import ProductCard from "./ProductCard.jsx";

const Products = [
  {
    id: 8,
    name: "Ceramic Table Lamp",
    category: "Lighting",
    price: 1299,
    original: 1899,
    tag: "Best Seller",
    tagColor: "bg-[#C9B194] text-white",
    rating: 4.5,
    reviews: 128,
    img: "https://www.ikea.com/in/en/images/products/blidvaeder-table-lamp-off-white-ceramic-beige__1059594_pe849715_s5.jpg?f=xl",
  },
  {
    id: 9,
    name: "Sony WH-1000XM5",
    category: "Electronics",
    price: 24990,
    original: 29990,
    tag: "30% OFF",
    tagColor: "bg-red-100 text-red-600",
    rating: 5,
    reviews: 340,
    img: "https://luxebook.in/wp-content/uploads/2022/11/MW75S2_Hero_800x800_61a84578-4026-4bc0-8724-c48ab6b36229_800x800.png",
  },
  {
    id: 10,
    name: "Linen Tote Bag",
    category: "Fashion",
    price: 599,
    original: 999,
    tag: "New",
    tagColor: "bg-green-100 text-green-700",
    rating: 4,
    reviews: 56,
    img: "https://images.unsplash.com/photo-1590874103328-eac38a683ce7?w=400&q=80",
  },
  {
    id: 11,
    name: "Minimal Wall Clock",
    category: "Decor",
    price: 1499,
    original: 1999,
    tag: "Trending",
    tagColor: "bg-blue-100 text-blue-600",
    rating: 4,
    reviews: 89,
    img: "https://images.unsplash.com/photo-1563861826100-9cb868fdbe1c?w=400&q=80",
  },
  {
    id: 12,
    name: "Matte Black Kettle",
    category: "Kitchen",
    price: 2199,
    original: 2999,
    tag: "New",
    tagColor: "bg-green-100 text-green-700",
    rating: 4.5,
    reviews: 67,
    description:
      "Gooseneck electric kettle with temperature control and 1L capacity. Matte black finish.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",
  },
  {
    id: 13,
    name: "Leather Passport Wallet",
    category: "Fashion",
    price: 899,
    original: 1499,
    tag: "40% OFF",
    tagColor: "bg-red-100 text-red-600",
    rating: 4.5,
    reviews: 241,
    description:
      "Full-grain leather passport holder with RFID blocking, 4 card slots, and a slim travel profile.",
    img: "https://images.unsplash.com/photo-1627123424574-724758594e93?w=500&q=80",
  },
  {
    id: 14,
    name: "Monstera Deliciosa",
    category: "Plants",
    price: 699,
    original: 999,
    tag: "New",
    tagColor: "bg-green-100 text-green-700",
    rating: 5,
    reviews: 78,
    description:
      "Live Monstera plant in a 6-inch nursery pot. Air-purifying, low-maintenance, and iconic in any space.",
    img: "https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=500&q=80",
  },
  {
    id: 15,
    name: "Wooden Floating Shelf",
    category: "Furniture",
    price: 999,
    original: 1499,
    tag: "Best Seller",
    tagColor: "bg-[#C9B194] text-white",
    rating: 4,
    reviews: 302,
    description:
      "Solid pine wood floating shelf with invisible wall brackets. 60cm wide, holds up to 15kg.",
    img: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=500&q=80",
  },
  {
    id: 16,
    name: "Portable Bluetooth Speaker",
    category: "Electronics",
    price: 3499,
    original: 4999,
    tag: "New",
    tagColor: "bg-green-100 text-green-700",
    rating: 4,
    reviews: 156,
    description:
      "360° rich sound with 12-hour battery and IPX7 waterproof rating. Compact enough for any adventure.",
    img: "https://images.unsplash.com/photo-1608043152269-423dbba4e7e1?w=500&q=80",
  },
  {
    id: 17,
    name: "Linen Duvet Cover",
    category: "Bedroom",
    price: 3299,
    original: 4999,
    tag: "34% OFF",
    tagColor: "bg-red-100 text-red-600",
    rating: 4.5,
    reviews: 183,
    description:
      "100% stonewashed linen duvet cover in warm oat. Breathable, pre-washed soft, and gets better with every wash.",
    img: "https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=500&q=80",
  },
  {
    id: 18,
    name: "Marble Cheese Board",
    category: "Kitchen",
    price: 1799,
    original: 2499,
    tag: "Trending",
    tagColor: "bg-blue-100 text-blue-600",
    rating: 4.5,
    reviews: 95,
    description:
      "Natural white marble serving board with a handled wooden edge. Keeps food cool and looks stunning.",
    img: "https://images.unsplash.com/photo-1555243896-c709bfa0b564?w=500&q=80",
  },
];

export default function FeaturedProducts() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 p-6 gap-6 p max-w-6xl mx-auto">
      {Products.map((card) => (
        <ProductCard item={card} />
      ))}
    </div>
  );
}
