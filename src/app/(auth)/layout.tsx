import Link from "next/link";
import type { ReactNode } from "react";

import { Button } from "@/components/ui/button";

export default function AuthLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background">
      <div className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-6 py-6 lg:px-8">
        <div className="flex items-center justify-between gap-4 pb-10">
          <Link href="/" className="text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
            DevPath
          </Link>
          <Button asChild variant="ghost">
            <Link href="/">Back to home</Link>
          </Button>
        </div>
        <div className="flex flex-1 items-center justify-center">{children}</div>
      </div>
    </div>
  );
}
