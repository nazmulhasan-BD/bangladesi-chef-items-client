/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      lobstar: ['Lobster', 'cursive']
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'spin-slow-5s': 'spin 5s linear infinite',
      },
    },
    screens: {
      'lt': '430px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1480px',
    },
  },
  plugins: [require("daisyui")],
}

