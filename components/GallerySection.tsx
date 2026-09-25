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
    <section id="gallery" className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/10">
      
      {/* Editorial Section Header */}
      <div className="flex flex-col items-center text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#D4AF37]/35 bg-[#0a0a0a]/90 backdrop-blur-md mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] sm:text-xs uppercase tracking-[0.25em] text-[#D4AF37] font-semibold">
            Interaktiver Lackvergleich
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-white mb-3">
          Transformation in <span className="text-gold-gradient">Meisterqualität</span>
        </h2>
        <p className="max-w-xl text-neutral-300 text-sm sm:text-base leading-relaxed">
          Ziehen Sie den Schieberegler, um die Beseitigung von Mikrokratzern und den erreichten Tiefenglanz im Detail zu prüfen.
        </p>
      </div>

      {loading || !activeProject ? (
        <div className="w-full aspect-[16/9] max-w-5xl mx-auto rounded-2xl bg-neutral-900 animate-pulse" />
      ) : (
        <div className="max-w-5xl mx-auto">
          
          {/* Quick Vehicle Switcher Tabs (Large, Touch-Friendly) */}
          <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-6 sm:mb-8 no-scrollbar sm:flex-wrap sm:justify-center">
            {projects.slice(0, 5).map((p, idx) => {
              const isActive = idx === activeIndex;
              return (
                <button
                  key={p.id}
                  onClick={() => setActiveIndex(idx)}
                  className={`px-4 py-2.5 rounded-full text-xs tracking-wider font-semibold whitespace-nowrap transition-all duration-200 border cursor-pointer ${
                    isActive
                      ? "bg-[#D4AF37] text-black border-[#D4AF37] shadow-[0_2px_15px_rgba(212,175,55,0.25)]"
                      : "bg-[#0a0a0a] text-neutral-300 border-white/10 hover:border-[#D4AF37]/50 hover:text-white"
                  }`}
                >
                  {p.carModel}
                </button>
              );
            })}
          </div>

          {/* Flagship Large Format Before/After Stage */}
          <div className="relative rounded-2xl bg-[#0a0a0a] p-3 sm:p-5 border border-white/10 shadow-[0_4px_40px_rgba(0,0,0,0.8)]">
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
            <div className="pt-5 flex flex-col md:flex-row md:items-center justify-between gap-5 border-t border-white/10 mt-5">
              <div>
                <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block mb-1">
                  {activeProject.serviceCategory}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  {activeProject.carModel}
                </h3>
                <p className="text-sm text-neutral-300 mt-1.5 max-w-2xl leading-relaxed">
                  {activeProject.description}
                </p>
                {activeProject.protection && (
                  <div className="flex items-center gap-2 mt-2.5 text-xs text-neutral-300">
                    <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                    <span className="font-medium">{activeProject.protection}</span>
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
                  className="px-6 py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#E5C358] text-black font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-[0_2px_15px_rgba(212,175,55,0.2)] transition-all active:scale-95 cursor-pointer"
                >
                  <span>Dieses Paket anfragen</span>
                  <ArrowUpRight className="w-4 h-4" />
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
                  <span className="text-xs uppercase tracking-widest text-[#D4AF37] font-semibold block">
                    {selectedProject.serviceCategory}
                  </span>
                  <h3 className="text-xl sm:text-2xl font-bold text-white">
                    {selectedProject.carModel}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full border border-white/15 text-neutral-400 hover:text-white cursor-pointer"
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

              <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-5 py-2.5 rounded-full border border-white/15 text-xs uppercase tracking-wider text-neutral-300 hover:text-white cursor-pointer"
                >
                  Schließen
                </button>
                <button
                  onClick={() => {
                    const msg = encodeURIComponent(`Hallo, ich interessiere mich für das Detailing-Paket "${selectedProject.serviceCategory}" für (${selectedProject.carModel}).`);
                    window.open(`https://wa.me/491761234567?text=${msg}`, "_blank");
                  }}
                  className="px-6 py-2.5 rounded-full bg-[#D4AF37] text-black font-semibold text-xs uppercase tracking-wider flex items-center gap-2 cursor-pointer shadow-[0_2px_15px_rgba(212,175,55,0.25)]"
                >
                  <span>Per WhatsApp anfragen</span>
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
