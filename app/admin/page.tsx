"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { GalleryProject, ServiceCategory } from "@/types/gallery";
import { GalleryService } from "@/lib/gallery-service";
import { isSupabaseConfigured } from "@/lib/supabase";
import BeforeAfterSlider from "@/components/BeforeAfterSlider";
import {
  Shield,
  Plus,
  Trash2,
  Eye,
  EyeOff,
  Edit3,
  Check,
  RotateCcw,
  Database,
  ExternalLink,
  Car,
  Image as ImageIcon,
  ArrowLeft,
  Sparkles,
  Copy,
  Lock,
} from "lucide-react";

const CATEGORIES: ServiceCategory[] = [
  "Außenreinigung",
  "Innenraumreinigung",
  "Lackaufbereitung",
  "Keramikversiegelung",
  "Sonderaufbereitung",
];

const PRESET_BEFORE_AFTER = [
  {
    name: "Porsche 911 GT3 (Lackkorrektur)",
    before: "https://images.unsplash.com/photo-1614162692292-7ac56d7f7f1e?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1503376780353-7e6692767b70?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Mercedes-AMG GT (Tiefenglanz)",
    before: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1617814076367-b759c7d7e738?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Audi RS6 (Innenraum & Leder)",
    before: "https://images.unsplash.com/photo-1563720223185-11003d516935?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1541899481282-d53bffe3c35d?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "BMW M4 (Schmiedefelgen & Glanz)",
    before: "https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=1200&q=80",
  },
  {
    name: "Ferrari F8 (9H Graphen-Keramik)",
    before: "https://images.unsplash.com/photo-1583121274602-3e2820c69888?auto=format&fit=crop&w=1200&q=80",
    after: "https://images.unsplash.com/photo-1592198084033-aade902d1aae?auto=format&fit=crop&w=1200&q=80",
  },
];

