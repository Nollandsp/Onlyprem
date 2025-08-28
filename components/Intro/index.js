"use client";

import Image from "next/image";

export default function Intro() {
  return (
    <main className="bg-black min-h-screen">
      <div className="w-full relative h-[420px] sm:h-[420px]">
        <Image
          src="/pool.jpg"
          alt="Logo"
          fill
          className="object-cover"
          priority
        />
      </div>

      <h1 className="text-white ml-5 text-3xl font-bold mt-10 tracking-widest">
        AGENCE ONLYPREM
      </h1>

      <h2 className="text-white ml-5 text-xl mt-3 tracking-widest">
        Management Agency
      </h2>

      <p className="text-white ml-5 mr-5 text-lg mt-5 tracking-widest max-w-xl">
        ONLYPREM est une agence de management et de marketing spécialisée dans
        l'accompagnement des modèles professionnels et amateurs. Nous offrons
        des services personnalisés pour aider nos modèles à atteindre leurs
        objectifs.
      </p>
      <div className="flex items-center justify-center mt-10 mb-10">
        <div className="relative group">
          <button className="relative inline-block p-px font-semibold leading-6 text-white bg-neutral-900 shadow-2xl cursor-pointer rounded-2xl shadow-emerald-900 transition-all duration-300 ease-in-out hover:scale-105 active:scale-95 hover:shadow-emerald-600">
            <span className="absolute inset-0 rounded-2xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-sky-600 p-[2px] opacity-0 transition-opacity duration-500 group-hover:opacity-100"></span>
            <span className="relative z-10 block px-6 py-3 rounded-2xl bg-neutral-950">
              <div className="relative z-10 flex items-center space-x-3">
                <span className="transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300">
                  Contatez-nous
                </span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                  className="w-7 h-7 transition-all duration-500 group-hover:translate-x-1.5 group-hover:text-emerald-300"
                >
                  <path d="M16.172 11l-5.364-5.364 1.414-1.414L20 12l-7.778 7.778-1.414-1.414L16.172 13H4v-2z"></path>
                </svg>
              </div>
            </span>
          </button>
        </div>
      </div>
      <h1 className="text-xl text-white ml-5 font-bold tracking-widest">
        Les raisons de rejoindre ONLYPREM
      </h1>
      <hr className="border-t-4 border-white w-1/5 ml-5 my-3" />

      <section className="flex items-center justify-center mt-20">
        <div className="grid grid-cols-2 w-80 h-80">
          {/* Bloc 1 : en haut à gauche → bordure droite & bas */}
          <div className="flex flex-col items-center justify-center border-r-4 border-b-4 border-gray-800 p-4">
            <Image src="/profil.png" alt="Compte" width={40} height={40} />
            <span className="text-white tracking-widest mt-2 text-center">
              Gestion de votre compte
            </span>
          </div>

          {/* Bloc 2 : en haut à droite → bordure bas */}
          <div className="flex flex-col items-center justify-center border-b-4 border-gray-800 p-4">
            <Image src="/watch.png" alt="Compte" width={40} height={40} />
            <span className="text-white tracking-widest mt-2 text-center">
              Gain de votre temps
            </span>
          </div>

          {/* Bloc 3 : en bas à gauche → bordure droite */}
          <div className="flex flex-col items-center justify-center border-r-4 border-gray-800 p-4">
            <Image src="/finance.png" alt="Compte" width={40} height={40} />
            <span className="text-white tracking-widest mt-2 text-center">
              Paramètres et préférences
            </span>
          </div>

          {/* Bloc 4 : en bas à droite → pas de bordure */}
          <div className="flex flex-col items-center justify-center p-4">
            <Image src="/reseaux.png" alt="Compte" width={40} height={40} />
            <span className="text-white tracking-widest mt-2 text-center">
              Développez vos réseaux
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
