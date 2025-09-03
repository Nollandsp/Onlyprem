"use client";

import Image from "next/image";
import Lifestyle from "@/components/Lifestyle";

export default function Gestion() {
  return (
    <main className="bg-black min-h-screen py-40">
      <div className="max-w-6xl mx-auto px-2">
        <h1 className="text-white text-2xl sm:text-3xl font-extrabold tracking-widest mb-6">
          Gestion de votre contenu
        </h1>
        <hr className="border-t-4 border-white w-1/5 my-6" />

        {/* Grille responsive */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Bloc 1 - Analyse du profil */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/desk.jpeg"
                alt="Analyse du profil"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-white text-xl sm:text-2xl font-bold">
              <span className="text-emerald-400">Analyse</span> du profil
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Étude approfondie du parcours, de l’image et des objectifs du
              modèle afin de définir une stratégie sur-mesure.
            </p>
          </div>

          {/* Bloc 2 - Gestion de l’image */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/social.jpg"
                alt="Gestion de l’image"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-white text-xl sm:text-2xl font-bold">
              <span className="text-cyan-400">Gestion</span> de l’image
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Accompagnement sur la mise en avant personnelle, les réseaux
              sociaux, shooting photo et communication digitale.
            </p>
          </div>

          {/* Bloc 3 - Opportunités & partenariats */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/reunion.jpeg"
                alt="Opportunités et partenariats"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-white text-xl sm:text-2xl font-bold">
              <span className="text-purple-400">Opportunités</span> &
              partenariats
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Mise en relation avec des marques, événements et collaborations en
              accord avec le positionnement du modèle.
            </p>
          </div>

          {/* Bloc 4 - Suivi & accompagnement */}
          <div className="flex flex-col items-center text-center space-y-4">
            <div className="relative w-full h-64 rounded-xl overflow-hidden shadow-xl">
              <Image
                src="/suivi.jpg"
                alt="Suivi et accompagnement"
                fill
                className="object-cover"
              />
            </div>
            <h3 className="text-white text-xl sm:text-2xl font-bold">
              <span className="text-pink-400">Suivi</span> & accompagnement
            </h3>
            <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
              Un suivi personnalisé pour ajuster la stratégie, optimiser la
              progression et garantir le succès à long terme.
            </p>
          </div>
        </section>
      </div>
      <Lifestyle />
    </main>
  );
}
