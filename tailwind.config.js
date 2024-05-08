/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    screens: {
      'custom': '1400px',
    },
    extend: {
      fontFamily: {
        monda: ['Monda'],
        tauri: ['Tauri'],
      },
      colors: {
        'azul-tailwind': '#38bdf8',
        'roxo-banner': '#6362fb',
      }
    },
  },
  plugins: [],
}

