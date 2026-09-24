import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey && supabaseUrl.startsWith("http"));

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl!, supabaseAnonKey!)
  : null;

/* SQL DDL for Supabase Project Setup:
create table if not exists public.projects (
  id text primary key,
  car_model text not null,
  service_category text not null,
  description text,
  before_image text not null,
  after_image text not null,
  visible boolean default true,
  featured boolean default false,
  duration text,
  protection text,
  created_at timestamp with time zone default timezone('utc'::text, now()) not null
);

-- Enable Row Level Security
alter table public.projects enable row level security;

-- Policy: Everyone can read visible projects
create policy "Allow public read-only access on visible projects"
  on public.projects for select using (visible = true);

-- Policy: Authenticated users / Service role full access
create policy "Allow full access for service role"
  on public.projects for all using (true);
*/
