import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";

export default function Page() {
  return (
    <div className="flex-grow flex flex-col bg-ivory">
      {/* Scroll 1: L'identité */}
      <section className="bg-ivory py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                QUI EST CRIMSAI ?
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[36px] font-display font-normal leading-[1.15] tracking-[-0.005em] text-encre mb-8">
                Une agence qui pense au-delà du marketing.
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary space-y-6">
                <p>
                  CRIMSAI accompagne les entreprises de beauté qui veulent construire une croissance plus cohérente, plus durable et plus maîtrisée.
                </p>
                <p>
                  Nous ne considérons pas le marketing comme une succession d’actions.
                </p>
                <p className="font-semibold text-encre">
                  Nous regardons ce qui se passe entre elles.
                </p>
                <div className="pl-6 border-l border-bordure space-y-2">
                  <p>Entre votre contenu et votre offre.</p>
                  <p>Entre votre visibilité et votre acquisition.</p>
                  <p>Entre votre premier achat et le suivant.</p>
                </div>
                <p className="font-semibold text-crimson">
                  C’est là que se trouvent souvent les opportunités de croissance.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 2: La Fondatrice */}
      <section className="bg-blanc-chaud py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Image Placeholder */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <ScrollReveal delay={0.1}>
              <div className="relative w-full aspect-[4/5] max-w-[400px] bg-beige-surface border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-500 flex flex-col justify-between items-center text-center">
                <div className="w-full text-left text-[10px] font-semibold uppercase tracking-[0.06em] text-text-secondary">
                  [Photo éditoriale de la fondatrice]
                </div>
                
                <div className="my-auto flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-crimson/10 flex items-center justify-center text-crimson mb-4 text-xl">
                    ✍️
                  </div>
                  <p className="text-[14px] font-medium font-sans italic text-crimson-deep max-w-[200px]">
                    Direction Artistique
                  </p>
                </div>

                <div className="w-full text-right text-[10px] font-semibold uppercase tracking-[0.06em] text-text-secondary">
                  Editorial Portrait
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <ScrollReveal>
              <h2 className="text-[28px] font-display font-normal leading-[1.2] tracking-normal text-encre mb-6">
                Derrière CRIMSAI, une conviction.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary space-y-6 max-w-[65ch]">
                <p className="font-semibold text-encre">
                  Je suis [Prénom], cofondatrice de CRIMSAI.
                </p>
                <p>
                  J’ai créé CRIMSAI avec une idée simple :
                </p>
                
                {/* Indented Blockquote */}
                <div className="pl-6 border-l border-crimson py-2 bg-ivory/50 rounded-r-[12px]">
                  <p className="text-[18px] font-medium italic font-sans leading-[1.5] text-crimson-deep">
                    Les entreprises de beauté n’ont pas toujours besoin de faire plus. Elles ont besoin de mieux connecter ce qu’elles font déjà.
                  </p>
                </div>

                <p>
                  Le contenu, le digital, l’acquisition, l’expérience client et la fidélisation ne devraient pas avancer séparément.
                </p>
                <p>
                  Ils devraient raconter la même histoire et servir le même objectif.
                </p>
                <p className="font-semibold text-encre">
                  Faire grandir une entreprise, pas simplement remplir un calendrier marketing.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 3: La Personnalité */}
      <section className="bg-ivory py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <h2 className="text-[28px] font-display font-normal leading-[1.2] tracking-normal text-encre mb-8">
                Notre manière de penser.
              </h2>
            </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    Curieuse.
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Nous cherchons à comprendre avant de proposer.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    Exigeante.
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Nous privilégions ce qui a une vraie utilité plutôt que ce qui fait simplement joli.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    Accessible.
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Une stratégie sophistiquée ne devrait jamais être incompréhensible.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    Franche.
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Nous préférons identifier ce qui bloque plutôt que multiplier les actions.
                  </p>
                </div>
              </StaggerItem>

              <StaggerItem>
                <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    Obsédée par la cohérence.
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Parce qu’une bonne action isolée reste une action isolée.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>

          <ScrollReveal delay={0.2}>
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center p-6 border-l border-crimson bg-beige-surface/30 rounded-r-[12px] gap-6">
              <p className="text-[18px] font-medium italic font-sans leading-[1.5] text-crimson-deep">
                La connexion est notre spécialisation.
              </p>
              <Link
                href="/notre-approche"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 active:scale-98 font-sans"
              >
                Découvrir notre approche →
              </Link>
            </div>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
