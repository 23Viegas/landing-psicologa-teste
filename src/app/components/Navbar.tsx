"use client";

import { useEffect, useState } from "react";
import { ButtonLink } from "./ButtonLink";

const links = [
  { href: "#sobre", label: "Sobre" },
  { href: "#especialidades", label: "Especialidades" },
  { href: "#depoimentos", label: "Depoimentos" },
  { href: "#contato", label: "Contato" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const update = () => setIsScrolled(window.scrollY > 12);

    update();
    window.addEventListener("scroll", update, { passive: true });

    return () => window.removeEventListener("scroll", update);
  }, []);

  return (
    <header
      className={`sticky top-0 z-30 border-b backdrop-blur transition-[background-color,border-color,box-shadow] duration-300 ${
        isScrolled
          ? "border-primary/10 bg-white/90 shadow-sm"
          : "border-transparent bg-white/35 shadow-none"
      }`}
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between gap-5 px-5 py-4 lg:px-8">
        <a href="#" className="font-heading text-lg font-bold text-text">
          Dra. Ana Lima
        </a>
        <nav className="hidden items-center gap-7 text-sm font-medium text-text/70 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="transition-colors duration-150 hover:text-primary"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden sm:block">
          <ButtonLink href="#contato">Agendar Consulta</ButtonLink>
        </div>
      </div>
    </header>
  );
}
