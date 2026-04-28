import { auth } from "@/lib/auth";
import { NextRequest, NextResponse } from "next/server";

const publicRoutes = ["/", "/login"];
const authRoutes = ["/login"];

export async function middleware(request: NextRequest) {
  const { nextUrl } = request;
  const session = await auth();
  const isAuthenticated = !!session;

  const isPublicRoute = publicRoutes.includes(nextUrl.pathname);
  const isAuthRoute = authRoutes.includes(nextUrl.pathname);
  const isApiRoute = nextUrl.pathname.startsWith("/api");

  // Allow API routes and public routes
  if (isApiRoute || isPublicRoute) {
    return NextResponse.next();
  }

  // Redirect authenticated users away from auth pages
  if (isAuthRoute && isAuthenticated) {
    return NextResponse.redirect(new URL("/learn", request.url));
  }

  // Redirect unauthenticated users to login
  if (!isAuthenticated && !isAuthRoute && !isPublicRoute) {
    return NextResponse.redirect(new URL(`/login?callbackUrl=${nextUrl.pathname}`, request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * - public folder
     */
    "/((?!api|_next/static|_next/image|favicon.ico|public).*)",
  ],
};
