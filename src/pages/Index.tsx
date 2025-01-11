import React from "react";
import { VerticalNav } from "@/components/VerticalNav";
import { ProductImage } from "@/components/ProductImage";
import { AddToCartButton } from "@/components/AddToCartButton";
import VerticalBar from "@/components/verticalBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-nike-dark text-white">
      <VerticalBar />
      <VerticalNav />

      <main className="ml-20 min-h-screen flex items-center">
        <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-8">
          <div className="flex flex-col justify-center">
            <h1 className="text-8xl italic font-bold mb-4">AIR MAX</h1>
            <h2 className="text-2xl italic text-gray-300 mb-2">
              NIKE AIR MAX 90
            </h2>
            <p className="text-3xl italic mb-6">$100</p>
            <p className="text-nike-gray mb-8 max-w-md">
              Nothing to fly, nothing as comfortable, nothing as proven. The
              Nike Air Max 90 stays true to its OG running roots with the iconic
              Waffle sole, stitched overlays and classic TPU details.
            </p>
            <AddToCartButton />
          </div>

          <div className="flex items-center justify-center">
            <ProductImage />
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;
