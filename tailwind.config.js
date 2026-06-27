/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          dark: '#0B1120', // Main dark backgrounds
          blue: '#1D4ED8', // Primary blue accents
          light: '#F8FAFC', // Light gray/blue backgrounds
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'], // Assuming a clean modern font like Inter
      }
    },
  },
  plugins: [],
}