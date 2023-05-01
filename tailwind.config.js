/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors:{
        primary:"#1B546B" , 
        gold:"#EAB11F", 
        lowHint:"rgba(255, 255, 255, 0.07)",
        hint:"#BCBCBC"
      }
    },
  },
  plugins: [],
}

