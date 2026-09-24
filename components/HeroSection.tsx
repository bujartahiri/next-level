"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Sparkles, MessageCircle, ArrowDown, Shield, Award, CheckCircle2 } from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onReplayIntro?: () => void;
}

export default function HeroSection({ onOpenBooking, onReplayIntro }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* Subtle Ambient Radial Glow (Strictly champagne gold, no purple/blue glows) */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] pointer-events-none filter blur-3xl" />

      {/* Main Hero Content */}
      <div className="relative z-10 flex flex-col items-center text-center mt-4 sm:mt-8">
        
        {/* Slogan Pill: SAUBER | PFLEGT | WERTBESTÄNDIG */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/60 backdrop-blur-md mb-6"
        >
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] sm:text-xs font-mono uppercase tracking-[0.3em] text-[#D4AF37] font-semibold">
            SAUBER &bull; GEPFLEGT &bull; WERTBESTÄNDIG
          </span>
        </motion.div>

        {/* Sub-headline & Main Brand Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.35 }}
          className="text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-black font-syne tracking-tight text-white max-w-5xl leading-[1.05]"
        >
          MEHR ALS <br className="hidden sm:inline" />
          <span className="text-gold-gradient font-black">NUR SAUBER.</span>
        </motion.h1>

        {/* Editorial Sub-copy */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="max-w-2xl text-neutral-300 text-base sm:text-lg leading-relaxed mt-6 font-normal"
        >
          Exklusive High-End Fahrzeugaufbereitung, mehrstufige Lackpolitur und zertifizierte 
          9H Keramikversiegelung. Wir behandeln jedes Automobil wie ein unvergleichliches Sammlerstück.
        </motion.p>

        {/* Call to Actions */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.65 }}
          className="flex flex-col sm:flex-row items-center gap-4 mt-8 w-full sm:w-auto"
        >
          <button
            onClick={onOpenBooking}
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-bold text-xs sm:text-sm font-mono uppercase tracking-[0.16em] flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:shadow-[0_0_40px_rgba(212,175,55,0.6)] group"
          >
            <MessageCircle className="w-4 h-4 fill-black" />
            <span>Jetzt Termin vereinbaren</span>
          </button>

          <a
            href="#gallery"
            className="w-full sm:w-auto px-8 py-4 rounded-full bg-neutral-950/70 border border-white/10 hover:border-[#D4AF37]/50 text-neutral-300 hover:text-white font-semibold text-xs sm:text-sm font-mono uppercase tracking-[0.16em] flex items-center justify-center gap-2 transition-all duration-200"
          >
            <span>Vorher / Nachher Galerie</span>
          </a>
        </motion.div>

        {/* Brand Silhouette Centerpiece */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.0, delay: 0.8 }}
          className="relative w-full max-w-2xl mt-12 sm:mt-16 aspect-[1024/191] pointer-events-none select-none"
        >
          <Image
            src="/images/loader/car.png"
            alt="NEXT LEVEL Silhouette Outline"
            fill
            priority
            className="object-contain filter drop-shadow-[0_4px_30px_rgba(212,175,55,0.3)]"
          />
        </motion.div>
      </div>

      {/* Hero Metrics / Trust Grid */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 1.0 }}
        className="relative z-10 pt-10 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-6 text-left"
      >
        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#D4AF37]">
            <Shield className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-syne text-white">9H Schutz</div>
            <div className="text-xs text-neutral-400 font-mono">Keramikversiegelung</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#D4AF37]">
            <Award className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-syne text-white">100% Handarbeit</div>
            <div className="text-xs text-neutral-400 font-mono">Schonende 2-Eimer-Wäsche</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#D4AF37]">
            <CheckCircle2 className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-syne text-white">Bis zu 36 Monate</div>
            <div className="text-xs text-neutral-400 font-mono">Langzeit-Werterhalt</div>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-[#D4AF37]">
            <Sparkles className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xl sm:text-2xl font-bold font-syne text-white">5.0 ★ Sterne</div>
            <div className="text-xs text-neutral-400 font-mono">Exzellente Google-Bewertungen</div>
          </div>
        </div>
      </motion.div>

      {/* Floating Replay Link in bottom right corner */}
      {onReplayIntro && (
        <div className="text-center mt-6">
          <button
            onClick={onReplayIntro}
            className="text-[11px] font-mono tracking-widest uppercase text-neutral-500 hover:text-[#D4AF37] transition-colors underline decoration-dotted underline-offset-4"
          >
            Intro-Animation wiederholen
          </button>
        </div>
      )}

    </section>
  );
}
