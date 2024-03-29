/** @type {import('tailwindcss').Config} */
const colors = require("tailwindcss/colors");

module.exports = {
  content: ["./app/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize: {
        hero: "clamp(1.5rem, 1.8852rem + 1.3456vw, 3.5rem)",
      },
      colors: {
        // TODO: remove unused colors.
        primary: {
          50: "#E4E3FF",
          100: "#CBCDFF",
          200: "#B2B7FF",
          300: "#9AA1FF",
          400: "#818CFF",
          500: "#6778FF",
          600: "#4B64EF",
          700: "#2851D7",
          800: "#003FC1",
          900: "#002DAA",
        },
        secondary: {
          50: "#F3F3F3",
          100: "#DDDDDD",
          200: "#C6C6C6",
          300: "#B0B0B0",
          400: "#9B9B9B",
          500: "#868686",
          600: "#727272",
          700: "#5E5E5E",
          800: "#4B4B4B",
          900: "#5E5E5E",
        },
        black: "#111827",
        alert: colors.red,
        warning: colors.amber,
        valid: colors.lime,
      },
    },
  },
};
