import { GalleryProject } from "@/types/gallery";
import { INITIAL_PROJECTS } from "./initial-projects";
import { supabase, isSupabaseConfigured } from "./supabase";

const STORAGE_KEY = "nextlevel_projects_db";

export const GalleryService = {
  getProjects: async (includeHidden = false): Promise<GalleryProject[]> => {
    // 1. Try Supabase if configured
    if (isSupabaseConfigured && supabase) {
      try {
        let query = supabase.from("projects").select("*").order("created_at", { ascending: false });
        if (!includeHidden) {
          query = query.eq("visible", true);
        }
        const { data, error } = await query;
        if (!error && data && data.length > 0) {
          return data.map((item: any) => ({
            id: item.id,
            carModel: item.car_model,
            serviceCategory: item.service_category,
            description: item.description || "",
            beforeImage: item.before_image,
            afterImage: item.after_image,
            visible: item.visible,
            featured: item.featured,
            duration: item.duration,
            protection: item.protection,
            createdAt: item.created_at,
          }));
        }
      } catch (err) {
        console.warn("Supabase fetch failed, falling back to local storage", err);
      }
    }

    // 2. Client-side local storage fallback
    if (typeof window !== "undefined") {
      try {
        const stored = localStorage.getItem(STORAGE_KEY);
        if (stored) {
          const parsed: GalleryProject[] = JSON.parse(stored);
          return includeHidden ? parsed : parsed.filter((p) => p.visible);
        }
        // Initialize localStorage with initial projects
        localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS));
      } catch (err) {
        console.error("Local storage read error", err);
      }
    }

    // 3. Static server-side fallback
    return includeHidden ? INITIAL_PROJECTS : INITIAL_PROJECTS.filter((p) => p.visible);
  },

  saveProject: async (project: GalleryProject): Promise<boolean> => {
    if (isSupabaseConfigured && supabase) {
      try {
        const dbPayload = {
          id: project.id,
          car_model: project.carModel,
          service_category: project.serviceCategory,
          description: project.description,
          before_image: project.beforeImage,
          after_image: project.afterImage,
          visible: project.visible,
          featured: project.featured ?? false,
          duration: project.duration,
          protection: project.protection,
        };
        const { error } = await supabase.from("projects").upsert(dbPayload);
        if (error) throw error;
      } catch (err) {
        console.error("Supabase upsert error", err);
      }
    }

    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      let list: GalleryProject[] = stored ? JSON.parse(stored) : [...INITIAL_PROJECTS];
      const index = list.findIndex((p) => p.id === project.id);
      if (index >= 0) {
        list[index] = project;
      } else {
        list.unshift(project);
      }
      localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
      window.dispatchEvent(new Event("nextlevel_projects_updated"));
    }

    return true;
  },

  deleteProject: async (id: string): Promise<boolean> => {
    if (isSupabaseConfigured && supabase) {
      try {
        await supabase.from("projects").delete().eq("id", id);
      } catch (err) {
        console.error("Supabase delete error", err);
      }
    }

    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        let list: GalleryProject[] = JSON.parse(stored);
        list = list.filter((p) => p.id !== id);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
        window.dispatchEvent(new Event("nextlevel_projects_updated"));
      }
    }
    return true;
  },

  toggleVisibility: async (id: string): Promise<boolean> => {
    if (typeof window !== "undefined") {
      const stored = localStorage.getItem(STORAGE_KEY);
      if (stored) {
        const list: GalleryProject[] = JSON.parse(stored);
        const item = list.find((p) => p.id === id);
        if (item) {
          item.visible = !item.visible;
          localStorage.setItem(STORAGE_KEY, JSON.stringify(list));
          window.dispatchEvent(new Event("nextlevel_projects_updated"));

          if (isSupabaseConfigured && supabase) {
            try {
              await supabase.from("projects").update({ visible: item.visible }).eq("id", id);
            } catch (err) {
              console.error(err);
            }
          }
        }
      }
    }
    return true;
  },

  resetToDefaults: (): void => {
    if (typeof window !== "undefined") {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(INITIAL_PROJECTS));
      window.dispatchEvent(new Event("nextlevel_projects_updated"));
    }
  },

  generateSupabaseSql: (projects: GalleryProject[]): string => {
    const values = projects.map((p) => {
      const esc = (str?: string) => `'${(str || "").replace(/'/g, "''")}'`;
      return `(${esc(p.id)}, ${esc(p.carModel)}, ${esc(p.serviceCategory)}, ${esc(p.description)}, ${esc(p.beforeImage)}, ${esc(p.afterImage)}, ${p.visible}, ${Boolean(p.featured)}, ${esc(p.duration)}, ${esc(p.protection)})`;
    });

    return `-- NEXT LEVEL FAHRZEUGPFLEGE SQL Migration
CREATE TABLE IF NOT EXISTS public.projects (
  id TEXT PRIMARY KEY,
  car_model TEXT NOT NULL,
  service_category TEXT NOT NULL,
  description TEXT,
  before_image TEXT NOT NULL,
  after_image TEXT NOT NULL,
  visible BOOLEAN DEFAULT TRUE,
  featured BOOLEAN DEFAULT FALSE,
  duration TEXT,
  protection TEXT,
  created_at TIMESTAMPTZ DEFAULT NOW() NOT NULL
);

INSERT INTO public.projects (id, car_model, service_category, description, before_image, after_image, visible, featured, duration, protection)
VALUES
${values.join(",\n")}
ON CONFLICT (id) DO UPDATE SET
  car_model = EXCLUDED.car_model,
  service_category = EXCLUDED.service_category,
  description = EXCLUDED.description,
  before_image = EXCLUDED.before_image,
  after_image = EXCLUDED.after_image,
  visible = EXCLUDED.visible,
  featured = EXCLUDED.featured;
`;
  },
};
