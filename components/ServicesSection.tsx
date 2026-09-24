"use client";

import React from "react";
import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  Layers,
  Shield,
  CarFront,
  ArrowUpRight,
} from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const SERVICES = [
  {
    id: "01",
    title: "Außenreinigung",
    description: "Schonende 2-Eimer-Handwäsche, Felgen-Tiefenreinigung und sanfte Lackschonung.",
    tags: ["2-Eimer Wäsche", "Felgentiefenreinigung", "Flugrostentfernung"],
    price: "Ab 129 €",
    icon: Droplets,
    badge: "Basis",
  },
  {
    id: "02",
    title: "Innenraumreinigung",
    description: "Porentiefe Hygiene für Polster & Teppiche, Lederpflege und Geruchsneutralisierung.",
    tags: ["Lederaufbereitung", "Nasssaugen", "Ozonbehandlung"],
    price: "Ab 219 €",
    icon: Sparkles,
    badge: "Hygiene",
  },
  {
    id: "03",
    title: "Lackaufbereitung",
    description: "Mehrstufige Maschinenpolitur für spiegelnden Glanz und Beseitigung von Waschkratzern.",
    tags: ["Kratzerbeseitigung", "Hologrammfrei", "Spiegelglanz"],
    price: "Ab 449 €",
    icon: Layers,
    badge: "Tiefenglanz",
  },
  {
    id: "04",
    title: "Keramikversiegelung",
    description: "Molekularer 9H-Langzeitschutz mit extremem Lotus-Abperleffekt und Werterhalt.",
    tags: ["9H Schutz", "Lotus-Effekt", "Bis 36 Monate"],
    price: "Ab 849 €",
    icon: Shield,
    badge: "Bestseller",
    featured: true,
  },
  {
    id: "05",
    title: "Sonderaufbereitung",
    description: "Gezielte Leasingrückläufer-Aufbereitung und Smart Repair vor der Fahrzeugabgabe.",
    tags: ["Leasing-Check", "Smart Repair", "Verkaufsvorbereitung"],
    price: "Auf Anfrage",
    icon: CarFront,
    badge: "Werterhalt",
  },
];

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Concise Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-3.5">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
            Leistungen
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight font-syne text-white mb-3">
          Präzision in <span className="text-gold-gradient">jedem Schritt</span>
        </h2>
        <p className="max-w-xl text-neutral-400 text-xs sm:text-sm leading-relaxed">
          Maßgeschneiderte Pflegeprogramme für exklusive Fahrzeuge. Auf den Punkt, meisterhaft ausgeführt.
        </p>
      </div>

      {/* Simplified Mobile-First Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {SERVICES.map((srv, idx) => {
          const Icon = srv.icon;
          const isFeatured = srv.featured;

          return (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: idx * 0.06 }}
              className={`relative flex flex-col justify-between rounded-2xl p-5 sm:p-6 transition-all duration-200 group ${
                isFeatured
                  ? "bg-gradient-to-b from-neutral-900 to-neutral-950 border border-[#D4AF37]/50 shadow-[0_0_30px_rgba(212,175,55,0.12)] md:col-span-2 lg:col-span-1"
                  : "bg-neutral-950/80 border border-white/10 hover:border-[#D4AF37]/40"
              }`}
            >
              <div>
                {/* Top Badge & Number */}
                <div className="flex items-center justify-between mb-4">
                  <span className="text-xl sm:text-2xl font-black font-syne text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors">
                    {srv.id}
                  </span>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-0.5 rounded-full ${
                    isFeatured
                      ? "bg-[#D4AF37] text-black font-semibold"
                      : "bg-white/5 border border-white/10 text-neutral-300"
                  }`}>
                    {srv.badge}
                  </span>
                </div>

                {/* Title & Icon */}
                <div className="flex items-center gap-3 mb-2.5">
                  <div className="p-2 rounded-lg bg-neutral-900 border border-white/10 text-[#D4AF37]">
                    <Icon className="w-4 h-4" />
                  </div>
                  <h3 className="text-base sm:text-lg font-bold font-syne text-white tracking-wide">
                    {srv.title}
                  </h3>
                </div>

                {/* Straight to the point 1-sentence description */}
                <p className="text-xs text-neutral-300/90 leading-relaxed mb-4">
                  {srv.description}
                </p>

                {/* Compact Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {srv.tags.map((tag, tIdx) => (
                    <span
                      key={tIdx}
                      className="text-[10px] font-mono text-neutral-400 bg-white/5 border border-white/5 px-2 py-0.5 rounded-md"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Bottom Card Bar */}
              <div className="border-t border-white/10 pt-3.5 flex items-center justify-between gap-3">
                <span className="text-xs sm:text-sm font-bold font-syne text-white">
                  {srv.price}
                </span>

                <button
                  onClick={() => onSelectService(srv.title)}
                  className={`py-2 px-3.5 rounded-lg text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-all ${
                    isFeatured
                      ? "bg-[#D4AF37] text-black font-semibold hover:bg-[#E6CA65]"
                      : "bg-neutral-900 border border-white/10 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  }`}
                >
                  <span>Anfragen</span>
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
