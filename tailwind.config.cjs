/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {},
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".flex-center": {
          display: "flex",
          "align-items": "center",
          "justify-content": "center",
        },
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    },
  ],
}
