"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between relative h-[80px]">
        {/* Mobile Burger Button (à gauche) */}
        <button
          className="md:hidden flex flex-col gap-1 relative z-50"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
          aria-expanded={isOpen}
        >
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out ${
              isOpen ? "rotate-45 translate-y-1.5" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-opacity duration-300 ease-in-out ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-0.5 w-6 bg-black transition-transform duration-300 ease-in-out ${
              isOpen ? "-rotate-45 -translate-y-1.5" : ""
            }`}
          />
        </button>

        {/* Logo (centré absolument) */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Logo OnlyPrem"
              width={200}
              height={90}
              className="object-contain h-[70px] w-auto"
            />
          </Link>
        </div>

        {/* Bouton Contact (à droite) */}
        <div>
          <Link
            href="/contact"
            className="hidden md:inline-block bg-black text-white px-4 py-2 rounded-xl font-medium hover:bg-gray-800 transition"
          >
            Contact
          </Link>
        </div>
      </div>

      {/* Desktop / Tablet Menu */}
      <div className="hidden md:flex justify-center bg-white shadow-sm">
        <ul className="flex items-center gap-8 text-black font-medium py-3">
          <li>
            <Link href="/" className="hover:underline">
              Accueil
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              Nos modèles
            </Link>
          </li>
          <li>
            <Link href="/about" className="hover:underline">
              À propos
            </Link>
          </li>
        </ul>
      </div>

      {/* Mobile Fullscreen Menu (sous la navbar) */}
      <div
        className={`fixed left-0 w-full bg-white z-40 transition-all duration-300 ease-in-out ${
          isOpen
            ? "top-[80px] h-[calc(100vh-80px)] opacity-100"
            : "-top-[100vh] h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col gap-8 text-black font-bold text-xl h-full mt-10 ml-8">
          <li>
            <Link
              href="/"
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              Accueil
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              Nos modèles
            </Link>
          </li>
          <li>
            <Link
              href="/about"
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              À propos
            </Link>
          </li>
          <li>
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="hover:underline"
            >
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}
