import Link from "next/link";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";

export const metadata = {
  title: "Stratégie, Digital et Marketing Connecté pour la Beauté | CRIMSAI",
  description: "Découvrez les expertises CRIMSAI: stratégie, tunnel de vente, contenu, digital et automatisation. Un parcours client de l'onboarding au reporting.",
};

export default function Page() {
  const steps = [
    { title: "Appel découverte", desc: "Nous évaluons votre situation, vos objectifs et notre compatibilité." },
    { title: "Diagnostic & Proposition", desc: "Nous identifions le véritable problème et vous recommandons l'offre adaptée." },
    { title: "Signature & Onboarding", desc: "Vous accédez à notre Client Hub centralisé pour nous fournir les accès et informations nécessaires de manière sécurisée." },
    { title: "Stratégie & Production", desc: "Nous déployons les actions validées, visibles en temps réel sur la plateforme." },
    { title: "Suivi & Reporting", desc: "Nous mesurons l'impact des actions, rendons compte des résultats et optimisons le système en continu." },
  ];

  const expertises = [
    {
      title: "Stratégie",
      items: [
        "Diagnostic de l'existant.",
        "Positionnement et différenciation.",
        "Architecture du parcours client.",
        "Création de tunnel de vente.",
        "Définition des indicateurs de performance."
      ],
      italic: "La stratégie transforme vos données en décisions claires pour structurer chaque étape de votre croissance."
    },
    {
      title: "Contenu & Visibilité",
      items: [
        "Stratégie et ligne éditoriale.",
        "Gestion des réseaux sociaux.",
        "Création de contenu adapté aux plateformes.",
        "Community management et modération.",
        "Planification stratégique des publications."
      ],
      italic: "Chaque publication remplit une fonction précise dans votre écosystème pour attirer et rassurer votre audience."
    },
    {
      title: "Digital",
      items: [
        "Création de site web sur-mesure.",
        "Refonte et optimisation de sites existants.",
        "Développement de pages de destination (landing pages).",
        "Intégration des outils de tracking.",
        "Maintenance et évolutions techniques."
      ],
      italic: "Notre développement web interne soutient directement votre stratégie marketing sans dépendre d'intermédiaires externes."
    },
    {
      title: "Acquisition & Conversion",
      items: [
        "Création de campagnes publicitaires.",
        "Stratégies d'acquisition qualifiée.",
        "Optimisation des taux de conversion.",
        "Suivi du parcours d'achat.",
        "Retargeting et reciblage publicitaire."
      ],
      italic: "Nous transformons votre visibilité en actions mesurables, en prospects qualifiés et en revenus."
    },
    {
      title: "Expérience client & Fidélisation",
      items: [
        "Cartographie de l'expérience client.",
        "Stratégie de rétention.",
        "Parcours de réactivation des anciennes clientes.",
        "Stimulation du réachat.",
        "Systèmes de recommandation."
      ],
      italic: "L'acquisition coûte cher ; nous nous assurons que vos clientes restent et deviennent prescriptrices de votre entreprise."
    },
    {
      title: "Automatisation & IA",
      items: [
        "Configuration experte de CRM.",
        "Séquences d'emails et workflows automatisés.",
        "Automatisation de la prise de rendez-vous.",
        "Tableaux de bord et reporting automatisés.",
        "Intégration d'outils d'intelligence artificielle."
      ],
      italic: "La technologie et l'automatisation fiabilisent vos processus commerciaux pour offrir un parcours client sans friction."
    }
  ];

  const methodologySteps = [
    "Comprendre", "Diagnostiquer", "Prioriser", "Connecter", 
    "Exécuter", "Mesurer", "Apprendre", "Optimiser"
  ];

  return (
    <div className="flex-1 flex flex-col bg-ivory">
      {/* Scroll 1: Methodology Title */}
      <section className="py-20 md:py-28 border-b border-bordure/30">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-crimson mb-4 inline-block">
                Notre Méthodologie
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] text-encre tracking-tighter mb-8">
                Comprendre avant d&apos;agir.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-6">
                Notre méthodologie repose sur l&apos;analyse de votre réalité avant toute exécution. 
                Nous structurons votre système de croissance en huit étapes :
              </p>
            </ScrollReveal>

            {/* The 8 Steps Horizontal Snap / Grid */}
            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-8">
                {methodologySteps.map((step, idx) => (
                  <div key={idx} className="bg-blanc-chaud border border-bordure/50 p-5 rounded-xl shadow-1">
                    <span className="text-[10px] font-mono text-crimson font-bold block mb-2">0{idx + 1}</span>
                    <span className="text-sm font-semibold text-encre tracking-wide uppercase">{step}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <p className="text-sm md:text-base text-text-secondary leading-relaxed mt-8 border-l border-crimson/30 pl-4 italic">
                La technologie et les outils sont toujours mis au service de la stratégie. L&apos;objectif dicte l&apos;action, le problème définit la solution.
              </p>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 2: Client Experience */}
      <section className="bg-blanc-chaud py-24 border-b border-bordure/30">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="max-w-3xl mb-16">
            <ScrollReveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-text-secondary mb-4 inline-block">
                Collaboration
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display text-encre tracking-tight mb-6">
                L&apos;expérience client CRIMSAI : Comment nous collaborons.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base text-text-secondary leading-relaxed">
                Dès notre premier échange, nous structurons une relation transparente et rigoureuse :
              </p>
            </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="space-y-6 max-w-4xl">
              {steps.map((step, idx) => (
                <StaggerItem key={idx}>
                  <div className="flex gap-6 items-start py-6 border-b border-bordure/40 last:border-b-0 hover:pl-2 transition-all duration-300">
                    <span className="text-lg font-display text-crimson font-bold">0{idx + 1}</span>
                    <div>
                      <h3 className="text-lg font-semibold text-encre mb-2">{step.title}</h3>
                      <p className="text-sm text-text-secondary leading-relaxed max-w-[65ch]">{step.desc}</p>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </StaggerContainer>
        </div>
      </section>

      {/* Scroll 3: Connected Expertise */}
      <section className="py-24 md:py-32">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="max-w-3xl mb-16">
            <ScrollReveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-crimson mb-4 inline-block">
                Domaines d&apos;expertise
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display text-encre tracking-tight mb-6">
                Nos expertises connectées.
              </h2>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base text-text-secondary leading-relaxed max-w-[55ch]">
                Nous sélectionnons uniquement les leviers nécessaires à votre situation.
              </p>
            </ScrollReveal>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {expertises.map((exp, idx) => (
              <ScrollReveal key={idx} delay={idx * 0.05}>
                <div className="bg-blanc-chaud border border-bordure/60 hover:border-crimson/30 rounded-2xl p-6 md:p-8 flex flex-col justify-between h-full shadow-1 hover:shadow-2 transition-all duration-500">
                  <div>
                    <h3 className="text-lg font-semibold text-encre mb-6 pb-2 border-b border-bordure/40">{exp.title}</h3>
                    <ul className="space-y-3 mb-6">
                      {exp.items.map((item, idx2) => (
                        <li key={idx2} className="text-xs text-text-secondary flex items-start gap-2 leading-relaxed">
                          <span className="text-crimson mt-0.5">•</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <p className="text-xs italic text-crimson-deep bg-crimson-tint/30 p-4 rounded-lg mt-auto border-l-2 border-crimson">
                    {exp.italic}
                  </p>
                </div>
              </ScrollReveal>
            ))}
          </div>

          <div className="mt-20 text-center">
            <ScrollReveal>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center px-8 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 active:scale-98"
              >
                Réserver un appel découverte
              </Link>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
