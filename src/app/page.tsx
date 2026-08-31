import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Agence de Marketing Digital Beauté & Cosmétique | CRIMSAI",
  description: "CRIMSAI accompagne les marques cosmétiques, instituts et salons de beauté (France, Canada) dans leur stratégie de visibilité, conversion et fidélisation.",
};

export default function Page() {
  const faqs = [
    {
      q: "Pourquoi CRIMSAI travaille uniquement avec le secteur de la beauté ?",
      a: "Parce que les salons, spas et marques cosmétiques partagent des problématiques uniques d'acquisition et de marge. En nous concentrant sur ce marché, nous n'avons pas besoin de deviner ce qui fonctionne. Nous connaissons les comportements d'achat de vos clients, de la découverte initiale jusqu'à la réservation finale ou l'achat produit.",
    },
    {
      q: "Mon entreprise est en France ou au Canada, comment gérez-vous l'accompagnement ?",
      a: "L'intégralité de nos processus est pensée pour le digital. Nous collaborons de manière asynchrone pour les validations et adaptons nos points de synchronisation à votre fuseau horaire. Que vous soyez à Paris ou à Montréal, l'exécution stratégique et les livrables restent identiques.",
    },
    {
      q: "Devons-nous modifier tous nos outils actuels pour travailler avec vous ?",
      a: "Non. Nous commençons par auditer ce qui existe déjà. Si votre site web ou vos réseaux sociaux génèrent des résultats, nous les optimisons. Nous ne remplaçons un outil ou une méthode que s'ils bloquent concrètement votre conversion ou votre fidélisation.",
    },
    {
      q: "Proposez-vous des prestations à la carte (ex: juste des posts Instagram) ?",
      a: "Non. Le marketing ne fonctionne pas en morceaux isolés. Publier sur les réseaux sociaux ne sert à rien si votre site web ne convertit pas les visiteurs en clients. Nous fonctionnons avec des offres globales qui traitent les quatre piliers fondamentaux : visibilité, confiance, conversion et fidélisation.",
    },
    {
      q: "En combien de temps peut-on espérer un retour sur investissement (ROI) ?",
      a: "Cela dépend du problème identifié. Corriger une friction technique sur un tunnel de réservation prend quelques jours et offre un impact immédiat. Construire une stratégie de visibilité organique (SEO) ou structurer une nouvelle ligne éditoriale prend plusieurs mois. Un calendrier précis est défini lors de notre audit initial.",
    },
    {
      q: "Garantissez-vous un nombre exact de nouveaux clients ou de ventes ?",
      a: "Non, et aucune agence sérieuse ne le fait. Nous garantissons l'implantation d'un système d'acquisition et de fidélisation mathématique et optimisé. Nous nous basons sur l'analyse de vos données pour activer les leviers les plus rentables, pas sur des promesses irréalistes.",
    },
    {
      q: "Que se passe-t-il concrètement lors de l'appel découverte gratuit ?",
      a: "Cet appel de 30 minutes n'est pas un argumentaire de vente. Vous nous expliquez ce qui bloque votre croissance aujourd'hui. Nous posons un diagnostic de votre situation. Si notre méthode correspond à vos besoins, nous vous présenterons la marche à suivre. Dans le cas contraire, nous vous orientons.",
    },
  ];

  return (
    <div className="flex-grow flex flex-col bg-ivory">
      {/* Scroll 01: Hero Section (Preset A) */}
      <section className="relative min-h-[85vh] lg:min-h-[760px] flex items-center py-20 lg:py-28 overflow-hidden bg-ivory">
        {/* Background Image spanning the entire section */}
        <div className="absolute inset-0 z-0 pointer-events-none select-none">
          <Image
            src="/home_bg.jpeg"
            alt="CrimsAI decorative background"
            fill
            className="object-contain object-right"
            priority
          />
        </div>

        {/* Content Container - 60/40 Split */}
        <div className="relative z-10 container mx-auto px-6 lg:px-20 w-full">
          <div className="w-full lg:w-3/5 max-w-3xl flex flex-col items-start text-left">
            <ScrollReveal delay={0.1}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                {"Partenaire de croissance des entreprises de beauté"}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.2} y={30}>
              <h1 className="text-[clamp(40px,5vw,68px)] font-display font-normal leading-[1.05] tracking-[-0.01em] text-encre mb-6">
                {"Transformez vos actions en système de croissance."}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <p className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary mb-8 max-w-[65ch]">
                {"CRIMSAI structure la visibilité, la conversion et la fidélisation des marques cosmétiques et salons de beauté. Nous identifions vos blocages d'acquisition pour n'activer que les leviers rentables."}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <div className="flex flex-col items-start">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-4 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 active:scale-98 font-sans"
                >
                  {"Réserver un audit de croissance"}
                </Link>
                <span className="text-[13px] md:text-[14px] font-normal font-sans text-text-secondary mt-3">
                  {"30 min - Sans engagement"}
                </span>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 02: Le Problème (Preset C - Beige background) */}
      <section className="bg-beige-surface py-24 border-y border-bordure">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <h2 className="text-[clamp(34px,4vw,48px)] font-display font-normal leading-[1.1] tracking-[-0.005em] text-encre mb-8">
                {"Vous faites déjà beaucoup. Mais est-ce rentable ?"}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary space-y-6">
                <p className="text-[18px] font-medium italic font-sans leading-[1.5] text-crimson-deep max-w-[55ch]">
                  {"Vous publiez sur les réseaux. Vous lancez des campagnes. Vous cherchez de nouvelles clientes."}
                </p>
                <p className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary max-w-[65ch]">
                  {"Le problème n'est pas de faire plus. C'est de faire fonctionner ce qui existe déjà."}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 03: Notre Méthode (Preset A - Ivory background) */}
      <section className="bg-ivory py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <h2 className="text-[clamp(34px,4vw,48px)] font-display font-normal leading-[1.1] tracking-[-0.005em] text-encre mb-6">
                {"Quatre enjeux. Une croissance structurée."}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary max-w-[65ch] mb-8">
                {"Le marketing beauté ne se vit pas en morceaux. Chaque étape influence la suivante."}
              </p>
            </ScrollReveal>
          </div>

          {/* 4 pillars grid */}
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                      {"01 — Visibilité"}
                    </span>
                    <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                      {"Être découvert par les bonnes personnes."}
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                      {"02 — Confiance"}
                    </span>
                    <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                      {"Démontrer votre expertise métier."}
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                      {"03 — Conversion"}
                    </span>
                    <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                      {"Transformer un visiteur en client payant."}
                    </p>
                  </div>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                      {"04 — Fidélisation"}
                    </span>
                    <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                      {"Automatiser le retour de vos clients."}
                    </p>
                  </div>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <Link
              href="/notre-approche"
              className="inline-flex items-center justify-center px-8 py-3 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase border border-encre text-encre bg-transparent hover:bg-encre hover:text-blanc-chaud transition-all duration-300 active:scale-98 font-sans"
            >
              {"Découvrir notre méthode"}
            </Link>
          </ScrollReveal>
        </div>
      </section>

      {/* Scroll 04: FAQ & Réassurance (Preset C - Beige background) */}
      <section className="bg-beige-surface py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <h2 className="text-[clamp(34px,4vw,48px)] font-display font-normal leading-[1.1] tracking-[-0.005em] text-encre mb-8">
                {"Ce que l'on nous demande avant un audit."}
              </h2>
            </ScrollReveal>
          </div>

          <div className="max-w-4xl">
            <StaggerContainer>
              {faqs.map((faq, index) => (
                <StaggerItem key={index}>
                  <details className="group border-b border-bordure py-6 [&_summary::-webkit-details-marker]:hidden">
                    <summary className="flex justify-between items-center font-sans font-semibold text-[16px] text-encre cursor-pointer list-none select-none">
                      <span>{faq.q}</span>
                      <span className="text-crimson font-light text-2xl transition-transform duration-300 group-open:rotate-45">+</span>
                    </summary>
                    <div className="mt-4 text-[14px] font-sans font-normal leading-[1.6] text-text-secondary max-w-[75ch]">
                      {faq.a}
                    </div>
                  </details>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </div>
      </section>

      {/* Bandeau / Signature Section (Preset B - Crimson background) */}
      <section className="bg-crimson py-20 text-center text-blanc-chaud relative overflow-hidden">
        {/* Subtle decorative elements for the Preset B section to satisfy the 10% accent rule */}
        <div className="absolute inset-0 opacity-10 flex items-center justify-center pointer-events-none">
          <div className="w-96 h-96 rounded-full border border-crimson-soft"></div>
        </div>
        <div className="container mx-auto px-6 lg:px-20 max-w-4xl relative z-10">
          <ScrollReveal>
            <p className="text-[clamp(28px,4vw,48px)] font-display font-normal leading-[1.1] tracking-[-0.005em] mb-4">
              {"Il ne faut pas attendre d'être une grande marque pour structurer sa croissance comme telle."}
            </p>
            <div className="w-12 h-[1px] bg-crimson-soft mx-auto mt-6"></div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
