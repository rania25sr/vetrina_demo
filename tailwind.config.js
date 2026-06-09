/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-playfair)", "serif"],
      },
      colors: {
        primary: {
          DEFAULT: "#1a3c2b",
          light: "#2d5a45",
          dark: "#142e21",
        },
        accent: {
          DEFAULT: "#c8a97e",
          hover: "#b8986a",
        },
      },
    },
  },
  plugins: [],
};
