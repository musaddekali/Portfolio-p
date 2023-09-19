import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      sm: "576px",
      md: "768px",
      lg: "992px",
      xl: "1200px",
      xxl: "1400px",
    },
    container: {
      center: true,
      padding: ".75rem",
    },
    colors: {
      primary: {
        DEFAULT: "#0369a1",
        light: "#0284c7",
        lightest: "#38bdf8",
        dark: "#075985",
        darkest: "#0c4a6e",
      },
      secondary: "#dc2626",
      transparent: "transparent",
      current: "currentColor",
      white: "#ffffff",
      black: "#111827",
      red: "#dc3545",
      green: "#28a745",
      blue: {
        lite: "#e9edf6",
        dark: "#2e4d9f",
      },
      yellow: "#ffc107",
      purple: "#3f3cbb",
      gray: {
        50: "#f9fafb",
        100: "#f3f4f6",
        200: "#e5e7eb",
        300: "#d1d5db",
        400: "#9ca3af",
        500: "#6b7280",
        600: "#4b5563",
        700: "#374151",
        800: "#1f2937",
        900: "#111827",
      },
    },
  },
  plugins: [],
};
export default config;
