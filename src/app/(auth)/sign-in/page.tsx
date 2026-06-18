import { ArrowRight, ShieldCheck, Sparkles } from "lucide-react";

import { GoogleAuthButton } from "@/components/auth/google-auth-button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export default function SignInPage() {
  return (
    <div className="grid w-full gap-8 lg:grid-cols-[1fr_0.9fr]">
      <Card className="mx-auto w-full max-w-xl">
        <CardHeader className="space-y-4">
          <Badge variant="accent" className="w-fit">
            Google auth foundation
          </Badge>
          <CardTitle className="text-3xl font-semibold tracking-tight">Sign in to DevPath</CardTitle>
          <CardDescription className="text-base">
            The auth layer is wired for Supabase Google OAuth. Sign in now and the dashboard shell will be
            ready for the next sprint.
          </CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          <GoogleAuthButton />
          <div className="rounded-[16px] border border-border bg-background p-4 text-sm text-muted-foreground">
            <p className="font-medium text-foreground">What happens next</p>
            <ul className="mt-3 space-y-2">
              <li className="flex items-start gap-2">
                <ShieldCheck className="mt-0.5 h-4 w-4 text-amber-400" />
                Supabase exchanges the OAuth code and refreshes the session cookie.
              </li>
              <li className="flex items-start gap-2">
                <ArrowRight className="mt-0.5 h-4 w-4 text-amber-400" />
                Successful sign-in redirects into the dashboard shell.
              </li>
            </ul>
          </div>
        </CardContent>
      </Card>

      <div className="hidden lg:block">
        <div className="rounded-[24px] border border-border bg-card p-8 shadow-elevated">
          <div className="flex items-center gap-3">
            <Sparkles className="h-5 w-5 text-amber-400" />
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">Sprint 1</p>
          </div>
          <h2 className="mt-5 max-w-md text-3xl font-semibold tracking-tight text-foreground">
            A polished, dark-first product foundation with room to grow.
          </h2>
          <p className="mt-4 max-w-md text-base leading-7 text-muted-foreground">
            The sign-in experience is intentionally minimal so future auth states, onboarding, and user
            sessions can land without redesigning the platform.
          </p>
        </div>
      </div>
    </div>
  );
}
