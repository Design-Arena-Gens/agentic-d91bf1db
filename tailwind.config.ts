import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./lib/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        obsidian: "#0e0f12",
        aurora: {
          50: "#f5fdff",
          100: "#e9fbfe",
          200: "#c7f1fb",
          300: "#9ddff5",
          400: "#6ac9ec",
          500: "#39aede",
          600: "#1889bd",
          700: "#136d97",
          800: "#145a7a",
          900: "#134b66",
          950: "#0a2f43"
        }
      },
      fontFamily: {
        display: ["'Space Grotesk'", "sans-serif"],
        sans: ["'Inter'", "system-ui", "sans-serif"]
      }
    }
  },
  plugins: []
};

export default config;
