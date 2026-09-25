"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MapPin, ArrowUp, RotateCcw } from "lucide-react";
import { InstagramIcon } from "@/components/icons/InstagramIcon";

interface FooterProps {
  onReplayIntro?: () => void;
}

export default function Footer({ onReplayIntro }: FooterProps) {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-[#020202] border-t border-white/10 pt-16 sm:pt-20 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 mb-14">
          
          {/* Col 1: Brand & Slogan */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-3">
              <div className="relative w-14 h-8">
                <Image
                  src="/images/loader/car.png"
                  alt="NEXT LEVEL Logo"
                  fill
                  sizes="56px"
                  className="object-contain"
                />
              </div>
              <div className="flex flex-col">
                <span className="text-base font-bold tracking-[0.22em] text-white uppercase">
                  NEXT LEVEL
                </span>
                <span className="text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-semibold">
                  FAHRZEUGPFLEGE
                </span>
              </div>
            </Link>

            <p className="text-xs text-[#D4AF37] tracking-[0.25em] uppercase font-medium">
              SAUBER &bull; GEPFLEGT &bull; WERTBESTÄNDIG
            </p>

            <p className="text-xs sm:text-sm text-neutral-400 leading-relaxed max-w-sm">
              &bdquo;Mehr als nur sauber.&ldquo; Exklusive High-End Fahrzeugaufbereitung, mehrstufige Lackpolitur 
              und zertifizierte 9H Keramikversiegelung.
            </p>

            {onReplayIntro && (
              <button
                onClick={onReplayIntro}
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider text-neutral-400 hover:text-[#D4AF37] transition-colors py-1 cursor-pointer"
              >
                <RotateCcw className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span>Intro-Animation ansehen</span>
              </button>
            )}
          </div>

          {/* Col 2: Core Services */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-4">
              Leistungen
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  9H Keramikversiegelung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Mehrstufige Lackaufbereitung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Porentiefe Innenraumreinigung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Handwäsche & Felgentiefenreinigung
                </a>
              </li>
              <li>
                <a href="#services" className="hover:text-[#D4AF37] transition-colors">
                  Leasingrückläufer-Aufbereitung
                </a>
              </li>
            </ul>
          </div>

          {/* Col 3: Navigation & Admin */}
          <div>
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-4">
              Navigation
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm text-neutral-400">
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
                <Link href="/admin" className="text-[#D4AF37] hover:text-[#F3E5AB] font-medium transition-colors flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
                  <span>Admin CMS Login</span>
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 4: Contact & Social */}
          <div className="space-y-3.5">
            <h4 className="text-xs uppercase tracking-[0.2em] text-white font-semibold mb-4">
              Direktkontakt
            </h4>
            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
              <Phone className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <a href="tel:+491761234567" className="hover:text-[#D4AF37] transition-colors">
                +49 176 123 45 67
              </a>
            </div>

            <div className="flex items-center gap-2.5 text-xs sm:text-sm text-neutral-300">
              <InstagramIcon className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
              <a
                href="https://www.instagram.com/nextlevel_fahrzeugpflege"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-[#D4AF37] transition-colors"
              >
                @nextlevel_fahrzeugpflege
              </a>
            </div>

            <div className="flex items-start gap-2.5 text-xs sm:text-sm text-neutral-400 pt-1">
              <MapPin className="w-3.5 h-3.5 text-[#D4AF37] shrink-0 mt-0.5" />
              <span>Musterstraße 12, 12345 Musterstadt</span>
            </div>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Legal */}
        <div className="border-t border-white/10 pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-neutral-400">
          <div>
            &copy; {new Date().getFullYear()} NEXT LEVEL FAHRZEUGPFLEGE. Alle Rechte vorbehalten.
          </div>

          <div className="flex items-center gap-6">
            <Link href="/impressum" className="hover:text-white transition-colors">
              Impressum
            </Link>
            <Link href="/datenschutz" className="hover:text-white transition-colors">
              Datenschutz
            </Link>
            <button
              onClick={scrollToTop}
              className="p-2 rounded-full bg-white/[0.04] border border-white/10 hover:border-[#D4AF37] text-neutral-400 hover:text-white transition-colors cursor-pointer"
              title="Nach oben scrollen"
            >
              <ArrowUp className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>

      </div>
    </footer>
  );
}
