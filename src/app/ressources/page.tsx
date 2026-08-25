import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";

export const metadata = {
  title: "Blog & Ressources Marketing pour l'Univers de la Beauté | CRIMSAI",
  description: "Explorez les guides, méthodes et frameworks de CRIMSAI pour optimiser le marketing, la fidélisation et la conversion de votre entreprise beauté.",
};

const categories = [
  {
    title: "Stratégie",
    desc: "Diagnostics, parcours client et positionnement.",
    tag: "Méthodes",
    icon: "🎯"
  },
  {
    title: "Contenu & Visibilité",
    desc: "Stratégies multiplateformes et architecture éditoriale.",
    tag: "Réseaux Sociaux",
    icon: "✍️"
  },
  {
    title: "Acquisition & Conversion",
    desc: "Campagnes ciblées, parcours de conversion et pages de destination.",
    tag: "Tunnels de vente",
    icon: "📈"
  },
  {
    title: "Fidélisation",
    desc: "Expérience client, réactivation et programmes de rétention.",
    tag: "Rétention",
    icon: "❤️"
  },
  {
    title: "Automation / IA / Digital",
    desc: "Workflows de CRM, intégrations web et automatisation des processus.",
    tag: "Technologie",
    icon: "🤖"
  },
  {
    title: "Marketing Beauté",
    desc: "Tendances, habitudes de consommation et leviers de croissance spécifiques au marché.",
    tag: "Marché & Tendances",
    icon: "🧴"
  }
];

export default function Page() {
  return (
    <div className="flex-1 flex flex-col bg-ivory">
      {/* Title Section */}
      <section className="py-20 md:py-28 border-b border-bordure/30">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-crimson mb-4 inline-block">
                Partage de Connaissances
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] text-encre tracking-tighter mb-6">
                Ressources stratégiques.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed max-w-[65ch]">
                Méthodes, diagnostics et frameworks pour aider les entreprises de l&apos;univers de la beauté à connecter leurs actions et structurer leur croissance.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-24 bg-blanc-chaud">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <ScrollReveal>
            <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-text-secondary mb-12 inline-block">
              Catégories de contenu
            </span>
          </ScrollReveal>

          <StaggerContainer delay={0.05}>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {categories.map((cat, idx) => (
                <StaggerItem key={idx}>
                  <div className="group relative bg-ivory border border-bordure/50 hover:border-crimson/30 rounded-2xl p-8 flex flex-col justify-between h-full hover:shadow-2 transition-all duration-500">
                    <div>
                      <div className="flex justify-between items-start mb-6">
                        <span className="text-2xl">{cat.icon}</span>
                        <span className="text-[9px] font-mono tracking-widest uppercase text-text-secondary bg-beige-surface px-2.5 py-1 rounded">
                          {cat.tag}
                        </span>
                      </div>
                      <h3 className="text-lg font-semibold text-encre mb-3 group-hover:text-crimson transition-colors duration-300">
                        {cat.title}
                      </h3>
                      <p className="text-xs md:text-sm text-text-secondary leading-relaxed">
                        {cat.desc}
                      </p>
                    </div>

                    <div className="mt-8 pt-4 border-t border-bordure/40 flex items-center justify-between">
                      <span className="text-xs font-semibold text-crimson group-hover:underline">
                        Consulter les articles
                      </span>
                      <span className="text-xs font-mono text-text-secondary opacity-60">
                        →
                      </span>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Call to Action Block */}
      <section className="py-20 bg-ivory border-t border-bordure/30">
        <div className="max-w-7xl mx-auto px-6 md:px-20 text-center">
          <ScrollReveal>
            <h2 className="text-2xl md:text-3xl font-display text-encre mb-6">
              Besoin d&apos;un diagnostic personnalisé pour votre marque ?
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={0.1}>
            <p className="text-sm md:text-base text-text-secondary mb-8 max-w-xl mx-auto">
              Discutons de vos canaux d&apos;acquisition, de vos tunnels de conversion et de vos leviers de fidélisation.
            </p>
          </ScrollReveal>
          <ScrollReveal delay={0.2}>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 active:scale-98"
            >
              Réserver un appel découverte
            </Link>
          </ScrollReveal>
        </div>
      </section>
    </div>
  );
}
