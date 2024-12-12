import type { Config } from "tailwindcss";

export default {
  content: ["./app/**/{**,.client,.server}/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        background: "rgb(var(--color-background))",
        raised: "rgb(var(--color-raised))",
        primary: "rgb(var(--color-primary))",
        secondary: "rgb(var(--color-secondary))",
        accent: "rgb(var(--color-accent))",
      },
      fontFamily: {
        sans: [
          "ClashDisplay-Light",
          "Inter",
          "ui-sans-serif",
          "system-ui",
          "sans-serif",
          "Apple Color Emoji",
          "Segoe UI Emoji",
          "Segoe UI Symbol",
          "Noto Color Emoji",
        ],
        serif: ["Trickster", "serif"],
        // TODO FiraCode for monospace?
      },
    },
  },
  plugins: [],
} satisfies Config;
