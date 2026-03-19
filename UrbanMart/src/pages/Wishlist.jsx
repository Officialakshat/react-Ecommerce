import React from "react";
import { AddToWishlist } from "./ProductCard";
import ProductCard from "../components/ProductCards";
function Wishlist() {
  return (
    <>
      <AddToWishlist
        product={ProductCard}

        // onToggle={(item) => toggleWishlist(item)}
      />
    </>
  );
}

export default Wishlist;
