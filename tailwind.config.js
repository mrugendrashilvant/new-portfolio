import {colors as defaultColors} from 'tailwindcss/defaultTheme';

const colors = {
  ...defaultColors,
  black: "#222831",
  teal: "#76ABAE",
  gray: "#EEEEEE",
  slate: "#31363F"
}

module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors: colors
    },
  },
  plugins: [],
}

