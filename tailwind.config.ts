import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        "18": "18px",
        "14.4": "14.4px",
        "28.3": "28.3px",
        "44": "43.95px",
        "54": "54px",
        "55": "54.93px",
        '80':'80px',
        "89": "89.6px",
        "22.5": "22.5px",
        "35.5": "35.5px",
        "70": "70px",
      },
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
