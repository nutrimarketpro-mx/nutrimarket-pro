import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}", // Por seguridad
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // Por seguridad
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};
export default config;
