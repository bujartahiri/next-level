"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { GalleryProject, ServiceCategory } from "@/types/gallery";
import { GalleryService } from "@/lib/gallery-service";
import BeforeAfterSlider from "./BeforeAfterSlider";
import { ShieldCheck, Clock, ArrowUpRight, Sparkles, Filter, X } from "lucide-react";

const CATEGORIES: { label: string; value: "ALL" | ServiceCategory }[] = [
  { label: "Alle Projekte", value: "ALL" },
  { label: "Keramikversiegelung", value: "Keramikversiegelung" },
  { label: "Lackaufbereitung", value: "Lackaufbereitung" },
  { label: "Innenraumreinigung", value: "Innenraumreinigung" },
  { label: "Außenreinigung", value: "Außenreinigung" },
  { label: "Sonderaufbereitung", value: "Sonderaufbereitung" },
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
    <section id="gallery" className="relative py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      {/* Editorial Section Header */}
      <div className="flex flex-col items-center text-center mb-14">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#D4AF37]/30 bg-[#D4AF37]/5 mb-4">
          <Sparkles className="w-3.5 h-3.5 text-[#D4AF37]" />
          <span className="text-[11px] font-mono tracking-[0.25em] text-[#D4AF37] uppercase">
            Vorher & Nachher Resultate
          </span>
        </div>
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight font-syne text-white mb-4">
          Transformation in <span className="text-gold-gradient">Meisterqualität</span>
        </h2>
        <p className="max-w-2xl text-neutral-400 text-sm sm:text-base leading-relaxed">
          Erleben Sie den direkten Vorher-/Nachher-Vergleich unserer Handwerkskunst. 
          Verschieben Sie den Schieberegler, um die Tiefenwirkung und Lackperfektion im Detail zu erkunden.
        </p>
      </div>

      {/* Filter Category Pills */}
      <div className="flex items-center justify-center gap-2 flex-wrap mb-14">
        {CATEGORIES.map((cat) => {
          const isActive = activeCategory === cat.value;
          return (
            <button
              key={cat.value}
              onClick={() => setActiveCategory(cat.value)}
              className={`px-4 py-2 text-xs uppercase tracking-[0.18em] font-mono rounded-full transition-all duration-200 border ${
                isActive
                  ? "bg-[#D4AF37] text-black border-[#D4AF37] font-semibold shadow-[0_0_20px_rgba(212,175,55,0.35)]"
                  : "bg-neutral-950/80 text-neutral-400 border-white/10 hover:border-[#D4AF37]/40 hover:text-white"
              }`}
            >
              {cat.label}
            </button>
          );
        })}
      </div>

      {/* Grid of Before/After Showcases */}
      {loading ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[1, 2, 3].map((n) => (
            <div key={n} className="h-80 rounded-xl bg-neutral-900/50 animate-pulse border border-white/5" />
          ))}
        </div>
      ) : filteredProjects.length === 0 ? (
        <div className="text-center py-20 border border-white/10 rounded-2xl bg-neutral-950/40">
          <p className="text-neutral-400 text-sm">Keine Projekte in dieser Kategorie gefunden.</p>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.08 }}
              className="group flex flex-col bg-neutral-950/80 border border-white/10 rounded-2xl p-4 transition-all duration-300 hover:border-[#D4AF37]/40 hover:shadow-[0_8px_30px_rgba(0,0,0,0.8)]"
            >
              {/* Interactive Before/After Slider */}
              <BeforeAfterSlider
                beforeImage={project.beforeImage}
                afterImage={project.afterImage}
                carModel={project.carModel}
                serviceCategory={project.serviceCategory}
                onExpand={() => setSelectedProject(project)}
              />

              {/* Card Meta & Details */}
              <div className="pt-4 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between text-[11px] text-neutral-400 mb-2">
                    <span className="font-mono uppercase tracking-wider text-[#D4AF37]">
                      {project.serviceCategory}
                    </span>
                    {project.duration && (
                      <span className="flex items-center gap-1 font-mono text-neutral-400">
                        <Clock className="w-3 h-3 text-[#D4AF37]" />
                        {project.duration}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg font-bold font-syne text-white tracking-wide mb-2 group-hover:text-[#F3E5AB] transition-colors">
                    {project.carModel}
                  </h3>

                  <p className="text-xs text-neutral-400 leading-relaxed line-clamp-3 mb-4">
                    {project.description}
                  </p>
                </div>

                <div>
                  {project.protection && (
                    <div className="flex items-center gap-1.5 text-[11px] text-neutral-300 mb-4 bg-white/5 py-1.5 px-2.5 rounded-lg border border-white/5">
                      <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37] shrink-0" />
                      <span className="truncate">{project.protection}</span>
                    </div>
                  )}

                  {/* Actions */}
                  <div className="flex items-center gap-2 pt-2 border-t border-white/5">
                    <button
                      onClick={() => {
                        if (onSelectBooking) {
                          onSelectBooking(project);
                        } else {
                          const msg = encodeURIComponent(`Hallo, ich interessiere mich für das Detailing-Paket "${project.serviceCategory}" für mein Fahrzeug (${project.carModel}).`);
                          window.open(`https://wa.me/491761234567?text=${msg}`, "_blank");
                        }
                      }}
                      className="flex-1 py-2.5 px-3 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#D4AF37] hover:bg-[#D4AF37]/10 text-white hover:text-[#D4AF37] text-xs font-mono uppercase tracking-wider flex items-center justify-center gap-1.5 transition-all duration-200"
                    >
                      <span>Paket anfragen</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                    <button
                      onClick={() => setSelectedProject(project)}
                      className="py-2.5 px-3 rounded-lg border border-white/5 hover:border-white/20 text-neutral-400 hover:text-white text-xs font-mono uppercase tracking-wider transition-colors"
                      title="Details & Großansicht"
                    >
                      Detail
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      )}

      {/* Expanded Modal for Deep Inspection */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/90 backdrop-blur-xl">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.2 }}
              className="relative w-full max-w-4xl bg-neutral-950 border border-white/15 rounded-2xl overflow-hidden shadow-2xl flex flex-col max-h-[90vh]"
            >
              {/* Modal Header */}
              <div className="flex items-center justify-between px-6 py-4 border-b border-white/10 bg-neutral-900/50">
                <div>
                  <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#D4AF37] block">
                    {selectedProject.serviceCategory}
                  </span>
                  <h3 className="text-xl font-bold font-syne text-white">
                    {selectedProject.carModel}
                  </h3>
                </div>
                <button
                  onClick={() => setSelectedProject(null)}
                  className="p-2 rounded-full border border-white/10 hover:border-[#D4AF37] text-neutral-400 hover:text-white transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {/* Modal Body: Large Before/After Slider */}
              <div className="p-6 overflow-y-auto">
                <div className="mb-6">
                  <BeforeAfterSlider
                    beforeImage={selectedProject.beforeImage}
                    afterImage={selectedProject.afterImage}
                    carModel={selectedProject.carModel}
                    serviceCategory={selectedProject.serviceCategory}
                    aspectRatio="aspect-[16/9]"
                  />
                  <p className="text-center text-xs text-neutral-500 font-mono mt-2">
                    Tipp: Ziehen Sie den Regler nach links und rechts, um die Lackkorrektur und den Glanz zu prüfen.
                  </p>
                </div>

                <div className="space-y-4 text-sm">
                  <div>
                    <h4 className="text-xs uppercase font-mono tracking-wider text-neutral-400 mb-1">
                      Beschreibung & Arbeitsschritte
                    </h4>
                    <p className="text-neutral-300 leading-relaxed">
                      {selectedProject.description}
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                    {selectedProject.duration && (
                      <div className="p-3 rounded-lg bg-neutral-900 border border-white/5 flex items-center gap-3">
                        <Clock className="w-4 h-4 text-[#D4AF37]" />
                        <div>
                          <div className="text-[10px] font-mono uppercase text-neutral-400">Arbeitszeit</div>
                          <div className="text-xs font-medium text-white">{selectedProject.duration}</div>
                        </div>
                      </div>
                    )}
                    {selectedProject.protection && (
                      <div className="p-3 rounded-lg bg-neutral-900 border border-white/5 flex items-center gap-3">
                        <ShieldCheck className="w-4 h-4 text-[#D4AF37]" />
                        <div>
                          <div className="text-[10px] font-mono uppercase text-neutral-400">Schutz & Garantie</div>
                          <div className="text-xs font-medium text-white">{selectedProject.protection}</div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Modal Footer */}
              <div className="px-6 py-4 border-t border-white/10 bg-neutral-900/60 flex items-center justify-end gap-3">
                <button
                  onClick={() => setSelectedProject(null)}
                  className="px-4 py-2 text-xs font-mono uppercase tracking-wider text-neutral-400 hover:text-white"
                >
                  Schließen
                </button>
                <button
                  onClick={() => {
                    const msg = encodeURIComponent(`Hallo, ich interessiere mich für das Detailing-Paket "${selectedProject.serviceCategory}" für (${selectedProject.carModel}). Haben Sie aktuell freie Termine?`);
                    window.open(`https://wa.me/491761234567?text=${msg}`, "_blank");
                  }}
                  className="px-5 py-2.5 rounded-lg bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-2 transition-all shadow-[0_0_20px_rgba(212,175,55,0.3)]"
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
