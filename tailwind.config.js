import {colors as defaultColors} from 'tailwindcss/defaultTheme';

const colors = {
  ...defaultColors,
  dark: "#222831",
  primary: "#8CB9BD",
  light: "#FEFBF6",
  secondary: "#ECB159",
  tertiary: "#B67352",
}

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      colors: colors,
    },
  },
  plugins: [],
}

