import Link from "next/link";
import { ArrowRight, Sparkles } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { publicNavLinks } from "@/lib/navigation";

export function MarketingHeader() {
  return (
    <header className="border-b border-[rgba(47,47,56,0.7)] bg-[rgba(11,11,13,0.8)] backdrop-blur-xl">
      <div className="mx-auto flex w-full max-w-7xl items-center justify-between gap-6 px-6 py-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3">
          <span className="grid h-10 w-10 place-items-center rounded-[14px] border border-border bg-card shadow-card">
            <Sparkles className="h-5 w-5 text-amber-400" />
          </span>
          <span>
            <span className="block text-sm font-semibold uppercase tracking-[0.3em] text-muted-foreground">
              DevPath
            </span>
            <span className="block text-sm text-foreground">Premium learning OS</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {publicNavLinks.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <Badge variant="secondary" className="hidden md:inline-flex">
            Dark first
          </Badge>
          <Button asChild>
            <Link href="/sign-in">
              Start learning
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </div>
    </header>
  );
}
