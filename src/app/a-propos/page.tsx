"use client";

import Link from "next/link";
import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";

const values = [
  { title: "Écoute", desc: "Nous prenons le temps de comprendre votre contexte." },
  { title: "Lucidité", desc: "Nous analysons la réalité telle qu'elle est." },
  { title: "Accessibilité", desc: "Nous rendons les sujets complexes compréhensibles." },
  { title: "Audace", desc: "Nous osons remettre en question ce qui ne fonctionne plus." },
  { title: "Confiance", desc: "Nous assurons une transparence totale sur les décisions et les résultats." },
];

const faqs = [
  { q: "Avec qui travaillez-vous ?", a: "Nous accompagnons les entreprises de l'univers de la beauté (marques cosmétiques, spas, cliniques esthétiques, salons) qui souhaitent structurer leur croissance." },
  { q: "Travaillez-vous à distance ?", a: "Oui. Notre modèle est entièrement pensé pour accompagner des clients à distance, principalement situés en Europe et au Canada." },
  { q: "Êtes-vous une agence de réseaux sociaux ?", a: "Non. Les réseaux sociaux constituent un levier stratégique, mais la production de contenu isolée n'est pas notre cœur de métier. Nous sommes un partenaire de croissance qui connecte l'ensemble de votre parcours client." },
  { q: "Créez-vous des sites internet ?", a: "Oui. Nous disposons d'un développeur web en interne. La création, la refonte ou l'optimisation de votre site internet font partie intégrante de notre capacité d'exécution." },
  { q: "Comment vos offres sont-elles structurées ?", a: "Nous proposons trois niveaux d'accompagnement mensuels (Growth, Système, Premium). L'offre est déterminée après le diagnostic de votre situation." },
  { q: "Faut-il un budget minimum pour collaborer ?", a: "Lors de l'appel découverte, nous évaluons votre capacité d'investissement au regard de vos objectifs. Si le budget n'est pas en adéquation avec la stratégie nécessaire, nous vous en informons avec lucidité." },
  { q: "Où en sera mon projet au quotidien ?", a: "Nos clients bénéficient d'un accès sécurisé à notre Client Hub. Cette plateforme centralise les validations, l'avancement des tâches, les livrables et la facturation en temps réel." },
  { q: "Comment mesurez-vous les résultats ?", a: "Les indicateurs de performance dépendent de l'objectif fixé : volume de prospects qualifiés, taux de conversion, fidélisation ou chiffre d'affaires généré. Nous ne nous contentons pas des \"likes\" si l'objectif est la vente." },
  { q: "Qu'est-ce que la croissance connectée ?", a: "C'est le fait d'aligner votre contenu, vos publicités, votre site web et vos outils de relance vers un objectif commun. C'est s'assurer qu'un visiteur attiré ne soit pas perdu à cause d'une mauvaise expérience client." },
  { q: "À quoi sert l'appel découverte ?", a: "Il s'agit d'un échange gratuit de 30 minutes. Il nous permet de faire connaissance, d'analyser vos blocages actuels et de valider si notre approche correspond à vos ambitions." },
];

export default function Page() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="flex-1 flex flex-col bg-ivory">
      {/* Scroll 1: Mission */}
      <section className="py-20 md:py-28 border-b border-bordure/30">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-crimson mb-4 inline-block">
                Notre Mission
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] text-encre tracking-tighter mb-8">
                Construire la croissance, pas seulement la communication.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <div className="space-y-6 text-base md:text-lg text-text-secondary leading-relaxed">
                <p>
                  CRIMSAI est née d&apos;une conviction centrale : les systèmes de croissance ne sont pas réservés aux grandes entreprises. 
                  Ils peuvent être construits progressivement, selon la maturité de chaque acteur.
                </p>
                <p className="border-l border-crimson/30 pl-4 italic text-crimson-deep">
                  Notre mission est de rendre la stratégie, la technologie et l&apos;automatisation accessibles aux entreprises de l&apos;univers de la beauté.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 2: Values */}
      <section className="bg-blanc-chaud py-24 border-b border-bordure/30">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Title / Info Column */}
            <div className="lg:col-span-5">
              <ScrollReveal>
                <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-text-secondary mb-4 inline-block">
                  Nos Piliers
                </span>
              </ScrollReveal>
              <ScrollReveal delay={0.1}>
                <h2 className="text-3xl md:text-4xl font-display text-encre tracking-tight mb-6">
                  Une équipe experte, des valeurs assumées.
                </h2>
              </ScrollReveal>
              <ScrollReveal delay={0.2}>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed">
                  Dirigée par son fondateur, l&apos;approche CRIMSAI regroupe en interne les compétences essentielles à votre développement : 
                  direction marketing, gestion de contenu, développement web et ingénierie en automatisation.
                </p>
                <p className="text-sm md:text-base text-text-secondary leading-relaxed mt-4 font-semibold text-encre">
                  Nous basons nos relations de partenariat sur cinq piliers :
                </p>
              </ScrollReveal>
            </div>

            {/* Values Column */}
            <div className="lg:col-span-7">
              <StaggerContainer>
                <div className="space-y-6">
                  {values.map((val, idx) => (
                    <StaggerItem key={idx}>
                      <div className="bg-ivory border border-bordure/40 rounded-xl p-5 hover:border-crimson/30 transition-all duration-300">
                        <h3 className="text-base font-semibold text-crimson mb-2 flex items-center gap-2">
                          <span className="text-xs font-mono opacity-60">0{idx + 1}</span>
                          {val.title}
                        </h3>
                        <p className="text-sm text-text-secondary leading-relaxed">
                          {val.desc}
                        </p>
                      </div>
                    </StaggerItem>
                  ))}
                </div>
              </StaggerContainer>
            </div>

          </div>
        </div>
      </section>

      {/* Scroll 3: FAQ */}
      <section className="py-24 bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="max-w-3xl mb-16">
            <ScrollReveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-crimson mb-4 inline-block">
                FAQ
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display text-encre tracking-tight mb-4">
                Questions fréquentes.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base text-text-secondary">
                Trouvez les réponses sur notre accompagnement et nos services.
              </p>
            </ScrollReveal>
          </div>

          <div className="max-w-4xl space-y-4">
            {faqs.map((faq, idx) => {
              const isOpen = openIndex === idx;
              return (
                <ScrollReveal key={idx} delay={idx * 0.03}>
                  <div className="border border-bordure/60 rounded-xl overflow-hidden bg-blanc-chaud hover:border-crimson/25 transition-all duration-300">
                    <button
                      onClick={() => toggleFaq(idx)}
                      className="w-full flex items-center justify-between p-5 text-left font-semibold text-sm md:text-base text-encre focus:outline-none"
                    >
                      <span>{faq.q}</span>
                      <span className="text-crimson font-mono ml-4 text-xs">
                        {isOpen ? "—" : "+"}
                      </span>
                    </button>
                    <AnimatePresence initial={false}>
                      {isOpen && (
                        <motion.div
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                        >
                          <div className="px-5 pb-5 pt-1 text-xs md:text-sm text-text-secondary leading-relaxed border-t border-bordure/30">
                            {faq.a}
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </ScrollReveal>
              );
            })}
          </div>

          <div className="mt-16 text-center">
            <ScrollReveal>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 active:scale-98"
              >
                Réserver un appel découverte
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
