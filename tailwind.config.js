/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode:"class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./src/**/*.{html,js}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        sans: ["Open Sans", "sans-serif"],
      },
    },
  },
  plugins: [],
}
