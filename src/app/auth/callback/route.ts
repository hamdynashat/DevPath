import { NextResponse, type NextRequest } from "next/server";

import { createSupabaseRouteHandlerClient } from "@/lib/supabase/route-handler";

export async function GET(request: NextRequest) {
  const nextPath = request.nextUrl.searchParams.get("next") ?? "/dashboard";
  const code = request.nextUrl.searchParams.get("code");

  if (!code) {
    return NextResponse.redirect(new URL("/sign-in?error=missing-code", request.url));
  }

  const response = NextResponse.redirect(new URL(nextPath, request.url));
  const supabase = createSupabaseRouteHandlerClient(request, response);

  const { error } = await supabase.auth.exchangeCodeForSession(code);

  if (error) {
    return NextResponse.redirect(new URL("/sign-in?error=oauth", request.url));
  }

  return response;
}
