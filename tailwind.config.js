/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./public/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        titillium: ['Titillium Web', "sans-serif"],
      },
      colors: {
        "main" : "#0D0D2B",
        "main-text": "#ffffff",
        "sky" : "#3671e9",
        "cards" : "#2b076e",
        "black" : "#000",
      },
    },
  },
  plugins: [],
  
}

