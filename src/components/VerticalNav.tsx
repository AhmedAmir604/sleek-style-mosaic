import React from "react";
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
    <nav className=" left-0 top-0 bg-nike-dark flex items-center py-8">
      {/* <div className="mb-16">
        <svg
          className="w-8 h-8 text-white"
          viewBox="0 0 24 24"
          fill="currentColor"
        >
          <path d="M21.07 6.93c.13-.01.26-.03.39-.04.14-.01.28-.02.42-.02.15 0 .29.01.44.02.13.01.26.03.39.04v10.14c-.13.01-.26.03-.39.04-.15.01-.29.02-.44.02-.14 0-.28-.01-.42-.02-.13-.01-.26-.03-.39-.04V6.93zM8.03 6.93v10.14c-.13.01-.26.03-.39.04-.14.01-.28.02-.42.02-.15 0-.29-.01-.44-.02-.13-.01-.26-.03-.39-.04V6.93c.13-.01.26-.03.39-.04.15-.01.29-.02.44-.02.14 0 .28.01.42.02.13.01.26.03.39.04z" />
        </svg>
      </div> */}
      <div className="flex gap-12 h-full w-full justify-center ml-[8rem] transform  ">
        {navItems.map((item) => (
          <a
            key={item.label}
            href={item.href}
            className={cn(
              "text-gray-300 italic font-semibold hover:text-white transition-colors duration-200",
              "tracking-wider text-sm font-normal"
            )}
          >
            {item.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
