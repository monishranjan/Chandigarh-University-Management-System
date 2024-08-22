/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#ef0000",
        secondaryColor: "#000000",
        tertiaryColor: "#f9f9f9",
        textColor: "#354781"
      },
    },
  },
  plugins: [],
}