import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#6B7FD7",
        secondary: "#F9F5FF",
        accent: "#C084FC",
        text: "#1E1E2E",
      },
      fontFamily: {
        heading: ["var(--font-playfair)", "Georgia", "serif"],
        sans: ["var(--font-inter)", "Arial", "Helvetica", "sans-serif"],
      },
      boxShadow: {
        soft: "0 18px 45px rgba(30, 30, 46, 0.08)",
        lift: "0 22px 55px rgba(30, 30, 46, 0.12)",
      },
    },
  },
  plugins: [],
};

export default config;
