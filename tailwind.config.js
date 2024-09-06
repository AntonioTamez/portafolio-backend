/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", 
    './pages/**/*.{html,js}',
    './components/**/*.{html,js}',
  ],
  theme: {
    extend: {
      colors: {
        'artic-blue': '#566FA7',
        'artic-light-blue': '#8093B8',
      },
    }
  },
  plugins: [],
}

