import { NextResponse } from 'next/server';
import { getOwnerFromSession } from '@/lib/auth/session';

export async function requireOwnerApi() {
  const owner = await getOwnerFromSession();
  if (!owner) {
    return {
      ok: false as const,
      response: NextResponse.json({ error: 'Unauthorized' }, { status: 401 }),
    };
  }

  return { ok: true as const, owner };
}

export async function requireOwnerPage() {
  const owner = await getOwnerFromSession();
  return owner;
}
