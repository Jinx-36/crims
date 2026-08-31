"use client";

import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  const links = [
    { name: "Accueil", href: "/" },
    { name: "Notre approche & Services", href: "/notre-approche" },
    { name: "Qui est CRIMSAI", href: "/a-propos" },
    { name: "Ressources", href: "/ressources" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <footer className="w-full bg-beige-surface border-t border-bordure py-16 md:py-24">
      <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24">
        {/* Brand Side */}
        <div className="flex flex-col items-start gap-6">
          <div className="relative h-14 w-14">
            <Image
              src="/logo-crims-bm1.png"
              alt="CrimsAI Logo"
              fill
              className="object-contain"
            />
          </div>
          <p className="text-sm text-text-secondary leading-relaxed max-w-sm">
            Partenaire de croissance des entreprises de beauté.
          </p>
        </div>

        {/* Links Side */}
        <div className="flex flex-col md:items-end justify-between gap-12">
          <div className="flex flex-wrap gap-8 md:gap-12 justify-start md:justify-end">
            {links.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs font-semibold tracking-wider uppercase text-encre/70 hover:text-crimson transition-colors duration-300"
              >
                {link.name}
              </Link>
            ))}
          </div>

          <div className="flex flex-col md:items-end gap-2 text-xs text-text-secondary">
            <span>© {new Date().getFullYear()} CRIMSAI. Tous droits réservés.</span>
            <span>Partenaire de croissance des entreprises de beauté.</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
