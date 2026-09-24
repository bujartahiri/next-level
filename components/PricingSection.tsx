"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, ArrowUpRight, ShieldCheck } from "lucide-react";

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

const PACKAGES = [
  {
    name: "SIGNATURE CARE",
    tagline: "Die essenzielle Rundumpflege",
    price: "Ab 299 €",
    duration: "ca. 4 - 6 Stunden",
    description: "Perfekt für die regelmäßige Pflege oder vor besonderen Anlässen. Kombiniert schonende Handwäsche mit gründlicher Innenraumkur.",
    features: [
      "100% schonende 2-Eimer Handwäsche",
      "Felgen-Tiefenreinigung & Reifenglanz",
      "Gründliche Innenraum-Aussaugung & Feuchtreinigung",
      "Leder- & Alcantara-Oberflächenpflege",
      "Streifenfreie Glasreinigung innen & außen",
      "Sprühversiegelung mit 2 Monaten Abperleffekt",
    ],
    badge: "Klassiker",
    featured: false,
  },
  {
    name: "MASTER FINISH",
    tagline: "Spiegelglanz & Lackkorrektur",
    price: "Ab 599 €",
    duration: "ca. 1 - 2 Tage",
    description: "Befreit Ihren Lack von lästigen Swirls und Waschkratzern. Sorgt für beeindruckenden Tiefenglanz und samtweiche Oberflächen.",
    features: [
      "Alle Leistungen aus SIGNATURE CARE",
      "Vollständige Knetbehandlung & Dekontamination",
      "2-stufige Maschinenpolitur (Cut & Gloss Finish)",
      "Beseitigung von bis zu 85% aller Mikrokratzer",
      "Hybrid-Keramik-Wachsversiegelung (12 Monate Schutz)",
      "Porentiefe Leder-Imprägnierung gegen Abrieb",
    ],
    badge: "Bestseller",
    featured: true,
  },
  {
    name: "ULTIMATE 9H CERAMIC",
    tagline: "Das Nonplusultra an Werterhalt",
    price: "Ab 990 €",
    duration: "ca. 2 - 3 Tage",
    description: "Die ultimative Komplettbehandlung für Sportwagen und Neuwagen. Maximale Härte, extremer Glanz und unübertroffener Abperlschutz.",
    features: [
      "Alle Leistungen aus MASTER FINISH",
      "3-stufige Showroom-Lackkorrektur (bis zu 98% kratzfrei)",
      "Echte 9H Keramikversiegelung (2 Schichten auf Lack)",
      "Keramikversiegelung aller 4 Felgen & Bremssättel",
      "Hydrophobe Glasversiegelung aller Scheiben",
      "Infrarot-Aushärtung für maximale chemische Resistenz",
      "Schriftliches Garantiezertifikat (bis 36 Monate)",
    ],
    badge: "High-End",
    featured: false,
  },
];

export default function PricingSection({ onSelectPackage }: PricingSectionProps) {
  return (
    <section id="pricing" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
            Transparente Paketpreise
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-syne text-white mb-4">
          Investition in den <span className="text-gold-gradient">Werterhalt</span>
        </h2>
        <p className="max-w-2xl text-neutral-400 text-sm sm:text-base leading-relaxed">
          Transparente Festpreise ohne versteckte Kosten. Die exakte Preisgestaltung richtet sich 
          nach Fahrzeuggröße (z. B. Sportwagen vs. SUV) und Ausgangszustand des Lackes.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PACKAGES.map((pkg, idx) => {
          const isFeatured = pkg.featured;
          return (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-2xl p-8 flex flex-col justify-between transition-all duration-300 ${
                isFeatured
                  ? "bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.2)] md:-translate-y-2"
                  : "bg-neutral-950/80 border border-white/10 hover:border-[#D4AF37]/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-3 py-1 rounded-full ${
                    isFeatured
                      ? "bg-[#D4AF37] text-black font-bold shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      : "bg-white/5 border border-white/10 text-[#D4AF37]"
                  }`}>
                    {pkg.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {pkg.duration}
                  </span>
                </div>

                <h3 className="text-2xl font-bold font-syne text-white tracking-wide mb-1">
                  {pkg.name}
                </h3>
                <p className="text-xs text-[#D4AF37] font-mono mb-4">{pkg.tagline}</p>

                <div className="text-3xl font-extrabold font-syne text-white mb-4">
                  {pkg.price}
                  <span className="text-xs font-normal text-neutral-400 font-mono ml-1.5">
                    inkl. MwSt.
                  </span>
                </div>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                <div className="space-y-2.5 mb-8 border-t border-white/10 pt-6">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2.5 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 font-bold ${
                    isFeatured
                      ? "bg-[#D4AF37] text-black hover:bg-[#E6CA65] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                      : "bg-neutral-900 border border-white/10 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  }`}
                >
                  <span>Paket auswählen & buchen</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
