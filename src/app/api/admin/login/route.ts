import { NextResponse } from 'next/server';
import { z } from 'zod';
import { verifyPassword } from '@/lib/auth/password';
import { createOwnerSession } from '@/lib/auth/session';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8).max(128),
});

export async function POST(request: Request) {
  const payload = await request.json();
  const parsed = loginSchema.safeParse(payload);

  if (!parsed.success) {
    return NextResponse.json({ error: 'Invalid login payload.' }, { status: 400 });
  }

  const supabase = getSupabaseAdmin();
  if (!supabase) {
    return NextResponse.json({ error: 'Missing Supabase configuration.' }, { status: 500 });
  }

  const { data: owner, error } = await supabase
    .from('owner_users')
    .select('id, email, name, password_hash, is_active')
    .eq('email', parsed.data.email.toLowerCase())
    .eq('is_active', true)
    .single();

  if (error || !owner || !verifyPassword(parsed.data.password, owner.password_hash)) {
    return NextResponse.json({ error: 'Invalid email or password.' }, { status: 401 });
  }

  await createOwnerSession(String(owner.id));

  return NextResponse.json({
    ok: true,
    owner: { id: String(owner.id), email: owner.email, name: owner.name },
  });
}
