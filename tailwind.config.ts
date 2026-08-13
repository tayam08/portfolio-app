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
        paper: "#F8F7F4",
        navy: {
          DEFAULT: "#0C2340",
          50: "#EEF3F9",
          100: "#C9D8EB",
          700: "#163559",
          900: "#061529",
        },
        ink: {
          DEFAULT: "#111111",
          50: "#F5F4F2",
          100: "#E8E6E1",
          200: "#CCC9C2",
          400: "#9A9790",
          500: "#6B6860",
          600: "#4A4742",
          700: "#2E2C28",
          800: "#1A1917",
        },
      },
      fontFamily: {
        sans: ["Pretendard", "Inter", "system-ui", "sans-serif"],
      },
      maxWidth: {
        "8xl": "88rem",
      },
    },
  },
  plugins: [],
};

export default config;
