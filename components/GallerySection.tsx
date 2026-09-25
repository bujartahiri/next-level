"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryProject, ServiceCategory } from "@/types/gallery";
import { GalleryService } from "@/lib/gallery-service";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { ShieldCheck, Clock, ArrowUpRight, Sparkles, X, ChevronRight } from "lucide-react";

interface GallerySectionProps {
  onSelectBooking?: (project: GalleryProject) => void;
}

export default function GallerySection({ onSelectBooking }: GallerySectionProps) {
  const [projects, setProjects] = useState<GalleryProject[]>([]);
  const [activeIndex, setActiveIndex] = useState(0);
  const [selectedProject, setSelectedProject] = useState<GalleryProject | null>(null);
  const [loading, setLoading] = useState(true);

  const loadData = async () => {
    try {
      const data = await GalleryService.getProjects(false);
      setProjects(data);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadData();
    const handleUpdate = () => loadData();
    window.addEventListener("nextlevel_projects_updated", handleUpdate);
    return () => window.removeEventListener("nextlevel_projects_updated", handleUpdate);
  }, []);

  const activeProject = projects[activeIndex] || projects[0];

  return (
    <section id="gallery" className="relative py-28 sm:py-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Editorial Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-[#D4AF37]/40 bg-[#D4AF37]/10 mb-4">
          <Sparkles className="w-4 h-4 text-[#D4AF37]" />
          <span className="text-xs sm:text-sm font-mono tracking-[0.25em] text-[#D4AF37] uppercase font-bold">
            Interaktiver Lackvergleich
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight font-syne text-white mb-4">
          Transformation in <span className="text-gold-gradient">Meisterqualität</span>
        </h2>
        <p className="max-w-2xl text-neutral-300 text-sm sm:text-base md:text-lg leading-relaxed">
          Ziehen Sie den Schieberegler nach links und rechts, um die vollständige Beseitigung von Waschkratzern 
          und den erreichten Tiefenglanz im Detail zu prüfen.
        </p>
      </div>

      {loading || !activeProject ? (
        <div className="w-full aspect-[16/9] max-w-5xl mx-auto rounded-3xl bg-neutral-900 animate-pulse" />
      ) : (
        <div className="max-w-5xl mx-auto">
          
          {/* Quick Vehicle Switcher Tabs (Large, Touch-Friendly) */}
          <div className="flex items-center gap-2.5 overflow-x-auto pb-4 mb-6 sm:mb-8 no-scrollbar sm:flex-wrap sm:justify-center">
            {projects.slice(0, 5).map((p, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-5 py-3 rounded-xl text-xs sm:text-sm font-mono tracking-wider font-semibold whitespace-nowrap transition-all duration-200 border ${
                    isActive
                      ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_0_25px_rgba(212,175,55,0.4)]"
                      : "bg-neutral-950/80 text-neutral-300 border-white/15 hover:border-[#D4AF37]/50 hover:text-white"
                  }`}
                >
                  {p.carModel}
                </button>
              );
            })}
          </div>

          {/* Flagship Large Format Before/After Stage */}
          <div className="relative rounded-3xl bg-neutral-950 p-4 sm:p-6 border border-white/15 shadow-[0_0_50px_rgba(0,0,0,0.8)]">
            <BeforeAfterSlider
              key={activeProject.id}
              beforeImage={activeProject.beforeImage}
              afterImage={activeProject.afterImage}
              carModel={activeProject.carModel}
              serviceCategory={activeProject.serviceCategory}
              beforeLabel="VORHER &bull; SWIRLS & KRATZER"
              afterLabel="NACHHER &bull; 9H KERAMIK SPIEGELGLANZ"
              aspectRatio="aspect-[16/10] sm:aspect-[16/9]"
              onExpand={() => setSelectedProject(activeProject)}
            />

            {/* Active Project Meta & Action Bar */}
            <div className="pt-6 flex flex-col md:flex-row md:items-center justify-between gap-6 border-t border-white/10 mt-6">
              <div>
                <span className="text-xs sm:text-sm font-mono uppercase tracking-widest text-[#D4AF37] font-bold block mb-1">
                  {activeProject.serviceCategory}
                </span>
                <h3 className="text-xl sm:text-3xl font-bold font-syne text-white tracking-wide">
                  {activeProject.carModel}
                </h3>
                <p className="text-sm sm:text-base text-neutral-300 mt-2 max-w-2xl leading-relaxed">
                  {activeProject.description}
                </p>
                {activeProject.protection && (
                  <div className="flex items-center gap-2 mt-3 text-xs sm:text-sm font-mono text-neutral-300">
                    <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-semibold">{activeProject.protection}</span>
                  </div>
                )}
              </div>

              <div className="shrink-0 flex flex-col sm:flex-row gap-3">
                <button
                  onClick={() => {
                    if (onSelectBooking) {
                      onSelectBooking(activeProject);
                    } else {
                      const msg = encodeURIComponent(`Hallo, ich interessiere mich für das Detailing-Paket "${activeProject.serviceCategory}" für (${activeProject.carModel}).`);
                      window.open(`https://wa.me/491761234567?text=${msg}`, "_blank");
                    }
                  }}
                  className="px-7 py-4 rounded-xl bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-bold text-sm sm:text-base font-mono uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_0_25px_rgba(212,175,55,0.35)] transition-all active:scale-95"
                >
                  <span>Dieses Paket anfragen</span>
                  <ArrowUpRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>

        </div>
      )}

      {/* Expanded Modal */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-2xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-4xl bg-neutral-950 border border-white/20 rounded-3xl overflow-hidden shadow-2xl p-6 sm:p-8"
            >
              <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
                <div>
                  <span className="text-xs font-mono uppercase text-[#D4AF37] font-bold block">
                    {selectedProject.serviceCategory}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold font-syne text-white">
                    {selectedProject.carModel}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full border border-white/15 text-neutral-400 hover:text-white"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              <BeforeAfterSlider
                beforeImage={selectedProject.beforeImage}
                afterImage={selectedProject.afterImage}
                carModel={selectedProject.carModel}
                serviceCategory={selectedProject.serviceCategory}
                aspectRatio="aspect-[16/9]"
              />

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end gap-4">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-xl border border-white/15 text-sm font-mono uppercase text-neutral-300 hover:text-white"
                >
                  Schließen
                </button>
                <button
                  onClick={() => {
                    const msg = encodeURIComponent(`Hallo, ich interessiere mich für das Detailing-Paket "${selectedProject.serviceCategory}" für (${selectedProject.carModel}).`);
                    window.open(`https://wa.me/491761234567?text=${msg}`, "_blank");
                  }}
                  className="px-6 py-3 rounded-xl bg-[#D4AF37] text-black font-bold text-sm font-mono uppercase tracking-wider flex items-center gap-2"
                >
                  <span>Per WhatsApp buchen</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
