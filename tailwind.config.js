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
          primary: '#00ABE4', // Bright Blue
          secondary: '#E9F1FA', // Light Blue
        }
      }
    },
  },
  plugins: [],
}
