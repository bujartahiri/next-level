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
  const [sliderPosition, setSliderPosition] = useState(50); // percentage 0 to 100
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
      className={`relative w-full ${aspectRatio} overflow-hidden rounded-xl bg-neutral-900 border border-white/10 select-none group cursor-ew-resize ${className}`}
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
          alt={carModel ? `${carModel} - Nach der Aufbereitung` : "Nachher"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center"
          loading="lazy"
        />
        {/* Subtle Dark Vignette */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* 2. Before Image (Clipped overlay layer) */}
      <div
        className="absolute inset-0 w-full h-full overflow-hidden"
        style={{ clipPath: `inset(0 ${100 - sliderPosition}% 0 0)` }}
      >
        <Image
          src={beforeImage}
          alt={carModel ? `${carModel} - Vor der Aufbereitung` : "Vorher"}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover object-center filter contrast-[0.95] brightness-[0.95]"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/20 pointer-events-none" />
      </div>

      {/* 3. Luxury Gold Divider Line & Drag Handle */}
      <div
        className="absolute top-0 bottom-0 z-20 pointer-events-none"
        style={{ left: `${sliderPosition}%`, transform: "translateX(-50%)" }}
      >
        {/* Vertical Gold Line */}
        <div className="w-[2px] h-full bg-gradient-to-b from-transparent via-[#D4AF37] to-transparent shadow-[0_0_8px_rgba(212,175,55,0.8)]" />

        {/* Center Circular Gold Grip Handle */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-[#050505] border-2 border-[#D4AF37] flex items-center justify-center shadow-[0_0_16px_rgba(212,175,55,0.4)] pointer-events-auto cursor-ew-resize transition-transform duration-150 group-hover:scale-110">
          <MoveHorizontal className="w-3.5 h-3.5 text-[#D4AF37]" />
        </div>
      </div>

      {/* 4. Luxury Badges */}
      <div className="absolute top-3 left-3 z-10 pointer-events-none">
        <span className="px-2.5 py-1 text-[10px] font-mono tracking-[0.2em] uppercase rounded bg-black/70 backdrop-blur-md border border-white/10 text-neutral-300">
          {beforeLabel}
        </span>
      </div>

      <div className="absolute top-3 right-3 z-10 flex items-center gap-2">
        <span className="px-2.5 py-1 text-[10px] font-mono tracking-[0.2em] uppercase rounded bg-[#D4AF37]/15 backdrop-blur-md border border-[#D4AF37]/40 text-[#D4AF37] flex items-center gap-1">
          <Sparkles className="w-2.5 h-2.5" />
          {afterLabel}
        </span>

        {onExpand && (
          <button
            onClick={(e) => {
              e.stopPropagation();
              onExpand();
            }}
            className="p-1.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-neutral-400 hover:text-[#D4AF37] hover:border-[#D4AF37]/30 transition-colors pointer-events-auto"
            title="Vollbild-Vergleich"
          >
            <Maximize2 className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* 5. Bottom Metadata Overlay (Car & Service) */}
      {(carModel || serviceCategory) && (
        <div className="absolute bottom-3 left-3 right-3 z-10 flex items-end justify-between pointer-events-none">
          <div>
            {serviceCategory && (
              <span className="text-[10px] uppercase font-mono tracking-[0.2em] text-[#D4AF37] block">
                {serviceCategory}
              </span>
            )}
            {carModel && (
              <h4 className="text-sm font-semibold tracking-wide text-white drop-shadow-md">
                {carModel}
              </h4>
            )}
          </div>
          <div className="text-[10px] font-mono tracking-wider text-neutral-400 bg-black/60 px-2 py-0.5 rounded border border-white/5 backdrop-blur-sm">
            {Math.round(sliderPosition)}%
          </div>
        </div>
      )}
    </div>
  );
}
