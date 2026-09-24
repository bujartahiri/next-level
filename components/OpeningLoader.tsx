"use client";

import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";

interface OpeningLoaderProps {
  onComplete?: () => void;
  forcePlay?: boolean;
}

export default function OpeningLoader({ onComplete, forcePlay = false }: OpeningLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showShimmer, setShowShimmer] = useState(false);
  const [showLoadingText, setShowLoadingText] = useState(false);

  useEffect(() => {
    // Check if already played in session unless forced
    const hasSeen = sessionStorage.getItem("nextlevel_intro_seen");
    if (hasSeen && !forcePlay) {
      setIsVisible(false);
      if (onComplete) onComplete();
      return;
    }

    // Storyboard sequence timeline:
    // 0.0s: car slides in from right to top center
    // +0.5s: fahrzeugpflege slides in from left to bottom center
    // +1.0s: next-level fades and scales in at exact vertical center
    // +1.5s: Shimmer sweep across mark, sparkles, & micro "LOADING..." text below
    const shimmerTimer = setTimeout(() => {
      setShowShimmer(true);
      setShowLoadingText(true);
    }, 1500);

    // +2.4s: Entire loader fades out cleanly (opacity: 0, duration: 0.5s) to reveal Hero
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
      sessionStorage.setItem("nextlevel_intro_seen", "true");
    }, 2400);

    // +2.9s: Notify parent that hero is fully revealed
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2900);

    return () => {
      clearTimeout(shimmerTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [forcePlay, onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    sessionStorage.setItem("nextlevel_intro_seen", "true");
    if (onComplete) onComplete();
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          key="opening-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] overflow-hidden select-none"
          style={{ backgroundColor: "#000000" }}
          aria-label="NEXT LEVEL FAHRZEUGPFLEGE Intro Loader"
        >
          {/* Subtle Ambient Radial Glow */}
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,rgba(0,0,0,0.92)_70%,#000000_100%)] pointer-events-none" />

          {/* Skip Action */}
          <button
            onClick={handleSkip}
            className="absolute top-4 right-4 sm:top-6 sm:right-8 text-[10px] uppercase tracking-[0.25em] text-neutral-500 hover:text-[#D4AF37] transition-all py-1.5 px-3 z-20 border border-white/5 rounded-full hover:border-[#D4AF37]/40 bg-black/40 backdrop-blur-sm"
          >
            Überspringen
          </button>

          {/* Master Logo Animation Stage */}
          <div className="relative w-full max-w-[540px] sm:max-w-[620px] px-4 sm:px-6 flex flex-col items-center justify-center">
            
            {/* Shimmer Light Sweep Overlay at +1.5s */}
            {showShimmer && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="absolute inset-0 pointer-events-none z-30 overflow-hidden"
              >
                <div className="w-full h-full relative">
                  <div 
                    className="absolute top-0 bottom-0 w-32 bg-gradient-to-r from-transparent via-[#FFF6D6]/45 to-transparent animate-gold-shimmer filter blur-[2px]"
                  />
                  {/* Subtle Sparkle Points from Storyboard Asset 4 */}
                  <motion.div
                    initial={{ scale: 0, opacity: 0, rotate: 0 }}
                    animate={{ scale: [0, 1.4, 0.9], opacity: [0, 1, 0], rotate: 45 }}
                    transition={{ duration: 0.75, delay: 0.1 }}
                    className="absolute top-[28%] left-[73%] w-3 h-3 bg-white rounded-full shadow-[0_0_12px_#FFF,0_0_24px_#D4AF37]"
                  />
                  <motion.div
                    initial={{ scale: 0, opacity: 0, rotate: 0 }}
                    animate={{ scale: [0, 1.3, 0.8], opacity: [0, 1, 0], rotate: -30 }}
                    transition={{ duration: 0.75, delay: 0.25 }}
                    className="absolute top-[34%] left-[22%] w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_10px_#FFF,0_0_20px_#D4AF37]"
                  />
                </div>
              </motion.div>
            )}

            {/* Stacked Logo Structure: Locks into pixel-perfect alignment */}
            <div className="relative w-full flex flex-col items-center">
              
              {/* 1. ASSET 1: CAR OUTLINE
                  0.0s: slides in smoothly from the right to the top center (easeOut, duration: 0.8s) */}
              <motion.div
                initial={{ x: 190, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                className="w-full flex justify-center mb-1 sm:mb-2 z-10"
              >
                <div className="relative w-[88%] sm:w-[86%] aspect-[554/103]">
                  <Image
                    src="/images/loader/car.png"
                    alt="NEXT LEVEL Fahrzeugpflege Car Silhouette"
                    fill
                    priority
                    sizes="(max-width: 640px) 320px, 550px"
                    className="object-contain filter drop-shadow-[0_2px_14px_rgba(212,175,55,0.22)]"
                  />
                </div>
              </motion.div>

              {/* 2. ASSET 2: "NEXT LEVEL" TEXT
                  +1.0s: fades and scales in at exact vertical center between car and tagline (easeOut, duration: 0.6s) */}
              <motion.div
                initial={{ scale: 0.82, opacity: 0, y: 0 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.0, ease: "easeOut" }}
                className="w-full flex justify-center my-1 sm:my-2 z-20"
              >
                <div className="relative w-[92%] sm:w-[90%] aspect-[585/57]">
                  <Image
                    src="/images/loader/next-level.png"
                    alt="NEXT LEVEL Wordmark"
                    fill
                    priority
                    sizes="(max-width: 640px) 340px, 580px"
                    className="object-contain filter drop-shadow-[0_4px_18px_rgba(212,175,55,0.3)]"
                  />
                </div>
              </motion.div>

              {/* 3. ASSET 3: "FAHRZEUGPFLEGE" TAGLINE
                  +0.5s: slides in smoothly from the left to the bottom center (easeOut, duration: 0.8s) */}
              <motion.div
                initial={{ x: -190, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.8, delay: 0.5, ease: "easeOut" }}
                className="w-full flex justify-center mt-1 sm:mt-2 z-10"
              >
                <div className="relative w-[66%] sm:w-[64%] aspect-[417/23]">
                  <Image
                    src="/images/loader/fahrzeugpflege.png"
                    alt="FAHRZEUGPFLEGE Tagline"
                    fill
                    priority
                    sizes="(max-width: 640px) 250px, 420px"
                    className="object-contain filter drop-shadow-[0_2px_10px_rgba(212,175,55,0.22)]"
                  />
                </div>
              </motion.div>
            </div>

            {/* TIP 4 & +1.5s: Micro "LOADING..." text at bottom of the complete screen */}
            <div className="h-10 mt-8 flex flex-col items-center justify-center">
              {showLoadingText && (
                <motion.div
                  initial={{ opacity: 0, y: 4 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4 }}
                  className="flex flex-col items-center gap-2"
                >
                  <span className="text-[10px] tracking-[0.45em] text-[#D4AF37]/85 uppercase font-mono font-medium pl-1">
                    LOADING...
                  </span>
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: 72 }}
                    transition={{ duration: 0.8, ease: "easeInOut" }}
                    className="h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent"
                  />
                </motion.div>
              )}
            </div>

          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
