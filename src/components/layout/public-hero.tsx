import { ArrowRight, CheckCircle2, Sparkles, Waypoints } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export function PublicHero() {
  return (
    <main className="relative overflow-hidden">
      <section className="mx-auto grid w-full max-w-7xl gap-10 px-6 pb-20 pt-10 lg:grid-cols-[1.05fr_0.95fr] lg:px-8 lg:pb-28 lg:pt-16">
        <div className="relative z-10 space-y-8">
          <div className="flex flex-wrap items-center gap-3">
            <Badge variant="accent">Premium dark learning OS</Badge>
            <Badge variant="secondary">Flutter track first</Badge>
          </div>

          <div className="space-y-5">
            <p className="text-sm font-medium uppercase tracking-[0.3em] text-muted-foreground">
              Built for roadmap-based learning
            </p>
            <h1 className="max-w-3xl font-display text-5xl font-semibold tracking-tight text-foreground sm:text-6xl">
              A handcrafted developer experience for focused learning and portfolio building.
            </h1>
            <p className="max-w-2xl text-lg leading-8 text-muted-foreground">
              DevPath combines structured roadmaps, milestone progress, and portfolio outcomes in a dark,
              premium interface inspired by Linear, Notion, GitHub, and Duolingo.
            </p>
          </div>

          <div className="flex flex-col gap-3 sm:flex-row">
            <Button asChild size="lg">
              <Link href="/sign-in">
                Start with Google
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
            <Button asChild size="lg" variant="secondary">
              <Link href="/dashboard">View dashboard shell</Link>
            </Button>
          </div>

          <div className="grid gap-4 sm:grid-cols-3">
            {[
              { value: "8", label: "Sprint 1 modules" },
              { value: "3", label: "Portfolio projects" },
              { value: "1", label: "Track live" },
            ].map((item) => (
              <Card key={item.label} className="bg-card">
                <CardContent className="p-5">
                  <p className="text-3xl font-semibold text-foreground">{item.value}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        <div className="relative z-10">
          <Card className="h-full border-border shadow-elevated">
            <CardHeader>
              <div className="flex items-center justify-between gap-3">
                <div>
                  <CardTitle>Track overview</CardTitle>
                  <CardDescription>Production-ready shell for the Flutter journey.</CardDescription>
                </div>
                <Sparkles className="h-5 w-5 text-amber-400" />
              </div>
            </CardHeader>
            <CardContent className="space-y-5">
              <div className="rounded-[16px] border border-border bg-background p-4">
                <div className="flex items-center justify-between gap-4">
                  <p className="text-sm font-medium text-foreground">Current progress</p>
                  <Badge variant="warning">32%</Badge>
                </div>
                <div className="mt-4">
                  <Progress value={32} />
                </div>
              </div>

              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-[16px] border border-border bg-background p-4">
                  <CheckCircle2 className="h-5 w-5 text-amber-400" />
                  <p className="mt-3 text-sm font-medium text-foreground">Milestone checks</p>
                  <p className="mt-1 text-sm text-muted-foreground">Tasks and projects stay visible.</p>
                </div>
                <div className="rounded-[16px] border border-border bg-background p-4">
                  <Waypoints className="h-5 w-5 text-purple-400" />
                  <p className="mt-3 text-sm font-medium text-foreground">Learning flow</p>
                  <p className="mt-1 text-sm text-muted-foreground">Roadmap structure is the product.</p>
                </div>
              </div>

              <div className="rounded-[16px] border border-border bg-background p-4">
                <p className="text-sm font-medium text-foreground">What ships first</p>
                <ul className="mt-3 space-y-2 text-sm text-muted-foreground">
                  <li>• Dark theme landing page</li>
                  <li>• Auth foundation with Google sign-in</li>
                  <li>• Responsive dashboard shell</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}
