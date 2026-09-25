"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { X, MessageCircle, Calendar, Car, Sparkles, CheckCircle2, Phone, ShieldCheck } from "lucide-react";
import confetti from "canvas-confetti";

interface BookingModalProps {
  isOpen: boolean;
  onClose: () => void;
  preselectedService?: string;
  preselectedCar?: string;
}

const SERVICE_OPTIONS = [
  "Keramikversiegelung (9H Langzeitschutz)",
  "Lackaufbereitung & Versiegelung",
  "Innenraumreinigung (Tiefenreinigung)",
  "Außenreinigung (Handwäsche & Felgen)",
  "Sonderaufbereitung (Leasingrückläufer)",
  "Individuelles Komplettpaket",
];

export default function BookingModal({
  isOpen,
  onClose,
  preselectedService = "Keramikversiegelung (9H Langzeitschutz)",
  preselectedCar = "",
}: BookingModalProps) {
  const [carModel, setCarModel] = useState(preselectedCar);
  const [selectedService, setSelectedService] = useState(preselectedService);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [preferredDate, setPreferredDate] = useState("");
  const [notes, setNotes] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const generateWhatsAppUrl = () => {
    const text = `Hallo NEXT LEVEL FAHRZEUGPFLEGE,
Ich möchte eine Terminanfrage stellen:

• Fahrzeug: ${carModel || "Nicht angegeben"}
• Gewünschte Leistung: ${selectedService}
• Mein Name: ${name || "Kunde"}
• Telefon: ${phone || "Nicht angegeben"}
• Wunschtermin: ${preferredDate || "Flexibel"}
${notes ? `• Anmerkungen: ${notes}` : ""}

Bitte teilen Sie mir zeitnah verfügbare Termine mit. Vielen Dank!`;

    return `https://wa.me/491761234567?text=${encodeURIComponent(text)}`;
  };

  const handleWhatsAppDirect = (e: React.FormEvent) => {
    e.preventDefault();
    window.open(generateWhatsAppUrl(), "_blank");
    onClose();
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 50,
        spread: 60,
        origin: { y: 0.6 },
        colors: ["#D4AF37", "#F3E5AB", "#FFFFFF"],
      });
    } catch {}
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        exit={{ opacity: 0, scale: 0.95 }}
        className="relative w-full max-w-xl bg-neutral-950 border border-white/20 rounded-3xl shadow-2xl overflow-y-auto max-h-[92vh] p-6 sm:p-9"
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-6 right-6 p-2 rounded-full border border-white/15 text-neutral-400 hover:text-white hover:border-[#D4AF37] transition-colors"
        >
          <X className="w-5 h-5" />
        </button>

        {submitted ? (
          <div className="text-center py-10">
            <div className="w-16 h-16 rounded-full bg-[#D4AF37]/15 border border-[#D4AF37]/40 flex items-center justify-center mx-auto mb-5 text-[#D4AF37]">
              <CheckCircle2 className="w-10 h-10" />
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold font-syne text-white mb-3">
              Vielen Dank für Ihre Anfrage!
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 leading-relaxed max-w-md mx-auto mb-8">
              Wir haben Ihre Daten erfasst und melden uns innerhalb von 30 Minuten mit passenden Terminvorschlägen bei Ihnen.
            </p>
            <div className="flex flex-col sm:flex-row gap-3.5 justify-center">
              <a
                href={generateWhatsAppUrl()}
                target="_blank"
                rel="noopener noreferrer"
                className="px-6 py-3.5 rounded-xl bg-[#D4AF37] text-black font-bold text-sm font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
              >
                <MessageCircle className="w-5 h-5 fill-black" />
                <span>In WhatsApp fortführen</span>
              </a>
              <button
                onClick={onClose}
                className="px-6 py-3.5 rounded-xl border border-white/15 text-neutral-300 text-sm font-mono uppercase tracking-wider hover:text-white"
              >
                Schließen
              </button>
            </div>
          </div>
        ) : (
          <div>
            {/* Modal Header */}
            <div className="mb-7">
              <div className="flex items-center gap-2 text-[#D4AF37] text-xs sm:text-sm font-mono uppercase tracking-[0.2em] font-bold mb-2">
                <Sparkles className="w-4 h-4" />
                <span>Unverbindliche Terminanfrage</span>
              </div>
              <h3 className="text-2xl sm:text-3xl font-bold font-syne text-white">
                Fahrzeugaufbereitung buchen
              </h3>
              <p className="text-sm text-neutral-300 mt-1.5">
                Wählen Sie Ihre gewünschte Pflegeleistung für ein maßgeschneidertes Angebot.
              </p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
              <div>
                <label className="block text-xs sm:text-sm font-mono uppercase font-semibold text-neutral-300 mb-1.5">
                  Gewünschte Leistung
                </label>
                <select
                  value={selectedService}
                  onChange={(e) => setSelectedService(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white focus:outline-none focus:border-[#D4AF37] text-sm sm:text-base font-mono"
                >
                  {SERVICE_OPTIONS.map((opt) => (
                    <option key={opt} value={opt}>
                      {opt}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-mono uppercase font-semibold text-neutral-300 mb-1.5">
                  Fahrzeug (Marke / Modell / Baujahr) *
                </label>
                <div className="relative">
                  <input
                    type="text"
                    required
                    value={carModel}
                    onChange={(e) => setCarModel(e.target.value)}
                    placeholder="z. B. Porsche 911 GT3 RS / BMW M4"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white focus:outline-none focus:border-[#D4AF37] text-sm sm:text-base"
                  />
                  <Car className="w-5 h-5 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs sm:text-sm font-mono uppercase font-semibold text-neutral-300 mb-1.5">
                    Ihr Name *
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Vor- und Nachname"
                    className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white focus:outline-none focus:border-[#D4AF37] text-sm sm:text-base"
                  />
                </div>

                <div>
                  <label className="block text-xs sm:text-sm font-mono uppercase font-semibold text-neutral-300 mb-1.5">
                    Telefonnummer *
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      required
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      placeholder="+49 176 ..."
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white focus:outline-none focus:border-[#D4AF37] text-sm sm:text-base"
                    />
                    <Phone className="w-5 h-5 text-neutral-500 absolute left-3.5 top-1/2 -translate-y-1/2" />
                  </div>
                </div>
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-mono uppercase font-semibold text-neutral-300 mb-1.5">
                  Wunschtermin (Optional)
                </label>
                <input
                  type="date"
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white focus:outline-none focus:border-[#D4AF37] text-sm sm:text-base"
                />
              </div>

              <div>
                <label className="block text-xs sm:text-sm font-mono uppercase font-semibold text-neutral-300 mb-1.5">
                  Besondere Wünsche oder Lackzustand
                </label>
                <textarea
                  rows={2}
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  placeholder="z. B. Waschkratzer entfernen, Lederpflege gewünscht..."
                  className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                />
              </div>

              {/* Actions */}
              <div className="pt-3 flex flex-col sm:flex-row gap-3.5">
                <button
                  type="button"
                  onClick={handleWhatsAppDirect}
                  className="flex-1 py-4 px-5 rounded-xl bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-bold text-sm sm:text-base font-mono uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-[0_0_25px_rgba(212,175,55,0.35)] active:scale-95"
                >
                  <MessageCircle className="w-5 h-5 fill-black" />
                  <span>Per WhatsApp anfragen</span>
                </button>

                <button
                  type="submit"
                  className="py-4 px-5 rounded-xl border border-white/20 hover:border-white/40 text-neutral-200 hover:text-white text-sm font-mono uppercase tracking-wider transition-colors font-semibold"
                >
                  Anfrage senden
                </button>
              </div>

              <div className="flex items-center justify-center gap-2 text-xs text-neutral-400 font-mono text-center pt-2">
                <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                <span>100% diskret & unverbindlich. Keine Weitergabe an Dritte.</span>
              </div>
            </form>
          </div>
        )}
      </motion.div>
    </div>
  );
}
