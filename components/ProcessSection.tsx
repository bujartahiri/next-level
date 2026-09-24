"use client";

import React from "react";
import { motion } from "framer-motion";
import { Gauge, Sparkles, Shield, Flame, CheckCircle } from "lucide-react";

const STEPS = [
  {
    step: "01",
    title: "Detail-Diagnose & Lackschichtmessung",
    desc: "Präzise Inspektion unter 5000K-Tageslichtstrahlern. Wir messen die Klarlackstärke mikrometergenau, um ein sicheres und materialschonendes Polieren zu garantieren.",
    icon: Gauge,
  },
  {
    step: "02",
    title: "pH-Neutrale Dekontamination",
    desc: "Vorwäsche mit Aktivschaum, 2-Eimer-Handwäsche und mechanische Reinigung mit Detailing-Knete zur Beseitigung eingebrannter Industriestäube, Teer und Baumharz.",
    icon: Sparkles,
  },
  {
    step: "03",
    title: "Mehrstufige Mikropolitur",
    desc: "Schrittweise Beseitigung aller Waschkratzer und Trübungen. Wir polieren ohne Füllstoffe für ein ehrliches, hologrammfreies und dauerhaftes Spiegelglanzergebnis.",
    icon: Shield,
  },
  {
    step: "04",
    title: "Keramikversiegelung & IR-Härtung",
    desc: "Auftrag hochreiner 9H-SiO2-Keramik oder Graphen-Schichten. Mittels kurzwelliger Infrarotstrahler härten wir die Schutzschicht für maximale Beständigkeit aus.",
    icon: Flame,
  },
];

export default function ProcessSection() {
  return (
    <section id="process" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
            Unser 4-Stufen-Verfahren
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-syne text-white mb-4">
          Die Kunst der <span className="text-gold-gradient">Perfektion</span>
        </h2>
        <p className="max-w-2xl text-neutral-400 text-sm sm:text-base leading-relaxed">
          Keine Kompromisse, keine Schnellabfertigung. Jedes Fahrzeug durchläuft unseren 
          zertifizierten Präzisionsprozess für unvergleichliche Lacktiefe und dauerhaften Werterhalt.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {STEPS.map((s, idx) => {
          const Icon = s.icon;
          return (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className="relative p-6 rounded-2xl bg-neutral-950 border border-white/10 hover:border-[#D4AF37]/40 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-syne text-[#D4AF37]/30 group-hover:text-[#D4AF37] transition-colors">
                    {s.step}
                  </span>
                  <div className="p-2 rounded-lg bg-neutral-900 border border-white/5 text-[#D4AF37]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                <h3 className="text-base font-bold font-syne text-white tracking-wide mb-2">
                  {s.title}
                </h3>

                <p className="text-xs text-neutral-400 leading-relaxed">
                  {s.desc}
                </p>
              </div>

              <div className="mt-6 pt-4 border-t border-white/5 flex items-center gap-1.5 text-[10px] font-mono text-[#D4AF37]">
                <CheckCircle className="w-3.5 h-3.5" />
                <span>Next-Level Qualitätsstandard</span>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
