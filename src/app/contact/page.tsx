"use client";

import React, { useState } from "react";
import { ScrollReveal, StaggerContainer, StaggerItem } from "@/app/components/ScrollReveal";

const details = ["30 minutes", "Gratuit", "Sans engagement", "À distance"];

const discussionPoints = [
  "La réalité de votre chiffre d'affaires et de votre modèle économique actuel.",
  "Les résultats que vous souhaitez obtenir à court et moyen terme.",
  "Les éléments qui freinent aujourd'hui votre parcours client.",
  "La pertinence de mettre en place une collaboration stratégique entre nous.",
];

export default function Page() {
  const [formData, setFormData] = useState({ name: "", email: "", company: "", msg: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <div className="flex-1 flex flex-col bg-ivory">
      {/* Scroll 1: Booking Header & Form */}
      <section className="py-20 md:py-28 border-b border-bordure/30">
        <div className="max-w-7xl mx-auto px-6 md:px-20 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Info Side */}
          <div className="lg:col-span-6 flex flex-col items-start">
            <ScrollReveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-crimson mb-4 inline-block">
                Contact & Réservation
              </span>
            </ScrollReveal>
            <ScrollReveal delay={0.1}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-display leading-[1.1] text-encre tracking-tighter mb-6">
                Parlons de votre croissance.
              </h1>
            </ScrollReveal>
            <ScrollReveal delay={0.2}>
              <p className="text-base md:text-lg text-text-secondary leading-relaxed mb-8 max-w-[50ch]">
                L&apos;appel découverte est conçu pour évaluer la situation de votre entreprise. 
                Ce n&apos;est pas une présentation commerciale agressive.
              </p>
            </ScrollReveal>

            {/* Quick Details List */}
            <ScrollReveal delay={0.3}>
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {details.map((detail, idx) => (
                  <div key={idx} className="flex items-center gap-3 bg-blanc-chaud border border-bordure/40 p-4 rounded-xl">
                    <span className="text-crimson font-bold text-sm">✓</span>
                    <span className="text-xs font-semibold uppercase text-encre tracking-wider">{detail}</span>
                  </div>
                ))}
              </div>
            </ScrollReveal>
          </div>

          {/* Form Side */}
          <div className="lg:col-span-6 w-full">
            <ScrollReveal delay={0.2}>
              <div className="bg-blanc-chaud border border-bordure/60 rounded-2xl p-6 md:p-10 shadow-1">
                {isSubmitted ? (
                  <div className="text-center py-12 flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-crimson-tint flex items-center justify-center text-crimson font-display text-2xl mb-6">
                      ✓
                    </div>
                    <h3 className="text-xl font-semibold text-encre mb-2">Demande Reçue !</h3>
                    <p className="text-sm text-text-secondary max-w-sm leading-relaxed">
                      Merci pour votre message. Nous reviendrons vers vous sous 24 heures pour planifier notre appel découverte.
                    </p>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <h3 className="text-lg font-semibold text-encre border-b border-bordure/40 pb-4 mb-4">
                      Réserver mon appel découverte
                    </h3>
                    
                    {/* Name Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="name" className="text-xs font-semibold uppercase text-encre tracking-wider">
                        Nom complet
                      </label>
                      <input
                        type="text"
                        id="name"
                        required
                        className="bg-ivory border border-bordure px-4 py-3 rounded text-sm text-encre focus:outline-none focus:border-crimson transition-all duration-300"
                        value={formData.name}
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      />
                    </div>

                    {/* Email Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="email" className="text-xs font-semibold uppercase text-encre tracking-wider">
                        Adresse e-mail
                      </label>
                      <input
                        type="email"
                        id="email"
                        required
                        className="bg-ivory border border-bordure px-4 py-3 rounded text-sm text-encre focus:outline-none focus:border-crimson transition-all duration-300"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      />
                    </div>

                    {/* Company Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="company" className="text-xs font-semibold uppercase text-encre tracking-wider">
                        Nom de l&apos;entreprise
                      </label>
                      <input
                        type="text"
                        id="company"
                        required
                        className="bg-ivory border border-bordure px-4 py-3 rounded text-sm text-encre focus:outline-none focus:border-crimson transition-all duration-300"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      />
                    </div>

                    {/* Message Input */}
                    <div className="flex flex-col gap-2">
                      <label htmlFor="msg" className="text-xs font-semibold uppercase text-encre tracking-wider">
                        Décrivez vos blocages et objectifs
                      </label>
                      <textarea
                        id="msg"
                        rows={4}
                        required
                        className="bg-ivory border border-bordure px-4 py-3 rounded text-sm text-encre focus:outline-none focus:border-crimson transition-all duration-300 resize-none"
                        value={formData.msg}
                        onChange={(e) => setFormData({ ...formData, msg: e.target.value })}
                      />
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full inline-flex items-center justify-center px-6 py-3.5 rounded-full text-xs font-semibold tracking-wider uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 disabled:opacity-50 active:scale-98"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Réserver mon appel découverte"}
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

        </div>
      </section>

      {/* Scroll 2: Value Proposition */}
      <section className="bg-blanc-chaud py-24">
        <div className="max-w-7xl mx-auto px-6 md:px-20">
          <div className="max-w-3xl">
            <ScrollReveal>
              <span className="text-[10px] md:text-[11px] uppercase tracking-[0.2em] font-semibold text-text-secondary mb-4 inline-block">
                Au programme
              </span>
            </ScrollReveal>
            
            <ScrollReveal delay={0.1}>
              <h2 className="text-3xl md:text-4xl font-display text-encre tracking-tight mb-8">
                Ce que nous identifions ensemble.
              </h2>
            </ScrollReveal>

            <ScrollReveal delay={0.2}>
              <p className="text-base text-text-secondary leading-relaxed mb-10 max-w-[65ch]">
                Durant cet échange, nous discutons de :
              </p>
            </ScrollReveal>

            <StaggerContainer>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {discussionPoints.map((point, idx) => (
                  <StaggerItem key={idx}>
                    <div className="flex gap-4 items-start p-5 border border-bordure/50 rounded-xl bg-ivory">
                      <span className="text-crimson font-display font-bold">0{idx + 1}</span>
                      <p className="text-xs md:text-sm text-text-secondary leading-relaxed">{point}</p>
                    </div>
                  </StaggerItem>
                ))}
              </div>
            </StaggerContainer>
          </div>
        </div>
      </section>
    </div>
  );
}
