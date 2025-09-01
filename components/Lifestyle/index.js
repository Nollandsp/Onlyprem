"use client";

import Image from "next/image";
import FAQ from "../FAQ";

export default function Lifestyle() {
  return (
    <>
      <section className="bg-black text-white py-35 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          {/* Texte */}
          <h1 className="text-3xl sm:text-4xl font-bold tracking-widest">
            Changer Votre Lifestyle avec ONLYPREM
          </h1>
          <p className="text-gray-300 text-lg sm:text-xl">
            Nous vous accompagnons dans votre nouveau quotidien pour un style de
            vie moderne, équilibré et performant.
          </p>
        </div>

        {/* Image plus large avec marges */}
        <div className="relative max-w-[1600px] mx-auto mt-12 h-[600px] sm:h-[600px]">
          {/* Image principale */}
          <div className="absolute top-0 left-0 w-3/4 h-2/4 sm:w-3/4 sm:h-3/4 rounded-xl shadow-2xl overflow-hidden">
            <Image
              src="/boat.jpg"
              alt="Lifestyle"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Image secondaire superposée en bas à droite */}
          <div className="absolute bottom-30 right-4 w-3/4 h-2/4 sm:w-3/4 sm:h-3/4 translate-x-8 translate-y-8 rounded-xl shadow-2xl overflow-hidden">
            <Image
              src="/jet.jpg"
              alt="Overlay"
              fill
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
