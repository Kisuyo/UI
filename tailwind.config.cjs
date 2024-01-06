/** @type {import('tailwindcss').Config} */
const plugin = require("tailwindcss/plugin")
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
        ".shadow": {
          filter: "drop-shadow(2px 8px 4px #05050570)",
        },
        ".flex-between": {
          display: "flex",
          "align-items": "center",
          "justify-content": "space-between",
        },
        ".border-dark": {
          border: "1px solid #282828",
        },
        ".border-light": {
          border: "1px solid #69696951",
        },
        ".flex-col": {
          display: "flex",
          "flex-direction": "column",
        },

        ".flex-row": {
          display: "flex",
          "flex-direction": "row",
        },
        ".button-hover": {
          color: "#F28C28",
          "border-radius": "4px",
          "transition-property": "all",
          "transition-timing-function": "cubic-bezier(0.4, 0, 0.2, 1)",
          "transition-duration": "150ms",
          background: "rgb(38 38 38)",
          cursor: "pointer",
        },
      }
      addUtilities(newUtilities, ["responsive", "hover"])
    },
    plugin(function ({ matchUtilities, theme }) {
      matchUtilities({
        "col-gap": (value) => {
          return {
            display: "flex",
            "flex-direction": "column",
            gap: value,
          }
        },
      })
    }),
  ],
}
