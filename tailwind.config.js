/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        lato: ['Lato'],
      },
      backgroundImage: {
        'hero-pattern': "url('./assets/night.jpg')",
      }
    },
  },
  plugins: [

  ],
}
