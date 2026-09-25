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
      setScrolled(window.scrollY > 25);
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
          ? "bg-[#050505]/95 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.85)] py-3.5"
          : "bg-gradient-to-b from-[#050505]/90 via-[#050505]/50 to-transparent py-5 sm:py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Silhouette */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 sm:w-14 h-7 sm:h-8 shrink-0">
              <Image
                src="/images/loader/car.png"
                alt="NEXT LEVEL Logo Silhouette"
                fill
                priority
                sizes="56px"
                className="object-contain filter drop-shadow-[0_1px_8px_rgba(212,175,55,0.3)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-bold tracking-[0.22em] text-white uppercase group-hover:text-[#F3E5AB] transition-colors leading-none">
                NEXT LEVEL
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-semibold mt-1 leading-none">
                FAHRZEUGPFLEGE
              </span>
            </div>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-xs uppercase tracking-[0.2em] font-medium text-neutral-300 hover:text-[#D4AF37] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1.5px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Direct Call & WhatsApp Booking */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+491761234567"
              className="px-4 py-2.5 rounded-full border border-white/15 hover:border-[#D4AF37]/50 text-neutral-300 hover:text-white text-xs tracking-wider font-medium flex items-center gap-2 transition-all bg-white/[0.02] hover:bg-white/[0.05]"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>0176 123 45 67</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-5 py-2.5 rounded-full bg-[#D4AF37] hover:bg-[#E5C358] text-black font-semibold text-xs tracking-wider uppercase flex items-center gap-2 transition-all duration-200 shadow-[0_2px_15px_rgba(212,175,55,0.2)] active:scale-95 cursor-pointer"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>Termin buchen</span>
            </button>
          </div>

          {/* Mobile Menu Actions */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="sm:hidden p-2 rounded-full bg-[#D4AF37] text-black shadow-md cursor-pointer"
              aria-label="Termin buchen"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/15 text-neutral-300 hover:text-white bg-white/[0.03] cursor-pointer"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-[#0a0a0a]/98 backdrop-blur-2xl border-b border-white/10 px-6 py-7 space-y-5 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] font-medium text-neutral-200 hover:text-[#D4AF37] py-2.5 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-[0.2em] text-[#D4AF37] py-2"
            >
              Admin CMS Login
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href="tel:+491761234567"
              className="w-full py-3.5 rounded-full border border-white/15 text-white text-center text-xs tracking-wider font-medium flex items-center justify-center gap-2 bg-neutral-900"
            >
              <Phone className="w-4 h-4 text-[#D4AF37]" />
              <span>+49 176 123 45 67 anrufen</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-3.5 rounded-full bg-[#D4AF37] text-black font-semibold text-xs tracking-wider uppercase flex items-center justify-center gap-2 shadow-[0_2px_15px_rgba(212,175,55,0.25)] cursor-pointer"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Direkt per WhatsApp anfragen</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
