/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        monda: ['Monda']
      },
      colors: {
        'azul-tailwind': '#38bdf8',
      }
    },
  },
  plugins: [],
}

