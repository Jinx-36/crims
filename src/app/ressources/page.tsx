import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";

export default function Page() {
  return (
    <div className="flex-grow flex flex-col bg-ivory">
      {/* Scroll 1: Introduction */}
      <section className="bg-ivory py-24 border-b border-bordure">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                RESSOURCES CRIMSAI
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[36px] font-display font-normal leading-[1.15] tracking-[-0.005em] text-encre mb-8">
                Penser la beauté autrement.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary mb-12 max-w-[65ch]">
                Des analyses, réflexions et ressources pour les dirigeants et équipes qui veulent comprendre ce qui se passe réellement derrière leur croissance.
              </p>
            </ScrollReveal>

            {/* Editorial Italic Hook */}
            <ScrollReveal delay={0.3}>
              <div className="p-6 border-l border-crimson bg-beige-surface/30 rounded-r-[12px]">
                <p className="text-[18px] font-medium italic font-sans leading-[1.5] text-crimson-deep">
                  Pas de contenu pour publier du contenu.<br />
                  Des idées pour mieux décider.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 2: Les Thématiques */}
      <section className="bg-blanc-chaud py-24 border-b border-bordure">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <h2 className="text-[28px] font-display font-normal leading-[1.2] tracking-normal text-encre mb-8">
                Ce qui mérite votre attention.
              </h2>
            </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    STRATÉGIE
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Positionnement, différenciation et décisions marketing.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    ACQUISITION
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Comprendre ce qui transforme réellement l’attention en opportunité.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    EXPÉRIENCE CLIENT
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Créer un parcours qui donne envie d’aller plus loin.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    FIDÉLISATION
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Transformer une première expérience en relation durable.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    DIGITAL & AUTOMATISATION
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Utiliser les outils pour simplifier, connecter et améliorer.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Scroll 3: Les dernières réflexions */}
      <section className="bg-ivory py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-24">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <h2 className="text-[28px] font-display font-normal leading-[1.2] tracking-normal text-encre mb-4">
                À lire avant de faire plus.
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <p className="text-[18px] font-medium italic font-sans leading-[1.5] text-crimson mb-12">
                Pourquoi votre contenu ne convertit pas malgré une belle visibilité
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-12">
              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-text-secondary mb-4 block">Article 01</span>
                  <p className="text-[16px] font-semibold font-sans text-encre leading-[1.4] mb-8">
                    5 signes que votre parcours client est fragmenté
                  </p>
                  <span className="text-[12px] font-semibold text-crimson">Lire la réflexion →</span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-text-secondary mb-4 block">Article 02</span>
                  <p className="text-[16px] font-semibold font-sans text-encre leading-[1.4] mb-8">
                    Ce qu’une entreprise de beauté devrait automatiser avant de publier davantage
                  </p>
                  <span className="text-[12px] font-semibold text-crimson">Lire la réflexion →</span>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <span className="text-[10px] font-semibold uppercase tracking-[0.06em] text-text-secondary mb-4 block">Article 03</span>
                  <p className="text-[16px] font-semibold font-sans text-encre leading-[1.4] mb-8">
                    Pourquoi fidéliser commence bien avant le deuxième achat
                  </p>
                  <span className="text-[12px] font-semibold text-crimson">Lire la réflexion →</span>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col sm:flex-row items-center gap-6">
              <Link
                href="/ressources"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase border border-encre text-encre bg-transparent hover:bg-encre hover:text-blanc-chaud transition-all duration-300 active:scale-98 font-sans w-full sm:w-auto"
              >
                Explorer toutes les ressources →
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 active:scale-98 font-sans w-full sm:w-auto text-center"
              >
                Recevoir les prochaines réflexions →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
