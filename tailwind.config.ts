import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}", "./data/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        pitch: "#0A0A0B",
        charcoal: "#131316",
        card: "#161619",
        crimson: "#E30613",
        crimsonDark: "#A5000E",
        paper: "#FFFFFF",
        muted: "#A1A1AA",
      },
      fontFamily: {
        display: ["Archivo Black", "Arial Black", "system-ui", "sans-serif"],
        body: ["Inter", "system-ui", "sans-serif"],
      },
      boxShadow: {
        neon: "0 0 24px rgba(227,6,19,.55)",
        card: "0 8px 40px rgba(0,0,0,.6)",
        slash: "6px 6px 0 #E30613",
      },
    },
  },
  plugins: [],
};
export default config;
