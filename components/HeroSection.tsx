"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Star,
  Sparkles,
  Award,
} from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onReplayIntro?: () => void;
}

export default function HeroSection({ onOpenBooking, onReplayIntro }: HeroSectionProps) {
  return (
    <section className="relative min-h-[96svh] flex flex-col justify-between pt-32 sm:pt-40 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* 1. Dramatic Dark Detailing Studio Lighting Environment */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Dark Studio Vehicle Backdrop with Soft Light Curves */}
        <div className="absolute inset-0 opacity-25 mix-blend-screen">
          <Image
            src="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=2200&q=85"
            alt="NEXT LEVEL Detailing Studio Masterpiece"
            fill
            priority
            sizes="100vw"
            className="object-cover object-center filter grayscale-[15%] contrast-[1.25]"
          />
        </div>

        {/* Studio Softbox Lighting Vignette */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/80 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
        
        {/* Soft Champagne Overhead Inspection Light Cone */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[350px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.12)_0%,transparent_75%)] filter blur-2xl" />
      </div>

      {/* 2. Main Editorial Hero Composition */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-4xl mx-auto my-auto">
        
        {/* Single Quiet Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#0a0a0a]/90 backdrop-blur-md mb-6 shadow-[0_2px_15px_rgba(0,0,0,0.6)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Meisterbetrieb für Fahrzeugveredelung
          </span>
        </motion.div>

        {/* Master Headline: Commanding, Restrained, High-Precision */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-[5.25rem] font-bold tracking-tight text-white leading-[1.08] mb-5"
        >
          MEHR ALS <br className="sm:hidden" />
          <span className="text-white">NUR SAUBER.</span>
          <span className="block text-gold-gradient mt-1 sm:mt-2 text-3xl sm:text-5xl md:text-6xl lg:text-[4.5rem] font-semibold tracking-normal">
            Die Perfektion des Automobils.
          </span>
        </motion.h1>

        {/* Official Slogan with Hairline Accents */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-sm tracking-[0.3em] uppercase text-neutral-300 font-semibold mb-6 flex items-center justify-center gap-3 sm:gap-5"
        >
          <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]/60" />
          <span>SAUBER &bull; GEPFLEGT &bull; WERTBESTÄNDIG</span>
          <span className="w-8 sm:w-14 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]/60" />
        </motion.div>

        {/* Concise Value Proposition (Under 20 Words) */}
        <motion.p
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-sm sm:text-base md:text-lg text-neutral-300 font-normal leading-relaxed max-w-2xl mb-9"
        >
          Bespoke High-End Fahrzeugaufbereitung, mehrstufige Lackkorrektur und 
          zertifizierte 9H-Keramikversiegelung für Liebhaber- und Sportwagen.
        </motion.p>

        {/* Refined Luxury CTAs (No Cheesy Glows) */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-3.5 sm:gap-5 w-full sm:w-auto mb-10"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#E5C358] text-black font-semibold text-xs sm:text-sm tracking-[0.14em] uppercase flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_4px_20px_rgba(212,175,55,0.25)] hover:shadow-[0_6px_30px_rgba(212,175,55,0.4)] active:scale-95 cursor-pointer"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Termin vereinbaren</span>
          </button>

          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-white/[0.03] hover:bg-white/[0.08] border border-white/20 hover:border-[#D4AF37]/60 text-white/90 hover:text-white font-medium text-xs sm:text-sm tracking-[0.14em] uppercase flex items-center justify-center gap-2 backdrop-blur-md transition-all duration-300 active:scale-95"
          >
            <span>Vorher / Nachher ansehen</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </motion.div>

        {/* Subtle Signature Silhouette Anchor */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="relative w-full max-w-sm sm:max-w-md aspect-[554/103] pointer-events-none select-none opacity-85 my-2"
        >
          <Image
            src="/images/loader/car.png"
            alt="NEXT LEVEL Signature Silhouette"
            fill
            priority
            sizes="(max-width: 768px) 320px, 450px"
            className="object-contain filter drop-shadow-[0_2px_15px_rgba(212,175,55,0.2)]"
          />
        </motion.div>

      </div>

      {/* 3. Minimalist Specification / Trust Strip */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 pt-6 border-t border-white/10 grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-6 max-w-4xl mx-auto w-full"
      >
        <div className="flex items-center justify-center sm:justify-start gap-3.5 py-2 px-3">
          <div className="p-2 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] shrink-0">
            <Star className="w-4 h-4 fill-[#D4AF37]" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white tracking-wide">5.0 ★ Google Rezensionen</div>
            <div className="text-xs text-neutral-400">Ausgezeichnete Kundenzufriedenheit</div>
          </div>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-3.5 py-2 px-3 sm:border-l sm:border-white/10">
          <div className="p-2 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] shrink-0">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white tracking-wide">9H Keramik-Zertifikat</div>
            <div className="text-xs text-neutral-400">Bis zu 48 Monate Lackgarantie</div>
          </div>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-3.5 py-2 px-3 sm:border-l sm:border-white/10">
          <div className="p-2 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/25 text-[#D4AF37] shrink-0">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <div className="text-sm font-semibold text-white tracking-wide">100% Handarbeit</div>
            <div className="text-xs text-neutral-400">Schonende 2-Eimer-Methode</div>
          </div>
        </div>
      </motion.div>

      {/* Intro Replay Micro Link */}
      {onReplayIntro && (
        <div className="text-center mt-4">
          <button
            onClick={onReplayIntro}
            className="text-[11px] tracking-[0.2em] uppercase text-neutral-400 hover:text-[#D4AF37] transition-colors underline decoration-dotted underline-offset-4 cursor-pointer"
          >
            Intro-Animation wiederholen
          </button>
        </div>
      )}

    </section>
  );
}
