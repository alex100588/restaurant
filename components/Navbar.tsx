"use client";

import Link from "next/link";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = [
  { label: "Acasă", href: "/" },
  { label: "Galerie", href: "/galerie" },
  { label: "Meniu", href: "/meniu" },
  { label: "Rezervare", href: "/rezervare" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="w-full  bg-transparent text-white">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Restaurant
        </Link>

        {/* Meniu desktop */}
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-white"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Buton hamburger mobile */}
        <button
          className="md:hidden flex items-center justify-center p-2 rounded hover:bg-gray-800"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Meniu"
        >
          {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
        </button>
      </div>

      {/* Meniu mobile */}
      {isOpen && (
        <nav className="flex flex-col gap-4 px-6 pb-4 md:hidden bg-black">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-gray-400 hover:text-white"
              onClick={() => setIsOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
