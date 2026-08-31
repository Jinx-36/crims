import type { Metadata } from "next";
import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";

export const metadata: Metadata = {
  title: "Stratégies et Insights Marketing Beauté | CRIMSAI",
  description: "Des analyses littérales et sans filtre sur l'acquisition, la conversion et la rétention client dans l'industrie de la beauté.",
};

export default function Page() {
  const articles = [
    {
      id: "visibilite-salon-de-beaute",
      title: "Pourquoi la visibilité ne suffit pas à faire grandir votre salon de beauté.",
      tag: "Visibilité & Croissance",
    },
    {
      id: "prospects-qualifies-conversions",
      title: "Prospects qualifiés mais peu de conversions : où chercher la faille.",
      tag: "Acquisition & Conversion",
    },
    {
      id: "fidelisation-client-crm",
      title: "Pourquoi vos clients ne reviennent pas (et comment le CRM peut changer ça).",
      tag: "Fidélisation & Rétention",
    },
    {
      id: "automatisation-marketing-cosmetique",
      title: "Faut-il automatiser son marketing quand on est une petite entreprise cosmétique ?",
      tag: "Digital & Automatisation",
    },
  ];

  return (
    <div className="flex-grow flex flex-col bg-ivory">
      {/* Scroll 01: Hero (Preset A - Ivory background) */}
      <section className="bg-ivory py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                {"INSIGHTS CRIMSAI"}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[clamp(36px,5vw,48px)] font-display font-normal leading-[1.1] tracking-[-0.005em] text-encre mb-6">
                {"Stratégies et insights marketing pour l'industrie de la beauté."}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary mb-8 max-w-[65ch]">
                {"Des analyses littérales et sans filtre sur l'acquisition, la conversion et la rétention client."}
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link
                href="#articles"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 active:scale-98 font-sans"
              >
                {"Lire nos analyses"}
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 02: Articles Section (Preset C - Beige background) */}
      <section id="articles" className="bg-beige-surface py-24 scroll-mt-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                {"ANALYSES OPTIMISÉES"}
              </span>
              <h2 className="text-[28px] font-display font-normal leading-[1.2] tracking-normal text-encre mb-6">
                {"Optimisé pour les réponses de recherche"}
              </h2>
            </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {articles.map((article, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-8 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-crimson mb-4 block font-sans">
                        {article.tag}
                      </span>
                      {/* Using H2 tag for article titles for SEO, styled to look like card headings */}
                      <h2 className="text-[20px] font-semibold font-sans leading-[1.4] text-encre mb-6">
                        {article.title}
                      </h2>
                    </div>
                    <div>
                      <span className="text-[12px] font-semibold text-crimson hover:text-crimson-deep transition-colors duration-300 font-sans inline-flex items-center gap-1 cursor-pointer">
                        {"Lire la réflexion →"}
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>
    </div>
  );
}
