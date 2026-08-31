import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";

export const metadata: Metadata = {
  title: "À propos de CRIMSAI | L'agence des entreprises de la beauté",
  description: "Découvrez notre histoire, notre fondatrice et nos principes d'exécution pour structurer la croissance des marques de beauté.",
};

export default function Page() {
  const principles = [
    {
      title: "Lucides",
      desc: "Analyser les données, pas les suppositions.",
    },
    {
      title: "Directs",
      desc: "Rendre le marketing compréhensible, sans jargon.",
    },
    {
      title: "Responsables",
      desc: "Ne vendre que les leviers qui ont un impact direct sur vos objectifs.",
    },
  ];

  return (
    <div className="flex-grow flex flex-col bg-ivory">
      {/* Scroll 01: L'histoire (Preset A - Ivory background) */}
      <section className="bg-ivory py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                {"L'HISTOIRE"}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[36px] font-display font-normal leading-[1.15] tracking-[-0.005em] text-encre mb-6">
                {"Structurer la croissance des entreprises de la beauté dès le premier jour."}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary max-w-[65ch]">
                {"Les entreprises cosmétiques et les salons n'ont pas besoin de multiplier les actions pour grandir. Ils ont besoin de savoir ce qui bloque. C'est pour cela que CRIMSAI existe."}
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 02: La Fondatrice (Preset C - Beige background) */}
      <section className="bg-beige-surface py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Photo */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ScrollReveal delay={0.1}>
              <div className="relative w-full aspect-[4/5] max-w-[400px] hover:shadow-2 transition-all duration-500 rounded-2xl overflow-hidden border border-bordure bg-ivory">
                <Image
                  src="/founder.jpg"
                  alt="Fondatrice de CrimsAI"
                  fill
                  className="object-cover"
                  sizes="(max-w-[768px]) 100vw, 400px"
                  priority
                />
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Name & Quote */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <ScrollReveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                {"LA FONDATRICE"}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h2 className="text-[28px] font-display font-normal leading-[1.2] tracking-normal text-encre mb-6">
                {"Nom - Fondatrice de CRIMSAI"}
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="pl-6 border-l border-crimson py-4 bg-ivory/50 rounded-r-[12px] max-w-[65ch]">
                <p className="text-[18px] font-medium italic font-sans leading-[1.5] text-crimson-deep">
                  {"\"Une entreprise de beauté peut structurer sa croissance bien avant d'avoir une grande équipe ou de gros moyens. Ce qui compte, c'est l'exigence dans la réflexion et l'honnêteté dans les recommandations.\""}
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 03: Notre cadre de travail (Preset A - Ivory background) */}
      <section className="bg-ivory py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <h2 className="text-[28px] font-display font-normal leading-[1.2] tracking-normal text-encre mb-8">
                {"Nos principes d'exécution"}
              </h2>
            </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              {principles.map((p, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-8 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                        {p.title}
                      </h3>
                      <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                        {p.desc}
                      </p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-4 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 active:scale-98 font-sans"
            >
              {"Réserver un échange avec la fondatrice"}
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
