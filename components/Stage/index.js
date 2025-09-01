"use client";

import Gestion from "@/components/Gestion";

export default function Stage() {
  const steps = [
    {
      title: "Candidature",
      description:
        "Soumettez votre profil et vos photos via notre formulaire en ligne.",
    },
    {
      title: "Sélection",
      description:
        "Notre équipe étudie votre profil et sélectionne les candidats adaptés.",
    },
    {
      title: "Entretien",
      description:
        "Un entretien individuel pour mieux comprendre vos objectifs et votre style.",
    },
    {
      title: "Intégration",
      description:
        "Vous rejoignez OnlyPrem et commencez vos missions avec notre agence.",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-2">
      {/* Titre principal */}
      <h1 className="text-2xl text-white mt-20 font-bold tracking-widest">
        ONLYPREM et son processus de recrutement
      </h1>
      <hr className="border-t-4 border-white w-1/5 my-6" />

      {/* Étapes */}
      <div className="max-w-4xl space-y-12 mt-10">
        {steps.map((step, index) => (
          <div key={index} className="flex items-start space-x-6">
            <div className="flex-shrink-0 w-12 h-12 flex items-center justify-center border-2 border-white rounded-full text-white font-bold text-lg">
              {index + 1}
            </div>

            <div className="text-white">
              <h3 className="text-xl font-semibold mb-1">{step.title}</h3>
              <p className="text-gray-300">{step.description}</p>
            </div>
          </div>
        ))}
      </div>

      <Gestion />
    </div>
  );
}
