"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-white shadow-sm">
      <div className="max-w-7xl mx-auto px-6 h-[80px] flex items-center justify-between">
        {/* Logo */}
        <Link href="/" className="flex items-center">
          <Image
            src="/logo.png"
            alt="Logo OnlyPrem"
            width={180}
            height={70}
            className="object-contain h-[60px] w-auto"
          />
        </Link>

        {/* Menu desktop */}
        <ul className="hidden md:flex items-center gap-10 text-black font-medium tracking-wide">
          {[
            { name: "Accueil", href: "/" },
            { name: "Nos modèles", href: "/models" },
            { name: "À propos", href: "/about" },
          ].map((link) => (
            <li key={link.name} className="relative group">
              <Link href={link.href} className="transition">
                {link.name}
              </Link>
              {/* Trait animé au hover */}
              <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-black transition-all duration-300 group-hover:w-full" />
            </li>
          ))}
        </ul>

        {/* Bouton contact desktop */}
        <div className="hidden md:block">
          <a
            href="mailto:onlyprem.pro17@gmail.com"
            className="bg-black text-white px-5 py-2 rounded-xl font-medium hover:bg-gray-800 transition"
          >
            Contact
          </a>
        </div>

        {/* Bouton burger mobile */}
        <button
          className="md:hidden flex flex-col gap-1 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>
      </div>

      {/* Menu mobile plein écran */}
      <div
        className={`fixed left-0 w-full bg-white z-40 transition-all duration-300 ease-in-out ${
          isOpen
            ? "top-[80px] h-[calc(100vh-80px)] opacity-100"
            : "-top-[100vh] h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-8 text-black font-bold text-xl h-full mt-10 ml-8">
          <li>
            <Link href="/" onClick={() => setIsOpen(false)}>
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/models" onClick={() => setIsOpen(false)}>
              Nos modèles
            </Link>
          </li>
          <li>
            <Link href="/about" onClick={() => setIsOpen(false)}>
              À propos
            </Link>
          </li>
          <li>
            <a
              href="mailto:onlyprem.pro17@gmail.com"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}
