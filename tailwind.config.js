/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{

      },
      colors: {
        primary: '#4CAF4F',
        neutralSilver: '#F5F7FA',
        neutralDarkGrey: '#4D4D4D',
        neutralGrey: '#717171',
        neutralBlack: '#263238',
        neutralWhite: '#FFFFFF',
        tint: '#A5D6A7',

      }
    },
  },
  plugins: [],
}

