/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: "class",
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        burtons: "burtons",
        tarrget: "tarrget",
        bomberEscort: "bomberEscort",
        futureForces: "futureForces",
        paladins: "paladins",
        blackthorns: "blackthorns"
      }
    },
  },
  plugins: [],
}