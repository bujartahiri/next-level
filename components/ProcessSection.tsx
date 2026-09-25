"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gauge, Sparkles, Shield, Flame, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Diagnose & Lackmessung",
    desc: "Präzise Ultraschall-Schichtdickenmessung unter 5000K-Tageslichtstrahlern zur Ermittlung der maximalen Poliertiefe.",
    icon: Gauge,
  },
  {
    step: "02",
    title: "Dekontamination",
    desc: "Schonende 2-Eimer-Handwäsche und mechanische Knetbehandlung zur rückstandslosen Beseitigung von Flugrost und Harz.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Mehrstufige Politur",
    desc: "Korrektur aller Waschkratzer und Swirls ohne Füllstoffe für dauerhaften, ehrlichen Spiegelglanz auf Showroom-Niveau.",
    icon: Shield,
  },
  {
    step: "04",
    title: "9H Keramik & Härtung",
    desc: "Zertifizierter Auftrag von molekularem 9H-SiO2-Schutz mit Infrarot-Einbrennung für maximale Glashärte und Hydrophobie.",
    icon: Flame,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 mb-4">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
            Zertifizierter Ablauf
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-syne text-white mb-4">
          Die Kunst der <span className="text-gold-gradient">Perfektion</span>
        </h2>
        <p className="max-w-2xl text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Vier strukturierte Phasen für meisterhafte Lackkorrektur und dauerhaften Werterhalt.
        </p>
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
        {STEPS.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="p-7 sm:p-8 rounded-3xl bg-neutral-950/90 border border-white/15 hover:border-[#D4AF37]/60 transition-all duration-300 flex flex-col justify-between group shadow-xl hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-6">
                  <span className="text-4xl sm:text-5xl font-black font-syne text-[#D4AF37]/35 group-hover:text-[#D4AF37] transition-colors">
                    {s.step}
                  </span>
                  <div className="p-3 rounded-xl bg-neutral-900 border border-white/10 text-[#D4AF37]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                <h3 className="text-lg sm:text-xl font-bold font-syne text-white tracking-wide mb-3">
                  {s.title}
                </h3>

                <p className="text-sm sm:text-base text-neutral-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-8 pt-4 border-t border-white/10 flex items-center gap-2 text-xs font-mono text-[#D4AF37] font-semibold">
                <CheckCircle2 className="w-4 h-4" />
                <span>Meisterstandard</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
