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
      // use by src/components/popover/Popover.vue
      inset: {
        '1/2': '50%',
        full: '100%',
      },
    },
  },
  variants: {
    // use by src/components/table/TableCell.vue
    padding: ['responsive', 'last'],
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
