import React from "react";

export const ProductImage = () => {
  return (
    <div className="relative">
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-nike-gray/20 rounded-full blur-xl " />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-nike-gray/20 rounded-full blur-lg " />
      <div className="absolute top-40 left-20 w-40 h-40 bg-nike-gray/20 rounded-full blur-lg " />
      <div className="absolute right-0 w-32 h-32 bg-nike-gray/20 rounded-full blur-xl" />
      <img
        src="/lovable-uploads/NikeShoe.png"
        alt="Nike Air Max 90"
        className="w-[500px] transform hover:rotate-[15deg] hover:scale-105 transition-all duration-150 "
      />
    </div>
  );
};
