import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./pages/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        display: ["'Space Grotesk'", "var(--font-sans)"],
      },
      colors: {
        canvas: {
          DEFAULT: "#0a0a0d",
          accent: "#6f9ceb",
        },
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
};

export default config;
