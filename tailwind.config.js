/** @type {import('tailwindcss').Config} */
const colors = require('tailwindcss/colors')


module.exports = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      bone: {
        100: '#F1F0EA',
        200: '#D7D6D2',
        300: '#BBBBB9',
        400: '#A8A8A8',
        500: '#999999',
        600: '#949494',
        700: '#8E8E8E',
        800: '#838383',
        900: '#808080',
      },
      chocolate: {
        100: '#613A67',
        200: '#4A2C4F',
        300: '#432948',
        400: '#422B46',
        500: '#3F2B42',
        600: '#3A293D',
        700: '#352737',
        800: '#322634',
        900: '#2D232E',
      },
      beige: {
        100: '#E0DDCF',
        200: '#CFCDC3',
        300: '#BEBCB1',
        400: '#B5B3A8',
        500: '#B0AEA7',
        600: '#B7B298',
        700: '#BDB698',
        800: '#A8A284',
        900: '#999377',
      },
      ash: {
        100: '#6D3D67',
        200: '#694064',
        300: '#643F5F',
        400: '#5E3F5A',
        500: '#5C4159',
        600: '#5C485A',
        700: '#594857',
        800: '#574A55',
        900: '#534B52',
      },
      magenta: {
        100: '#D0C2D5',
        200: '#BAADBE',
        300: '#AA9FAE',
        400: '#968D99',
        500: '#837C85',
        600: '#6D676F',
        700: '#5D585E',
        800: '#4C484D',
        900: '#474448',
      },
      transparent: 'transparent',
      current: 'currentColor',
      black: colors.black,
      white: colors.white,
      gray: colors.gray,
      emerald: colors.emerald,
      indigo: colors.indigo,
      yellow: colors.yellow,
      zinc: colors.zinc,
    }
  },

}