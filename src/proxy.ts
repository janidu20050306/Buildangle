import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

const OWNER_COOKIE = 'owner_session';

export function proxy(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Check if already logged in - allow access to /admin and /admin/*
  if (pathname.startsWith('/admin') && pathname !== '/admin/login') {
    const token = request.cookies.get(OWNER_COOKIE)?.value;
    
    // Accept any non-empty token (both static and database sessions)
    if (!token || token.length < 5) {
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
  }

  // If already logged in and trying to access login, redirect to admin
  if (pathname === '/admin/login') {
    const token = request.cookies.get(OWNER_COOKIE)?.value;
    if (token && token.length >= 5) {
      return NextResponse.redirect(new URL('/admin', request.url));
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};
