"use client";

import { createBrowserClient } from "@supabase/ssr";
import { getSupabasePublicAnonKey, getSupabasePublicUrl } from "./env";

let browserClient: ReturnType<typeof createBrowserClient> | undefined;

export function getSupabaseBrowserClient() {
  if (browserClient) {
    return browserClient;
  }

  browserClient = createBrowserClient(
    getSupabasePublicUrl(),
    getSupabasePublicAnonKey(),
  );

  return browserClient;
}
