import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Nos Expertises : Stratégie & Acquisition Marketing Beauté | CRIMSAI",
  description: "Découvrez nos expertises en stratégie, communication, digital, CRM et technologie pour les entreprises de la beauté.",
};

export default function Page() {
  const items = [
    {
      title: "Stratégie",
      desc: "Positionnement, définition des objectifs, plan d'acquisition.",
    },
    {
      title: "Communication",
      desc: "Ligne éditoriale, gestion des réseaux sociaux, campagnes publicitaires ciblées.",
    },
    {
      title: "Digital & Conversion",
      desc: "Refonte de parcours utilisateur, optimisation de sites web et landing pages.",
    },
    {
      title: "Relation client (CRM)",
      desc: "Automatisation des emails, séquences de fidélisation.",
    },
    {
      title: "Technologie",
      desc: "Intégration d'outils digitaux et automatisation des processus.",
    },
  ];

  return (
    <div className="flex-grow flex flex-col bg-ivory">
      {/* Scroll 01: Introduction (Preset A - Ivory background) */}
      <section className="bg-ivory py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                {"NOS EXPERTISES"}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[36px] font-display font-normal leading-[1.15] tracking-[-0.005em] text-encre mb-6">
                {"Stratégie marketing beauté : Les bons leviers commencent par le bon problème."}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-[18px] font-medium font-sans leading-[1.6] text-text-secondary max-w-[65ch]">
                {"Vous n'avez pas besoin de choisir une prestation à l'aveugle. CRIMSAI audite vos 4 piliers de croissance."}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 02: Les leviers d'action (Preset C - Beige background) */}
      <section className="bg-beige-surface py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <h2 className="text-[clamp(28px,4vw,48px)] font-display font-normal leading-[1.2] tracking-normal text-encre mb-6">
                {"Ce que nous activons pour votre entreprise"}
              </h2>
            </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              {items.map((item, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-8 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                        {item.title}
                      </h3>
                      <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                        {item.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Scroll 03: Phrase de conclusion & CTA (Preset B - Crimson background) */}
      <section className="bg-crimson py-20 text-center text-blanc-chaud relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full border border-crimson-soft"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl relative z-10">
          <ScrollReveal>
            <p className="text-[20px] font-medium italic font-sans leading-[1.5] text-crimson-tint mb-8 max-w-[65ch] mx-auto">
              {"Nous ne cherchons pas à tout faire. Nous cherchons à corriger ce qui bloque vos revenus."}
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase bg-blanc-chaud text-crimson hover:bg-ivory hover:text-crimson-deep transition-all duration-300 active:scale-98 font-sans"
            >
              {"Analyser votre situation actuelle"}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
