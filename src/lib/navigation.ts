import {
  BriefcaseBusiness,
  FolderKanban,
  LayoutDashboard,
  Sparkles,
  UserRound,
  Waypoints,
} from "lucide-react";

export const publicNavLinks = [
  { href: "#features", label: "Features" },
  { href: "#system", label: "System" },
  { href: "#portfolio", label: "Portfolio" },
  { href: "/sign-in", label: "Sign in" },
] as const;

export const dashboardNavLinks = [
  { href: "#overview", label: "Overview", icon: LayoutDashboard },
  { href: "#progress", label: "Progress", icon: Waypoints },
  { href: "#roadmap", label: "Roadmap", icon: Sparkles },
  { href: "#projects", label: "Projects", icon: FolderKanban },
  { href: "#portfolio", label: "Portfolio", icon: BriefcaseBusiness },
  { href: "#account", label: "Account", icon: UserRound },
] as const;
