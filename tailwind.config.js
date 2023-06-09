/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,svg}",],
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
        'yellow': '#e6e864',
      },
      boxShadow: {
        'neum': '10px 10px 80px #2c595e, -10px -10px 80px #3c7980',
        'blackBox': '20px 20px'
      },screens: {
        'md': '800px',
        'l': '1200px'
      },  scale: {
        '-100': '-1',
      }
    ,},
  },
  plugins: [],
}

