/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        "inconsolata" : 'Inconsolata',
        "monospace": 'monospace'
      },
      colors:{
        "primary":"#fffffe",
        "secondary":"#d1d1e9",
        "danger":"#e45858",
        "header":"#2b2c34",
        "info":"#6246ea",
        "bgColor":"#fffddd",
        "paragraph":"#a1a1a1",
      }
    },
  },
  plugins: [],
}
