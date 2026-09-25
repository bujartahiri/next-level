"use client";

import React from "react";
import { Phone, MapPin, Clock, MessageCircle, ArrowUpRight, Sparkles, Navigation } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  return (
    <section id="contact" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-16 sm:mb-20">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 mb-4">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
            Kontakt & Studio
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-syne text-white mb-4">
          Termin <span className="text-gold-gradient">vereinbaren</span>
        </h2>
        <p className="max-w-2xl text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Besuchen Sie unser Detailing-Studio oder kontaktieren Sie uns direkt für eine 
          unverbindliche Ersteinschätzung Ihres Fahrzeugzustands.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Card 1: Telefon & WhatsApp */}
        <div className="p-8 sm:p-9 rounded-3xl bg-neutral-950/90 border border-white/15 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-colors">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/15 text-[#D4AF37] flex items-center justify-center mb-6">
              <Phone className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
              Direktkontakt
            </span>
            <h3 className="text-2xl font-bold font-syne text-white mb-3">
              Persönliche Beratung
            </h3>
            <p className="text-sm sm:text-base text-neutral-300 mb-8 leading-relaxed">
              Rufen Sie uns direkt an oder schreiben Sie uns bequem per WhatsApp.
            </p>
          </div>

          <div className="space-y-3.5">
            <button
              onClick={onOpenBooking}
              className="w-full py-4 px-5 rounded-xl bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-bold text-sm sm:text-base font-mono uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] active:scale-95"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>WhatsApp Chat starten</span>
            </button>

            <a
              href="tel:+491761234567"
              className="w-full py-3.5 px-5 rounded-xl bg-neutral-900 border border-white/15 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-sm font-mono uppercase tracking-wider flex items-center justify-between transition-colors"
            >
              <span>+49 176 123 45 67</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Card 2: Standort */}
        <div className="p-8 sm:p-9 rounded-3xl bg-neutral-950/90 border border-white/15 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-colors">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/15 text-[#D4AF37] flex items-center justify-center mb-6">
              <MapPin className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
              Standort
            </span>
            <h3 className="text-2xl font-bold font-syne text-white mb-3">
              Detailing Studio
            </h3>
            <p className="text-base sm:text-lg text-white font-mono font-medium mb-1">
              Musterstraße 12
            </p>
            <p className="text-sm sm:text-base text-neutral-300 font-mono mb-8">
              12345 Musterstadt, Deutschland
            </p>
          </div>

          <div>
            <a
              href="https://maps.google.com/?q=Musterstraße+12+12345+Musterstadt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-5 rounded-xl bg-neutral-900 border border-white/15 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-sm font-mono uppercase tracking-wider flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <Navigation className="w-4 h-4 text-[#D4AF37]" />
                <span>Navigation starten</span>
              </div>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Card 3: Öffnungszeiten & Social */}
        <div className="p-8 sm:p-9 rounded-3xl bg-neutral-950/90 border border-white/15 flex flex-col justify-between hover:border-[#D4AF37]/50 transition-colors">
          <div>
            <div className="w-14 h-14 rounded-2xl bg-neutral-900 border border-white/15 text-[#D4AF37] flex items-center justify-center mb-6">
              <Clock className="w-7 h-7" />
            </div>
            <span className="text-xs font-mono uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
              Verfügbarkeit
            </span>
            <h3 className="text-2xl font-bold font-syne text-white mb-4">
              Öffnungszeiten
            </h3>

            <div className="space-y-2.5 text-sm sm:text-base text-neutral-200 font-mono mb-8">
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-neutral-400">Mo – Fr:</span>
                <span className="text-white font-bold">08:00 – 18:00 Uhr</span>
              </div>
              <div className="flex justify-between pb-2 border-b border-white/5">
                <span className="text-neutral-400">Samstag:</span>
                <span className="text-white font-bold">09:00 – 15:00 Uhr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-400">Sonntag:</span>
                <span className="text-[#D4AF37] font-bold">Nach Absprache</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href="https://www.instagram.com/nextlevel_fahrzeugpflege"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-4 px-5 rounded-xl bg-neutral-900 border border-white/15 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-sm font-mono uppercase tracking-wider flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2.5">
                <InstagramIcon className="w-5 h-5 text-[#D4AF37]" />
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
