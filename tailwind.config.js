/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        primary: "#75c3d2",
        text: {
          DEFAULT: "#2d3441",
        },
        dark: "#242934",
      },
    },
  },
  plugins: [],
};
