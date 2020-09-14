/* eslint-disable global-require */
// const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  future: {
    purgeLayersByDefault: true,
    removeDeprecatedGapUtilities: true,
  },
  purge: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  plugins: [require('@tailwindcss/ui')],
  theme: {
    extend: {
      fontFamily: {
        coustard: ['Coustard', 'serif'],
        suezOne: ['"Suez One"', 'serif'],
      },
      fontSize: {
        '7xl': '5rem',
        '8xl': '6rem',
      },
    },
  },
}
