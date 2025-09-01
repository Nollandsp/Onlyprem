"use client";

import Lifestsyle from "@/components/Lifestyle";

export default function Gestion() {
  return (
    <main className="bg-black min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-2">
        <h1 className="text-white text-2xl sm:text-3xl font-extrabold tracking-widest mb-6">
          Gestion de votre contenue
        </h1>
        <hr className="border-t-4 border-white w-16 mb-12" />

        <section className="space-y-12">
          <div className="flex items-start space-x-6">
            <div className="flex-1">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                <span className="text-emerald-400">Analyse</span> du profil
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Étude approfondie du parcours, de l’image et des objectifs du
                modèle afin de définir une stratégie sur-mesure.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="flex-1">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                <span className="text-cyan-400">Gestion</span> de l’image
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Accompagnement sur la mise en avant personnelle, les réseaux
                sociaux, shooting photo et communication digitale.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="flex-1">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                <span className="text-purple-400">Opportunités</span> &
                partenariats
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Mise en relation avec des marques, événements et collaborations
                en accord avec le positionnement du modèle.
              </p>
            </div>
          </div>

          <div className="flex items-start space-x-6">
            <div className="flex-1">
              <h3 className="text-white text-xl sm:text-2xl font-bold mb-2">
                <span className="text-pink-400">Suivi</span> & accompagnement
              </h3>
              <p className="text-gray-300 text-base sm:text-lg leading-relaxed">
                Un suivi personnalisé pour ajuster la stratégie, optimiser la
                progression et garantir le succès à long terme.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Lifestsyle />
    </main>
  );
}
