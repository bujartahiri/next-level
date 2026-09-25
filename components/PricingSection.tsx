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
    duration: "ca. 4 - 6 Std.",
    description: "Kombiniert eine schonende Handwäsche mit porentiefer Innenraumpflege und schützender Lackversiegelung.",
    features: [
      "Schonende 2-Eimer Handwäsche",
      "Säurefreie Felgen-Tiefenreinigung",
      "Gründliche Innenraum-Nassreinigung",
      "Porentiefe Leder- & Alcantara-Pflege",
      "Sprühversiegelung mit Abperlschutz",
    ],
    badge: "Klassiker",
    featured: false,
  },
  {
    name: "MASTER FINISH",
    tagline: "Spiegelglanz & Kratzerbeseitigung",
    price: "Ab 599 €",
    duration: "ca. 1 - 2 Tage",
    description: "Befreit den Lack von Waschkratzern für beeindruckenden Tiefenglanz und samtweiche Oberflächen.",
    features: [
      "Vollständige SIGNATURE CARE",
      "Mechanische Lack-Knetbehandlung",
      "2-stufige Hochglanzpolitur",
      "Beseitigung von bis zu 85% aller Swirls",
      "Hybrid-Keramikschutz (12 Monate)",
    ],
    badge: "Bestseller",
    featured: true,
  },
  {
    name: "ULTIMATE 9H CERAMIC",
    tagline: "Das Maximum an Lackkonservierung",
    price: "Ab 990 €",
    duration: "ca. 2 - 3 Tage",
    description: "Die Komplettbehandlung für Sportwagen und Sammlerstücke. Höchste Glashärte und 36 Monate Schutz.",
    features: [
      "3-stufige Showroom-Lackkorrektur",
      "Echte 9H Keramik (2 Schichten)",
      "Keramikversiegelung der Felgen",
      "Hydrophobe Glasversiegelung",
      "Infrarot-Härtung mit Schutzgarantie",
    ],
    badge: "High-End",
    featured: false,
  },
];

export default function PricingSection({ onSelectPackage }: PricingSectionProps) {
  return (
    <section id="pricing" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#0a0a0a]/90 backdrop-blur-md mb-4 shadow-[0_2px_12px_rgba(0,0,0,0.5)]">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm uppercase tracking-wider text-[#D4AF37] font-semibold">
            Transparente Festpreise
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-normal text-white mb-4">
          Investition in den <span className="text-gold-gradient">Werterhalt</span>
        </h2>
        <p className="max-w-2xl text-neutral-300 text-base sm:text-lg leading-relaxed">
          Feste Paketpreise ohne versteckte Kosten. Individuelle Einstufung nach Fahrzeuggröße und Lackzustand.
        </p>
      </div>

      {/* Pricing Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7 items-stretch">
        {PACKAGES.map((pkg, idx) => {
          const isFeatured = pkg.featured;
          return (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className={`relative rounded-2xl p-6 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                isFeatured
                  ? "bg-gradient-to-b from-[#111111] to-[#0a0a0a] border-2 border-[#D4AF37] shadow-[0_4px_35px_rgba(212,175,55,0.2)] md:-translate-y-1.5"
                  : "bg-[#0a0a0a] border border-white/10 hover:border-[#D4AF37]/50"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className={`text-xs uppercase tracking-wider px-3.5 py-1 rounded-full font-semibold ${
                    isFeatured
                      ? "bg-[#D4AF37] text-black shadow-sm"
                      : "bg-white/10 text-[#D4AF37] border border-white/10"
                  }`}>
                    {pkg.badge}
                  </span>
                  <span className="text-xs sm:text-sm text-neutral-400 font-medium">
                    {pkg.duration}
                  </span>
                </div>

                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-normal mb-1.5">
                  {pkg.name}
                </h3>
                <p className="text-sm text-[#D4AF37] font-medium tracking-normal mb-5">{pkg.tagline}</p>

                <div className="text-3xl sm:text-4xl lg:text-5xl font-black text-white mb-5 pb-5 border-b border-white/10">
                  {pkg.price}
                  <span className="text-xs sm:text-sm font-normal text-neutral-400 ml-2">
                    inkl. MwSt.
                  </span>
                </div>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                  {pkg.description}
                </p>

                {/* Features List */}
                <div className="space-y-3 mb-8">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-3 text-sm sm:text-[15px] text-neutral-200 font-medium">
                      <Check className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-4 px-6 rounded-full text-sm uppercase tracking-wider flex items-center justify-center gap-2 font-semibold transition-all cursor-pointer ${
                    isFeatured
                      ? "bg-[#D4AF37] text-black hover:bg-[#E5C358] shadow-[0_2px_15px_rgba(212,175,55,0.25)]"
                      : "bg-white/[0.04] border border-white/15 text-white hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
                  }`}
                >
                  <span>Paket auswählen</span>
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
