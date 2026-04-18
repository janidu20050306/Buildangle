import { NextResponse } from 'next/server';
import { projectInputSchema } from '@/lib/projects';
import { requireOwnerApi } from '@/lib/auth/guards';
import { getAllProjects } from '@/lib/projects';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

export async function GET() {
  const projects = await getAllProjects();
  return NextResponse.json({ projects });
}

export async function POST(request: Request) {
  const access = await requireOwnerApi();
  if (!access.ok) return access.response;

  const payload = await request.json();
  const parsed = projectInputSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid project payload.', details: parsed.error.flatten() }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ error: 'Missing Supabase configuration.' }, { status: 500 });
  }

  const insertPayload = {
    slug: parsed.data.slug,
    title: parsed.data.title,
    category: parsed.data.category,
    location: parsed.data.location,
    year: parsed.data.year,
    image: parsed.data.image,
    images: parsed.data.images,
    description: parsed.data.description,
    long_description: parsed.data.longDescription ?? '',
    area: parsed.data.area ?? null,
    featured: parsed.data.featured ?? false,
    status: parsed.data.status,
  };

  const { data: created, error } = await supabase
    .from('projects')
    .insert(insertPayload)
    .select('id')
    .single();

  if (error || !created) {
    return NextResponse.json({ error: error?.message ?? 'Unable to create project.' }, { status: 500 });
  }

  return NextResponse.json({ ok: true, projectId: String(created.id) }, { status: 201 });
}
