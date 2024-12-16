/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  darkMode: true,
  theme: {
    extend: {
      colors: {
        background: "#fafafa",
        primary: "#484b6a",
        tertiary: "#21252a",
        accent: "#696d76",
      },
    },
  },
  plugins: [],
};
