import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";

export default function Page() {
  return (
    <div className="flex-grow flex flex-col bg-ivory">
      {/* Scroll 1: Hero Section (Le Déclic) */}
      <section className="relative pt-20 lg:pt-32 pb-20 lg:pb-32 overflow-hidden bg-ivory">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <Image
            src="/home_bg.jpeg"
            alt="CrimsAI decorative background"
            fill
            className="object-cover object-right-bottom select-none pointer-events-none"
            priority
          />
        </div>

        {/* Content Container */}
        <div className="relative z-10 container mx-auto px-6 lg:px-20 w-full">
          <div className="max-w-3xl flex flex-col items-start text-left">
            <ScrollReveal delay={0.1}>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                Partenaire de croissance des entreprises de beauté
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} y={30}>
              <h1 className="text-[clamp(44px,6vw,72px)] font-display font-normal leading-[1.05] tracking-[-0.01em] text-encre mb-6">
                Il ne faut pas attendre d’être une grande marque pour penser comme telle.
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <div className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary mb-8 space-y-4">
                <p>
                  Votre visibilité peut être bonne.<br />
                  Votre site peut être beau.<br />
                  Votre contenu peut être régulier.
                </p>
                <p>
                  Mais si chaque action travaille de son côté, votre croissance finit par ralentir.
                </p>
                <p>
                  CRIMSAI connecte ce qui existe déjà pour transformer vos actions marketing en un véritable système de croissance.
                </p>
              </div>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 active:scale-98 font-sans"
              >
                Parlons de votre croissance →
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 2: La Signature */}
      <section className="bg-blanc-chaud border-y border-bordure py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <h2 className="text-[clamp(34px,4vw,48px)] font-display font-normal leading-[1.1] tracking-[-0.005em] text-encre mb-8">
                ATTIRER → CONVERTIR → FIDÉLISER
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <div className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary mb-8 space-y-4">
                <p>Une croissance saine ne repose pas sur une seule action.</p>
                <p>
                  Elle commence par attirer les bonnes personnes.<br />
                  Elle continue en transformant leur intérêt en décision.<br />
                  Elle se renforce lorsqu’elles ont envie de revenir.
                </p>
                <p className="font-semibold text-encre">
                  Notre rôle : faire en sorte que chaque étape prépare la suivante.
                </p>
              </div>
            </ScrollReveal>
          </div>

          {/* Three pillars grid */}
          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    Visibilité
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Être vu par les bonnes personnes.
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    Acquisition
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Transformer l’intérêt en opportunité.
                  </p>
                </div>
              </StaggerItem>
              
              <StaggerItem>
                <div className="bg-ivory border border-bordure rounded-[12px] p-6 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                  <h3 className="text-[20px] font-semibold font-sans leading-[1.3] text-crimson mb-4">
                    Fidélisation
                  </h3>
                  <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                    Créer les raisons de revenir.
                  </p>
                </div>
              </StaggerItem>
            </div>
          </StaggerContainer>

          {/* Editorial Italic Hook */}
          <ScrollReveal delay={0.2}>
            <div className="p-6 border-l border-crimson bg-beige-surface/30 rounded-r-[12px]">
              <p className="text-[18px] font-medium italic font-sans leading-[1.5] text-crimson-deep">
                Le problème n’est pas toujours ce que vous faites.<br />
                C’est ce qui ne se connecte pas.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </section>

      {/* Scroll 3: Le Visage */}
      <section className="bg-ivory py-24">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          {/* Left Column: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <ScrollReveal>
              <h2 className="text-[clamp(34px,4vw,48px)] font-display font-normal leading-[1.1] tracking-[-0.005em] text-encre mb-6">
                Derrière CRIMSAI, une conviction.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary mb-8 space-y-4 max-w-[65ch]">
                <p>La beauté n’a pas besoin de faire plus de bruit.</p>
                <p>
                  Elle mérite des stratégies qui comprennent réellement son marché, ses clients et ses enjeux de croissance.
                </p>
                <p>
                  CRIMSAI est née de cette conviction : une marque n’a pas besoin de multiplier ses actions pour grandir. Elle doit savoir lesquelles connecter.
                </p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-[16px] font-semibold font-sans text-encre mb-8 space-y-2">
                <p>Une agence pensée pour les entreprises de beauté.</p>
                <p>Une approche pensée pour leur croissance.</p>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <Link
                href="/a-propos"
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase border border-encre text-encre bg-transparent hover:bg-encre hover:text-blanc-chaud transition-all duration-300 active:scale-98 font-sans"
              >
                Découvrir CRIMSAI →
              </Link>
            </ScrollReveal>
          </div>

          {/* Right Column: Founder Photo */}
          <div className="lg:col-span-5 flex justify-center w-full">
            <div className="w-full max-w-[400px]">
              <ScrollReveal delay={0.2} y={30}>
                <div className="relative w-full aspect-[4/5] hover:shadow-2 transition-all duration-500 rounded-2xl overflow-hidden border border-bordure">
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
          </div>
        </div>
      </section>
    </div>
  );
}
