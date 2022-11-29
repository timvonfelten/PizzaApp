/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'sofia': ['sofia-pro', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        'white': '#ffffff',
        'black': '#1E292C',
        'gold': '#E6B95A',
        'grey': '#677073',
        'light': '#F3F0E9'
      },
    },
  },
  plugins: [],
}