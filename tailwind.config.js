/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./App.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./screens/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      darker_black: "#1b1f27",
      black: "#1e222a",
      one_bg: "#282C34",
      one_bg2: "#353b45",
      foreground: "#ABB2BF",
      red: "#E06C75",
      green: "#98C379",
      yellow: "#E5C07B",
      tilin: "#61AFEF",
    },
    extend: {},
  },
  plugins: [],
};
