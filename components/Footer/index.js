"use client";

import { FaInstagram } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-white text-black py-16 px-6">
      {/* Trait noir en haut du footer */}
      <hr className="border-t border-black mb-8" />

      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
        {/* Logo / Description */}
        <div>
          <h2 className="text-2xl font-bold tracking-widest mb-4 text-black">
            ONLYPREM
          </h2>
          <p className="text-black leading-relaxed">
            ONLYPREM est une agence de management et de marketing spécialisée
            dans l’accompagnement des modèles professionnels et amateurs. Nous
            aidons nos clients à développer leur carrière et leur image.
          </p>
        </div>

        {/* Liens utiles */}
        <div>
          <h3 className="text-xl font-semibold tracking-widest mb-4 text-black">
            Liens
          </h3>
          <ul className="space-y-2">
            <li>
              <a
                href="#about"
                className="hover:text-emerald-600 transition-colors"
              >
                À propos
              </a>
            </li>
            <li>
              <a
                href="#services"
                className="hover:text-emerald-600 transition-colors"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#faq"
                className="hover:text-emerald-600 transition-colors"
              >
                FAQ
              </a>
            </li>
            <li>
              <a
                href="mailto:onlyprem.pro17@gmail.com"
                className="hover:text-emerald-600 transition-colors"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>

        {/* Réseaux sociaux */}
        <div>
          <h3 className="text-xl font-semibold tracking-widest mb-4 text-black">
            Suivez-nous
          </h3>
          <div className="flex space-x-4">
            <a
              href="https://www.instagram.com/onlyprem.agency?igsh=MWlxM3JqOWg2NDdwZw=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-emerald-600 transition-colors"
            >
              <FaInstagram size={24} />
            </a>
          </div>
        </div>
      </div>

      {/* Bas de page */}
      <div className="mt-12 border-t border-black pt-6 text-center text-black text-sm">
        &copy; {new Date().getFullYear()} ONLYPREM. Tous droits réservés.
      </div>
    </footer>
  );
}
