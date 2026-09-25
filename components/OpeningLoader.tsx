"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";

interface OpeningLoaderProps {
  onComplete?: () => void;
  forcePlay?: boolean;
}

export default function OpeningLoader({ onComplete }: OpeningLoaderProps) {
  const [isVisible, setIsVisible] = useState(true);
  const [showShimmer, setShowShimmer] = useState(false);
  const [showLoadingText, setShowLoadingText] = useState(false);

  useEffect(() => {
    // Clean up any legacy storage flag so it never interferes
    try {
      sessionStorage.removeItem("nextlevel_intro_seen");
    } catch (e) {}

    // Storyboard timeline:
    // +1.5s: Shimmer sweep & micro "LOADING..." label
    const shimmerTimer = setTimeout(() => {
      setShowShimmer(true);
      setShowLoadingText(true);
    }, 1500);

    // +2.5s: Clean fade out to reveal Hero
    const exitTimer = setTimeout(() => {
      setIsVisible(false);
    }, 2500);

    // +2.9s: Notify parent that hero is fully active
    const completeTimer = setTimeout(() => {
      if (onComplete) onComplete();
    }, 2900);

    return () => {
      clearTimeout(shimmerTimer);
      clearTimeout(exitTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const handleSkip = () => {
    setIsVisible(false);
    if (onComplete) onComplete();
  };

  if (!isVisible) return null;

  return (
    <div
      id="opening-loader"
      className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#000000] overflow-hidden select-none"
      style={{
        backgroundColor: "#000000",
        animation: "loaderAutoExit 3.0s ease-out forwards",
      }}
      aria-label="NEXT LEVEL FAHRZEUGPFLEGE Intro Loader"
    >
      {/* Subtle Ambient Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(212,175,55,0.08)_0%,rgba(0,0,0,0.95)_70%,#000000_100%)] pointer-events-none" />

      {/* Skip Button */}
      <button
        type="button"
        onClick={handleSkip}
        onTouchEnd={handleSkip}
        className="absolute top-4 right-4 sm:top-6 sm:right-8 text-[10px] uppercase tracking-[0.25em] text-neutral-400 hover:text-[#D4AF37] transition-all py-1.5 px-3.5 z-30 border border-white/10 rounded-full hover:border-[#D4AF37]/50 bg-black/60 backdrop-blur-md active:scale-95"
      >
        Überspringen
      </button>

      {/* Master Logo Animation Stage */}
      <div className="relative w-full max-w-[500px] sm:max-w-[580px] px-6 flex flex-col items-center justify-center">
        
        {/* Shimmer Light Sweep Overlay at +1.5s */}
        {showShimmer && (
          <div className="absolute inset-0 pointer-events-none z-30 overflow-hidden">
            <div className="w-full h-full relative">
              <div 
                className="absolute top-0 bottom-0 w-28 bg-gradient-to-r from-transparent via-[#FFF6D6]/40 to-transparent animate-gold-shimmer filter blur-[2px]"
              />
              {/* Highlight Sparkles */}
              <div
                className="absolute top-[28%] left-[73%] w-2.5 h-2.5 bg-white rounded-full shadow-[0_0_12px_#FFF,0_0_20px_#D4AF37] animate-ping"
                style={{ animationDuration: "1s" }}
              />
              <div
                className="absolute top-[34%] left-[24%] w-2 h-2 bg-white rounded-full shadow-[0_0_10px_#FFF,0_0_16px_#D4AF37] animate-ping"
                style={{ animationDuration: "1.2s" }}
              />
            </div>
          </div>
        )}

        {/* Stacked Logo Structure: Strict Storyboard Timeline */}
        <div className="relative w-full flex flex-col items-center">
          
          {/* 1. ASSET 1: CAR OUTLINE
              0.0s: slides in smoothly from the right to top center (0.8s) */}
          <div
            className="w-full flex justify-center mb-1.5 z-10"
            style={{
              animation: "carSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0s forwards",
            }}
          >
            <div className="w-[85%] sm:w-[82%] max-w-[480px]">
              <Image
                src="/images/loader/car.png"
                alt="Car Silhouette"
                width={554}
                height={103}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_2px_12px_rgba(212,175,55,0.25)]"
              />
            </div>
          </div>

          {/* 2. ASSET 2: "NEXT LEVEL" TEXT
              +1.0s: fades & scales in at exact center (0.6s) */}
          <div
            className="w-full flex justify-center my-1 z-20"
            style={{
              opacity: 0,
              animation: "nextLevelFadeScale 0.6s cubic-bezier(0.16, 1, 0.3, 1) 1.0s forwards",
            }}
          >
            <div className="w-[88%] sm:w-[85%] max-w-[500px]">
              <Image
                src="/images/loader/next-level.png"
                alt="NEXT LEVEL Typography"
                width={585}
                height={57}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_4px_16px_rgba(212,175,55,0.3)]"
              />
            </div>
          </div>

          {/* 3. ASSET 3: "FAHRZEUGPFLEGE" TAGLINE
              +0.5s: slides in smoothly from the left to bottom center (0.8s) */}
          <div
            className="w-full flex justify-center mt-1.5 z-10"
            style={{
              opacity: 0,
              animation: "taglineSlideIn 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.5s forwards",
            }}
          >
            <div className="w-[64%] sm:w-[62%] max-w-[360px]">
              <Image
                src="/images/loader/fahrzeugpflege.png"
                alt="FAHRZEUGPFLEGE Tagline"
                width={417}
                height={23}
                priority
                className="w-full h-auto object-contain filter drop-shadow-[0_2px_8px_rgba(212,175,55,0.22)]"
              />
            </div>
          </div>
        </div>

        {/* TIP 4 & +1.5s: Micro "LOADING..." text */}
        <div className="h-10 mt-6 flex flex-col items-center justify-center">
          {showLoadingText && (
            <div
              className="flex flex-col items-center gap-1.5"
              style={{
                animation: "fadeIn 0.3s ease-out forwards",
              }}
            >
              <span className="text-[9px] sm:text-[10px] tracking-[0.45em] text-[#D4AF37]/85 uppercase font-mono font-medium pl-1">
                LOADING...
              </span>
              <div className="w-16 h-[1px] bg-gradient-to-r from-transparent via-[#D4AF37] to-transparent animate-pulse" />
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
