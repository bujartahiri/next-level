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
  Check,
  Clock,
} from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const SERVICES = [
  {
    id: "01",
    title: "Außenreinigung",
    headline: "Lackschonende Handwäsche & Dekontamination",
    description:
      "Die Basis jeder erstklassigen Fahrzeugpflege: 100% schonende 2-Eimer-Handwäsche mit pH-neutralen Shampoos, Beseitigung von Flugrost, Teer und Insekten ohne Bürstenkratzer.",
    features: [
      "Schonende 2-Eimer Handwäsche mit Mikrofaser-Handschuhen",
      "Säurefreie Felgen-Tiefenreinigung inkl. Felgenbett",
      "Chemische Flugrost- und Teer-Dekontamination",
      "Reifenglanz-Finish mit UV-Schutz",
      "Streifenfreie Scheibenreinigung außen",
    ],
    duration: "ca. 2 - 3 Stunden",
    price: "Ab 129 €",
    icon: Droplets,
    badge: "Basis & Werterhalt",
  },
  {
    id: "02",
    title: "Innenraumreinigung",
    headline: "Porentiefe Hygiene & Edle Lederaufbereitung",
    description:
      "Verwandelt Ihren Innenraum in ein neuwertiges Wohlfühlambiente. Wir reinigen Teppiche, Polster und Himmel mit Sprühextraktion und pflegen feinstes Leder mit rückfettenden Balsamen.",
    features: [
      "Tiefenreinigung aller Teppiche, Fußmatten & Kofferraum",
      "Porentiefe Reinigung & Imprägnierung von Glatt- & Alcantara-Leder",
      "Detail-Pinselreinigung aller Lüftungsschlitze & Schalter",
      "Hygienische Ozonbehandlung zur Geruchsneutralisierung",
      "Antistatische Pflege matter Armaturenoberflächen",
    ],
    duration: "ca. 4 - 6 Stunden",
    price: "Ab 219 €",
    icon: Sparkles,
    badge: "Wohlfühl-Klima",
  },
  {
    id: "03",
    title: "Lackaufbereitung & Versiegelung",
    headline: "Mehrstufige Politur für spiegelnden Tiefenglanz",
    description:
      "Eliminiert bis zu 95% aller Waschkratzer, Swirls und Hologramme. Unter speziellem Streiflicht bringen wir die wahre Farbtiefe und Brillanz Ihres Lackes wieder vollständig hervor.",
    features: [
      "Exakte Lackschichtdicken-Messung zur Klarlacksicherung",
      "Mehrstufige Schleif- und Hochglanzpolitur (Compound & Finish)",
      "Vollständige Beseitigung von Grauschleiern & Waschkratzern",
      "Entfettung der Lackporen mit Isopropanol",
      "Hybrid-Synthetik- oder Carnaubawachs-Langzeitversiegelung",
    ],
    duration: "ca. 8 - 14 Stunden (1 - 2 Tage)",
    price: "Ab 449 €",
    icon: Layers,
    badge: "Spiegelglanz-Garantie",
  },
  {
    id: "04",
    title: "Keramikversiegelung",
    headline: "9H High-End Langzeitschutz & Hydrophobie",
    description:
      "Die Königsklasse des Lackschutzes: Eine molekulare Siliziumdioxid-Schutzschicht (SiO2/Graphen) härtet kristallklar aus. Extremer Glanz, unvergleichlicher Abperleffekt und Schutz vor Umwelteinflüssen.",
    features: [
      "Inklusive vollständiger Lackkorrektur auf Show-Room-Niveau",
      "9H Härtegrad für spürbaren Schutz vor Mikrokratzern & Säuren",
      "Extremer Lotusblüteneffekt: Schmutz und Wasser perlen mühelos ab",
      "Infrarot-gestützte Einbrennung für maximale molekulare Haftung",
      "Schriftliches Garantiezertifikat über 24 bis 36 Monate",
    ],
    duration: "ca. 16 - 24 Stunden (2 - 3 Tage)",
    price: "Ab 849 €",
    icon: Shield,
    badge: "Königsdisziplin",
    featured: true,
  },
  {
    id: "05",
    title: "Sonderaufbereitung",
    headline: "Leasingrückläufer & Verkaufsaufbereitung",
    description:
      "Vermeiden Sie teure Nachzahlungen bei der Leasingrückgabe oder maximieren Sie den Erlös beim Privatverkauf. Wir beheben Mängel gezielt nach DEKRA-/TÜV-Kriterien.",
    features: [
      "Leasingrückgabe-Check nach offiziellen Prüfstandards",
      "Smart-Repair Beseitigung kleiner Parkschrammen & Dellen",
      "Scheinwerfer-Aufbereitung & Vergilbungsbeseitigung",
      "Kratzerbeseitigung im Einstiegs- und Ladekantenbereich",
      "Fotofertige Verkaufsaufbereitung für maximale Verkaufspreise",
    ],
    duration: "Individuell nach Fahrzeugzustand",
    price: "Auf Anfrage",
    icon: CarFront,
    badge: "Kostenersparnis",
  },
];

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
            Unsere Kernkompetenzen
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-syne text-white mb-4">
          Präzision in <span className="text-gold-gradient">jedem Detail</span>
        </h2>
        <p className="max-w-2xl text-neutral-400 text-sm sm:text-base leading-relaxed">
          Von der schonenden Handwäsche bis zur molekularen 9H Keramikbeschichtung bieten wir 
          individuelle Pflegeprogramme, abgestimmt auf die Anforderungen exklusiver Automobile.
        </p>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((srv, idx) => {
          const Icon = srv.icon;
          const isFeatured = srv.featured;

          return (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`relative flex flex-col justify-between rounded-2xl p-7 transition-all duration-300 group ${
                isFeatured
                  ? "bg-gradient-to-b from-neutral-900 to-neutral-950 border border-[#D4AF37]/60 shadow-[0_0_35px_rgba(212,175,55,0.15)] md:col-span-2 lg:col-span-1"
                  : "bg-neutral-950/80 border border-white/10 hover:border-[#D4AF37]/40"
              }`}
            >
              {/* Header Top */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-2xl font-black font-syne text-[#D4AF37]/40 group-hover:text-[#D4AF37] transition-colors">
                    {srv.id}
                  </span>
                  <span className={`text-[10px] font-mono uppercase tracking-wider px-2.5 py-1 rounded-full ${
                    isFeatured
                      ? "bg-[#D4AF37] text-black font-semibold"
                      : "bg-white/5 border border-white/10 text-[#D4AF37]"
                  }`}>
                    {srv.badge}
                  </span>
                </div>

                <div className="flex items-center gap-3 mb-3">
                  <div className="p-2.5 rounded-xl bg-neutral-900 border border-white/10 text-[#D4AF37] group-hover:border-[#D4AF37]/50 group-hover:bg-[#D4AF37]/10 transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-bold font-syne text-white tracking-wide">
                    {srv.title}
                  </h3>
                </div>

                <p className="text-xs font-medium text-neutral-300 mb-2">
                  {srv.headline}
                </p>

                <p className="text-xs text-neutral-400 leading-relaxed mb-6">
                  {srv.description}
                </p>

                {/* Feature Bullet Points */}
                <div className="space-y-2 mb-6 border-t border-white/5 pt-4">
                  {srv.features.map((feat, fIdx) => (
                    <div key={fIdx} className="flex items-start gap-2 text-xs text-neutral-300">
                      <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
                      <span className="leading-snug">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Bottom Card Footer */}
              <div className="border-t border-white/10 pt-4">
                <div className="flex items-center justify-between text-xs font-mono text-neutral-400 mb-3">
                  <span className="flex items-center gap-1.5">
                    <Clock className="w-3 h-3 text-[#D4AF37]" />
                    {srv.duration}
                  </span>
                  <span className="text-sm font-bold font-syne text-white">
                    {srv.price}
                  </span>
                </div>

                <button
                  onClick={() => onSelectService(srv.title)}
                  className={`w-full py-2.5 px-4 rounded-xl text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all duration-200 ${
                    isFeatured
                      ? "bg-[#D4AF37] text-black font-semibold hover:bg-[#E6CA65] shadow-[0_0_20px_rgba(212,175,55,0.25)]"
                      : "bg-neutral-900 border border-white/10 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
                  }`}
                >
                  <span>Paket anfragen</span>
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
