/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        monda: ['Monda'],
        tauri: ['Tauri'],
      },
      colors: {
        'azul-tailwind': '#38bdf8',
        'roxo-banner': '#6362fb',
      },
    },
    screens: {
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      'custom': '1400px',
    },
  },
  plugins: [],
}

