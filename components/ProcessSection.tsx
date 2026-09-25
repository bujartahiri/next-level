"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gauge, Sparkles, Shield, Flame, CheckCircle2 } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Diagnose & Messung",
    desc: "Schichtdickenmessung unter Tageslichtstrahlern zur präzisen Ermittlung der sicheren Poliertiefe.",
    icon: Gauge,
  },
  {
    step: "02",
    title: "Dekontamination",
    desc: "Schonende 2-Eimer-Handwäsche und Lackknete zur rückstandsfreien Beseitigung aller Ablagerungen.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Mehrstufige Politur",
    desc: "Korrektur aller Waschkratzer ohne Füllstoffe für dauerhaften, ehrlichen Showroom-Spiegelglanz.",
    icon: Shield,
  },
  {
    step: "04",
    title: "9H Versiegelung",
    desc: "Molekularer 9H-SiO2-Auftrag mit Infrarot-Härtung für maximale Härte und extremen Abperleffekt.",
    icon: Flame,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#0a0a0a]/90 backdrop-blur-md mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Zertifizierter Ablauf
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
          Präzision in <span className="text-gold-gradient">vier Phasen</span>
        </h2>
        <p className="max-w-xl text-neutral-300 text-sm sm:text-base leading-relaxed">
          Systematisches Vorgehen für maximale Lackschonung und dauerhaften Werterhalt.
        </p>
      </div>

      {/* Grid of Steps */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 sm:gap-6">
        {STEPS.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="p-6 sm:p-7 rounded-2xl bg-[#0a0a0a] border border-white/10 hover:border-[#D4AF37]/50 transition-all duration-300 flex flex-col justify-between group shadow-lg hover:-translate-y-1"
            >
              <div>
                <div className="flex items-center justify-between mb-5">
                  <span className="text-3xl sm:text-4xl font-bold text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors">
                    {s.step}
                  </span>
                  <div className="p-2.5 rounded-xl bg-white/[0.03] border border-white/10 text-[#D4AF37]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base sm:text-lg font-bold text-white tracking-tight mb-2">
                  {s.title}
                </h3>

                <p className="text-sm text-neutral-300 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-3.5 border-t border-white/10 flex items-center gap-2 text-xs text-[#D4AF37] font-medium tracking-wide">
                <CheckCircle2 className="w-3.5 h-3.5" />
                <span>Meisterstandard</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
