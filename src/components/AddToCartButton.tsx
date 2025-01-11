import React from "react";
import { cn } from "@/lib/utils";

export const AddToCartButton = () => {
  return (
    <button
      className={cn(
        "px-8 py-3 bg-white text-black rounded-full",
        "hover:bg-gray-800 w-fit hover:text-white transition-colors duration-200",
        "text-sm font-medium tracking-wider"
      )}
    >
      ADD TO CART
    </button>
  );
};
