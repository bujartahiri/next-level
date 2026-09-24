"use client";

import React from "react";
import { Phone, MapPin, Clock, MessageCircle, ArrowUpRight, Sparkles, Navigation } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  return (
    <section id="contact" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-3.5">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
            Kontakt & Studio
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight font-syne text-white mb-3">
          Termin <span className="text-gold-gradient">vereinbaren</span>
        </h2>
        <p className="max-w-md text-neutral-400 text-xs sm:text-sm leading-relaxed">
          Schreiben Sie uns oder rufen Sie direkt an für eine persönliche Beratung.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
        
        {/* Card 1: Telefon & WhatsApp */}
        <div className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 text-[#D4AF37] flex items-center justify-center mb-4">
              <Phone className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-syne text-white mb-1">
              Direktkontakt
            </h3>
            <p className="text-xs text-neutral-400 mb-5">
              Rückmeldung meist innerhalb von 30 Minuten.
            </p>
          </div>

          <div className="space-y-2.5">
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(212,175,55,0.2)]"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>WhatsApp Chat</span>
            </button>

            <a
              href="tel:+491761234567"
              className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-colors"
            >
              <span>+49 176 123 45 67</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 2: Standort */}
        <div className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 text-[#D4AF37] flex items-center justify-center mb-4">
              <MapPin className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-syne text-white mb-1">
              Studio & Werkstatt
            </h3>
            <p className="text-xs text-neutral-300 font-mono mb-1">
              Musterstraße 12
            </p>
            <p className="text-xs text-neutral-400 font-mono mb-5">
              12345 Musterstadt
            </p>
          </div>

          <div>
            <a
              href="https://maps.google.com/?q=Musterstraße+12+12345+Musterstadt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Navigation starten</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

        {/* Card 3: Zeiten & Social */}
        <div className="p-6 rounded-2xl bg-neutral-950/80 border border-white/10 flex flex-col justify-between">
          <div>
            <div className="w-10 h-10 rounded-xl bg-neutral-900 border border-white/10 text-[#D4AF37] flex items-center justify-center mb-4">
              <Clock className="w-5 h-5" />
            </div>
            <h3 className="text-base font-bold font-syne text-white mb-2">
              Öffnungszeiten
            </h3>

            <div className="space-y-1 text-xs text-neutral-300 font-mono mb-5">
              <div className="flex justify-between">
                <span className="text-neutral-500">Mo – Fr:</span>
                <span>08:00 – 18:00 Uhr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Samstag:</span>
                <span>09:00 – 15:00 Uhr</span>
              </div>
            </div>
          </div>

          <div>
            <a
              href="https://www.instagram.com/nextlevel_fahrzeugpflege"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-2.5 px-4 rounded-xl bg-neutral-900 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <InstagramIcon className="w-4 h-4 text-[#D4AF37]" />
                <span>Instagram Feed</span>
              </div>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
