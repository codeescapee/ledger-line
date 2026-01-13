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
        foreground: "#0f172a",
        muted: "#f8fafc",
        accent: {
          primary: "#1e293b",
          muted: "#64748b",
        },
        border: "#e2e8f0",
      },
    },
  },
  plugins: [],
};
export default config;
