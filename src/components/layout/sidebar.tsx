"use client";

import Link from "next/link";
import { ArrowRight, Sparkles, X } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { cn } from "@/lib/utils";
import { dashboardNavLinks } from "@/lib/navigation";

interface SidebarProps {
  open: boolean;
  onClose: () => void;
}

export function Sidebar({ open, onClose }: SidebarProps) {
  return (
    <>
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col border-r border-border bg-[rgba(11,11,13,0.96)] px-5 py-6 backdrop-blur-xl transition-transform duration-300 lg:translate-x-0",
          open ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="flex items-center justify-between gap-3">
          <Link href="/" className="flex items-center gap-3" onClick={onClose}>
            <span className="grid h-11 w-11 place-items-center rounded-[16px] border border-border bg-card shadow-card">
              <Sparkles className="h-5 w-5 text-amber-400" />
            </span>
            <span>
              <span className="block text-xs font-semibold uppercase tracking-[0.3em] text-muted-foreground">
                DevPath
              </span>
              <span className="block text-sm font-medium text-foreground">Flutter track</span>
            </span>
          </Link>

          <Button variant="ghost" size="icon-sm" className="lg:hidden" onClick={onClose}>
            <X className="h-4 w-4" />
            <span className="sr-only">Close sidebar</span>
          </Button>
        </div>

        <div className="mt-6 rounded-[18px] border border-border bg-card p-4 shadow-card">
          <div className="flex items-center justify-between gap-3">
            <div>
              <p className="text-sm font-medium text-foreground">Sprint 1 shell</p>
              <p className="mt-1 text-xs text-muted-foreground">Roadmaps later, foundation now.</p>
            </div>
            <Badge variant="accent">32%</Badge>
          </div>
          <div className="mt-4">
            <Progress value={32} />
          </div>
        </div>

        <nav className="mt-8 space-y-2">
          <p className="px-3 text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
            Workspace
          </p>
          {dashboardNavLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.label}
                href={item.href}
                onClick={onClose}
                className="group flex items-center gap-3 rounded-[14px] px-3 py-3 text-sm text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
              >
                <span className="grid h-9 w-9 place-items-center rounded-[12px] border border-border bg-background text-muted-foreground transition-colors group-hover:border-amber-500 group-hover:text-amber-400">
                  <Icon className="h-4 w-4" />
                </span>
                <span className="font-medium">{item.label}</span>
              </Link>
            );
          })}
        </nav>

        <div className="mt-auto rounded-[18px] border border-border bg-card p-4 shadow-card">
          <p className="text-sm font-medium text-foreground">Google auth foundation</p>
          <p className="mt-1 text-sm text-muted-foreground">
            Supabase is wired for Google OAuth and session refresh.
          </p>
          <Button asChild className="mt-4 w-full">
            <Link href="/sign-in">
              Connect account
              <ArrowRight className="h-4 w-4" />
            </Link>
          </Button>
        </div>
      </aside>

      {open ? (
        <button
          type="button"
          aria-label="Close sidebar overlay"
          onClick={onClose}
          className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden"
        />
      ) : null}
    </>
  );
}
