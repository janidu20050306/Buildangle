import { NextResponse } from 'next/server';
import { projectInputSchema } from '@/lib/projects';
import { requireOwnerApi } from '@/lib/auth/guards';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

interface RouteParams {
  params: Promise<{ id: string }>;
}

export async function GET(_: Request, { params }: RouteParams) {
  const { id } = await params;
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ error: 'Missing Supabase configuration.' }, { status: 500 });
  }
  const { data: project, error } = await supabase.from('projects').select('*').eq('id', id).single();
  if (error || !project) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  return NextResponse.json({ project });
}

export async function PATCH(request: Request, { params }: RouteParams) {
  const access = await requireOwnerApi();
  if (!access.ok) return access.response;

  const { id } = await params;
  const payload = await request.json();
  const parsed = projectInputSchema.safeParse(payload);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid project payload.', details: parsed.error.flatten() }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ error: 'Missing Supabase configuration.' }, { status: 500 });
  }

  const updatePayload = {
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

  const { error } = await supabase.from('projects').update(updatePayload).eq('id', id);
  if (error) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}

export async function DELETE(_: Request, { params }: RouteParams) {
  const access = await requireOwnerApi();
  if (!access.ok) return access.response;

  const { id } = await params;
  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ error: 'Missing Supabase configuration.' }, { status: 500 });
  }
  const { error } = await supabase.from('projects').delete().eq('id', id);
  if (error) {
    return NextResponse.json({ error: 'Project not found' }, { status: 404 });
  }
  return NextResponse.json({ ok: true });
}
