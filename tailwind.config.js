/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        rise: {
          300: "#FFE7AC",
          500: "#FED059",
          600: "#FEC430",
        },
        umbra: {
          300: "#A5A5A5",
          400: "#797979",
          500: "#4C4C4C",
          700: "#191919",
        },
        candy: { 100: "#F1EFFD", 600: "#755AE8", 800: "#46368B" },
      },
      fontFamily: {
        lamaExtrabold: "LamaExtrabold,sans-serif",
        lamaBold: "LamaBold,sans-serif",
        lamaSemibold: "LamaSemibold,sans-serif",
        lamaMedium: "LamaMedium,sans-serif",
        lamaRegular: "LamaRegular,sans-serif",
        lamaLight: "LamaLight,sans-serif",
        lamaNormal: "LamaNormal,sans-serif",
        lamaNormalRegular: "LamaNormalRegular,sans-serif",
      },
      screens: {},
      backgroundImage: {
        hero: "url('/hero.jpg')",
      },
    },
  },
  plugins: [],
};
