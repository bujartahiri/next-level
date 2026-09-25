"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
  onReplayIntro?: () => void;
}

export default function Navbar({ onOpenBooking, onReplayIntro }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 30);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Leistungen", href: "#services" },
    { name: "Vorher / Nachher", href: "#gallery" },
    { name: "Verfahren", href: "#process" },
    { name: "Preise", href: "#pricing" },
    { name: "Kontakt", href: "#contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        scrolled
          ? "bg-[#050505]/95 backdrop-blur-2xl border-b border-white/15 shadow-[0_4px_30px_rgba(0,0,0,0.9)] py-3.5"
          : "bg-gradient-to-b from-[#050505]/90 to-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Silhouette */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 sm:w-16 h-7 sm:h-9 shrink-0">
              <Image
                src="/images/loader/car.png"
                alt="NEXT LEVEL Logo Silhouette"
                fill
                priority
                className="object-contain filter drop-shadow-[0_0_10px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-lg font-black tracking-[0.2em] font-syne text-white uppercase group-hover:text-[#F3E5AB] transition-colors leading-none">
                NEXT LEVEL
              </span>
              <span className="text-[9px] sm:text-xs tracking-[0.35em] text-[#D4AF37] uppercase font-mono mt-1 font-bold leading-none">
                FAHRZEUGPFLEGE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links (Legible 13-14px) */}
          <nav className="hidden lg:flex items-center gap-9">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs sm:text-sm uppercase tracking-[0.16em] font-mono font-medium text-neutral-300 hover:text-[#D4AF37] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Call & WhatsApp */}
          <div className="hidden sm:flex items-center gap-3.5">
            <a
              href="tel:+491761234567"
              className="px-4 py-2.5 rounded-xl border border-white/15 hover:border-[#D4AF37] text-neutral-200 hover:text-white text-xs sm:text-sm font-mono tracking-wider font-semibold flex items-center gap-2 transition-all bg-neutral-950/80"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>0176 123 45 67</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-xl bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-bold text-xs sm:text-sm font-mono uppercase tracking-wider flex items-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(212,175,55,0.35)] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Termin buchen</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2.5 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="sm:hidden p-2.5 rounded-xl bg-[#D4AF37] text-black shadow-lg"
              aria-label="Termin buchen"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 rounded-xl border border-white/15 text-neutral-200 hover:text-white bg-neutral-950"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu (Large, Touch-Friendly) */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/98 backdrop-blur-2xl border-b border-white/15 px-6 py-8 space-y-6 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-4">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-base uppercase tracking-[0.2em] font-mono font-semibold text-neutral-200 hover:text-[#D4AF37] py-2 border-b border-white/10"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-sm uppercase tracking-[0.2em] font-mono text-[#D4AF37] py-2"
            >
              Admin CMS Login
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:+491761234567"
              className="w-full py-3.5 rounded-xl border border-white/15 text-white text-center text-sm font-mono tracking-wider font-semibold flex items-center justify-center gap-2 bg-neutral-900"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>+49 176 123 45 67 anrufen</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-4 rounded-xl bg-[#D4AF37] text-black font-bold text-sm font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]"
            >
              <MessageCircle className="w-5 h-5 fill-black" />
              <span>Direkt per WhatsApp anfragen</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
