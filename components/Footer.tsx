"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, Sparkles, ArrowUp, RotateCcw } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

interface FooterProps {
  onReplayIntro?: () => void;
}

export default function Footer({ onReplayIntro }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020202] border-t border-white/10 pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-8">
                <Image
                  src="/images/loader/car.png"
                  alt="NEXT LEVEL Logo"
                  fill
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-sm font-extrabold tracking-[0.2em] font-syne text-white uppercase">
                  NEXT LEVEL
                </span>
                <span className="text-[9px] tracking-[0.35em] text-[#D4AF37] uppercase font-mono font-semibold">
                  FAHRZEUGPFLEGE
                </span>
              </div>
            </Link>

            <p className="text-xs font-mono text-[#D4AF37] tracking-widest uppercase">
              SAUBER &bull; GEPFLEGT &bull; WERTBESTÄNDIG
            </p>

            <p className="text-xs text-neutral-400 leading-relaxed max-w-sm">
              "Mehr als nur sauber." Exklusive High-End Fahrzeugaufbereitung, mehrstufige Lackpolitur 
              und 9H Keramikversiegelung für Liebhaberfahrzeuge und Supersportwagen.
            </p>

            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center gap-2 text-xs font-mono uppercase text-neutral-400 hover:text-[#D4AF37] transition-colors py-1"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Intro-Animation ansehen</span>
              </button>
            )}
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">
              Leistungen
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-mono">
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  &bull; 9H Keramikversiegelung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  &bull; Mehrstufige Lackaufbereitung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  &bull; Porentiefe Innenraumreinigung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  &bull; Handwäsche & Felgentiefenreinigung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  &bull; Leasingrückläufer-Aufbereitung
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Admin */}
          <div>
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">
              Navigation & Studio
            </h4>
            <ul className="space-y-2.5 text-xs text-neutral-400 font-mono">
              <li>
                <a href="#gallery" className="hover:text-[#D4AF37] transition-colors">
                  Vorher / Nachher Galerie
                </a>
              </li>
              <li>
                <a href="#process" className="hover:text-[#D4AF37] transition-colors">
                  Das 4-Stufen-Verfahren
                </a>
              </li>
              <li>
                <a href="#pricing" className="hover:text-[#D4AF37] transition-colors">
                  Pakete & Preisübersicht
                </a>
              </li>
              <li>
                <a href="#contact" className="hover:text-[#D4AF37] transition-colors">
                  Kontakt & Anfahrt
                </a>
              </li>
              <li className="pt-2">
                <Link href="/admin" className="text-[#D4AF37]/80 hover:text-[#D4AF37] transition-colors flex items-center gap-1.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
                  <span>Admin CMS Login</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-3">
            <h4 className="text-xs font-mono uppercase tracking-[0.2em] text-white font-semibold mb-4">
              Direktkontakt
            </h4>
            <div className="flex items-center gap-2.5 text-xs text-neutral-300 font-mono">
              <Phone className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a href="tel:+491761234567" className="hover:text-[#D4AF37] transition-colors">
                +49 176 123 45 67
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs text-neutral-300 font-mono">
              <InstagramIcon className="w-4 h-4 text-[#D4AF37] shrink-0" />
              <a
                href="https://www.instagram.com/nextlevel_fahrzeugpflege"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors"
              >
                @nextlevel_fahrzeugpflege
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs text-neutral-400 font-mono pt-1">
              <MapPin className="w-4 h-4 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>Musterstraße 12, 12345 Musterstadt</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-white/5 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-500 font-mono">
          <div className="flex items-center gap-6">
            <span>&copy; {new Date().getFullYear()} NEXT LEVEL FAHRZEUGPFLEGE. Alle Rechte vorbehalten.</span>
          </div>

          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-neutral-300 transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-neutral-300 transition-colors">
              Datenschutz
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#D4AF37] text-neutral-400 hover:text-white transition-colors"
              title="Nach oben scrollen"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
