"use client";

import React from "react";
import { motion } from "framer-motion";
import { Sparkles, Check, ArrowUpRight } from "lucide-react";

interface PricingSectionProps {
  onSelectPackage: (packageName: string) => void;
}

const PACKAGES = [
  {
    name: "SIGNATURE CARE",
    tagline: "Die essenzielle Rundumpflege",
    price: "Ab 299 €",
    duration: "ca. 4 - 6 Stunden",
    description: "Kombiniert eine schonende 2-Eimer-Handwäsche mit porentiefer Innenraumpflege und Lackversiegelung.",
    features: [
      "Schonende 2-Eimer Handwäsche",
      "Säurefreie Felgen-Tiefenreinigung",
      "Gründliche Innenraum-Aussaugung & Feuchtreinigung",
      "Porentiefe Leder- & Alcantara-Pflege",
      "Sprühversiegelung mit 2 Monaten Abperlschutz",
    ],
    badge: "Klassiker",
    featured: false,
  },
  {
    name: "MASTER FINISH",
    tagline: "Spiegelglanz & Swirl-Beseitigung",
    price: "Ab 599 €",
    duration: "ca. 1 - 2 Tage",
    description: "Befreit Ihren Lack von lästigen Waschkratzern. Sorgt für beeindruckenden Tiefenglanz und samtweiche Oberflächen.",
    features: [
      "Vollständige SIGNATURE CARE Pflege",
      "Mechanische Knet-Dekontamination",
      "2-stufige Maschinenpolitur (Cut & Finish)",
      "Beseitigung von bis zu 85% aller Mikrokratzer",
      "Hybrid-Keramik-Versiegelung (12 Monate Schutz)",
    ],
    badge: "Bestseller",
    featured: true,
  },
  {
    name: "ULTIMATE 9H CERAMIC",
    tagline: "Das Maximum an Lackkonservierung",
    price: "Ab 990 €",
    duration: "ca. 2 - 3 Tage",
    description: "Die ultimative Komplettbehandlung für Sportwagen und Sammlerstücke. Höchste Glashärte und 36 Monate Schutz.",
    features: [
      "3-stufige Showroom-Lackkorrektur (bis zu 98% kratzfrei)",
      "Echte 9H Keramikversiegelung (2 Schichten auf Lack)",
      "Keramikversiegelung aller 4 Felgen & Bremssättel",
      "Hydrophobe Glasversiegelung aller Scheiben",
      "Infrarot-Aushärtung & 36 Monate Schutzgarantie",
    ],
    badge: "High-End",
    featured: false,
  },
];

export default function PricingSection({ onSelectPackage }: PricingSectionProps) {
  return (
    <section id="pricing" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 mb-4">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
            Transparente Festpreise
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-syne text-white mb-4">
          Investition in den <span className="text-gold-gradient">Werterhalt</span>
        </h2>
        <p className="max-w-2xl text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Feste Paketpreise ohne versteckte Kosten. Die exakte Einstufung richtet sich nach 
          Fahrzeuggröße und aktuellem Lackzustand.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
        {PACKAGES.map((pkg, idx) => {
          const isFeatured = pkg.featured;
          return (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative rounded-3xl p-8 sm:p-9 flex flex-col justify-between transition-all duration-300 ${
                isFeatured
                  ? "bg-gradient-to-b from-neutral-900 to-neutral-950 border-2 border-[#D4AF37] shadow-[0_0_50px_rgba(212,175,55,0.25)] md:-translate-y-2"
                  : "bg-neutral-950/90 border border-white/15 hover:border-[#D4AF37]/50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs font-mono uppercase tracking-wider px-3.5 py-1 rounded-full font-bold ${
                    isFeatured
                      ? "bg-[#D4AF37] text-black shadow-[0_0_15px_rgba(212,175,55,0.4)]"
                      : "bg-white/10 text-[#D4AF37] border border-white/10"
                  }`}>
                    {pkg.badge}
                  </span>
                  <span className="text-xs sm:text-sm font-mono text-neutral-400">
                    {pkg.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold font-syne text-white tracking-wide mb-1">
                  {pkg.name}
                </h3>
                <p className="text-xs sm:text-sm text-[#D4AF37] font-mono font-semibold mb-6">{pkg.tagline}</p>

                <div className="text-3xl sm:text-4xl font-extrabold font-syne text-white mb-6 pb-6 border-b border-white/10">
                  {pkg.price}
                  <span className="text-xs sm:text-sm font-normal text-neutral-400 font-mono ml-2">
                    inkl. MwSt.
                  </span>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-8">
                  {pkg.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm sm:text-base text-neutral-200">
                      <Check className="w-5 h-5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-4 px-6 rounded-xl text-sm sm:text-base font-mono uppercase tracking-wider flex items-center justify-center gap-2 font-bold transition-all ${
                    isFeatured
                      ? "bg-[#D4AF37] text-black hover:bg-[#E6CA65] shadow-[0_0_25px_rgba(212,175,55,0.35)]"
                      : "bg-neutral-900 border border-white/20 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  }`}
                >
                  <span>Paket auswählen</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
