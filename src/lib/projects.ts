import { z } from 'zod';
import { PROJECTS, Project } from '@/lib/constants';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

const categoryEnum = z.enum(['Luxury Villa', 'Modern Home', 'Renovation', 'Commercial']);
const statusEnum = z.enum(['ongoing', 'done', 'coming-soon']);

export const projectInputSchema = z.object({
  slug: z
    .string()
    .min(3)
    .max(120)
    .regex(/^[a-z0-9-]+$/),
  title: z.string().min(2).max(150),
  category: categoryEnum,
  location: z.string().min(2).max(120),
  year: z.number().int().min(2000).max(2100),
  image: z.string().url(),
  images: z.array(z.string().url()).default([]),
  description: z.string().min(8).max(280),
  longDescription: z.string().max(5000).optional().default(''),
  area: z.number().int().min(100).max(100000).optional(),
  featured: z.boolean().optional().default(false),
  status: statusEnum.default('ongoing'),
});

export type ProjectInput = z.infer<typeof projectInputSchema>;

function normalizeProject(doc: Record<string, unknown>): Project {
  const images = Array.isArray(doc.images)
    ? (doc.images as string[])
    : typeof doc.images === 'string'
    ? [doc.images]
    : [];

  return {
    _id: String(doc.id ?? doc._id ?? ''),
    slug: String(doc.slug ?? ''),
    title: String(doc.title ?? ''),
    category: doc.category as Project['category'],
    location: String(doc.location ?? ''),
    year: Number(doc.year ?? 0),
    image: String(doc.image ?? ''),
    images,
    description: String(doc.description ?? ''),
    longDescription: String(doc.longDescription ?? doc.long_description ?? ''),
    area: typeof doc.area === 'number' ? doc.area : undefined,
    featured: Boolean(doc.featured),
    status: (doc.status as Project['status']) ?? 'ongoing',
  };
}

export async function getAllProjects() {
  try {
    const supabase = getSupabaseAdmin();
    if (!supabase) return PROJECTS;

    const { data: docs, error } = await supabase
      .from('projects')
      .select('*')
      .order('featured', { ascending: false })
      .order('year', { ascending: false });

    if (error) return PROJECTS;
    if (!docs.length) return PROJECTS;
    return docs.map((doc) => normalizeProject(doc as Record<string, unknown>));
  } catch {
    return PROJECTS;
  }
}

export async function getFeaturedProjects(limit = 3) {
  const projects = await getAllProjects();
  return projects.filter((item) => item.featured).slice(0, limit);
}

export async function getProjectBySlug(slug: string) {
  try {
    const supabase = getSupabaseAdmin();
    if (!supabase) return PROJECTS.find((item) => item.slug === slug) ?? null;

    const { data: doc, error } = await supabase.from('projects').select('*').eq('slug', slug).single();
    if (error) return PROJECTS.find((item) => item.slug === slug) ?? null;
    if (doc) return normalizeProject(doc as Record<string, unknown>);
  } catch {
    // Fall through to static fallback
  }

  return PROJECTS.find((item) => item.slug === slug) ?? null;
}

export async function getProjectById(id: string) {
  const supabase = getSupabaseAdmin();
  if (!supabase) return null;

  const { data: doc, error } = await supabase.from('projects').select('*').eq('id', id).single();
  if (error) return null;
  if (!doc) return null;
  return normalizeProject(doc as Record<string, unknown>);
}
