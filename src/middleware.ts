import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(req: NextRequest) {
  const authToken = req.cookies.get('auth-token')?.value; // Cookie kontrolü
  const url = req.nextUrl.clone();

  if (!authToken && url.pathname.startsWith('/dashboard')) {
    return NextResponse.redirect(new URL('/auth/login', req.url)); // ✅ Doğru yönlendirme
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/dashboard/:path*'], 
};
