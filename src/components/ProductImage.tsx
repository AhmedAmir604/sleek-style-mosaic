import React from 'react';

export const ProductImage = () => {
  return (
    <div className="relative">
      <div className="absolute -top-20 -left-20 w-40 h-40 bg-nike-gray/10 rounded-full blur-xl animate-float" />
      <div className="absolute bottom-0 right-0 w-32 h-32 bg-nike-gray/10 rounded-full blur-lg animate-float" style={{ animationDelay: '1s' }} />
      <img
        src="/lovable-uploads/de6c9c6c-4edf-446b-9e97-a1951704022a.png"
        alt="Nike Air Max 90"
        className="w-[600px] h-auto transform rotate-[-25deg] animate-float"
        style={{ animationDelay: '0.5s' }}
      />
    </div>
  );
};