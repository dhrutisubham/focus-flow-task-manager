/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx, css}",
  ],
  theme: {
    colors: {
      'white1': '#F4F7ED',
      'green' : '#65BE61',
      'green2' : '#2E6E65',
      'blue': '#2B3752',
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.slate,
      // green: colors.emerald,
      purple: colors.violet,
      yellow: colors.amber,
      pink: colors.fuchsia,
      slate: colors.slate,
      neutral: colors.neutral,
    }
  },
  plugins: [],
}