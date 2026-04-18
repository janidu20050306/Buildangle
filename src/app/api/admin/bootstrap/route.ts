import { NextResponse } from 'next/server';
import { z } from 'zod';
import { hashPassword } from '@/lib/auth/password';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

const setupSchema = z.object({
  name: z.string().min(2).max(100).default('Owner'),
  email: z.string().email(),
  password: z.string().min(8).max(128),
});

export async function POST(request: Request) {
  if (process.env.ENABLE_OWNER_BOOTSTRAP !== 'true') {
    return NextResponse.json(
      { error: 'Bootstrap disabled. Set ENABLE_OWNER_BOOTSTRAP=true temporarily.' },
      { status: 403 }
    );
  }

  const body = await request.json();
  const parsed = setupSchema.safeParse(body);
  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid input', details: parsed.error.flatten() }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ error: 'Missing Supabase configuration.' }, { status: 500 });
  }

  const { count } = await supabase.from('owner_users').select('id', { count: 'exact', head: true });
  if ((count ?? 0) > 0) {
    return NextResponse.json({ error: 'Owner user already exists.' }, { status: 409 });
  }

  const { data: owner, error } = await supabase
    .from('owner_users')
    .insert({
      name: parsed.data.name,
      email: parsed.data.email.toLowerCase(),
      password_hash: hashPassword(parsed.data.password),
      is_active: true,
    })
    .select('id, email, name')
    .single();

  if (error || !owner) {
    return NextResponse.json({ error: error?.message ?? 'Failed to create owner user.' }, { status: 500 });
  }

  return NextResponse.json({
    ok: true,
    owner: { id: String(owner.id), email: owner.email, name: owner.name },
  });
}
