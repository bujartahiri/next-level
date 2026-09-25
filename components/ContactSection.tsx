"use client";

import React from "react";
import { Phone, MapPin, Clock, MessageCircle, ArrowUpRight, Sparkles, Navigation } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  return (
    <section id="contact" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-14 sm:mb-18">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#0a0a0a]/90 backdrop-blur-md mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Kontakt & Studio
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
          Termin <span className="text-gold-gradient">vereinbaren</span>
        </h2>
        <p className="max-w-xl text-neutral-300 text-sm sm:text-base leading-relaxed">
          Kontaktieren Sie uns direkt für eine unverbindliche Ersteinschätzung Ihres Fahrzeugzustands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        
        {/* Card 1: Telefon & WhatsApp */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-colors">
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 text-[#D4AF37] flex items-center justify-center mb-5">
              <Phone className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
              Direktkontakt
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              Persönliche Beratung
            </h3>
            <p className="text-sm text-neutral-300 mb-6 leading-relaxed">
              Rufen Sie uns direkt an oder schreiben Sie uns per WhatsApp.
            </p>
          </div>

          <div className="space-y-3">
            <button
              onClick={onOpenBooking}
              className="w-full py-3.5 px-5 rounded-full bg-[#D4AF37] hover:bg-[#E5C358] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_2px_15px_rgba(212,175,55,0.25)] active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>WhatsApp Chat starten</span>
            </button>

            <a
              href="tel:+491761234567"
              className="w-full py-3 px-5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/60 text-white hover:text-[#D4AF37] text-xs uppercase tracking-wider flex items-center justify-between transition-colors"
            >
              <span>+49 176 123 45 67</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Card 2: Standort */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-colors">
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 text-[#D4AF37] flex items-center justify-center mb-5">
              <MapPin className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
              Standort
            </span>
            <h3 className="text-xl font-bold text-white mb-2">
              Detailing Studio
            </h3>
            <p className="text-base text-white font-medium mb-1">
              Musterstraße 12
            </p>
            <p className="text-sm text-neutral-300 mb-6">
              12345 Musterstadt, Deutschland
            </p>
          </div>

          <div>
            <a
              href="https://maps.google.com/?q=Musterstraße+12+12345+Musterstadt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/60 text-white hover:text-[#D4AF37] text-xs uppercase tracking-wider flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Navigation starten</span>
              </div>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Card 3: Öffnungszeiten & Social */}
        <div className="p-6 sm:p-8 rounded-2xl bg-[#0a0a0a] border border-white/10 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-colors">
          <div>
            <div className="w-12 h-12 rounded-xl bg-white/[0.03] border border-white/10 text-[#D4AF37] flex items-center justify-center mb-5">
              <Clock className="w-5 h-5" />
            </div>
            <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
              Verfügbarkeit
            </span>
            <h3 className="text-xl font-bold text-white mb-4">
              Öffnungszeiten
            </h3>

            <div className="space-y-2.5 text-xs sm:text-sm text-neutral-200 mb-6">
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-neutral-400">Mo – Fr:</span>
                <span className="text-white font-semibold">08:00 – 18:00 Uhr</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-neutral-400">Samstag:</span>
                <span className="text-white font-semibold">09:00 – 15:00 Uhr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Sonntag:</span>
                <span className="text-[#D4AF37] font-semibold">Nach Absprache</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href="https://www.instagram.com/nextlevel_fahrzeugpflege"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-5 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#D4AF37]/60 text-white hover:text-[#D4AF37] text-xs uppercase tracking-wider flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#D4AF37]" />
                <span>Instagram Feed</span>
              </div>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
