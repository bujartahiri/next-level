"use client";

import React, { useRef, useEffect } from "react";
import { motion } from "framer-motion";
import {
  MessageCircle,
  ArrowRight,
} from "lucide-react";

interface HeroSectionProps {
  onOpenBooking: () => void;
  onReplayIntro?: () => void;
}

export default function HeroSection({ onOpenBooking }: HeroSectionProps) {
  const videoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.muted = true;
      videoRef.current.defaultMuted = true;
      videoRef.current.play().catch(() => {});
    }
  }, []);

  return (
    <section className="relative min-h-[100svh] w-full flex flex-col justify-center items-center overflow-hidden">
      
      {/* 1. Cinematic Full-Bleed Video Background with Crystal-Clear Visibility */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Background Video */}
        <video
          ref={videoRef}
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          aria-hidden="true"
          onLoadedMetadata={(e) => {
            e.currentTarget.muted = true;
            e.currentTarget.play().catch(() => {});
          }}
          className="absolute inset-0 w-full h-full object-cover object-center opacity-95 transition-opacity duration-700"
        >
          <source src="/hero-video.mp4" type="video/mp4" />
        </video>

        {/* Minimal Vignette & Cinematic Gradients */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/15 to-[#050505] transition-opacity" />
        
        {/* Subtle top shading for navbar contrast */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-black/70 to-transparent" />

        {/* Soft Champagne Overhead Light Ambient Accent */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] sm:w-[900px] h-[300px] bg-[radial-gradient(ellipse_at_top,rgba(212,175,55,0.08)_0%,transparent_70%)] filter blur-3xl pointer-events-none" />

        {/* Seamless bottom blend into subsequent sections */}
        <div className="absolute bottom-0 inset-x-0 h-24 sm:h-36 bg-gradient-to-t from-[#050505] via-[#050505]/80 to-transparent" />
      </div>

      {/* 2. Main Minimal Editorial Content Composition */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-12 sm:pb-16 flex flex-col items-center justify-center text-center my-auto">
        
        {/* Refined Eyebrow Badge */}
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3 sm:px-4 py-1 sm:py-1.5 rounded-full border border-[#D4AF37]/30 bg-black/40 backdrop-blur-md mb-4 sm:mb-6 shadow-[0_2px_12px_rgba(0,0,0,0.5)]"
        >
          <span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37] animate-pulse" />
          <span className="text-[10px] sm:text-xs uppercase tracking-[0.22em] text-[#D4AF37] font-semibold">
            Meisterbetrieb für Fahrzeugveredelung
          </span>
        </motion.div>

        {/* Master Headline: Clean, Confident & Impactful */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.75rem] font-extrabold tracking-tight text-white leading-[1.1] mb-3 sm:mb-5 drop-shadow-[0_2px_20px_rgba(0,0,0,0.85)]"
        >
          MEHR ALS NUR SAUBER.
          <span className="block text-gold-gradient font-bold mt-1 sm:mt-2 text-2xl sm:text-4xl md:text-5xl lg:text-[4rem] tracking-tight">
            Die Perfektion des Automobils.
          </span>
        </motion.h1>

        {/* Minimal Value Proposition: Short & Punchy */}
        <motion.p
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-xs sm:text-base md:text-lg text-neutral-200/90 font-light leading-relaxed max-w-xl mb-6 sm:mb-8 drop-shadow-[0_1px_10px_rgba(0,0,0,0.9)]"
        >
          <span className="hidden sm:inline">
            Bespoke High-End Fahrzeugaufbereitung, mehrstufige Lackkorrektur und zertifizierte 9H-Keramikversiegelung.
          </span>
          <span className="sm:hidden">
            High-End Fahrzeugaufbereitung & zertifizierte 9H-Keramikversiegelung für höchste Ansprüche.
          </span>
        </motion.p>

        {/* Streamlined CTAs: Side-by-Side on Mobile, Compact & Modern */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex flex-row items-center justify-center gap-2.5 sm:gap-4 w-full max-w-xs sm:max-w-none"
        >
          <button
            onClick={onOpenBooking}
            className="flex-1 sm:flex-initial px-5 sm:px-8 py-3.5 sm:py-4 rounded-full bg-[#D4AF37] hover:bg-[#E5C358] text-black font-semibold text-xs sm:text-sm tracking-[0.12em] uppercase flex items-center justify-center gap-2 transition-all duration-300 shadow-[0_4px_25px_rgba(212,175,55,0.3)] hover:shadow-[0_6px_35px_rgba(212,175,55,0.45)] active:scale-95 cursor-pointer whitespace-nowrap"
          >
            <MessageCircle className="w-3.5 h-3.5 sm:w-4 sm:h-4 fill-black shrink-0" />
            <span>Termin anfragen</span>
          </button>

          <a
            href="#gallery"
            className="flex-1 sm:flex-initial px-4 sm:px-7 py-3.5 sm:py-4 rounded-full bg-black/40 hover:bg-white/10 border border-white/20 hover:border-[#D4AF37]/60 text-white font-medium text-xs sm:text-sm tracking-[0.12em] uppercase flex items-center justify-center gap-1.5 backdrop-blur-md transition-all duration-300 active:scale-95 whitespace-nowrap"
          >
            <span className="sm:hidden">Ergebnisse</span>
            <span className="hidden sm:inline">Vorher / Nachher</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
