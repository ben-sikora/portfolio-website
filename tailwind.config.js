/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",],
  theme: {
    fontFamily: {
      display: ["Nunito Sans", "sans-serif"],
      writing: ["Solitreo", "cursive"],
    },
    extend: {    
      colors:{
        'darkgreen':'#315430',
        'darkblue': '#34696F',
        'lightblue': '#5DA399',


      }
    ,},
  },
  plugins: [],
}

