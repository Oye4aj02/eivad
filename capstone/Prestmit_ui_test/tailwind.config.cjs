/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        BACKGROUND_GREEN_100: "#65E4A3",
        BACKGROUND_BLUE_100: "#0A2640",
        BACKGROUND_WHITE: "#FFFFFF",
        BACKGROUND_GREY: "#E5E5E5",
        text_dark_100: "#000000",
        text_grey_100: "#777777",
        text_blue: "#0A2640",
        text_white: "#FFFFFF",
        text_grey: "#F1F1F1",
        text_green: "#69E6A6",
      }
    },
  },
  plugins: [],
}
