import Link from "next/link";
import Image from "next/image";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";

export default function Page() {
  return (
    <div className="flex-1 flex flex-col">
      {/* Scroll 1: Hero Section */}
      <section className="relative min-h-[90dvh] flex items-center pt-12 pb-24 overflow-hidden bg-ivory">
        <div className="max-w-7xl mx-auto px-6 md:px-20 w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          
          {/* Left Column: Text Content */}
          <div className="lg:col-span-7 flex flex-col items-start text-left z-10">
            <ScrollReveal delay={0.1}>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-crimson mb-4 inline-block">
                Partenaire de Croissance Beauté
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2} y={30}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] text-encre tracking-tighter mb-6 max-w-2xl">
                Il ne faut pas attendre d&apos;être une grande marque pour penser comme telle.
              </h1>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-[55ch]">
                Nous aidons les entreprises de l&apos;univers de la beauté à structurer leur croissance. 
                Nous connectons votre visibilité, votre acquisition et votre fidélisation au sein d&apos;un parcours client cohérent.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.4}>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 active:scale-98"
                >
                  Réserver un appel découverte
                </Link>
                <span className="text-xs text-text-secondary font-medium italic mt-2 sm:mt-0">
                  (30 min · Gratuit · Sans engagement)
                </span>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right Column: Abstract Stitch Illustration */}
          <div className="lg:col-span-5 flex justify-center lg:justify-end z-10">
            <ScrollReveal delay={0.3} y={40}>
              <div className="relative w-[320px] h-[320px] md:w-[400px] md:h-[400px] bg-blanc-chaud rounded-2xl border border-bordure shadow-1 p-6 md:p-8 hover:shadow-2 transition-all duration-500">
                <div className="absolute top-4 left-4 text-[9px] font-mono tracking-widest uppercase text-text-secondary opacity-60">
                  Stitch Asset // Fig. 01
                </div>
                <div className="relative w-full h-full">
                  <Image
                    src="/growth.svg"
                    alt="CrimsAI growth minimalist line-art illustration"
                    fill
                    className="object-contain"
                    priority
                  />
                </div>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 2: Problem Statement */}
      <section className="bg-blanc-chaud border-y border-bordure/50 py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-text-secondary mb-4 inline-block">
                Le Constat
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display text-encre tracking-tight mb-8">
                Vos actions marketing existent, mais travaillent-elles ensemble ?
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <div className="border-l border-crimson/30 pl-6 md:pl-8 py-2">
                <p className="text-lg md:text-xl font-medium text-crimson mb-6 leading-relaxed">
                  Le problème n&apos;est pas le manque d&apos;actions. C&apos;est leur déconnexion.
                </p>
                <p className="text-base text-text-secondary leading-relaxed max-w-[65ch]">
                  Une entreprise beauté peut posséder un site internet, des campagnes publicitaires, 
                  des réseaux sociaux actifs et des outils digitaux, et pourtant faire face à un parcours client fragmenté. 
                  Publier davantage ou lancer de nouvelles campagnes ne suffit pas toujours à résoudre ce problème.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 3: Solution/Connection */}
      <section className="bg-ivory py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-center">
          {/* Left Side: Editorial Banner */}
          <div className="lg:col-span-5">
            <ScrollReveal>
              <div className="border border-dashed border-crimson/40 rounded-2xl p-8 bg-beige-surface/30">
                <div className="w-12 h-12 rounded-full bg-crimson-tint flex items-center justify-center text-crimson font-display mb-6">
                  ✨
                </div>
                <h3 className="text-xl font-semibold text-encre mb-4 font-sans">
                  Notre Approche Connectée
                </h3>
                <p className="text-sm text-text-secondary leading-relaxed">
                  Nous alignons chaque point de contact pour créer un écosystème qui convertit la curiosité en fidélité durable.
                </p>
              </div>
            </ScrollReveal>
          </div>
          
          {/* Right Side: Text & CTA */}
          <div className="lg:col-span-7 flex flex-col items-start">
            <ScrollReveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-crimson mb-4 inline-block">
                La Solution
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display text-encre tracking-tight mb-6">
                La connexion est notre spécialisation.
              </h2>
            </ScrollReveal>
            
            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-[55ch]">
                Nous sommes le partenaire de croissance des professionnels de la beauté. 
                Nous n&apos;appliquons pas automatiquement la même solution à chaque entreprise. 
                Nous identifions vos blocages réels et relions les expertises stratégiques, digitales et commerciales autour d&apos;un objectif d&apos;entreprise clair.
              </p>
            </ScrollReveal>
            
            <ScrollReveal delay={0.3}>
              <Link
                href="/notre-approche"
                className="inline-flex items-center justify-center px-6 py-3 rounded-full text-xs font-semibold tracking-wider uppercase border border-encre text-encre bg-transparent hover:bg-encre hover:text-blanc-chaud transition-all duration-300 active:scale-98"
              >
                Découvrir notre approche
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
