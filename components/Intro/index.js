"use client";

import Image from "next/image";
import Stage from "@/components/Stage";

export default function Intro() {
  return (
    <main className="bg-black min-h-screen py-20">
      {/* SECTION HERO */}
      <div className="relative w-full h-[300px] sm:h-[400px] lg:h-[600px]">
        {/* Image de fond */}
        <Image
          src="/yachts.jpg"
          alt="Logo"
          fill
          sizes="100vw"
          className="object-cover"
          priority
        />

        {/* Filtre sombre pour desktop */}
        <div className="hidden lg:block absolute inset-0 bg-black/60" />

        {/* Texte par dessus l’image pour desktop */}
        <div className="hidden lg:flex absolute inset-0 items-center justify-center">
          <div className="max-w-3xl text-center px-6">
            <h1 className="text-white text-5xl font-bold tracking-widest">
              AGENCE ONLYPREM
            </h1>
            <h2 className="text-white text-2xl mt-3 tracking-widest">
              Management Agency
            </h2>
            <p className="text-white text-lg mt-5 tracking-widest">
              {`ONLYPREM est une agence de management et de marketing spécialisée dans l'accompagnement des modèles professionnels et amateurs. Nous offrons des services personnalisés pour aider nos modèles à atteindre leurs objectifs.`}
            </p>

            {/* Bouton */}
            <div className="mt-8">
              <a
                href="mailto:onlyprem.pro17@gmail.com"
                className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 rounded-2xl shadow-lg shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
              >
                <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 hover:opacity-100"></span>
                <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
                  Contactez-nous
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Texte normal en dessous pour mobile/tablette */}
      <div className="lg:hidden max-w-6xl mx-auto px-6 mt-10">
        <h1 className="text-white text-3xl font-bold tracking-widest">
          AGENCE ONLYPREM
        </h1>
        <h2 className="text-white text-xl mt-3 tracking-widest">
          Management Agency
        </h2>
        <p className="text-white text-base sm:text-lg mt-5 tracking-widest max-w-xl">
          {`ONLYPREM est une agence de management et de marketing spécialisée dans l'accompagnement des modèles professionnels et amateurs. Nous offrons des services personnalisés pour aider nos modèles à atteindre leurs objectifs.`}
        </p>

        {/* Bouton mobile */}
        <div className="flex items-center justify-center sm:justify-start mt-8">
          <a
            href="mailto:onlyprem.pro17@gmail.com"
            className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 rounded-2xl shadow-lg shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600"
          >
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 hover:opacity-100"></span>
            <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
              Contactez-nous
            </span>
          </a>
        </div>
      </div>

      {/* Sous-titre + blocs avantages */}
      <div className="max-w-6xl mx-auto px-6">
        <h1 className="text-xl sm:text-2xl lg:text-3xl text-white font-bold tracking-widest mt-20">
          Les raisons de rejoindre ONLYPREM
        </h1>
        <hr className="border-t-4 border-white w-1/3 sm:w-1/5 my-3" />

        {/* Avantages */}
        <section className="  relative flex justify-center lg:items-center min-h-[60vh]">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 w-full max-w-3xl">
            <div className="flex flex-col items-center justify-center text-center p-4 border border-gray-800 rounded-lg">
              <Image src="/profil.png" alt="Compte" width={50} height={50} />
              <span className="text-white tracking-widest mt-2">
                Gestion de votre compte
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border border-gray-800 rounded-lg">
              <Image src="/watch.png" alt="Temps" width={50} height={50} />
              <span className="text-white tracking-widest mt-2">
                Gain de votre temps
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border border-gray-800 rounded-lg">
              <Image src="/finance.png" alt="Finance" width={50} height={50} />
              <span className="text-white tracking-widest mt-2">
                Paramètres et préférences
              </span>
            </div>
            <div className="flex flex-col items-center justify-center text-center p-4 border border-gray-800 rounded-lg">
              <Image src="/reseaux.png" alt="Réseaux" width={50} height={50} />
              <span className="text-white tracking-widest mt-2">
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
