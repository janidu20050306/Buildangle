import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const STATIC_USERNAME = 'admin';
const STATIC_PASSWORD = '123';
const STATIC_COOKIE = 'owner_session';

export async function POST(request: Request) {
  const payload = await request.json().catch(() => ({}));

  const { username, password } = payload;

  if (!username || !password) {
    return NextResponse.json({ error: 'Username and password required.' }, { status: 400 });
  }

  if (username === STATIC_USERNAME && password === STATIC_PASSWORD) {
    const cookieStore = await cookies();
    const token = Buffer.from(`${STATIC_USERNAME}:${Date.now()}:static`).toString('base64');
    
    cookieStore.set(STATIC_COOKIE, token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 8, // 8 hours
    });

    return NextResponse.json({
      ok: true,
      owner: { id: 'static-admin', username: STATIC_USERNAME },
    });
  }

  return NextResponse.json({ error: 'Invalid credentials.' }, { status: 401 });
}