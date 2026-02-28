import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#000000",
        foreground: "#f0f0f0",
        primary: "#eab308",  // Moon gold
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
};

export default config;
