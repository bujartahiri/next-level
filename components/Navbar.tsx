"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Phone, MessageCircle, Menu, X, Shield, Sparkles } from "lucide-react";

interface NavbarProps {
  onOpenBooking: () => void;
  onReplayIntro?: () => void;
}

export default function Navbar({ onOpenBooking, onReplayIntro }: NavbarProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
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
          ? "bg-[#050505]/90 backdrop-blur-xl border-b border-white/10 shadow-[0_4px_30px_rgba(0,0,0,0.8)] py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Logo with Silhouette */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative w-12 sm:w-16 h-7 sm:h-9">
              <Image
                src="/images/loader/car.png"
                alt="NEXT LEVEL Fahrzeugpflege Emblem"
                fill
                className="object-contain filter drop-shadow-[0_0_8px_rgba(212,175,55,0.4)] group-hover:scale-105 transition-transform duration-300"
              />
            </div>
            <div className="flex flex-col">
              <span className="text-sm sm:text-base font-extrabold tracking-[0.2em] font-syne text-white uppercase group-hover:text-[#F3E5AB] transition-colors leading-none">
                NEXT LEVEL
              </span>
              <span className="text-[9px] sm:text-[10px] tracking-[0.35em] text-[#D4AF37] uppercase font-mono mt-1 font-semibold leading-none">
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
                className="text-xs uppercase tracking-[0.16em] font-mono text-neutral-400 hover:text-[#D4AF37] transition-colors relative py-1 group"
              >
                {link.name}
                <span className="absolute bottom-0 left-0 w-0 h-[1px] bg-[#D4AF37] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </nav>

          {/* Actions: Call & WhatsApp */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href="tel:+491761234567"
              className="px-3.5 py-2 rounded-full border border-white/10 hover:border-[#D4AF37]/50 text-neutral-300 hover:text-white text-xs font-mono tracking-wider flex items-center gap-2 transition-all bg-neutral-950/60"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>0176 123 45 67</span>
            </a>

            <button
              onClick={onOpenBooking}
              className="px-4 py-2 rounded-full bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all duration-200 shadow-[0_0_20px_rgba(212,175,55,0.3)] hover:shadow-[0_0_25px_rgba(212,175,55,0.5)]"
            >
              <MessageCircle className="w-3.5 h-3.5 fill-black" />
              <span>Termin buchen</span>
            </button>
          </div>

          {/* Mobile Menu Hamburger */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenBooking}
              className="sm:hidden p-2 rounded-full bg-[#D4AF37] text-black"
              aria-label="Termin buchen"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
            </button>

            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg border border-white/10 text-neutral-300 hover:text-white"
              aria-label="Menü öffnen"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-neutral-950/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 space-y-4 animate-in slide-in-from-top duration-200">
          <nav className="flex flex-col space-y-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="text-sm uppercase tracking-[0.2em] font-mono text-neutral-300 hover:text-[#D4AF37] py-2 border-b border-white/5"
              >
                {link.name}
              </a>
            ))}
            <Link
              href="/admin"
              onClick={() => setMobileMenuOpen(false)}
              className="text-xs uppercase tracking-[0.2em] font-mono text-neutral-500 hover:text-[#D4AF37] py-2"
            >
              Admin CMS
            </Link>
          </nav>

          <div className="pt-2 flex flex-col gap-2.5">
            <a
              href="tel:+491761234567"
              className="w-full py-2.5 rounded-lg border border-white/10 text-neutral-200 text-center text-xs font-mono tracking-wider flex items-center justify-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>+49 176 123 45 67</span>
            </a>

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenBooking();
              }}
              className="w-full py-2.5 rounded-lg bg-[#D4AF37] text-black font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2"
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
