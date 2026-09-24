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
} from "lucide-react";
import BeforeAfterSlider from "./BeforeAfterSlider";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onReplayIntro?: () => void;
}

export default function HeroSection({ onOpenBooking, onReplayIntro }: HeroSectionProps) {
  return (
    <section className="relative min-h-[90vh] flex flex-col justify-between pt-24 sm:pt-32 pb-10 sm:pb-14 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      
      {/* 1. Cinematic Studio Background Lighting & Atmosphere */}
      <div className="absolute inset-0 pointer-events-none -z-10 overflow-hidden">
        <div className="absolute inset-0 opacity-20 sm:opacity-25 mix-blend-screen">
          <Image
            src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1600&q=80"
            alt="Luxury Automotive Studio"
            fill
            priority
            className="object-cover object-center filter grayscale-[30%]"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-[#050505]/90 to-[#050505]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-[#050505]/90" />
        <div className="absolute top-1/4 left-1/3 w-[300px] sm:w-[500px] h-[250px] bg-[radial-gradient(ellipse_at_center,rgba(212,175,55,0.08)_0%,transparent_70%)] filter blur-3xl" />
      </div>

      {/* 2. Main Hero Grid (Mobile-First 2-Column Layout) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-8 items-center mt-2 sm:mt-4 mb-8 sm:mb-12">
        
        {/* Left Column: Straight to the point */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="lg:col-span-7 flex flex-col items-start text-left"
        >
          {/* Studio Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/35 bg-[#0a0a0a]/90 backdrop-blur-md mb-4 sm:mb-5">
            <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
            <span className="text-[10px] sm:text-[11px] font-mono uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
              MEISTERBETRIEB &bull; AUTO DETAILING
            </span>
          </div>

          {/* Slogan */}
          <div className="text-[11px] sm:text-xs font-mono tracking-[0.25em] uppercase text-neutral-400 mb-2.5 flex items-center gap-2.5">
            <span className="w-4 h-[1px] bg-[#D4AF37]/60" />
            <span>SAUBER &bull; GEPFLEGT &bull; WERTBESTÄNDIG</span>
          </div>

          {/* Headline */}
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-bold font-syne tracking-tight text-white leading-[1.1] mb-4">
            MEHR ALS <br />
            <span className="text-gold-gradient font-extrabold">NUR SAUBER.</span>
          </h1>

          {/* Punchy 1-sentence subtitle */}
          <p className="text-xs sm:text-sm text-neutral-300 leading-relaxed max-w-lg mb-6 sm:mb-8">
            High-End Lackkorrektur und zertifizierte 9H-Keramikversiegelung. 
            Meisterhafter Werterhalt für Sportwagen und Premiumfahrzeuge.
          </p>

          {/* Mobile-Friendly CTAs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3 w-full sm:w-auto mb-6 sm:mb-8">
            <button
              onClick={onOpenBooking}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-[#D4AF37] via-[#E6CA65] to-[#D4AF37] text-black font-bold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all shadow-[0_0_25px_rgba(212,175,55,0.3)] active:scale-95"
            >
              <MessageCircle className="w-4 h-4 fill-black" />
              <span>Termin anfragen</span>
            </button>

            <a
              href="#gallery"
              className="px-5 py-3.5 rounded-xl bg-neutral-950/70 border border-white/10 hover:border-[#D4AF37]/50 text-neutral-300 hover:text-white font-semibold text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-2 transition-all"
            >
              <span>Vorher / Nachher</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </a>
          </div>

          {/* Trust Metrics Bar (Clean & Compact) */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-6 pt-4 border-t border-white/10 w-full text-xs font-mono text-neutral-300">
            <div className="flex items-center gap-1.5">
              <div className="flex text-[#D4AF37]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3 h-3 fill-[#D4AF37]" />
                ))}
              </div>
              <span className="font-bold text-white">5.0</span>
              <span className="text-[10px] text-neutral-400">Google</span>
            </div>

            <div className="h-3 w-[1px] bg-white/10" />

            <div className="flex items-center gap-1.5">
              <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>9H Keramik</span>
            </div>

            <div className="h-3 w-[1px] bg-white/10" />

            <div className="flex items-center gap-1.5">
              <CheckCircle2 className="w-3.5 h-3.5 text-[#D4AF37]" />
              <span>100% Handwäsche</span>
            </div>
          </div>
        </motion.div>

        {/* Right Column: Compact Spotlight Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.98 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="lg:col-span-5 relative"
        >
          <div className="relative rounded-2xl bg-[#0a0a0a]/90 border border-white/15 p-4 sm:p-5 shadow-2xl backdrop-blur-xl">
            
            <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
              <div>
                <span className="text-[9px] font-mono uppercase tracking-wider text-[#D4AF37] block font-semibold">
                  Live Lacktransformation
                </span>
                <h3 className="text-xs sm:text-sm font-bold font-syne text-white tracking-wide">
                  Porsche 911 GT3 RS &bull; 9H Keramik
                </h3>
              </div>
              <span className="px-2 py-0.5 rounded text-[9px] font-mono bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-[#D4AF37]">
                Meistergrad
              </span>
            </div>

            {/* Slider */}
            <div className="relative rounded-xl overflow-hidden mb-3">
              <BeforeAfterSlider
                beforeImage="https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=85"
                afterImage="https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=85"
                beforeLabel="VORHER"
                afterLabel="NACHHER"
                aspectRatio="aspect-[16/10]"
              />
            </div>

            {/* Direct CTA */}
            <button
              onClick={onOpenBooking}
              className="w-full py-2 px-3 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#D4AF37]/50 text-white hover:text-[#D4AF37] text-xs font-mono uppercase tracking-wider flex items-center justify-between transition-colors"
            >
              <span>Paket unverbindlich anfragen</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37]" />
            </button>
          </div>
        </motion.div>

      </div>

      {/* 3. Bottom Performance Strip (2x2 on mobile, 4 in row on desktop) */}
      <div className="relative z-10 pt-4 sm:pt-6 border-t border-white/10 grid grid-cols-2 lg:grid-cols-4 gap-2.5 sm:gap-4">
        <a
          href="#services"
          className="p-2.5 sm:p-3.5 rounded-xl bg-neutral-950/60 border border-white/5 hover:border-[#D4AF37]/40 transition-colors"
        >
          <div className="text-[9px] font-mono text-[#D4AF37] uppercase">01 / EXTERIEUR</div>
          <div className="text-xs sm:text-sm font-bold font-syne text-white truncate">Lackkorrektur</div>
          <div className="text-[10px] text-neutral-400 truncate">Kratzerbeseitigung</div>
        </a>

        <a
          href="#services"
          className="p-2.5 sm:p-3.5 rounded-xl bg-neutral-950/60 border border-white/5 hover:border-[#D4AF37]/40 transition-colors"
        >
          <div className="text-[9px] font-mono text-[#D4AF37] uppercase">02 / PROTECTION</div>
          <div className="text-xs sm:text-sm font-bold font-syne text-white truncate">9H Keramik</div>
          <div className="text-[10px] text-neutral-400 truncate">Langzeitschutz</div>
        </a>

        <a
          href="#services"
          className="p-2.5 sm:p-3.5 rounded-xl bg-neutral-950/60 border border-white/5 hover:border-[#D4AF37]/40 transition-colors"
        >
          <div className="text-[9px] font-mono text-[#D4AF37] uppercase">03 / INTERIEUR</div>
          <div className="text-xs sm:text-sm font-bold font-syne text-white truncate">Lederpflege</div>
          <div className="text-[10px] text-neutral-400 truncate">Porentiefe Hygiene</div>
        </a>

        <a
          href="#services"
          className="p-2.5 sm:p-3.5 rounded-xl bg-neutral-950/60 border border-white/5 hover:border-[#D4AF37]/40 transition-colors"
        >
          <div className="text-[9px] font-mono text-[#D4AF37] uppercase">04 / WERTERHALT</div>
          <div className="text-xs sm:text-sm font-bold font-syne text-white truncate">Leasing-Check</div>
          <div className="text-[10px] text-neutral-400 truncate">Smart Repair</div>
        </a>
      </div>

    </section>
  );
}
