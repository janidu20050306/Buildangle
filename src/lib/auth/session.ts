import { createHash, randomBytes } from 'crypto';
import { cookies } from 'next/headers';
import { getSupabaseAdmin } from '@/lib/supabase-admin';

const SESSION_COOKIE = 'owner_session';
const SESSION_TTL_MS = 1000 * 60 * 60 * 8; // 8 hours

function sha256(input: string) {
  return createHash('sha256').update(input).digest('hex');
}

export async function createOwnerSession(ownerId: string) {
  const supabase = getSupabaseAdmin();
  if (!supabase) throw new Error('Supabase credentials are missing.');

  const token = randomBytes(32).toString('hex');
  const tokenHash = sha256(token);
  const expiresAt = new Date(Date.now() + SESSION_TTL_MS);

  const { error } = await supabase.from('owner_sessions').insert({
    owner_id: ownerId,
    token_hash: tokenHash,
    expires_at: expiresAt.toISOString(),
  });

  if (error) throw new Error(error.message);

  const cookieStore = await cookies();
  cookieStore.set(SESSION_COOKIE, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === 'production',
    sameSite: 'lax',
    path: '/',
    expires: expiresAt,
  });
}

export async function clearOwnerSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (token) {
    const supabase = getSupabaseAdmin();
    if (supabase) {
      await supabase.from('owner_sessions').delete().eq('token_hash', sha256(token));
    }
  }
  cookieStore.delete(SESSION_COOKIE);
}

export async function getOwnerFromSession() {
  const cookieStore = await cookies();
  const token = cookieStore.get(SESSION_COOKIE)?.value;
  if (!token) return null;

  const supabase = getSupabaseAdmin();
  if (!supabase) return null;

  const nowIso = new Date().toISOString();
  const { data, error } = await supabase
    .from('owner_sessions')
    .select(
      `
      owner_id,
      expires_at,
      owner_users!inner (
        id,
        email,
        name,
        is_active
      )
    `
    )
    .eq('token_hash', sha256(token))
    .gt('expires_at', nowIso)
    .single();

  if (error || !data?.owner_users) {
    return null;
  }

  const owner = Array.isArray(data.owner_users) ? data.owner_users[0] : data.owner_users;
  if (!owner?.is_active) return null;

  return {
    _id: String(owner.id),
    email: String(owner.email),
    name: String(owner.name),
    isActive: Boolean(owner.is_active),
  };
}

export async function hasAnyOwnerUser() {
  const supabase = getSupabaseAdmin();
  if (!supabase) return false;

  const { count } = await supabase
    .from('owner_users')
    .select('id', { count: 'exact', head: true });

  return Boolean(count && count > 0);
}
