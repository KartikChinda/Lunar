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
      },
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      fontFamily: {
        headings: ["Bebas Neue", "sans-serif"],
        text: ["Raleway", "sans-serif"],
      },
      animation: {
        fade: 'fadeIn 3s ease-in-out ',
        fadeNumber: 'fadeIn 0.5s ease-in-out',
      },

      keyframes: {
        fadeIn: {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
      },
    },
  },
  plugins: [],
};
export default config;
