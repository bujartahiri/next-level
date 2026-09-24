"use client";

import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import {
  Sparkles,
  MessageCircle,
  ArrowRight,
  ShieldCheck,
  Star,
  CheckCircle2,
  Clock,
  Gauge,
  PhoneCall,
} from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onReplayIntro?: () => void;
}

export default function HeroSection({ onOpenBooking, onReplayIntro }: HeroSectionProps) {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-between pt-32 pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* 1. Cinematic Studio Background Lighting & Car Atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        {/* Dark super-car silhouette backdrop in studio lighting */}
        <div className="absolute inset-0 opacity-25 mix-blend-screen">
          <Image
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=2000&q=85"
            alt="Luxury Automotive Detailing Studio"
            fill
            priority
            className="object-cover object-center filter grayscale-[30%] contrast-[1.15]"
          />
        </div>

        {/* Master Dark Vignette & Gold Illumination Gradients */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/85 to-[#050505]/60" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/90" />
        <div className="absolute top-1/3 left-1/4 w-[500px] h-[300px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.09)_0%,transparent_70%)] filter blur-3xl" />
      </div>

      {/* 2. Main Hero Grid (Asymmetrical Editorial 2-Column Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center mt-2 sm:mt-6 mb-12">
        
        {/* Left Column: Brand Statement & Primary Actions (7 cols) */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Studio Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#0a0a0a]/90 backdrop-blur-md mb-6 shadow-[0_0_20px_rgba(212,175,55,0.1)]">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.28em] text-[#D4AF37] font-semibold">
              MEISTERBETRIEB &bull; HIGH-END FAHRZEUGVEREDELUNG
            </span>
          </div>

          {/* Slogan Pill */}
          <div className="text-xs sm:text-sm font-mono tracking-[0.3em] uppercase text-neutral-400 mb-3 flex items-center gap-3">
            <span className="w-6 h-[1px] bg-[#D4AF37]/60" />
            <span className="text-neutral-300 font-medium">SAUBER &bull; GEPFLEGT &bull; WERTBESTÄNDIG</span>
          </div>

          {/* Main Headline: Clean, Proportional, Prestigious */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold font-syne tracking-tight text-white leading-[1.08] max-w-2xl mb-6">
            MEHR ALS <br />
            <span className="text-gold-gradient font-extrabold">NUR SAUBER.</span>
          </h1>

          {/* Sub-headline & Philosophy */}
          <p className="text-sm sm:text-base text-neutral-300/90 leading-relaxed max-w-xl font-normal mb-8">
            Exklusive Lackkorrektur, porentiefe Innenraumaufbereitung und zertifizierte 
            9H-Keramikversiegelung. Wir bewahren den originalen Auslieferungszustand 
            und steigern den Werterhalt Ihres Automobils auf meisterhaftem Niveau.
          </p>

          {/* CTA Buttons Group */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto mb-10">
            <button
              onClick={onOpenBooking}
              className="px-7 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#D4AF37] hover:brightness-110 text-black font-bold text-xs sm:text-sm font-mono uppercase tracking-[0.14em] flex items-center justify-center gap-2.5 transition-all duration-300 shadow-[0_0_30px_rgba(212,175,55,0.35)] hover:shadow-[0_0_40px_rgba(212,175,55,0.55)] group"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Termin vereinbaren</span>
            </button>

            <a
              href="#gallery"
              className="px-6 py-3.5 rounded-xl bg-neutral-950/70 border border-white/10 hover:border-[#D4AF37]/60 text-neutral-300 hover:text-white font-semibold text-xs sm:text-sm font-mono uppercase tracking-[0.14em] flex items-center justify-center gap-2 transition-all duration-200 group"
            >
              <span>Vorher / Nachher ansehen</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
            </a>
          </div>

          {/* Trust Metrics Bar */}
          <div className="flex flex-wrap items-center gap-6 sm:gap-8 pt-6 border-t border-white/10 w-full">
            <div className="flex items-center gap-2.5">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="text-xs font-mono text-white font-bold">5.0</span>
              <span className="text-[11px] text-neutral-400 font-mono">(Google Reviews)</span>
            </div>

            <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
              <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
              <span>9H Keramik-Zertifikat</span>
            </div>

            <div className="h-4 w-[1px] bg-white/10 hidden sm:block" />

            <div className="flex items-center gap-2 text-xs font-mono text-neutral-300">
              <CheckCircle2 className="w-4 h-4 text-[#D4AF37]" />
              <span>100% Handwäsche</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Floating Luxury Showcase Card with Live Interactive Slider (5 cols) */}
        <motion.div
          initial={{ opacity: 0, x: 25 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative"
        >
          {/* Ambient Glow behind card */}
          <div className="absolute -inset-1 rounded-2xl bg-gradient-to-r from-[#D4AF37]/20 to-transparent blur-xl opacity-50" />

          {/* Glass Atelier Showcase Container */}
          <div className="relative rounded-2xl bg-[#0a0a0a]/90 border border-white/15 p-5 shadow-2xl backdrop-blur-xl">
            
            {/* Card Header */}
            <div className="flex items-center justify-between pb-3.5 mb-3 border-b border-white/10">
              <div>
                <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] block font-semibold">
                  Live Lacktransformation
                </span>
                <h3 className="text-sm font-bold font-syne text-white tracking-wide">
                  Porsche 911 GT3 RS &bull; 9H Keramik
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                Meistergrad
              </span>
            </div>

            {/* Interactive Before / After Slider Component */}
            <div className="relative rounded-xl overflow-hidden mb-4">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85"
                afterImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
                beforeLabel="VORHER"
                afterLabel="NACHHER"
                aspectRatio="aspect-[16/11]"
              />
            </div>

            {/* Micro Metrics Strip */}
            <div className="grid grid-cols-3 gap-2 py-2 mb-3 bg-black/50 rounded-lg p-2 border border-white/5">
              <div className="text-center">
                <div className="text-xs font-bold font-mono text-white">98%</div>
                <div className="text-[9px] font-mono text-neutral-400 uppercase">Swirl-Frei</div>
              </div>
              <div className="text-center border-x border-white/5">
                <div className="text-xs font-bold font-mono text-[#D4AF37]">+40%</div>
                <div className="text-[9px] font-mono text-neutral-400 uppercase">Tiefenglanz</div>
              </div>
              <div className="text-center">
                <div className="text-xs font-bold font-mono text-white">36 Mon.</div>
                <div className="text-[9px] font-mono text-neutral-400 uppercase">Garantie</div>
              </div>
            </div>

            {/* Card Quick Action */}
            <button
              onClick={onOpenBooking}
              className="w-full py-2.5 px-3 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#D4AF37]/50 text-white hover:text-[#D4AF37] text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-colors group"
            >
              <span className="text-[11px]">Dieses Lackpaket anfragen</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform text-[#D4AF37]" />
            </button>
          </div>
        </motion.div>

      </div>

      {/* 3. Bottom Performance Strip: Quick Services Navigator */}
      <motion.div
        initial={{ opacity: 0, y: 15 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="relative z-10 pt-8 border-t border-white/10 grid grid-cols-2 md:grid-cols-4 gap-4"
      >
        <a
          href="#services"
          className="p-3.5 rounded-xl bg-neutral-950/60 border border-white/5 hover:border-[#D4AF37]/40 transition-colors group"
        >
          <div className="text-[10px] font-mono text-[#D4AF37] mb-1">01 / EXTERIEUR</div>
          <div className="text-xs sm:text-sm font-bold font-syne text-white group-hover:text-[#F3E5AB]">
            Lackkorrektur & Politur
          </div>
          <div className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
            Beseitigung von Waschkratzern
          </div>
        </a>

        <a
          href="#services"
          className="p-3.5 rounded-xl bg-neutral-950/60 border border-white/5 hover:border-[#D4AF37]/40 transition-colors group"
        >
          <div className="text-[10px] font-mono text-[#D4AF37] mb-1">02 / PROTECTION</div>
          <div className="text-xs sm:text-sm font-bold font-syne text-white group-hover:text-[#F3E5AB]">
            9H Keramikversiegelung
          </div>
          <div className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
            Extremer Hydrophobie-Schutz
          </div>
        </a>

        <a
          href="#services"
          className="p-3.5 rounded-xl bg-neutral-950/60 border border-white/5 hover:border-[#D4AF37]/40 transition-colors group"
        >
          <div className="text-[10px] font-mono text-[#D4AF37] mb-1">03 / INTERIEUR</div>
          <div className="text-xs sm:text-sm font-bold font-syne text-white group-hover:text-[#F3E5AB]">
            Leder- & Alcantara-Pflege
          </div>
          <div className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
            Porentiefe Frische & Hygiene
          </div>
        </a>

        <a
          href="#services"
          className="p-3.5 rounded-xl bg-neutral-950/60 border border-white/5 hover:border-[#D4AF37]/40 transition-colors group"
        >
          <div className="text-[10px] font-mono text-[#D4AF37] mb-1">04 / WERTERHALT</div>
          <div className="text-xs sm:text-sm font-bold font-syne text-white group-hover:text-[#F3E5AB]">
            Leasingrückläufer & Smart
          </div>
          <div className="text-[11px] text-neutral-400 line-clamp-1 mt-0.5">
            Schutz vor teuren Nachzahlungen
          </div>
        </a>
      </motion.div>

      {/* Intro Replay Micro Link */}
      {onReplayIntro && (
        <div className="text-center mt-5">
          <button
            onClick={onReplayIntro}
            className="text-[10px] font-mono tracking-widest uppercase text-neutral-500 hover:text-[#D4AF37] transition-colors underline decoration-dotted underline-offset-4"
          >
            Intro-Animation wiederholen
          </button>
        </div>
      )}

    </section>
  );
}
