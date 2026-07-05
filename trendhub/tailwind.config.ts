import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./lib/**/*.{ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "1rem",
      screens: {
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1180px",
        "2xl": "1320px",
      },
    },
    extend: {
      fontFamily: {
        display: ["var(--font-display)", "sans-serif"],
        body: ["var(--font-body)", "sans-serif"],
        fa: ["var(--font-fa)", "sans-serif"],
        mono: ["var(--font-mono)", "monospace"],
      },
      colors: {
        paper: "#F7F6F2",
        ink: "#14161A",
        surface: "#FFFFFF",
        muted: "#6B6E76",
        line: "#E4E2DB",
        signal: {
          DEFAULT: "#3730A9",
          50: "#EEEDFA",
          100: "#DBD9F5",
          500: "#3730A9",
          600: "#2C2586",
        },
        ember: {
          DEFAULT: "#E8590C",
          50: "#FDEEE4",
          500: "#E8590C",
        },
        cat: {
          ai: "#7C3AED",
          tech: "#2563EB",
          gaming: "#16A34A",
          cars: "#DC2626",
          space: "#4338CA",
          movies: "#DB2777",
          music: "#D97706",
        },
      },
      borderRadius: {
        xs: "4px",
        sm: "6px",
        md: "10px",
        lg: "14px",
      },
      keyframes: {
        pulse-dot: {
          "0%, 100%": { opacity: "1", transform: "scale(1)" },
          "50%": { opacity: "0.4", transform: "scale(0.75)" },
        },
        "fade-up": {
          "0%": { opacity: "0", transform: "translateY(8px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "pulse-dot": "pulse-dot 1.8s ease-in-out infinite",
        "fade-up": "fade-up 0.5s ease-out both",
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
