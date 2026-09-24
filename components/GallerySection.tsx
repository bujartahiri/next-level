"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryProject, ServiceCategory } from "@/types/gallery";
import { GalleryService } from "@/lib/gallery-service";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { ShieldCheck, Clock, ArrowUpRight, Sparkles, X } from "lucide-react";

const CATEGORIES: { label: string; value: "ALL" | ServiceCategory }[] = [
  { label: "Alle", value: "ALL" },
  { label: "Keramik", value: "Keramikversiegelung" },
  { label: "Lackpolitur", value: "Lackaufbereitung" },
  { label: "Innenraum", value: "Innenraumreinigung" },
  { label: "Handwäsche", value: "Außenreinigung" },
  { label: "Leasing", value: "Sonderaufbereitung" },
];

interface GallerySectionProps {
  onSelectBooking?: (project: GalleryProject) => void;
}

export default function GallerySection({ onSelectBooking }: GallerySectionProps) {
  const [projects, setProjects] = useState<GalleryProject[]>([]);
  const [activeCategory, setActiveCategory] = useState<"ALL" | ServiceCategory>("ALL");
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

  const filteredProjects = activeCategory === "ALL"
    ? projects
    : projects.filter((p) => p.serviceCategory === activeCategory);

  return (
    <section id="gallery" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto border-t border-white/5">
      {/* Section Header */}
      <div className="flex flex-col items-center text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-3.5">
          <Sparkles className="w-3 h-3 text-[#D4AF37]" />
          <span className="text-[10px] sm:text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
            Vorher & Nachher
          </span>
        </div>
        <h2 className="text-2xl sm:text-4xl md:text-5xl font-bold tracking-tight font-syne text-white mb-3">
          Transformation in <span className="text-gold-gradient">Bildern</span>
        </h2>
        <p className="max-w-md text-neutral-400 text-xs sm:text-sm leading-relaxed">
          Echte Ergebnisse unserer Werkstatt. Schieben Sie den Regler für den direkten Vergleich.
        </p>
      </div>

      {/* Filter Category Pills (Mobile horizontal scroll with touch) */}
      <div className="flex items-center gap-2 overflow-x-auto pb-3 mb-8 sm:mb-12 no-scrollbar sm:flex-wrap sm:justify-center -mx-4 px-4 sm:mx-0 sm:px-0">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`whitespace-nowrap px-4 py-2 text-xs font-mono rounded-full transition-all shrink-0 border ${
                isActive
                  ? "bg-[#D4AF37] text-black border-[#D4AF37] font-semibold"
                  : "bg-neutral-950/80 text-neutral-400 border-white/10 hover:border-[#D4AF37]/40 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Clean Grid of Before/After Cards */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-72 rounded-2xl bg-neutral-900/50 animate-pulse border border-white/5" />
          ))}
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="text-center py-16 border border-white/10 rounded-2xl bg-neutral-950/40">
          <p className="text-neutral-400 text-xs sm:text-sm">Keine Projekte in dieser Kategorie gefunden.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="group flex flex-col bg-neutral-950/80 border border-white/10 rounded-2xl p-4 transition-all hover:border-[#D4AF37]/40"
            >
              {/* Interactive Before/After Slider */}
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                carModel={project.carModel}
                serviceCategory={project.serviceCategory}
                onExpand={() => setSelectedProject(project)}
              />

              {/* Simplified Metadata & Single Button */}
              <div className="pt-3.5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] font-mono mb-1">
                    <span className="uppercase text-[#D4AF37] font-medium">
                      {project.serviceCategory}
                    </span>
                    {project.duration && (
                      <span className="text-neutral-400 flex items-center gap-1">
                        <Clock className="w-3 h-3 text-[#D4AF37]" />
                        {project.duration}
                      </span>
                    )}
                  </div>

                  <h3 className="text-base font-bold font-syne text-white tracking-wide mb-1.5 group-hover:text-[#F3E5AB] transition-colors">
                    {project.carModel}
                  </h3>

                  {project.protection && (
                    <div className="flex items-center gap-1 text-[11px] text-neutral-400 mb-3">
                      <ShieldCheck className="w-3 h-3 text-[#D4AF37] shrink-0" />
                      <span className="truncate">{project.protection}</span>
                    </div>
                  )}
                </div>

                <div className="pt-2 border-t border-white/5 flex items-center gap-2">
                  <button
                    onClick={() => {
                      if (onSelectBooking) {
                        onSelectBooking(project);
                      } else {
                        const msg = encodeURIComponent(`Hallo, ich interessiere mich für das Detailing-Paket "${project.serviceCategory}" für (${project.carModel}).`);
                        window.open(`https://wa.me/491761234567?text=${msg}`, "_blank");
                      }
                    }}
                    className="flex-1 py-2 px-3 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-white hover:text-[#D4AF37] text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all"
                  >
                    <span>Paket anfragen</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => setSelectedProject(project)}
                    className="py-2 px-3 rounded-lg border border-white/5 text-neutral-400 hover:text-white text-xs font-mono uppercase transition-colors"
                  >
                    Zoom
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Expanded Modal for Detailed View */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              className="relative w-full max-w-3xl bg-neutral-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              <div className="flex items-center justify-between px-5 py-3.5 border-b border-white/10 bg-neutral-900/50">
                <div>
                  <span className="text-[10px] font-mono uppercase text-[#D4AF37] block">
                    {selectedProject.serviceCategory}
                  </span>
                  <h3 className="text-base sm:text-lg font-bold font-syne text-white">
                    {selectedProject.carModel}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-1.5 rounded-full border border-white/10 text-neutral-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-4 sm:p-6 overflow-y-auto">
                <BeforeAfterSlider
                  beforeImage={selectedProject.beforeImage}
                  afterImage={selectedProject.afterImage}
                  carModel={selectedProject.carModel}
                  serviceCategory={selectedProject.serviceCategory}
                  aspectRatio="aspect-[16/10]"
                />

                <p className="text-xs text-neutral-300 mt-4 leading-relaxed">
                  {selectedProject.description}
                </p>
              </div>

              <div className="px-5 py-3 border-t border-white/10 bg-neutral-900/60 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-3 py-1.5 text-xs font-mono uppercase text-neutral-400 hover:text-white"
                >
                  Schließen
                </button>
                <button
                  onClick={() => {
                    const msg = encodeURIComponent(`Hallo, ich interessiere mich für das Detailing-Paket "${selectedProject.serviceCategory}" für (${selectedProject.carModel}).`);
                    window.open(`https://wa.me/491761234567?text=${msg}`, "_blank");
                  }}
                  className="px-4 py-2 rounded-lg bg-[#D4AF37] text-black font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-1.5"
                >
                  <span>Per WhatsApp anfragen</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
}
