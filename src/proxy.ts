import { NextRequest, NextResponse } from "next/server";

export function proxy(request: NextRequest) {
  const session = request.cookies.get("better-auth.session_token");

  const protectedRoutes = [
    "/my-profile",
    "/my-bookings",
    "/manage-my-centers",
    "/add-center",
  ];

  const isProtected = protectedRoutes.some((route) =>
    request.nextUrl.pathname.startsWith(route)
  );

  if (isProtected && !session) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    "/my-profile/:path*",
    "/my-bookings/:path*",
    "/manage-my-centers/:path*",
    
  ],
};