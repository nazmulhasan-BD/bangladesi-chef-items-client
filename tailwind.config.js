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
  },
  plugins: [require("daisyui")],
}

