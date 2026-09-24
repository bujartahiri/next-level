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
    tagline: "Handwäsche & Innenraum",
    price: "Ab 299 €",
    duration: "ca. 4 Std.",
    features: [
      "Schonende 2-Eimer Handwäsche",
      "Felgen-Tiefenreinigung & Reifenglanz",
      "Gründliche Innenraumreinigung",
      "Sprühversiegelung (2 Monate)",
    ],
    badge: "Basis",
    featured: false,
  },
  {
    name: "MASTER FINISH",
    tagline: "2-Stufen Lackpolitur",
    price: "Ab 599 €",
    duration: "ca. 1 - 2 Tage",
    features: [
      "Inklusive SIGNATURE CARE",
      "2-stufige Politur gegen Swirls",
      "Hybrid-Glanzschutz (12 Monate)",
      "Porentiefe Leder-Imprägnierung",
    ],
    badge: "Bestseller",
    featured: true,
  },
  {
    name: "ULTIMATE 9H",
    tagline: "9H Keramik-Komplettschutz",
    price: "Ab 990 €",
    duration: "ca. 2 - 3 Tage",
    features: [
      "3-stufige Showroom-Lackkorrektur",
      "9H Keramikbeschichtung (2 Lagen)",
      "Felgen- & Glasversiegelung",
      "Garantiezertifikat (bis 36 Monate)",
    ],
    badge: "High-End",
    featured: false,
  },
];

export default function PricingSection({ onSelectPackage }: PricingSectionProps) {
  return (
    <section id="pricing" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-3.5">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
            Paketübersicht
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight font-syne text-white mb-3">
          Transparente <span className="text-gold-gradient">Festpreise</span>
        </h2>
        <p className="max-w-md text-neutral-400 text-xs sm:text-sm leading-relaxed">
          Klare Leistungspakete ohne versteckte Kosten.
        </p>
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
        {PACKAGES.map((pkg, idx) => {
          const isFeatured = pkg.featured;
          return (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.08 }}
              className={`relative rounded-2xl p-6 sm:p-7 flex flex-col justify-between transition-all ${
                isFeatured
                  ? "bg-gradient-to-b from-neutral-900 to-neutral-950 border border-[#D4AF37] shadow-[0_0_35px_rgba(212,175,55,0.15)] md:-translate-y-1.5"
                  : "bg-neutral-950/80 border border-white/10 hover:border-[#D4AF37]/40"
              }`}
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    isFeatured
                      ? "bg-[#D4AF37] text-black font-bold"
                      : "bg-white/5 border border-white/10 text-[#D4AF37]"
                  }`}>
                    {pkg.badge}
                  </span>
                  <span className="text-xs font-mono text-neutral-400">
                    {pkg.duration}
                  </span>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-syne text-white tracking-wide">
                  {pkg.name}
                </h3>
                <p className="text-xs text-[#D4AF37] font-mono mb-4">{pkg.tagline}</p>

                <div className="text-2xl sm:text-3xl font-extrabold font-syne text-white mb-5 pb-4 border-b border-white/10">
                  {pkg.price}
                  <span className="text-xs font-normal text-neutral-400 font-mono ml-1.5">
                    inkl. MwSt.
                  </span>
                </div>

                {/* Features (Exactly 4 concise items) */}
                <div className="space-y-2 mb-6">
                  {pkg.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-center gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <button
                  onClick={() => onSelectPackage(pkg.name)}
                  className={`w-full py-3 px-4 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all font-bold ${
                    isFeatured
                      ? "bg-[#D4AF37] text-black hover:bg-[#E6CA65] shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                      : "bg-neutral-900 border border-white/10 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  }`}
                >
                  <span>Paket wählen</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
