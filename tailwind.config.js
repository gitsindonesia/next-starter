// const defaultTheme = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
const { THEME_PRIMARY, THEME_SECONDARY } = require('./app/_utils/theme.util')

module.exports = {
  // darkMode: 'class',
  content: ['./app/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: THEME_PRIMARY,
        secondary: THEME_SECONDARY,
        info: colors.sky,
        success: colors.emerald,
        warning: colors.yellow,
        error: colors.rose
      },
      fontFamily: {
        montserrat: ['var(--font-poppins)']
      }
    }
  },
  plugins: []
}
