"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const pathname = usePathname();

  const links = [
    { name: "Accueil", href: "/" },
    { name: "Notre approche & Services", href: "/notre-approche" },
    { name: "Qui est CRIMSAI", href: "/a-propos" },
    { name: "Ressources", href: "/ressources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <header className="w-full bg-[#F5F0EE]/80 backdrop-blur-md border-b border-bordure/30 sticky top-0 z-50">
      <div className="container mx-auto px-6 lg:px-20 h-16 md:h-24 flex items-center justify-between">
        <Link href="/" className="flex items-center">
          <div className="relative h-14 w-14 md:h-20 md:w-20">
            <Image
              src="/logo-crims-bm1.png"
              alt="CrimsAI Logo"
              fill
              className="object-contain object-left"
              priority
            />
          </div>
        </Link>

        {/* Desktop Links */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map((link) => {
            const isActive = pathname === link.href;
            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-xs font-semibold tracking-wider uppercase transition-colors duration-300 hover:text-crimson ${
                  isActive ? "text-crimson font-bold" : "text-encre/70"
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>

        <div>
          <Link
            href="/contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-full text-[10px] md:text-xs font-semibold tracking-wider uppercase bg-crimson text-blanc-chaud border border-transparent hover:bg-crimson-deep active:scale-98 transition-all duration-300"
          >
            Réserver un appel
          </Link>
        </div>
      </div>
    </header>
  );
}
