/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#0f172a",
        card: "#1e293b",
        title: "#f8fafc",
        text: "#cbd5f5",
        accent: "#ef4444",
      },
      fontFamily: {
        title: ["Poppins", "sans-serif"],
        text: ["Roboto", "sans-serif"],
      }
    },
  },
  plugins: [],
}