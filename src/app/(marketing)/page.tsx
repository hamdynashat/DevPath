import { MarketingHeader } from "@/components/layout/marketing-header";
import { PublicHero } from "@/components/layout/public-hero";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

export default function MarketingPage() {
  return (
    <div className="min-h-screen bg-background">
      <MarketingHeader />
      <PublicHero />

      <section id="features" className="mx-auto grid w-full max-w-7xl gap-6 px-6 pb-12 lg:grid-cols-3 lg:px-8">
        {[
          {
            title: "Roadmap-first learning",
            description: "Modules, milestones, and completion criteria make progress visible.",
            badge: "Structure",
          },
          {
            title: "Portfolio-building outcomes",
            description: "Every major project is designed to become a showcase artifact.",
            badge: "Outcome",
          },
          {
            title: "Premium visual system",
            description: "Dark theme, amber accents, and handcrafted spacing define the product.",
            badge: "Design",
          },
        ].map((feature) => (
          <Card key={feature.title}>
            <CardHeader>
              <Badge variant="accent" className="w-fit">
                {feature.badge}
              </Badge>
              <CardTitle>{feature.title}</CardTitle>
              <CardDescription>{feature.description}</CardDescription>
            </CardHeader>
          </Card>
        ))}
      </section>

      <section id="system" className="mx-auto grid w-full max-w-7xl gap-6 px-6 pb-20 lg:grid-cols-[1fr_1.1fr] lg:px-8">
        <Card>
          <CardHeader>
            <Badge variant="secondary" className="w-fit">
              Design system
            </Badge>
            <CardTitle>Dark, warm, and deliberate.</CardTitle>
            <CardDescription>
              Black and charcoal surfaces create depth while amber and purple accents keep the UI alive.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Progress value={82} label="Visual consistency" />
            <div className="grid gap-4 sm:grid-cols-2">
              {[
                { label: "Typography", value: "Inter + Space Grotesk" },
                { label: "Radius", value: "16px default" },
                { label: "Shadows", value: "Soft and layered" },
                { label: "Theme", value: "Dark first" },
              ].map((item) => (
                <div key={item.label} className="rounded-[16px] border border-border bg-background p-4">
                  <p className="text-xs font-medium uppercase tracking-[0.25em] text-muted-foreground">{item.label}</p>
                  <p className="mt-2 text-sm font-medium text-foreground">{item.value}</p>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card id="portfolio">
          <CardHeader>
            <Badge variant="warning" className="w-fit">
              Portfolio preview
            </Badge>
            <CardTitle>Built to present real work, not just activity.</CardTitle>
            <CardDescription>
              Learners can display completed projects, progress, and milestone achievements in one place.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 sm:grid-cols-2">
            <div className="rounded-[16px] border border-border bg-background p-4">
              <p className="text-sm font-medium text-foreground">Projects</p>
              <p className="mt-1 text-sm text-muted-foreground">Portfolio-ready deliverables from the track.</p>
            </div>
            <div className="rounded-[16px] border border-border bg-background p-4">
              <p className="text-sm font-medium text-foreground">Progress</p>
              <p className="mt-1 text-sm text-muted-foreground">Milestone completion surfaces confidence.</p>
            </div>
            <div className="rounded-[16px] border border-border bg-background p-4">
              <p className="text-sm font-medium text-foreground">Clarity</p>
              <p className="mt-1 text-sm text-muted-foreground">A single roadmap guides the experience.</p>
            </div>
            <div className="rounded-[16px] border border-border bg-background p-4">
              <p className="text-sm font-medium text-foreground">Quality</p>
              <p className="mt-1 text-sm text-muted-foreground">Every surface is tuned for premium polish.</p>
            </div>
          </CardContent>
        </Card>
      </section>
    </div>
  );
}
