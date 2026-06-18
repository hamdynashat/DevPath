import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: ["./src/**/*.{ts,tsx}"],
  theme: {
    container: {
      center: true,
      padding: "1.5rem",
    },
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        border: "var(--border)",
        input: "var(--input)",
        ring: "var(--ring)",
        card: {
          DEFAULT: "var(--card)",
          foreground: "var(--card-foreground)",
        },
        primary: {
          DEFAULT: "var(--primary)",
          foreground: "var(--primary-foreground)",
        },
        secondary: {
          DEFAULT: "var(--secondary)",
          foreground: "var(--secondary-foreground)",
        },
        muted: {
          DEFAULT: "var(--muted)",
          foreground: "var(--muted-foreground)",
        },
        accent: {
          DEFAULT: "var(--accent)",
          foreground: "var(--accent-foreground)",
        },
        destructive: {
          DEFAULT: "var(--destructive)",
          foreground: "var(--destructive-foreground)",
        },
        sidebar: {
          DEFAULT: "var(--sidebar)",
          foreground: "var(--sidebar-foreground)",
          accent: "var(--sidebar-accent)",
          "accent-foreground": "var(--sidebar-accent-foreground)",
          border: "var(--sidebar-border)",
          ring: "var(--sidebar-ring)",
        },
        amber: {
          400: "var(--amber-400)",
          500: "var(--amber-500)",
          600: "var(--amber-600)",
        },
        purple: {
          400: "var(--purple-400)",
          500: "var(--purple-500)",
        },
      },
      borderRadius: {
        xl: "var(--radius)",
        lg: "calc(var(--radius) - 4px)",
        md: "calc(var(--radius) - 8px)",
        sm: "calc(var(--radius) - 12px)",
      },
      boxShadow: {
        card: "0 20px 70px rgba(0, 0, 0, 0.32)",
        elevated: "0 28px 96px rgba(0, 0, 0, 0.4)",
        glow: "0 0 0 1px rgba(245, 158, 11, 0.24), 0 18px 48px rgba(245, 158, 11, 0.1)",
      },
      fontFamily: {
        sans: ["var(--font-inter)", "Inter", "system-ui", "sans-serif"],
        display: ["var(--font-space-grotesk)", "Inter", "system-ui", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "JetBrains Mono", "monospace"],
      },
      backgroundImage: {
        "radial-soft": "radial-gradient(circle at top, rgba(245, 158, 11, 0.14), transparent 30%), radial-gradient(circle at bottom left, rgba(139, 92, 246, 0.12), transparent 28%)",
      },
    },
  },
  plugins: [],
};

export default config;
