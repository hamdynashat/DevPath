import { ArrowRight, CheckCircle2, Clock3, FolderKanban, Sparkles, Zap } from "lucide-react";
import Link from "next/link";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

const roadmapItems = [
  { title: "Flutter and Dart foundations", state: "Completed", progress: 100 },
  { title: "UI system and layout mastery", state: "In progress", progress: 68 },
  { title: "Navigation and app structure", state: "Locked", progress: 0 },
  { title: "Auth and Supabase foundation", state: "Next", progress: 0 },
] as const;

const milestoneTasks = [
  "Review the current roadmap shell",
  "Inspect the design system tokens",
  "Connect Google auth for future sessions",
  "Build the first dashboard interaction",
] as const;

const readinessItems = [
  "Roadmap shell in place",
  "Reusable UI components created",
  "Dark theme and shell layout live",
  "Supabase client configured",
] as const;

export function DashboardShell() {
  return (
    <div className="space-y-8">
      <section id="overview" className="grid gap-6 xl:grid-cols-[1.4fr_0.9fr]">
        <Card className="overflow-hidden">
          <CardHeader className="space-y-4">
            <div className="flex flex-wrap items-center gap-3">
              <Badge variant="accent">Sprint 1</Badge>
              <Badge variant="secondary">Dashboard shell</Badge>
            </div>
            <CardTitle className="text-3xl font-semibold tracking-tight sm:text-4xl">
              A premium learning workspace for the Flutter track.
            </CardTitle>
            <CardDescription className="max-w-2xl text-base">
              This shell is ready for roadmap content, milestone progression, and portfolio building.
              The next sprint can safely layer in data and business logic.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid gap-4 sm:grid-cols-3">
              {[
                { label: "Track readiness", value: "32%" },
                { label: "Unlocked milestones", value: "4" },
                { label: "Portfolio items", value: "0" },
              ].map((stat) => (
                <div key={stat.label} className="rounded-[16px] border border-border bg-background p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">
                    {stat.label}
                  </p>
                  <p className="mt-2 text-2xl font-semibold text-foreground">{stat.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <div className="flex items-center justify-between gap-4">
              <div>
                <CardTitle>Continue learning</CardTitle>
                <CardDescription>Resume at the current milestone shell.</CardDescription>
              </div>
              <Sparkles className="h-5 w-5 text-amber-400" />
            </div>
          </CardHeader>
          <CardContent className="space-y-5">
            <Progress value={32} label="Flutter track progress" />
            <div className="space-y-3">
              <div className="flex items-center justify-between gap-4 rounded-[16px] border border-border bg-background p-4">
                <div>
                  <p className="text-sm font-medium text-foreground">Current milestone</p>
                  <p className="text-sm text-muted-foreground">UI system and layout mastery</p>
                </div>
                <Badge variant="warning">In progress</Badge>
              </div>
              <div className="flex items-center justify-between gap-4 rounded-[16px] border border-border bg-background p-4">
                <div>
                  <p className="text-sm font-medium text-foreground">Next step</p>
                  <p className="text-sm text-muted-foreground">Navigation and app structure</p>
                </div>
                <Badge variant="secondary">Locked</Badge>
              </div>
            </div>
            <Button asChild className="w-full">
              <Link href="#progress">
                View progress shell
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>

      <section id="progress" className="grid gap-6 lg:grid-cols-3">
        <Card>
          <CardHeader>
            <CardTitle>Roadmap progression</CardTitle>
            <CardDescription>Sequential learning structure, ready for content.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {roadmapItems.map((item) => (
              <div key={item.title} className="rounded-[16px] border border-border bg-background p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-sm font-medium text-foreground">{item.title}</p>
                    <p className="text-xs text-muted-foreground">{item.state}</p>
                  </div>
                  <Badge variant={item.state === "Completed" ? "success" : item.state === "In progress" ? "warning" : "secondary"}>
                    {item.progress}%
                  </Badge>
                </div>
                <div className="mt-4">
                  <Progress value={item.progress} />
                </div>
              </div>
            ))}
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Milestone checklist</CardTitle>
            <CardDescription>Guided tasks that support the next release.</CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="space-y-3">
              {milestoneTasks.map((task) => (
                <li key={task} className="flex items-start gap-3 rounded-[16px] border border-border bg-background p-4">
                  <CheckCircle2 className="mt-0.5 h-4 w-4 text-amber-400" />
                  <span className="text-sm text-foreground">{task}</span>
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>Portfolio readiness</CardTitle>
            <CardDescription>Everything needed for Sprint 1 delivery.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {readinessItems.map((item) => (
              <div key={item} className="flex items-center gap-3 rounded-[16px] border border-border bg-background p-4">
                <Zap className="h-4 w-4 text-amber-400" />
                <span className="text-sm text-foreground">{item}</span>
              </div>
            ))}
            <div className="rounded-[16px] border border-border bg-card p-4">
              <p className="text-sm font-medium text-foreground">Ready for the next sprint</p>
              <p className="mt-1 text-sm text-muted-foreground">
                Roadmap data, milestone logic, and portfolio generation can be added on top of this shell.
              </p>
            </div>
          </CardContent>
        </Card>
      </section>

      <section id="roadmap" className="grid gap-6 xl:grid-cols-[0.95fr_1.05fr]">
        <Card>
          <CardHeader>
            <CardTitle>Roadmap shell</CardTitle>
            <CardDescription>Structure without business logic.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-[16px] border border-border bg-background p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="font-medium text-foreground">Module 1 · Foundations</p>
                <Badge variant="success">Complete</Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Dart syntax, Flutter basics, and environment setup are now represented in the UI.
              </p>
            </div>
            <div className="rounded-[16px] border border-border bg-background p-4">
              <div className="flex items-center justify-between gap-4">
                <p className="font-medium text-foreground">Module 2 · UI system</p>
                <Badge variant="warning">Current</Badge>
              </div>
              <p className="mt-2 text-sm text-muted-foreground">
                Layout mastery, reusable components, and dark theme polish are the focus of this sprint.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card id="projects">
          <CardHeader>
            <CardTitle>Projects and next milestones</CardTitle>
            <CardDescription>Static preview of the learning journey.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 md:grid-cols-2">
            {[
              { title: "Portfolio project", note: "Habit tracker shell", icon: FolderKanban },
              { title: "Mentor-ready deliverable", note: "Dashboard presentation", icon: Clock3 },
            ].map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.title} className="rounded-[16px] border border-border bg-background p-4">
                  <Icon className="h-5 w-5 text-amber-400" />
                  <p className="mt-3 text-sm font-medium text-foreground">{item.title}</p>
                  <p className="mt-1 text-sm text-muted-foreground">{item.note}</p>
                </div>
              );
            })}
          </CardContent>
        </Card>
      </section>

      <section id="portfolio" className="grid gap-6 xl:grid-cols-[1.1fr_0.9fr]">
        <Card>
          <CardHeader>
            <CardTitle>Portfolio shell</CardTitle>
            <CardDescription>Showcase-ready structure for future projects.</CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[16px] border border-border bg-background p-4">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">Public item</p>
              <p className="mt-2 text-base font-medium text-foreground">Flutter habit tracker</p>
              <p className="mt-1 text-sm text-muted-foreground">Project summary and demo links live here later.</p>
            </div>
            <div className="rounded-[16px] border border-border bg-background p-4">
              <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">Visibility</p>
              <p className="mt-2 text-base font-medium text-foreground">Portfolio-ready</p>
              <p className="mt-1 text-sm text-muted-foreground">Auto-generated from approved project completions.</p>
            </div>
          </CardContent>
        </Card>

        <Card id="account">
          <CardHeader>
            <CardTitle>Account and auth foundation</CardTitle>
            <CardDescription>Google OAuth is wired into Supabase.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="rounded-[16px] border border-border bg-background p-4">
              <p className="text-sm font-medium text-foreground">Environment</p>
              <p className="mt-1 text-sm text-muted-foreground">
                NEXT_PUBLIC_SUPABASE_URL and NEXT_PUBLIC_SUPABASE_ANON_KEY power the auth flow.
              </p>
            </div>
            <Button asChild className="w-full" variant="secondary">
              <Link href="/sign-in">
                Open auth screen
                <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
