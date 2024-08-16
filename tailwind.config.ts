import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      palette: {
        bg: "#F4F1E0",
        text: "#321E1E",
        lines: "#BDB498",
        pink: "#fe019a",
      },
    },
    extend: {
      fontFamily: {
        headings: ["Bebas Neue", "sans-serif"],
        text: ["Raleway", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
