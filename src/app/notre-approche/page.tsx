import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";

export default function Page() {
  return (
    <div className="flex-grow flex flex-col bg-ivory">
      {/* Scroll 1: Notre approche */}
      <section className="bg-ivory py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                NOTRE APPROCHE
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[36px] font-display font-normal leading-[1.15] tracking-[-0.005em] text-encre mb-8">
                On ne commence pas par produire. On commence par comprendre.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary space-y-6 mb-12">
                <p>
                  Avant de proposer du contenu, une campagne ou un outil, nous cherchons à comprendre :
                </p>
                <ul className="pl-6 list-disc space-y-2 text-encre">
                  <li>où vous voulez aller,</li>
                  <li>ce qui fonctionne déjà,</li>
                  <li>ce qui bloque,</li>
                  <li>et ce qui mérite réellement d’être amélioré.</li>
                </ul>
                <p>
                  Puis nous construisons les connexions nécessaires autour de votre objectif.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Steps Grid */}
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col">
                  <span className="text-[14px] font-semibold text-crimson mb-4 font-sans">01 — Comprendre</span>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Votre entreprise, votre marché, vos clients et vos priorités.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col">
                  <span className="text-[14px] font-semibold text-crimson mb-4 font-sans">02 — Identifier</span>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Les blocages et les opportunités dans votre parcours de croissance.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col">
                  <span className="text-[14px] font-semibold text-crimson mb-4 font-sans">03 — Connecter</span>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Les actions, canaux et outils qui doivent travailler ensemble.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col">
                  <span className="text-[14px] font-semibold text-crimson mb-4 font-sans">04 — Faire évoluer</span>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Mesurer, apprendre et améliorer le système dans le temps.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Scroll 2: Nos domaines d'intervention */}
      <section className="bg-blanc-chaud py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <h2 className="text-[28px] font-display font-normal leading-[1.2] tracking-normal text-encre mb-8">
                Ce que nous pouvons connecter.
              </h2>
            </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    VISIBILITÉ
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Stratégie de contenu, présence digitale et positionnement.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    ACQUISITION
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Parcours, campagnes, offres et dispositifs de conversion.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    EXPÉRIENCE CLIENT
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Points de contact, parcours et expérience digitale.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    FIDÉLISATION
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Automatisation, relation client et dispositifs de rétention.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    DIGITAL
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Site web, outils et écosystème digital.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    AUTOMATISATION
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Des systèmes qui permettent à certaines actions de continuer à travailler sans intervention constante.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>

          {/* Editorial Italic Hook */}
          <ScrollReveal delay={0.2}>
            <div className="p-6 border-l border-crimson bg-beige-surface/30 rounded-r-[12px]">
              <p className="text-[18px] font-medium italic font-sans leading-[1.5] text-crimson-deep">
                Nous ne vendons pas des actions séparées.<br />
                Nous construisons leur cohérence.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scroll 3: La Collaboration */}
      <section className="bg-ivory py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <h2 className="text-[28px] font-display font-normal leading-[1.2] tracking-normal text-encre mb-8">
                Une stratégie qui doit vivre avec votre entreprise.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary space-y-6 mb-12">
                <p>
                  Chaque collaboration commence par un diagnostic de votre situation.
                </p>
                <p>
                  Ensuite, nous définissons les priorités, construisons les actions nécessaires et suivons leur évolution.
                </p>
                
                <div className="pl-6 border-l border-bordure space-y-2 text-encre font-medium">
                  <p>Pas de solution copiée-collée.</p>
                  <p>Pas de stratégie pour remplir un document.</p>
                  <p>Pas d’action sans objectif.</p>
                </div>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 active:scale-98 font-sans"
              >
                Parlons de votre projet →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
