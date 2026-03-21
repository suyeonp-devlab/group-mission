import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { LOGIN_COOKIE } from "@/shared/lib/cookie";

export function proxy(req: NextRequest) {

  const { pathname } = req.nextUrl;
  const hasSession = !!req.cookies.get(LOGIN_COOKIE);

  const isPublicMain = pathname === "/";
  const isAuth = pathname === "/login" || pathname === "/signup" || pathname === "/find-password";
  const isProtected = pathname.startsWith("/app");

  // Prevent authenticated users from accessing public main & auth pages
  if (hasSession && (isPublicMain || isAuth)) {
    return NextResponse.redirect(new URL("/app", req.url));
  }

  // Block access to protected routes if not authenticated
  if (!hasSession && isProtected) {
    return NextResponse.redirect(new URL("/login", req.url));
  }

  return NextResponse.next();
}

// config is consumed internally by Next.js
export const config = {
  // Match all request paths except for: API routes, Next.js internal paths, Static files
  matcher: ["/((?!api|_next/static|_next/image|favicon.ico).*)"],
};
