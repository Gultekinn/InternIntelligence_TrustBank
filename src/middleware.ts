import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const isAuthenticated = req.cookies.get('auth-token');
  const url = req.nextUrl.clone();

  if (!isAuthenticated && url.pathname.startsWith('/dashboard')) {
    url.pathname = '/auth/login';
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], // Dashboard ile başlayan tüm yolları kontrol eder
};
