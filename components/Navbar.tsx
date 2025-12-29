import Link from "next/link";
import { Button } from "@/components/ui/button";

const navItems = [
  { label: "Acasă", href: "/" },
  { label: "Galerie", href: "/galerie" },
  { label: "Meniu", href: "/meniu" },
  { label: "Rezervare", href: "/rezervare" },
  { label: "Contact", href: "/contact" },
];

export default function Navbar() {
  return (
    <header className="w-full border-b bg-background">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-6">
        {/* Logo */}
        <Link href="/" className="text-xl font-bold tracking-wide">
          Restaurant
        </Link>

        {/* Meniu desktop */}
        <nav className="hidden items-center gap-6 md:flex">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

      </div>
    </header>
  );
}
