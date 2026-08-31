import type { Metadata } from "next";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";
import ContactForm from "@/app/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact | CRIMSAI",
  description: "Parlons de vos blocages d'acquisition. Obtenez un premier avis gratuit pour votre salon, spa ou marque cosmétique.",
};

export default function Page() {
  const steps = [
    {
      num: "01",
      text: "Nous comprenons votre modèle économique.",
    },
    {
      num: "02",
      text: "Si nous pouvons optimiser votre système, nous vous expliquons comment.",
    },
    {
      num: "03",
      text: "Si nous ne sommes pas la bonne agence pour vous, nous vous le disons.",
    },
  ];

  return (
    <div className="flex-grow flex flex-col bg-ivory">
      {/* Scroll 01 & 03: Hero & Form Container (Preset A - Ivory background) */}
      <section className="bg-ivory py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Invitation Content */}
          <div className="lg:col-span-6 flex flex-col items-start lg:sticky lg:top-32">
            <ScrollReveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                {"CONTACTER CRIMSAI"}
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[36px] font-display font-normal leading-[1.15] tracking-[-0.005em] text-encre mb-6">
                {"Parlons de vos blocages d'acquisition."}
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary max-w-[50ch] mb-8">
                {"Vous n'avez pas besoin d'avoir la solution technique avant de nous contacter. Expliquez-nous simplement où vous voulez aller et ce qui vous freine aujourd'hui."}
              </p>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-6 w-full">
            <ScrollReveal delay={0.2}>
              <ContactForm />
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 02: Le Processus (Preset C - Beige background) */}
      <section className="bg-beige-surface py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                {"NOTRE CONVERSATION"}
              </span>
              <h2 className="text-[28px] font-display font-normal leading-[1.2] tracking-normal text-encre mb-6">
                {"Une première conversation. Pas un engagement."}
              </h2>
            </ScrollReveal>
          </div>

          <StaggerContainer>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {steps.map((step, idx) => (
                <StaggerItem key={idx}>
                  <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-8 hover:shadow-2 transition-all duration-300 h-full flex flex-col justify-between">
                    <div>
                      <span className="text-[14px] font-semibold text-crimson mb-4 block font-sans">
                        {step.num}
                      </span>
                      <p className="text-[14px] font-normal font-sans leading-[1.6] text-text-secondary">
                        {step.text}
                      </p>
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
