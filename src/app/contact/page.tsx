"use client";

import React, { useState } from "react";
import { ScrollReveal } from "@/app/components/ScrollReveal";

export default function Page() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (error) {
      console.error(error);
      alert("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const focusForm = () => {
    const formElement = document.getElementById("contact-form-card");
    if (formElement) {
      formElement.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex-grow flex flex-col bg-ivory">
      {/* Scroll 1: L'invitation & Form */}
      <section className="bg-ivory py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          {/* Left Column: Invitation Content */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <ScrollReveal>
              <span className="text-[11px] font-semibold uppercase tracking-[0.08em] leading-[1.4] text-crimson mb-4 inline-block font-sans">
                PARLONS DE VOTRE CROISSANCE
              </span>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <h1 className="text-[36px] font-display font-normal leading-[1.15] tracking-[-0.005em] text-encre mb-8">
                Et si le problème n’était pas de faire plus ?
              </h1>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <div className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary space-y-6 mb-12">
                <p>Peut-être que certaines choses fonctionnent déjà.</p>
                <p>Peut-être qu’elles ne travaillent simplement pas encore ensemble.</p>
                <p>
                  Un premier échange permet de comprendre votre situation, vos objectifs et ce qui pourrait réellement faire avancer votre entreprise.
                </p>
              </div>
            </ScrollReveal>

            {/* Verification details grid */}
            <ScrollReveal delay={0.3}>
              <div className="flex flex-col gap-4 w-full max-w-md">
                <div className="flex items-center gap-4 bg-blanc-chaud border border-bordure p-4 rounded-[12px]">
                  <span className="text-crimson font-bold text-[14px]">✓</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-encre font-sans">
                    30 minutes.
                  </span>
                </div>
                <div className="flex items-center gap-4 bg-blanc-chaud border border-bordure p-4 rounded-[12px]">
                  <span className="text-crimson font-bold text-[14px]">✓</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-encre font-sans">
                    Sans engagement.
                  </span>
                </div>
                <div className="flex items-center gap-4 bg-blanc-chaud border border-bordure p-4 rounded-[12px]">
                  <span className="text-crimson font-bold text-[14px]">✓</span>
                  <span className="text-[11px] font-semibold uppercase tracking-[0.08em] text-encre font-sans">
                    Sans présentation commerciale interminable.
                  </span>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* Right Column: Interactive Form Card */}
          <div className="lg:col-span-6 w-full" id="contact-form-card">
            <ScrollReveal delay={0.2}>
              <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 md:p-8 hover:shadow-2 transition-all duration-300">
                {isSubmitted ? (
                  <div className="text-center py-12 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-crimson-tint flex items-center justify-center text-crimson font-display text-[24px] mb-6">
                      ✓
                    </div>
                    <h3 className="text-[20px] font-semibold text-encre mb-4 font-sans">Demande Reçue !</h3>
                    <p className="text-[14px] text-text-secondary max-w-sm leading-relaxed font-sans">
                      Merci pour votre message. Nous reviendrons vers vous sous 24 heures pour planifier notre appel découverte.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-[20px] font-semibold text-encre border-b border-bordure pb-4 mb-4 font-sans">
                      Réserver mon appel découverte
                    </h3>
                    
                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-[0.08em] text-encre font-sans">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="bg-ivory border border-bordure px-4 py-3 rounded-[4px] text-[14px] text-encre focus:outline-none focus:border-crimson transition-all duration-300 font-sans"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-[0.08em] text-encre font-sans">
                        Adresse e-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="bg-ivory border border-bordure px-4 py-3 rounded-[4px] text-[14px] text-encre focus:outline-none focus:border-crimson transition-all duration-300 font-sans"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    {/* Company Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-[11px] font-semibold uppercase tracking-[0.08em] text-encre font-sans">
                        Nom de l&apos;entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        className="bg-ivory border border-bordure px-4 py-3 rounded-[4px] text-[14px] text-encre focus:outline-none focus:border-crimson transition-all duration-300 font-sans"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="msg" className="text-[11px] font-semibold uppercase tracking-[0.08em] text-encre font-sans">
                        Décrivez vos blocages et objectifs
                      </label>
                      <textarea
                        id="msg"
                        rows={4}
                        required
                        className="bg-ivory border border-bordure px-4 py-3 rounded-[4px] text-[14px] text-encre focus:outline-none focus:border-crimson transition-all duration-300 resize-none font-sans"
                        value={formData.msg}
                        onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-8 py-3 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 disabled:opacity-50 active:scale-98 font-sans cursor-pointer"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Réserver un appel découverte →"}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 2: Avant notre échange */}
      <section className="bg-blanc-chaud py-24 border-b border-bordure">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <h2 className="text-[28px] font-display font-normal leading-[1.2] tracking-normal text-encre mb-8">
                Venez avec vos questions. Pas avec un brief parfait.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <div className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary space-y-6">
                <p>Vous pouvez simplement nous parler de :</p>
                <ul className="pl-6 list-disc space-y-2 text-encre">
                  <li>ce que vous cherchez à développer,</li>
                  <li>ce qui vous frustre aujourd’hui,</li>
                  <li>ce que vous avez déjà essayé,</li>
                  <li>et ce que vous aimeriez voir changer.</li>
                </ul>
                <p className="font-semibold text-crimson">
                  Nous nous chargeons du reste.
                </p>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </section>

      {/* Scroll 3: La dernière impression */}
      <section className="bg-ivory py-24">
        <div className="container mx-auto px-6 lg:px-20">
          <div className="max-w-3xl mb-12">
            <ScrollReveal>
              <h2 className="text-[28px] font-display font-normal leading-[1.2] tracking-normal text-encre mb-6">
                Votre croissance mérite mieux que des actions isolées.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.1}>
              <p className="text-[20px] font-semibold text-crimson mb-6 leading-relaxed">
                ATTIRER → CONVERTIR → FIDÉLISER
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-[16px] font-normal font-sans leading-[1.6] text-text-secondary mb-12 max-w-[65ch]">
                Nous croyons qu’une croissance durable commence lorsque ces étapes cessent de travailler séparément.
              </p>
            </ScrollReveal>

            <ScrollReveal delay={0.3}>
              <div className="border-t border-bordure pt-8 mb-12">
                <span className="text-[20px] font-display font-normal leading-[1.3] text-encre block mb-2">CRIMSAI</span>
                <span className="text-[14px] font-normal font-sans text-text-secondary">Partenaire de croissance des entreprises de beauté.</span>
              </div>
            </ScrollReveal>

            <ScrollReveal delay={0.4}>
              <button
                onClick={focusForm}
                className="inline-flex items-center justify-center px-8 py-3 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 active:scale-98 font-sans cursor-pointer"
              >
                Faire le premier pas →
              </button>
            </ScrollReveal>
          </div>
        </div>
      </section>
    </div>
  );
}
