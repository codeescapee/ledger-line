import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#ffffff",
        foreground: "#0F1720",
        muted: "#f8fafc",

        dark: {
          DEFAULT: "#0B1121",
          surface: "#111827",
          elevated: "#1E293B",
        },

        accent: {
          primary: "#2FB6D8",
          hover: "#25A0BF",
          muted: "#64748b",
          glow: "rgba(47, 182, 216, 0.15)",
        },

        border: {
          DEFAULT: "#e2e8f0",
          dark: "#1E293B",
          subtle: "#f1f5f9",
        },

        text: {
          primary: "#0F1720",
          secondary: "#475569",
          tertiary: "#94a3b8",
          "on-dark": "#F1F5F9",
          "on-dark-muted": "#94a3b8",
        },
      },

      fontFamily: {
        sans: ["Inter", "sans-serif"],
        mono: ["JetBrains Mono", "monospace"],
      },

      fontSize: {
        display: [
          "4.5rem",
          {
            lineHeight: "1.05",
            letterSpacing: "-0.02em",
            fontWeight: "700",
          },
        ],
        h1: [
          "3.5rem",
          {
            lineHeight: "1.1",
            letterSpacing: "-0.02em",
            fontWeight: "600",
          },
        ],
        h2: [
          "2.25rem",
          {
            lineHeight: "1.2",
            letterSpacing: "-0.01em",
            fontWeight: "600",
          },
        ],
        h3: [
          "1.5rem",
          {
            lineHeight: "1.3",
            fontWeight: "600",
          },
        ],
        "body-lg": ["1.125rem", { lineHeight: "1.75" }],
        body: ["1rem", { lineHeight: "1.75" }],
        caption: ["0.875rem", { lineHeight: "1.5" }],
      },

      backgroundImage: {
        "gradient-dark":
          "linear-gradient(135deg, #0B1121 0%, #111827 50%, #0F172A 100%)",
        "gradient-hero":
          "linear-gradient(135deg, #0B1121 0%, #0F172A 60%, #122035 100%)",
        "gradient-accent":
          "linear-gradient(135deg, #2FB6D8 0%, #25A0BF 100%)",
      },

      boxShadow: {
        glow: "0 0 40px rgba(47, 182, 216, 0.15)",
        "glow-sm": "0 0 20px rgba(47, 182, 216, 0.1)",
        card: "0 1px 3px rgba(0,0,0,0.04), 0 8px 24px rgba(0,0,0,0.06)",
        "card-hover":
          "0 4px 12px rgba(0,0,0,0.06), 0 16px 40px rgba(0,0,0,0.1)",
      },
    },
  },
  plugins: [],
};
export default config;
