/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-green': '#4CAF50', // A pleasant green shade
        'custom-beige': '#f5f5dc'  // A light beige shade
      }
    },
  },
  plugins: [],
}

