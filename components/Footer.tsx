"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { ArrowUp } from "lucide-react";

const navItems = [
  { label: "Acasă", href: "/" },
  { label: "Galerie", href: "/galerie" },
  { label: "Meniu", href: "/meniu" },
  { label: "Rezervare", href: "/rezervare" },
  { label: "Contact", href: "/contact" },
];

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="mt-20 border-t bg-background">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-8">
        {/* Linkuri stânga */}
        <nav className="flex flex-wrap gap-4 text-sm text-muted-foreground">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Buton scroll sus */}
        <Button
          variant="outline"
          size="icon"
          onClick={scrollToTop}
          aria-label="Înapoi sus"
        >
          <ArrowUp className="h-4 w-4" />
        </Button>
      </div>
    </footer>
  );
}
