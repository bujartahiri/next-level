"use client";

import React, { useState, useRef, useCallback, useEffect } from "react";
import Image from "next/image";
import { MoveHorizontal, Maximize2, Sparkles } from "lucide-react";

interface BeforeAfterSliderProps {
  beforeImage: string;
  afterImage: string;
  beforeLabel?: string;
  afterLabel?: string;
  carModel?: string;
  serviceCategory?: string;
  aspectRatio?: string;
  className?: string;
  onExpand?: () => void;
}

export default function BeforeAfterSlider({
  beforeImage,
  afterImage,
  beforeLabel = "VORHER",
  afterLabel = "NACHHER",
  carModel,
  serviceCategory,
  aspectRatio = "aspect-[16/10]",
  className = "",
  onExpand,
}: BeforeAfterSliderProps) {
  const [sliderPosition, setSliderPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleMove = useCallback((clientX: number) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = clientX - rect.left;
    const percentage = Math.max(0, Math.min(100, (x / rect.width) * 100));
    setSliderPosition(percentage);
  }, []);

  const handleTouchMove = useCallback((e: TouchEvent) => {
    if (!isDragging) return;
    handleMove(e.touches[0].clientX);
  }, [isDragging, handleMove]);

  const handleMouseMove = useCallback((e: MouseEvent) => {
    if (!isDragging) return;
    handleMove(e.clientX);
  }, [isDragging, handleMove]);

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  useEffect(() => {
    if (isDragging) {
      window.addEventListener("mousemove", handleMouseMove);
      window.addEventListener("mouseup", handleMouseUp);
      window.addEventListener("touchmove", handleTouchMove, { passive: true });
      window.addEventListener("touchend", handleMouseUp);
    }
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseup", handleMouseUp);
      window.removeEventListener("touchmove", handleTouchMove);
      window.removeEventListener("touchend", handleMouseUp);
    };
  }, [isDragging, handleMouseMove, handleMouseUp, handleTouchMove]);

  return (
    <div
      ref={containerRef}
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-2xl bg-neutral-900 border border-white/15 select-none group cursor-ew-resize shadow-2xl ${className}`}
      onMouseDown={(e) => {
        setIsDragging(true);
        handleMove(e.clientX);
      }}
      onTouchStart={(e) => {
        setIsDragging(true);
        handleMove(e.touches[0].clientX);
      }}
    >
      {/* 1. After Image (Base background layer) */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src={afterImage}
          alt={carModel ? `${carModel} - Nachher` : "Nachher"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
          className="object-cover object-center"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25 pointer-events-none" />
      </div>

      {/* 2. Before Image (Clipped overlay layer) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={carModel ? `${carModel} - Vorher` : "Vorher"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 70vw, 50vw"
          className="object-cover object-center filter contrast-[0.95]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-black/25 pointer-events-none" />
      </div>

      {/* 3. Luxury Gold Divider Line & Drag Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        <div className="w-[3px] h-full bg-gradient-to-b from-[#D4AF37] via-[#FFF3D1] to-[#D4AF37] shadow-[0_0_12px_rgba(212,175,55,0.9)]" />

        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-[#050505] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_20px_rgba(212,175,55,0.6)] pointer-events-auto cursor-ew-resize transition-transform duration-150 group-hover:scale-110 active:scale-95">
          <MoveHorizontal className="w-4 h-4 text-[#D4AF37]" />
        </div>
      </div>

      {/* 4. Luxury Badges (Clear, Large, High Contrast) */}
      <div className="absolute top-4 left-4 z-10 pointer-events-none">
        <span className="px-3.5 py-1.5 text-xs sm:text-sm font-mono tracking-widest font-bold uppercase rounded-lg bg-black/80 backdrop-blur-md border border-white/20 text-white shadow-lg">
          {beforeLabel}
        </span>
      </div>

      <div className="absolute top-4 right-4 z-10 flex items-center gap-2">
        <span className="px-3.5 py-1.5 text-xs sm:text-sm font-mono tracking-widest font-bold uppercase rounded-lg bg-[#D4AF37]/20 backdrop-blur-md border border-[#D4AF37] text-[#D4AF37] flex items-center gap-1.5 shadow-[0_0_15px_rgba(212,175,55,0.3)]">
          <Sparkles className="w-3.5 h-3.5" />
          {afterLabel}
        </span>

        {onExpand && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onExpand();
            }}
            className="p-2 rounded-lg bg-black/70 backdrop-blur-md border border-white/20 text-white hover:text-[#D4AF37] hover:border-[#D4AF37] transition-colors pointer-events-auto shadow-lg"
            title="Vollbild"
          >
            <Maximize2 className="w-4 h-4" />
          </button>
        )}
      </div>

      {/* 5. Bottom Metadata Overlay */}
      {(carModel || serviceCategory) && (
        <div className="absolute bottom-4 left-4 right-4 z-10 flex items-end justify-between pointer-events-none">
          <div>
            {serviceCategory && (
              <span className="text-xs uppercase font-mono tracking-widest text-[#D4AF37] font-semibold block mb-0.5">
                {serviceCategory}
              </span>
            )}
            {carModel && (
              <h4 className="text-base sm:text-lg font-bold font-syne tracking-wide text-white drop-shadow-lg">
                {carModel}
              </h4>
            )}
          </div>
          <div className="text-xs font-mono font-bold text-white bg-black/75 px-2.5 py-1 rounded-md border border-white/10 backdrop-blur-md">
            {Math.round(sliderPosition)}%
          </div>
        </div>
      )}
    </div>
  );
}
