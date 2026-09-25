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
    tagline: "Handwäsche & Lackschonung",
    description: "Schonende 2-Eimer-Handwäsche mit pH-neutralen Spezialshampoos, Tiefenreinigung der Felgen und vollständige Entfernung von Flugrost und Straßenteer.",
    image: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1000&q=85",
    features: [
      "100% kratzfreie Handwäsche",
      "Säurefreie Felgen-Tiefenreinigung",
      "Flugrost- & Teer-Entfernung",
    ],
    price: "Ab 129 €",
    icon: Droplets,
  },
  {
    id: "02",
    title: "Innenraumreinigung",
    tagline: "Lederpflege & Ozonbehandlung",
    description: "Porentiefe Frische für Ihren Fahrzeuginnenraum. Wir shampoonieren Polster & Teppiche, pflegen hochwertiges Leder mit rückfettenden Balsamen und neutralisieren Gerüche.",
    image: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Tiefen-Nasssaugen aller Polster",
      "Porentiefe Leder- & Alcantara-Pflege",
      "Hygienische Ozonbehandlung",
    ],
    price: "Ab 219 €",
    icon: Sparkles,
  },
  {
    id: "03",
    title: "Lackaufbereitung",
    tagline: "Mehrstufige Hochglanzpolitur",
    description: "Beseitigung von bis zu 95% aller Waschkratzer, Swirls und Grauschleier. Wir polieren ohne Füllstoffe für dauerhaften, makellosen Tiefenglanz.",
    image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Exakte Lackschichtdicken-Messung",
      "Mehrstufige Korrektur & Hochglanz-Finish",
      "Hologrammfreie Farbbrillanz",
    ],
    price: "Ab 449 €",
    icon: Layers,
  },
  {
    id: "04",
    title: "Keramikversiegelung",
    tagline: "9H Langzeitschutz & Hydrophobie",
    description: "Die absolute Spitzenklasse: Eine glasklare 9H-SiO2-Schutzschicht verbindet sich molekular mit dem Klarlack. Extremer Glanz, Schmutzabweisung und Lackschutz für Jahre.",
    image: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Echter 9H Härtegrad (2 Schichten)",
      "Extremer Lotus-Abperleffekt",
      "Bis zu 36 Monate Schutzgarantie",
    ],
    price: "Ab 849 €",
    icon: Shield,
    featured: true,
  },
  {
    id: "05",
    title: "Sonderaufbereitung",
    tagline: "Leasingrückläufer & Smart Repair",
    description: "Schutz vor teuren Überraschungen bei der Leasingrückgabe. Wir beheben kleine Parkschrammen, Dellen und Gebrauchsspuren nach strengen Gutachter-Standards.",
    image: "https://images.unsplash.com/photo-1619405399517-d7fce0f13302?auto=format&fit=crop&w=1000&q=85",
    features: [
      "Leasing-Check nach Dekra-Vorgaben",
      "Smart-Repair & Dellenentfernung",
      "Fotofertige Verkaufsaufbereitung",
    ],
    price: "Auf Anfrage",
    icon: CarFront,
  },
];

export default function ServicesSection({ onSelectService }: ServicesSectionProps) {
  return (
    <section id="services" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 mb-4">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
            Detailing Programme
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-syne text-white mb-4">
          Exklusive <span className="text-gold-gradient">Dienstleistungen</span>
        </h2>
        <p className="max-w-2xl text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Abgestimmt auf die speziellen Anforderungen von Liebhaber- und Sammlerfahrzeugen. 
          Höchste handwerkliche Präzision ohne Kompromisse.
        </p>
      </div>

      {/* High-End Visual Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {SERVICES.map((srv, idx) => {
          const Icon = srv.icon;
          const isFeatured = srv.featured;

          return (
            <motion.div
              key={srv.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.08 }}
              className={`group relative flex flex-col justify-between rounded-3xl overflow-hidden bg-neutral-950 border transition-all duration-300 hover:-translate-y-1.5 ${
                isFeatured
                  ? "border-[#D4AF37] shadow-[0_0_40px_rgba(212,175,55,0.2)] md:col-span-2 lg:col-span-1"
                  : "border-white/15 hover:border-[#D4AF37]/60 hover:shadow-[0_10px_35px_rgba(0,0,0,0.8)]"
              }`}
            >
              {/* Image Preview with Overlay */}
              <div className="relative w-full h-56 overflow-hidden">
                <Image
                  src={srv.image}
                  alt={srv.title}
                  fill
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                  className="object-cover object-center group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/40 to-transparent" />
                
                {/* Number & Icon Overlay */}
                <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                  <span className="text-3xl font-black font-syne text-white drop-shadow-lg">
                    {srv.id}
                  </span>
                  <div className="p-2.5 rounded-xl bg-black/70 backdrop-blur-md border border-white/15 text-[#D4AF37]">
                    <Icon className="w-5 h-5" />
                  </div>
                </div>

                {/* Price Tag in Image */}
                <div className="absolute bottom-3 left-4">
                  <span className="px-3.5 py-1.5 rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-white font-mono text-sm sm:text-base font-bold">
                    {srv.price}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-6 sm:p-7 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="text-xl sm:text-2xl font-bold font-syne text-white mb-1 group-hover:text-[#F3E5AB] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm font-mono text-[#D4AF37] font-semibold mb-3">
                    {srv.tagline}
                  </p>

                  <p className="text-sm sm:text-base text-neutral-300 leading-relaxed mb-6">
                    {srv.description}
                  </p>

                  {/* Feature Checkmarks */}
                  <div className="space-y-2.5 mb-6 pt-4 border-t border-white/10">
                    {srv.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-200">
                        <Check className="w-4 h-4 text-[#D4AF37] shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Action CTA */}
                <div className="pt-4 border-t border-white/10">
                  <button
                    onClick={() => onSelectService(srv.title)}
                    className={`w-full py-3.5 px-5 rounded-xl text-xs sm:text-sm font-mono uppercase tracking-wider font-bold flex items-center justify-center gap-2 transition-all ${
                      isFeatured
                        ? "bg-[#D4AF37] text-black hover:bg-[#E6CA65] shadow-[0_0_20px_rgba(212,175,55,0.3)]"
                        : "bg-neutral-900 border border-white/15 text-white hover:border-[#D4AF37] hover:text-[#D4AF37]"
                    }`}
                  >
                    <span>Dieses Paket buchen</span>
                    <ArrowUpRight className="w-4 h-4" />
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
