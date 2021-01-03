const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000',
      white: '#fff',
      blue: colors.lightBlue,
      gray: colors.gray,
      green: colors.green,
      indigo: colors.indigo,
      orange: colors.orange,
      pink: colors.pink,
      primary: colors.violet,
      purple: colors.purple,
      red: colors.rose,
      teal: colors.teal,
      yellow: colors.amber,
    },
    extend: {
      inset: {
        '1/2': '50%',
        full: '100%',
      },
      spacing: {
        '1/2': '50%',
        '1/12': '8.333333%',
        '2/12': '16.666667%',
        '3/12': '25%',
        '8/12': '66.666667%',
        '10/12': '83.333333%',
        '18/12': '150%',
      },
    },
  },
  variants: {
    borderWidth: ['responsive', 'last'],
    borderRadius: ['responsive', 'first', 'last', 'hover', 'focus'],
    margin: ['responsive', 'last'],
    opacity: ['responsive', 'hover', 'focus', 'group-hover'],
    padding: ['responsive', 'first', 'last'],
  },
  plugins: [
    ({ addBase, config }) => {
      addBase({
        html: {
          color: config('theme.colors.gray.900'),
          backgroundColor: config('theme.colors.white'),
          '@apply antialiased': {},
        },
        'html.dark': {
          color: config('theme.colors.white'),
          backgroundColor: config('theme.colors.gray.900'),
        },
      });
    },
  ],
};
