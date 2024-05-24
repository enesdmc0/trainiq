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
        "color-1": "#1e1e1e",
        "color-2": "#343434",
        "color-3": "#a0a0a0",//basliklar
        "color-4": "#ededed", //text
      }
    },
  },
  plugins: [],
};
export default config;
