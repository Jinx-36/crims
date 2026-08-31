"use client";

import React, { useState } from "react";

export default function ContactForm() {
  const [step, setStep] = useState(1);
  const [activity, setActivity] = useState("");
  const [priority, setPriority] = useState("");
  const [name, setName] = useState("");
  const [url, setUrl] = useState("");
  const [email, setEmail] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const activities = [
    "Marque cosmétique",
    "Salon",
    "Centre de bien-être",
    "Autre",
  ];

  const priorities = [
    "Visibilité",
    "Conversion",
    "Fidélisation",
    "Autre",
  ];

  const handleNext = (e: React.MouseEvent) => {
    e.preventDefault();
    if (!activity || !priority) {
      setErrorMsg("Veuillez sélectionner une option pour chaque question.");
      return;
    }
    setErrorMsg("");
    setStep(2);
  };

  const handleBack = (e: React.MouseEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setStep(1);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!name || !url || !email) {
      setErrorMsg("Veuillez remplir tous les champs de contact.");
      return;
    }

    setIsSubmitting(true);
    setErrorMsg("");

    try {
      // Build the formatted msg body combining Étape 1 & Étape 2 details
      const msg = `Votre activité : ${activity}
Votre priorité actuelle : ${priority}
URL de votre site web ou réseau social principal : ${url}`;

      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          company: url, // Map the URL to the 'company' field in the API
          msg,
        }),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        const data = await response.json();
        setErrorMsg(data.error || "Une erreur est survenue. Veuillez réessayer.");
      }
    } catch (err) {
      console.error(err);
      setErrorMsg("Une erreur est survenue. Veuillez réessayer.");
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSubmitted) {
    return (
      <div className="text-center py-12 flex flex-col items-center">
        <div className="w-16 h-16 rounded-full bg-crimson-tint flex items-center justify-center text-crimson font-display text-[24px] mb-6 animate-pulse">
          {"✓"}
        </div>
        <h3 className="text-[20px] font-semibold text-encre mb-4 font-sans">
          {"Demande Reçue !"}
        </h3>
        <p className="text-[14px] text-text-secondary max-w-sm leading-relaxed font-sans">
          {"Merci pour votre message. Nous reviendrons vers vous sous 24 heures pour planifier notre appel découverte."}
        </p>
      </div>
    );
  }

  return (
    <div className="bg-blanc-chaud border border-bordure rounded-[12px] p-6 md:p-8 hover:shadow-2 transition-all duration-300">
      {/* Progress header */}
      <div className="mb-6">
        <div className="flex justify-between items-center text-[10px] font-semibold uppercase tracking-[0.08em] text-text-secondary mb-2">
          <span>{step === 1 ? "Étape 1 : Qualification" : "Étape 2 : Contact"}</span>
          <span>{step}/2</span>
        </div>
        <div className="w-full bg-bordure/30 h-[2px] rounded-full">
          <div
            className="bg-crimson h-[2px] rounded-full transition-all duration-500"
            style={{ width: `${step * 50}%` }}
          />
        </div>
      </div>

      {errorMsg && (
        <div className="mb-6 p-4 bg-crimson-tint/30 border border-crimson/20 rounded-[8px] text-[12px] font-medium text-crimson-deep font-sans">
          {errorMsg}
        </div>
      )}

      {step === 1 ? (
        <div className="space-y-6">
          <h3 className="text-[20px] font-semibold text-encre border-b border-bordure pb-4 font-sans">
            {"Qualification rapide"}
          </h3>

          {/* Activity Selection */}
          <div className="space-y-3">
            <label className="text-[11px] font-semibold uppercase tracking-[0.08em] text-encre font-sans block">
              {"Votre activité :"}
            </label>
            <div className="grid grid-cols-2 gap-3">
              {activities.map((act) => {
                const isSelected = activity === act;
                return (
                  <button
                    key={act}
                    type="button"
                    onClick={() => setActivity(act)}
                    className={`border p-3 rounded-[8px] text-left text-[13px] font-sans transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "border-crimson bg-crimson-tint/10 text-crimson-deep font-medium"
                        : "border-bordure hover:border-crimson text-text-secondary"
                    }`}
                  >
                    {act}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Priority Selection */}
          <div className="space-y-3">
            <label className="text-[11px] font-semibold uppercase tracking-[0.08em] text-encre font-sans block">
              {"Votre priorité actuelle :"}
            </label>
            <div className="grid grid-cols-2 gap-3">
              {priorities.map((prio) => {
                const isSelected = priority === prio;
                return (
                  <button
                    key={prio}
                    type="button"
                    onClick={() => setPriority(prio)}
                    className={`border p-3 rounded-[8px] text-left text-[13px] font-sans transition-all duration-300 cursor-pointer ${
                      isSelected
                        ? "border-crimson bg-crimson-tint/10 text-crimson-deep font-medium"
                        : "border-bordure hover:border-crimson text-text-secondary"
                    }`}
                  >
                    {prio}
                  </button>
                );
              })}
            </div>
          </div>

          <button
            type="button"
            onClick={handleNext}
            className="w-full inline-flex items-center justify-center px-8 py-3 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 active:scale-98 font-sans cursor-pointer mt-4"
          >
            {"Continuer →"}
          </button>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="space-y-6">
          <h3 className="text-[20px] font-semibold text-encre border-b border-bordure pb-4 font-sans">
            {"Vos coordonnées"}
          </h3>

          {/* Name Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-[11px] font-semibold uppercase tracking-[0.08em] text-encre font-sans">
              {"Nom et Prénom :"}
            </label>
            <input
              type="text"
              id="name"
              required
              className="bg-ivory border border-bordure px-4 py-3 rounded-[4px] text-[14px] text-encre focus:outline-none focus:border-crimson transition-all duration-300 font-sans"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          {/* URL Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="url" className="text-[11px] font-semibold uppercase tracking-[0.08em] text-encre font-sans">
              {"URL de votre site web ou réseau social principal :"}
            </label>
            <input
              type="url"
              id="url"
              required
              placeholder="https://..."
              className="bg-ivory border border-bordure px-4 py-3 rounded-[4px] text-[14px] text-encre focus:outline-none focus:border-crimson transition-all duration-300 font-sans"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
            />
          </div>

          {/* Email Input */}
          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-[11px] font-semibold uppercase tracking-[0.08em] text-encre font-sans">
              {"Email :"}
            </label>
            <input
              type="email"
              id="email"
              required
              className="bg-ivory border border-bordure px-4 py-3 rounded-[4px] text-[14px] text-encre focus:outline-none focus:border-crimson transition-all duration-300 font-sans"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3 pt-4">
            <button
              type="button"
              onClick={handleBack}
              className="w-full sm:w-1/3 inline-flex items-center justify-center px-4 py-3 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase border border-encre text-encre bg-transparent hover:bg-encre hover:text-blanc-chaud transition-all duration-300 active:scale-98 font-sans cursor-pointer"
            >
              {"← Retour"}
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full sm:w-2/3 inline-flex items-center justify-center px-6 py-3 rounded-full text-[11px] font-semibold tracking-[0.08em] uppercase bg-crimson text-blanc-chaud hover:bg-crimson-deep transition-all duration-300 disabled:opacity-50 active:scale-98 font-sans cursor-pointer"
            >
              {isSubmitting ? "Envoi en cours..." : "Obtenir un premier avis gratuit"}
            </button>
          </div>
        </form>
      )}
    </div>
  );
}