export default function AdminPage() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passwordInput, setPasswordInput] = useState("");
  const [authError, setAuthError] = useState(false);

  const [projects, setProjects] = useState<GalleryProject[]>([]);
  const [loading, setLoading] = useState(true);
  const [editingProject, setEditingProject] = useState<GalleryProject | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [copiedSql, setCopiedSql] = useState(false);

  // Form State
  const [formCarModel, setFormCarModel] = useState("");
  const [formCategory, setFormCategory] = useState<ServiceCategory>("Keramikversiegelung");
  const [formDescription, setFormDescription] = useState("");
  const [formBeforeImage, setFormBeforeImage] = useState("");
  const [formAfterImage, setFormAfterImage] = useState("");
  const [formDuration, setFormDuration] = useState("16 Arbeitsstunden");
  const [formProtection, setFormProtection] = useState("36 Monate Schutzgarantie");
  const [formVisible, setFormVisible] = useState(true);
  const [formFeatured, setFormFeatured] = useState(false);

  useEffect(() => {
    // Check remembered session
    const authSession = sessionStorage.getItem("nextlevel_admin_auth");
    if (authSession === "granted") {
      setIsAuthenticated(true);
    }
  }, []);

  const loadProjects = async () => {
    setLoading(true);
    try {
      const list = await GalleryService.getProjects(true);
      setProjects(list);
    } catch (e) {
      console.error(e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (isAuthenticated) {
      loadProjects();
    }
  }, [isAuthenticated]);

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();
    if (passwordInput === "admin123" || passwordInput === "nextlevel") {
      setIsAuthenticated(true);
      sessionStorage.setItem("nextlevel_admin_auth", "granted");
      setAuthError(false);
    } else {
      setAuthError(true);
    }
  };

  const openNewForm = () => {
    setEditingProject(null);
    setFormCarModel("");
    setFormCategory("Keramikversiegelung");
    setFormDescription("");
    setFormBeforeImage(PRESET_BEFORE_AFTER[0].before);
    setFormAfterImage(PRESET_BEFORE_AFTER[0].after);
    setFormDuration("2 Tage (18 Stunden)");
    setFormProtection("36 Monate Keramik-Garantie");
    setFormVisible(true);
    setFormFeatured(false);
    setIsModalOpen(true);
  };

  const openEditForm = (p: GalleryProject) => {
    setEditingProject(p);
    setFormCarModel(p.carModel);
    setFormCategory(p.serviceCategory);
    setFormDescription(p.description);
    setFormBeforeImage(p.beforeImage);
    setFormAfterImage(p.afterImage);
    setFormDuration(p.duration || "");
    setFormProtection(p.protection || "");
    setFormVisible(p.visible);
    setFormFeatured(p.featured || false);
    setIsModalOpen(true);
  };

  const handleSave = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formCarModel || !formBeforeImage || !formAfterImage) {
      alert("Bitte füllen Sie Fahrzeugmodell sowie beide Bild-URLs aus.");
      return;
    }

    const payload: GalleryProject = {
      id: editingProject ? editingProject.id : `proj-${Date.now()}`,
      carModel: formCarModel,
      serviceCategory: formCategory,
      description: formDescription,
      beforeImage: formBeforeImage,
      afterImage: formAfterImage,
      visible: formVisible,
      featured: formFeatured,
      duration: formDuration,
      protection: formProtection,
      createdAt: editingProject ? editingProject.createdAt : new Date().toISOString(),
    };

    await GalleryService.saveProject(payload);
    await loadProjects();
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string, name: string) => {
    if (confirm(`Möchten Sie das Projekt "${name}" wirklich löschen?`)) {
      await GalleryService.deleteProject(id);
      await loadProjects();
    }
  };

  const handleToggleVisibility = async (id: string) => {
    await GalleryService.toggleVisibility(id);
    await loadProjects();
  };

  const handleReset = async () => {
    if (confirm("Möchten Sie alle Projekte auf die Standard-Showcase-Daten zurücksetzen?")) {
      GalleryService.resetToDefaults();
      await loadProjects();
    }
  };

  const handleCopySql = () => {
    const sql = GalleryService.generateSupabaseSql(projects);
    navigator.clipboard.writeText(sql);
    setCopiedSql(true);
    setTimeout(() => setCopiedSql(false), 3000);
  };

  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>, target: "before" | "after") => {
    const file = e.target.files?.[0];
    if (!file) return;

    const reader = new FileReader();
    reader.onload = (uploadEvent) => {
      const result = uploadEvent.target?.result as string;
      if (target === "before") setFormBeforeImage(result);
      if (target === "after") setFormAfterImage(result);
    };
    reader.readAsDataURL(file);
  };

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-[#050505] flex items-center justify-center p-4">
        <div className="w-full max-w-md bg-neutral-950 border border-white/10 rounded-2xl p-8 shadow-2xl relative">
          <div className="flex flex-col items-center text-center mb-6">
            <div className="w-12 h-12 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 flex items-center justify-center mb-3">
              <Lock className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <span className="text-xs uppercase tracking-wider text-[#D4AF37] font-semibold mb-1">
              Admin CMS Portal
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold tracking-normal text-white">NEXT LEVEL FAHRZEUGPFLEGE</h1>
            <p className="text-sm text-neutral-300 mt-2">
              Geben Sie das Master-Passwort ein, um Galerie-Projekte zu verwalten.
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs uppercase tracking-wider text-neutral-300 font-semibold mb-1.5">
                Passwort (Demo: admin123)
              </label>
              <input
                type="password"
                value={passwordInput}
                onChange={(e) => setPasswordInput(e.target.value)}
                placeholder="admin123"
                className="w-full px-4 py-3 rounded-xl bg-neutral-900 border border-white/15 text-white focus:outline-none focus:border-[#D4AF37] text-base"
                autoFocus
              />
              {authError && (
                <p className="text-xs text-rose-400 mt-1.5">Ungültiges Passwort. Verwenden Sie "admin123".</p>
              )}
            </div>

            <button
              type="submit"
              className="w-full py-3.5 rounded-full bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-semibold text-sm uppercase tracking-wider transition-colors cursor-pointer"
            >
              Anmelden
            </button>
          </form>

          <div className="mt-6 pt-4 border-t border-white/10 text-center">
            <Link
              href="/"
              className="inline-flex items-center gap-1.5 text-xs sm:text-sm text-neutral-400 hover:text-white transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Zurück zur Website</span>
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#050505] text-[#EDEDED] font-sans pb-24">
      {/* Admin Navigation Bar */}
      <header className="border-b border-white/10 bg-neutral-950/80 sticky top-0 z-30 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-4">
            <Link
              href="/"
              className="flex items-center gap-2 text-xs font-mono uppercase text-neutral-400 hover:text-[#D4AF37] transition-colors"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Live Website</span>
            </Link>
            <div className="h-4 w-[1px] bg-white/10" />
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span className="text-xs font-mono uppercase tracking-wider text-white font-semibold">
                Admin CMS
              </span>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={handleReset}
              className="px-3 py-1.5 rounded-lg border border-white/10 text-xs font-mono uppercase text-neutral-400 hover:text-white hover:border-white/20 flex items-center gap-1.5 transition-colors"
              title="Auf Standard-Showcases zurücksetzen"
            >
              <RotateCcw className="w-3.5 h-3.5" />
              <span className="hidden sm:inline">Reset Demo</span>
            </button>

            <button
              onClick={openNewForm}
              className="px-4 py-1.5 rounded-lg bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-semibold text-xs font-mono uppercase tracking-wider flex items-center gap-1.5 transition-colors shadow-[0_0_15px_rgba(212,175,55,0.25)]"
            >
              <Plus className="w-4 h-4" />
              <span>Neues Projekt</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Admin Dashboard */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-8">
        {/* Status Banner */}
        <div className="mb-8 p-4 rounded-xl border border-white/10 bg-neutral-950 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2.5 rounded-lg bg-[#D4AF37]/10 border border-[#D4AF37]/20">
              <Database className="w-5 h-5 text-[#D4AF37]" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-semibold text-white">Datenbank & Speicher-Status</h2>
                <span className={`text-[10px] font-mono px-2 py-0.5 rounded-full ${
                  isSupabaseConfigured 
                    ? "bg-emerald-500/20 text-emerald-400 border border-emerald-500/30" 
                    : "bg-amber-500/20 text-amber-300 border border-amber-500/30"
                }`}>
                  {isSupabaseConfigured ? "Supabase Live Connected" : "Local Persisted Store (Demo / Supabase Ready)"}
                </span>
              </div>
              <p className="text-xs text-neutral-400 mt-0.5">
                {isSupabaseConfigured
                  ? "Alle Änderungen werden direkt in Ihrer Supabase-Instanz gespeichert."
                  : "Änderungen werden lokal im Browser persistiert. Nutzen Sie den SQL-Export für einen nahtlosen Supabase-Import."}
              </p>
            </div>
          </div>

          <button
            onClick={handleCopySql}
            className="px-3 py-1.5 rounded-lg bg-neutral-900 border border-white/10 hover:border-[#D4AF37]/50 text-xs font-mono uppercase text-[#D4AF37] flex items-center gap-1.5 transition-colors"
          >
            {copiedSql ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copiedSql ? "SQL Kopiert!" : "Supabase SQL Export"}</span>
          </button>
        </div>

        {/* Projects List Header */}
        <div className="flex items-center justify-between mb-4">
          <div>
            <h3 className="text-lg font-bold font-syne text-white">
              Galerie-Projekte ({projects.length})
            </h3>
            <p className="text-xs text-neutral-400 font-mono">
              Verwalten Sie Vorher-/Nachher-Vergleiche, Fahrzeugmodelle und Sichtbarkeit.
            </p>
          </div>
        </div>

        {/* Projects Table / Cards */}
        {loading ? (
          <div className="space-y-3">
            {[1, 2, 3].map((i) => (
              <div key={i} className="h-24 bg-neutral-950 border border-white/5 rounded-xl animate-pulse" />
            ))}
          </div>
        ) : projects.length === 0 ? (
          <div className="text-center py-16 border border-white/10 rounded-2xl bg-neutral-950">
            <Car className="w-10 h-10 text-neutral-600 mx-auto mb-2" />
            <p className="text-neutral-400 text-sm">Noch keine Projekte vorhanden.</p>
            <button
              onClick={openNewForm}
              className="mt-3 px-4 py-2 rounded-lg bg-[#D4AF37] text-black text-xs font-mono uppercase font-semibold"
            >
              Erstes Projekt erstellen
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 gap-4">
            {projects.map((p) => (
              <div
                key={p.id}
                className={`p-4 rounded-xl border transition-all duration-200 bg-neutral-950/70 flex flex-col md:flex-row items-start md:items-center justify-between gap-4 ${
                  p.visible ? "border-white/10 hover:border-[#D4AF37]/40" : "border-white/5 opacity-60"
                }`}
              >
                {/* Left: Thumbnail & Info */}
                <div className="flex items-center gap-4 flex-1">
                  <div className="relative w-28 h-20 rounded-lg overflow-hidden border border-white/10 shrink-0 bg-neutral-900">
                    <Image
                      src={p.afterImage}
                      alt={p.carModel}
                      fill
                      className="object-cover"
                    />
                    <div className="absolute bottom-1 right-1 px-1.5 py-0.5 rounded bg-black/70 text-[9px] font-mono text-[#D4AF37]">
                      Nachher
                    </div>
                  </div>

                  <div className="min-w-0">
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-white/5 text-[#D4AF37] border border-white/5">
                        {p.serviceCategory}
                      </span>
                      {p.featured && (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-[#D4AF37]/20 text-[#D4AF37]">
                          Featured
                        </span>
                      )}
                      {!p.visible && (
                        <span className="text-[10px] font-mono uppercase px-2 py-0.5 rounded bg-rose-500/20 text-rose-300">
                          Ausgeblendet
                        </span>
                      )}
                    </div>
                    <h4 className="text-base font-bold font-syne text-white mt-1 truncate">
                      {p.carModel}
                    </h4>
                    <p className="text-xs text-neutral-400 line-clamp-1 mt-0.5">
                      {p.description}
                    </p>
                    {p.duration && (
                      <span className="text-[10px] font-mono text-neutral-500 block mt-1">
                        Dauer: {p.duration} {p.protection ? `• ${p.protection}` : ""}
                      </span>
                    )}
                  </div>
                </div>

                {/* Right: Actions */}
                <div className="flex items-center gap-2 w-full md:w-auto justify-end border-t md:border-t-0 pt-3 md:pt-0 border-white/5">
                  <button
                    onClick={() => handleToggleVisibility(p.id)}
                    className={`p-2 rounded-lg border text-xs font-mono transition-colors ${
                      p.visible
                        ? "border-white/10 text-neutral-300 hover:text-[#D4AF37] hover:border-[#D4AF37]/40"
                        : "border-rose-500/30 text-rose-400 hover:bg-rose-500/10"
                    }`}
                    title={p.visible ? "Projekt ausblenden" : "Projekt einblenden"}
                  >
                    {p.visible ? <Eye className="w-4 h-4" /> : <EyeOff className="w-4 h-4" />}
                  </button>

                  <button
                    onClick={() => openEditForm(p)}
                    className="p-2 rounded-lg border border-white/10 hover:border-[#D4AF37]/40 text-neutral-300 hover:text-[#D4AF37] transition-colors"
                    title="Bearbeiten"
                  >
                    <Edit3 className="w-4 h-4" />
                  </button>

                  <button
                    onClick={() => handleDelete(p.id, p.carModel)}
                    className="p-2 rounded-lg border border-white/10 hover:border-rose-500/40 text-neutral-400 hover:text-rose-400 transition-colors"
                    title="Löschen"
                  >
                    <Trash2 className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      {/* Create / Edit Project Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/85 backdrop-blur-md overflow-y-auto">
          <div className="relative w-full max-w-3xl bg-neutral-950 border border-white/15 rounded-2xl shadow-2xl p-6 my-8">
            <div className="flex items-center justify-between pb-4 mb-4 border-b border-white/10">
              <h3 className="text-lg font-bold font-syne text-white">
                {editingProject ? "Projekt bearbeiten" : "Neues Detailing-Projekt anlegen"}
              </h3>
              <button
                onClick={() => setIsModalOpen(false)}
                className="text-neutral-400 hover:text-white text-sm font-mono"
              >
                Abbrechen
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4">
              {/* Presets Quick Picker */}
              <div className="p-3 rounded-lg bg-neutral-900 border border-white/5">
                <span className="text-[10px] font-mono uppercase tracking-wider text-[#D4AF37] block mb-2">
                  Schnellauswahl: Luxus Vorher/Nachher Presets
                </span>
                <div className="flex flex-wrap gap-2">
                  {PRESET_BEFORE_AFTER.map((pre, idx) => (
                    <button
                      key={idx}
                      type="button"
                      onClick={() => {
                        setFormBeforeImage(pre.before);
                        setFormAfterImage(pre.after);
                        if (!formCarModel) setFormCarModel(pre.name);
                      }}
                      className="px-2.5 py-1 text-[11px] rounded bg-black/60 border border-white/10 hover:border-[#D4AF37] text-neutral-300 font-mono transition-colors"
                    >
                      {pre.name}
                    </button>
                  ))}
                </div>
              </div>

              {/* Basic Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Fahrzeugmodell *
                  </label>
                  <input
                    type="text"
                    required
                    value={formCarModel}
                    onChange={(e) => setFormCarModel(e.target.value)}
                    placeholder="z. B. Porsche 911 GT3 RS"
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Dienstleistungskategorie *
                  </label>
                  <select
                    value={formCategory}
                    onChange={(e) => setFormCategory(e.target.value as ServiceCategory)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                  >
                    {CATEGORIES.map((cat) => (
                      <option key={cat} value={cat}>
                        {cat}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Description */}
              <div>
                <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                  Arbeitsbeschreibung / Ausgeführte Schritte
                </label>
                <textarea
                  rows={3}
                  value={formDescription}
                  onChange={(e) => setFormDescription(e.target.value)}
                  placeholder="z. B. 3-Stufen Politur, Beseitigung von Waschkratzern, 9H Keramikbeschichtung..."
                  className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                />
              </div>

              {/* Images */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Vorher-Bild URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formBeforeImage}
                    onChange={(e) => setFormBeforeImage(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] text-xs font-mono mb-2"
                  />
                  <div className="flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                    <span>Oder lokale Datei laden:</span>
                    <label className="cursor-pointer text-[#D4AF37] hover:underline">
                      Datei wählen
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, "before")}
                      />
                    </label>
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Nachher-Bild URL *
                  </label>
                  <input
                    type="url"
                    required
                    value={formAfterImage}
                    onChange={(e) => setFormAfterImage(e.target.value)}
                    placeholder="https://..."
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] text-xs font-mono mb-2"
                  />
                  <div className="flex items-center justify-between text-[11px] text-neutral-500 font-mono">
                    <span>Oder lokale Datei laden:</span>
                    <label className="cursor-pointer text-[#D4AF37] hover:underline">
                      Datei wählen
                      <input
                        type="file"
                        accept="image/*"
                        className="hidden"
                        onChange={(e) => handleFileUpload(e, "after")}
                      />
                    </label>
                  </div>
                </div>
              </div>

              {/* Live Preview Slider */}
              {formBeforeImage && formAfterImage && (
                <div className="pt-2">
                  <span className="text-[10px] font-mono uppercase text-neutral-400 block mb-1">
                    Live-Vorschau des Schiebereglers:
                  </span>
                  <div className="max-w-md mx-auto">
                    <BeforeAfterSlider
                      beforeImage={formBeforeImage}
                      afterImage={formAfterImage}
                      carModel={formCarModel || "Vorschau"}
                      serviceCategory={formCategory}
                    />
                  </div>
                </div>
              )}

              {/* Extra Details */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Dauer (z. B. "2 Tage", "18 Stunden")
                  </label>
                  <input
                    type="text"
                    value={formDuration}
                    onChange={(e) => setFormDuration(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                  />
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-neutral-400 mb-1">
                    Schutzgarantie / Haltbarkeit
                  </label>
                  <input
                    type="text"
                    value={formProtection}
                    onChange={(e) => setFormProtection(e.target.value)}
                    className="w-full px-3 py-2 rounded-lg bg-neutral-900 border border-white/10 text-white focus:outline-none focus:border-[#D4AF37] text-sm"
                  />
                </div>
              </div>

              {/* Visibility and Featured Checkboxes */}
              <div className="flex items-center gap-6 pt-2">
                <label className="flex items-center gap-2 cursor-pointer text-xs font-mono uppercase text-neutral-300">
                  <input
                    type="checkbox"
                    checked={formVisible}
                    onChange={(e) => setFormVisible(e.target.checked)}
                    className="w-4 h-4 rounded border-white/20 bg-neutral-900 text-[#D4AF37] focus:ring-0"
                  />
                  <span>In öffentlicher Galerie anzeigen</span>
                </label>

                <label className="flex items-center gap-2 cursor-pointer text-xs font-mono uppercase text-neutral-300">
                  <input
                    type="checkbox"
                    checked={formFeatured}
                    onChange={(e) => setFormFeatured(e.target.checked)}
                    className="w-4 h-4 rounded border-white/20 bg-neutral-900 text-[#D4AF37] focus:ring-0"
                  />
                  <span>Als Featured hervorheben</span>
                </label>
              </div>

              {/* Actions */}
              <div className="flex items-center justify-end gap-3 pt-4 border-t border-white/10">
                <button
                  type="button"
                  onClick={() => setIsModalOpen(false)}
                  className="px-4 py-2 rounded-lg border border-white/10 text-xs font-mono uppercase text-neutral-400 hover:text-white"
                >
                  Abbrechen
                </button>
                <button
                  type="submit"
                  className="px-5 py-2 rounded-lg bg-[#D4AF37] hover:bg-[#E6CA65] text-black font-semibold text-xs font-mono uppercase tracking-wider transition-colors shadow-[0_0_15px_rgba(212,175,55,0.25)]"
                >
                  Speichern
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
}
