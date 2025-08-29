"use client";

import Image from "next/image";
import Stage from "@/components/Stage";

export default function Intro() {
  return (
    <main className="bg-black min-h-screen py-20">
      <div className="max-w-6xl mx-auto px-6">
        {/* Image principale */}
        <div className="w-full relative h-[420px] sm:h-[420px]">
          <Image
            src="/pool.jpg"
            alt="Logo"
            fill
            className="object-cover"
            priority
          />
        </div>

        {/* Titres */}
        <h1 className="text-white text-3xl font-bold mt-10 tracking-widest">
          AGENCE ONLYPREM
        </h1>
        <h2 className="text-white text-xl mt-3 tracking-widest">
          Management Agency
        </h2>

        {/* Description */}
        <p className="text-white text-lg mt-5 tracking-widest max-w-xl">
          {`ONLYPREM est une agence de management et de marketing spécialisée dans l'accompagnement des modèles professionnels et amateurs. Nous offrons des services personnalisés pour aider nos modèles à atteindre leurs objectifs.`}
        </p>

        {/* Bouton */}
        <div className="flex items-center justify-center mt-10 mb-10">
          <div className="relative group">
            <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600">
              <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
              <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                Contatez-nous
              </span>
            </button>
          </div>
        </div>

        {/* Sous-titre */}
        <h1 className="text-xl text-white font-bold tracking-widest">
          Les raisons de rejoindre ONLYPREM
        </h1>
        <hr className="border-t-4 border-white w-1/5 my-3" />

        {/* Bloc des avantages */}
        <section className="flex items-center justify-center mt-20">
          <div className="grid grid-cols-2 w-80 h-80">
            {/* Bloc 1 */}
            <div className="flex flex-col items-center justify-center border-r-4 border-b-4 border-gray-800 p-4">
              <Image src="/profil.png" alt="Compte" width={40} height={40} />
              <span className="text-white tracking-widest mt-2 text-center">
                Gestion de votre compte
              </span>
            </div>

            {/* Bloc 2 */}
            <div className="flex flex-col items-center justify-center border-b-4 border-gray-800 p-4">
              <Image src="/watch.png" alt="Compte" width={40} height={40} />
              <span className="text-white tracking-widest mt-2 text-center">
                Gain de votre temps
              </span>
            </div>

            {/* Bloc 3 */}
            <div className="flex flex-col items-center justify-center border-r-4 border-gray-800 p-4">
              <Image src="/finance.png" alt="Compte" width={40} height={40} />
              <span className="text-white tracking-widest mt-2 text-center">
                Paramètres et préférences
              </span>
            </div>

            {/* Bloc 4 */}
            <div className="flex flex-col items-center justify-center p-4">
              <Image src="/reseaux.png" alt="Compte" width={40} height={40} />
              <span className="text-white tracking-widest mt-2 text-center">
                Développez vos réseaux
              </span>
            </div>
          </div>
        </section>

        <Stage />
      </div>
    </main>
  );
}
