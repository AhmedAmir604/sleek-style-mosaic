import React from 'react';
import { cn } from "@/lib/utils";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "HOME", href: "#" },
  { label: "COLLECTION", href: "#" },
  { label: "ABOUT", href: "#" },
  { label: "CONTACT", href: "#" },
];

export const VerticalNav = () => {
  return (
    <nav className="fixed left-0 top-0 h-full w-20 bg-nike-dark flex flex-col items-center py-8">
      <div className="mb-16">
        <img src="/lovable-uploads/de6c9c6c-4edf-446b-9e97-a1951704022a.png" alt="Nike Logo" className="w-8 h-8" />
      </div>
      <div className="flex flex-col gap-12 transform -rotate-90">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "text-nike-gray hover:text-white transition-colors duration-200",
              "tracking-wider text-sm"
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};