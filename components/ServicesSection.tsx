"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  Droplets,
  Layers,
  Shield,
  CarFront,
  ArrowUpRight,
  Check,
} from "lucide-react";

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

const SERVICES = [
  {
    id: "01",
    title: "Außenreinigung",
    tagline: "Schonende 2-Eimer-Handwäsche",
    description: "Kratzfreie Handwäsche mit pH-neutralem Schaum, Felgen-Tiefenreinigung und chemische Flugrostentfernung.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=85",
    features: [
      "100% kratzfreie Handwäsche",
      "Säurefreie Felgenreinigung",
      "Flugrost- & Teerentfernung",
    ],
    price: "Ab 129 €",
    icon: Droplets,
  },
  {
    id: "02",
    title: "Innenraumreinigung",
    tagline: "Tiefenhygiene & Lederpflege",
    description: "Fasertiefe Polsterreinigung, rückfettende Lederpflege und antibakterielle Ozon-Geruchsbeseitigung.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Nassextraktion aller Polster",
      "Porentiefe Leder- & Alcantara-Pflege",
      "Ozon-Geruchsneutralisierung",
    ],
    price: "Ab 219 €",
    icon: Sparkles,
  },
  {
    id: "03",
    title: "Lackaufbereitung",
    tagline: "Mehrstufige Hochglanzpolitur",
    description: "Beseitigung von bis zu 95% aller Waschkratzer und Swirls für ehrlichen, füllstofffreien Tiefenglanz.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Lackschichtdicken-Messung",
      "Mehrstufige Kratzerkorrektur",
      "Hologrammfreies Hochglanz-Finish",
    ],
    price: "Ab 449 €",
    icon: Layers,
  },
  {
    id: "04",
    title: "Keramikversiegelung",
    tagline: "9H Langzeitschutz & Hydrophobie",
    description: "Molekulare 9H-SiO2-Keramikschicht für extremen Lotuseffekt, Chemieresistenz und jahrelangen Werterhalt.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Echter 9H Härtegrad (2 Schichten)",
      "Extremer Selbstreinigungseffekt",
      "Bis zu 36 Monate Schutzgarantie",
    ],
    price: "Ab 849 €",
    icon: Shield,
    featured: true,
  },
  {
    id: "05",
    title: "Sonderaufbereitung",
    tagline: "Leasingrückgabe & Werterhalt",
    description: "Präzise Vorbereitung für Gutachten und Verkauf. Beseitigung kleiner Parkschäden zur Kostensenkung.",
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Leasing-Check nach Gutachter-Norm",
      "Smart-Repair & Dellenbeseitigung",
      "Verkaufsfertiges Showroom-Finish",
    ],
    price: "Auf Anfrage",
    icon: CarFront,
  },
];

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#0a0a0a]/90 backdrop-blur-md mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Dienstleistungen
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
          Handwerk auf <span className="text-gold-gradient">Meisterniveau</span>
        </h2>
        <p className="max-w-xl text-neutral-300 text-sm sm:text-base leading-relaxed">
          Exklusive Pflegeprogramme für anspruchsvolle Liebhaber- und Alltagsfahrzeuge.
        </p>
      </div>

      {/* High-End Visual Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {SERVICES.map((srv, idx) => {
          const Icon = srv.icon;
          const isFeatured = srv.featured;

          return (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.06 }}
              className={`group relative flex flex-col justify-between rounded-2xl overflow-hidden bg-[#0a0a0a] border transition-all duration-300 hover:-translate-y-1 ${
                isFeatured
                  ? "border-[#D4AF37]/80 shadow-[0_4px_30px_rgba(212,175,55,0.15)] md:col-span-2 lg:col-span-1"
                  : "border-white/10 hover:border-[#D4AF37]/50 hover:shadow-[0_8px_30px_rgba(0,0,0,0.6)]"
              }`}
            >
              {/* Image Preview with Overlay */}
              <div className="relative w-full h-52 sm:h-56 overflow-hidden">
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-[#0a0a0a]/50 to-transparent" />
                
                {/* Number & Icon Overlay */}
                <div className="absolute top-3.5 left-3.5 right-3.5 flex items-center justify-between">
                  <span className="text-2xl font-bold text-white/90 drop-shadow-md">
                    {srv.id}
                  </span>
                  <div className="p-2 rounded-lg bg-black/70 backdrop-blur-md border border-white/15 text-[#D4AF37]">
                    <Icon className="w-4 h-4" />
                  </div>
                </div>

                {/* Price Tag in Image */}
                <div className="absolute bottom-3 left-4">
                  <span className="px-3 py-1 rounded-md bg-black/85 backdrop-blur-md border border-white/20 text-white text-xs sm:text-sm font-semibold tracking-wide">
                    {srv.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl font-bold text-white mb-1 group-hover:text-[#F3E5AB] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs text-[#D4AF37] font-medium tracking-wide mb-3">
                    {srv.tagline}
                  </p>

                  <p className="text-sm text-neutral-300 leading-relaxed mb-5">
                    {srv.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <div className="space-y-2 mb-6 pt-3.5 border-t border-white/10">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs text-neutral-200">
                        <Check className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-3.5 border-t border-white/10">
                  <button
                    onClick={() => onSelectService(srv.title)}
                    className={`w-full py-3 px-4 rounded-xl text-xs uppercase tracking-wider font-semibold flex items-center justify-center gap-2 transition-all cursor-pointer ${
                      isFeatured
                        ? "bg-[#D4AF37] text-black hover:bg-[#E5C358] shadow-[0_2px_15px_rgba(212,175,55,0.2)]"
                        : "bg-white/[0.04] border border-white/15 text-white hover:border-[#D4AF37]/60 hover:text-[#D4AF37]"
                    }`}
                  >
                    <span>Dieses Paket buchen</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
}
