"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Phone,
} from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onReplayIntro?: () => void;
}

export default function HeroSection({ onOpenBooking, onReplayIntro }: HeroSectionProps) {
  return (
    <section className="relative min-h-[95vh] flex flex-col justify-between pt-36 sm:pt-44 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* 1. Dramatic Dark Studio Backdrop with Gold Horizon Lighting */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Cinematic Supercar Silhouette Background */}
        <div className="absolute inset-0 opacity-20 sm:opacity-25 mix-blend-screen">
          <Image
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=85"
            alt="Supercar in Dark Detailing Studio"
            fill
            priority
            className="object-cover object-center filter grayscale-[20%] contrast-[1.2]"
          />
        </div>

        {/* Deep Vignette Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-[#050505] via-[#050505]/75 to-[#050505]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-[#050505]" />
        
        {/* Soft Golden Ambient Glow */}
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.12)_0%,transparent_70%)] filter blur-3xl" />
      </div>

      {/* 2. Main Hero Stage */}
      <div className="relative z-10 flex flex-col items-center text-center max-w-5xl mx-auto">
        
        {/* Studio Badge */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="inline-flex items-center gap-2.5 px-5 py-2 rounded-full border border-[#D4AF37]/40 bg-[#0a0a0a]/90 backdrop-blur-xl mb-6 shadow-[0_0_25px_rgba(212,175,55,0.15)]"
        >
          <span className="w-2 h-2 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-xs sm:text-sm font-mono uppercase tracking-[0.25em] text-[#D4AF37] font-bold">
            MEISTERBETRIEB &bull; AUTO DETAILING
          </span>
        </motion.div>

        {/* Official Slogan */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-xs sm:text-base font-mono tracking-[0.3em] uppercase text-neutral-300 font-semibold mb-4 flex items-center justify-center gap-3 sm:gap-4"
        >
          <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-r from-transparent to-[#D4AF37]" />
          <span>SAUBER &bull; GEPFLEGT &bull; WERTBESTÄNDIG</span>
          <span className="w-8 sm:w-12 h-[1px] bg-gradient-to-l from-transparent to-[#D4AF37]" />
        </motion.div>

        {/* Master Headline: Large, Confident, Prestigious */}
        <motion.h1
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-syne tracking-tight text-white leading-[1.05] mb-6"
        >
          MEHR ALS <br />
          <span className="text-gold-gradient">NUR SAUBER.</span>
        </motion.h1>

        {/* Subtitle: High legibility 16-18px font */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.3 }}
          className="text-base sm:text-lg md:text-xl text-neutral-200 leading-relaxed max-w-3xl font-normal mb-10"
        >
          Exklusive Fahrzeugaufbereitung, mehrstufige Lackkorrektur und zertifizierte 
          9H-Keramikversiegelung. Wir bewahren den originalen Auslieferungszustand 
          und sichern den Werterhalt Ihres Automobils auf höchstem Niveau.
        </motion.p>

        {/* Generous High-Impact Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-5 w-full sm:w-auto mb-14"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-9 py-4 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#F3E5AB] to-[#D4AF37] hover:brightness-110 text-black font-bold text-sm sm:text-base font-mono uppercase tracking-wider flex items-center justify-center gap-3 transition-all duration-300 shadow-[0_0_35px_rgba(212,175,55,0.4)] active:scale-95 group"
          >
            <MessageCircle className="w-5 h-5 fill-black" />
            <span>Termin vereinbaren</span>
          </button>

          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-4 rounded-xl bg-neutral-950/80 border border-white/20 hover:border-[#D4AF37] text-white hover:text-[#D4AF37] font-semibold text-sm sm:text-base font-mono uppercase tracking-wider flex items-center justify-center gap-2.5 transition-all active:scale-95"
          >
            <span>Vorher / Nachher ansehen</span>
            <ArrowRight className="w-4 h-4 text-[#D4AF37]" />
          </a>
        </motion.div>

        {/* Large Brand Emblem Silhouette */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, delay: 0.5 }}
          className="relative w-full max-w-xl aspect-[554/103] pointer-events-none mb-12 select-none"
        >
          <Image
            src="/images/loader/car.png"
            alt="NEXT LEVEL Silhouette"
            fill
            priority
            className="object-contain filter drop-shadow-[0_4px_30px_rgba(212,175,55,0.35)]"
          />
        </motion.div>

      </div>

      {/* 3. Big, Legible Trust Indicators Bar */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.6 }}
        className="relative z-10 pt-8 border-t border-white/15 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto w-full text-center sm:text-left"
      >
        <div className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-xl bg-neutral-950/60 border border-white/10">
          <div className="p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
            <Star className="w-6 h-6 fill-[#D4AF37]" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-syne text-white">5.0 ★ Google</div>
            <div className="text-xs sm:text-sm text-neutral-400 font-mono">Ausgezeichnete Bewertungen</div>
          </div>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-xl bg-neutral-950/60 border border-white/10">
          <div className="p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-syne text-white">9H Keramikschutz</div>
            <div className="text-xs sm:text-sm text-neutral-400 font-mono">Zertifizierte Versiegelung</div>
          </div>
        </div>

        <div className="flex items-center justify-center sm:justify-start gap-4 p-4 rounded-xl bg-neutral-950/60 border border-white/10">
          <div className="p-3 rounded-xl bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
            <CheckCircle2 className="w-6 h-6" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-syne text-white">100% Handwäsche</div>
            <div className="text-xs sm:text-sm text-neutral-400 font-mono">Schonende 2-Eimer-Methode</div>
          </div>
        </div>
      </motion.div>

      {/* Intro Replay Micro Link */}
      {onReplayIntro && (
        <div className="text-center mt-8">
          <button
            onClick={onReplayIntro}
            className="text-xs font-mono tracking-widest uppercase text-neutral-400 hover:text-[#D4AF37] transition-colors underline decoration-dotted underline-offset-4"
          >
            Intro-Animation wiederholen
          </button>
        </div>
      )}

    </section>
  );
}
