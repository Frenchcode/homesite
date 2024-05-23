import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        'home-black': '#020202',
        'home-white': '#f3eff5',
        'home-gray': '#454955',
        'home-nature': '#72b01d',
        'home-nature-dark': '#3f7d20',
        'home-green-dark': '#0d2818',
        'home-green': '#04471c',
        'home-green-light': '#058c42',
        'home-green-lighter': '#16db65',
        'home-yellow': '#e4ff1a'
      },
    },
  },
  plugins: [],
};
export default config;
