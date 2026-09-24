"use client";

import React from "react";
import { Phone, MapPin, Clock, MessageCircle, ArrowUpRight, Sparkles, Navigation } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

interface ContactSectionProps {
  onOpenBooking: () => void;
}

export default function ContactSection({ onOpenBooking }: ContactSectionProps) {
  return (
    <section id="contact" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      <div className="flex flex-col items-center text-center mb-16">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
            Kontakt & Anfahrt
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-syne text-white mb-4">
          Ihr Fahrzeug in <span className="text-gold-gradient">Meisterhänden</span>
        </h2>
        <p className="max-w-2xl text-neutral-400 text-sm sm:text-base leading-relaxed">
          Besuchen Sie unser Detailing-Studio oder vereinbaren Sie vorab einen persönlichen Termin. 
          Wir beraten Sie umfassend zu Lackzustand und optimalen Schutzoptionen.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Card 1: Direct Contact & Phone */}
        <div className="p-8 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col justify-between group hover:border-[#D4AF37]/40 transition-colors">
          <div>
            <div className="p-3 w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 text-[#D4AF37] flex items-center justify-center mb-6">
              <Phone className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] block mb-1">
              Telefon & WhatsApp
            </span>
            <h3 className="text-xl font-bold font-syne text-white mb-2">
              Direkter Draht
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
              Rufen Sie uns direkt an oder schreiben Sie uns per WhatsApp für eine unverbindliche Ersteinschätzung.
            </p>
          </div>

          <div className="space-y-3">
            <a
              href="tel:+491761234567"
              className="w-full py-3 px-4 rounded-xl bg-neutral-900 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-colors"
            >
              <span>+49 176 123 45 67</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>

            <button
              onClick={onOpenBooking}
              className="w-full py-3 px-4 rounded-xl bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_20px_rgba(212,175,55,0.25)]"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>WhatsApp Chat starten</span>
            </button>
          </div>
        </div>

        {/* Card 2: Instagram Community */}
        <div className="p-8 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col justify-between group hover:border-[#D4AF37]/40 transition-colors">
          <div>
            <div className="p-3 w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 text-[#D4AF37] flex items-center justify-center mb-6">
              <InstagramIcon className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] block mb-1">
              Social Media
            </span>
            <h3 className="text-xl font-bold font-syne text-white mb-2">
              @nextlevel_fahrzeugpflege
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-6">
              Folgen Sie uns auf Instagram für tägliche Story-Einblicke, Vorher-/Nachher-Reels und aktuelle Supercar-Projekte.
            </p>
          </div>

          <div>
            <a
              href="https://www.instagram.com/nextlevel_fahrzeugpflege"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-neutral-900 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-colors"
            >
              <span>Instagram Profil öffnen</span>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Card 3: Location & Hours */}
        <div className="p-8 rounded-2xl bg-neutral-950 border border-white/10 flex flex-col justify-between group hover:border-[#D4AF37]/40 transition-colors">
          <div>
            <div className="p-3 w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 text-[#D4AF37] flex items-center justify-center mb-6">
              <MapPin className="w-6 h-6" />
            </div>
            <span className="text-[11px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] block mb-1">
              Standort & Zeiten
            </span>
            <h3 className="text-xl font-bold font-syne text-white mb-2">
              Musterstraße 12
            </h3>
            <p className="text-xs text-neutral-400 leading-relaxed mb-4">
              12345 Musterstadt, Deutschland
            </p>

            <div className="space-y-1.5 text-xs text-neutral-300 font-mono border-t border-white/5 pt-3">
              <div className="flex justify-between">
                <span className="text-neutral-500">Mo – Fr:</span>
                <span>08:00 – 18:00 Uhr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Samstag:</span>
                <span>09:00 – 15:00 Uhr</span>
              </div>
              <div className="flex justify-between">
                <span className="text-neutral-500">Sonntag:</span>
                <span className="text-[#D4AF37]">Nach Vereinbarung</span>
              </div>
            </div>
          </div>

          <div className="pt-6">
            <a
              href="https://maps.google.com/?q=Musterstraße+12+12345+Musterstadt"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 px-4 rounded-xl bg-neutral-900 border border-white/10 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-colors"
            >
              <div className="flex items-center gap-2">
                <Navigation className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Route planen</span>
              </div>
              <ArrowUpRight className="w-4 h-4" />
            </a>
          </div>
        </div>

      </div>
    </section>
  );
}
