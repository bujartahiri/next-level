"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gauge, Sparkles, Shield, Flame } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Diagnose",
    desc: "Lackschichtdicken-Messung und visuelle Defektanalyse.",
    icon: Gauge,
  },
  {
    step: "02",
    title: "Vorreinigung",
    desc: "pH-neutrale 2-Eimer Handwäsche und Knet-Dekontamination.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Korrektur",
    desc: "Mehrstufige Mikropolitur zur rückstandslosen Swirl-Beseitigung.",
    icon: Shield,
  },
  {
    step: "04",
    title: "Versiegelung",
    desc: "Zertifizierte 9H Keramikversiegelung mit Infrarot-Aushärtung.",
    icon: Flame,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-3.5">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
            Ablauf
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight font-syne text-white mb-3">
          Präzision in <span className="text-gold-gradient">4 Schritten</span>
        </h2>
        <p className="max-w-md text-neutral-400 text-xs sm:text-sm leading-relaxed">
          Strukturierte Abläufe für dauerhafte Lackperfektion und Werterhalt.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {STEPS.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className="p-4 sm:p-5 rounded-xl bg-neutral-950/80 border border-white/10 hover:border-[#D4AF37]/40 transition-colors flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xl sm:text-2xl font-black font-syne text-[#D4AF37]/40">
                    {s.step}
                  </span>
                  <div className="p-1.5 rounded-lg bg-neutral-900 border border-white/5 text-[#D4AF37]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-sm sm:text-base font-bold font-syne text-white tracking-wide mb-1.5">
                  {s.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
