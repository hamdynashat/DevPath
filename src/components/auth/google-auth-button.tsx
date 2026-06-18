"use client";

import { useState } from "react";
import { Chrome, Loader2 } from "lucide-react";

import { Button } from "@/components/ui/button";
import { getSupabaseBrowserClient } from "@/lib/supabase/browser";
import { getSupabasePublicAnonKey, getSupabasePublicUrl } from "@/lib/supabase/env";

const isConfigured = Boolean(getSupabasePublicUrl() && getSupabasePublicAnonKey());

export function GoogleAuthButton() {
  const [loading, setLoading] = useState(false);

  async function handleGoogleSignIn() {
    if (!isConfigured) {
      return;
    }

    try {
      setLoading(true);
      const supabase = getSupabaseBrowserClient();
      const redirectTo = `${window.location.origin}/auth/callback?next=/dashboard`;

      const { error } = await supabase.auth.signInWithOAuth({
        provider: "google",
        options: {
          redirectTo,
        },
      });

      if (error) {
        throw error;
      }
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="space-y-3">
      <Button className="w-full" size="lg" onClick={handleGoogleSignIn} disabled={!isConfigured || loading}>
        {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <Chrome className="h-4 w-4" />}
        Continue with Google
      </Button>
      {!isConfigured ? (
        <p className="text-sm text-muted-foreground">
          Add Supabase environment variables to enable Google sign-in.
        </p>
      ) : null}
    </div>
  );
}
