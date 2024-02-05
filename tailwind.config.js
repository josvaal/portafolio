/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        dark: "#211919",
        bgaccent: "rgba(255 0 0/.1)"
      }
    },
  },
  plugins: [],
}

