"use client";

import Image from "next/image";
import FAQ from "../FAQ";

export default function Lifestyle() {
  return (
    <>
      <section className="bg-black text-white py-40 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-12">
          {/* Texte */}
          <div className="space-y-6 text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-widest">
              Changer Votre Lifestyle avec ONLYPREM
            </h1>
            <p className="text-gray-300 text-lg sm:text-xl leading-relaxed">
              Nous vous accompagnons dans votre nouveau quotidien pour un style
              de vie moderne, équilibré et performant.
            </p>
          </div>

          {/* Images */}
          <div className="relative w-full h-[350px] sm:h-[450px] lg:h-[500px]">
            {/* Image principale */}
            <div className="absolute top-0 left-0 w-2/3 h-1/2 sm:w-2/3 sm:h-2/3 rounded-xl shadow-2xl overflow-hidden">
              <Image
                src="/girl-yacht.jpg"
                alt="Lifestyle"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
                priority
              />
            </div>

            {/* Image secondaire superposée */}
            <div className="absolute bottom-20 right-0 w-2/3 h-1/2 sm:w-2/3 sm:h-2/3 translate-x-6 translate-y-6 rounded-xl shadow-2xl overflow-hidden">
              <Image
                src="/jet.jpg"
                alt="Overlay"
                fill
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
      </section>
      <FAQ />
    </>
  );
}
