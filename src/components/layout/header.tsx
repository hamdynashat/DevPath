"use client";

import Link from "next/link";
import { Menu, Search } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

interface HeaderProps {
  onMenuClick: () => void;
}

export function Header({ onMenuClick }: HeaderProps) {
  return (
    <header className="sticky top-0 z-30 border-b border-border bg-[rgba(11,11,13,0.8)] backdrop-blur-xl">
      <div className="flex items-center gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <Button variant="ghost" size="icon-sm" className="lg:hidden" onClick={onMenuClick}>
          <Menu className="h-4 w-4" />
          <span className="sr-only">Open sidebar</span>
        </Button>

        <div className="min-w-0 flex-1">
          <p className="text-xs font-medium uppercase tracking-[0.3em] text-muted-foreground">
            DevPath Dashboard
          </p>
          <div className="mt-1 flex items-center gap-3">
            <h1 className="truncate text-xl font-semibold text-foreground sm:text-2xl">
              Sprint 1 Shell
            </h1>
            <Badge variant="secondary" className="hidden sm:inline-flex">
              Dark theme
            </Badge>
          </div>
        </div>

        <div className="hidden max-w-xs flex-1 lg:block">
          <div className="relative">
            <Search className="pointer-events-none absolute left-4 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <Input
              aria-label="Search DevPath"
              placeholder="Search roadmap, projects, notes"
              className="h-11 pl-11"
            />
          </div>
        </div>

        <Button asChild variant="secondary" className="hidden sm:inline-flex">
          <Link href="/">View landing</Link>
        </Button>
      </div>
    </header>
  );
}
