import { useState } from "react";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAnswer = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-black text-white px-1">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-2xl sm:text-4xl font-bold tracking-widest text-left mb-4">
          Questions Fréquemment Posées
        </h2>
        <hr className="border-t-4 border-white w-1/5 my-6" />

        <div className="space-y-4">
          {faqItems.map((item, index) => (
            <div
              key={index}
              className="border-b border-gray-700 rounded-xl overflow-hidden"
            >
              <button
                onClick={() => toggleAnswer(index)}
                className="w-full text-left py-5 px-6 flex justify-between items-center hover:bg-gray-900 transition-colors duration-300 focus:outline-none"
              >
                <span className="text-lg sm:text-xl font-semibold tracking-widest">
                  {item.question}
                </span>
                <span
                  className={`transform transition-transform duration-300 ${
                    openIndex === index ? "rotate-180" : ""
                  }`}
                >
                  ▼
                </span>
              </button>

              <div
                className={`overflow-hidden transition-all duration-500 ease-in-out ${
                  openIndex === index ? "max-h-96 py-4" : "max-h-0"
                }`}
              >
                <p className="px-6 text-gray-300 text-base sm:text-lg leading-relaxed">
                  {item.answer}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const faqItems = [
  {
    question: "Quelles sont les étapes pour rejoindre l’agence ?",
    answer:
      "Vous devez remplir un formulaire d’inscription, fournir des informations de base et passer un entretien avec notre équipe.",
  },
  {
    question: "Quels services l’agence offre-t-elle aux modèles ?",
    answer:
      "Nous offrons une gestion complète de votre compte, y compris la stratégie de contenu, la protection des droits d’auteur, et un soutien juridique.",
  },
  {
    question: "Faut-il signer un contrat pour travailler avec l’agence ?",
    answer:
      "Oui, un contrat est nécessaire pour formaliser notre collaboration. Cependant, il peut être résilié avec un préavis d’une semaine.",
  },
  {
    question: "Quand puis-je m’attendre à voir des résultats ?",
    answer:
      "Les résultats peuvent varier, mais nos clients commencent généralement à voir des améliorations significatives entre 7 et 30 jours.",
  },
  {
    question:
      "L’agence peut-elle m’aider à augmenter mes revenus sur OnlyFans ?",
    answer:
      "Absolument ! Nous identifions des stratégies pour optimiser votre compte et augmenter vos revenus.",
  },
];
