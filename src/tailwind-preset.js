const colors = require('tailwindcss/colors');
const { borderRadius } = require('tailwindcss/defaultTheme');

module.exports = {
  theme: {
    colors: {
      primary: colors.violet,
      success: colors.green,
      warning: colors.orange,
      danger: colors.red,

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
      purple: colors.purple,
      red: colors.rose,
      teal: colors.teal,
      yellow: colors.amber,
    },
    extend: {
      borderRadius: {
        button: borderRadius.lg,
        form: borderRadius.md,
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
        },
        'html.dark': {
          color: config('theme.colors.white'),
          backgroundColor: config('theme.colors.gray.900'),
        },
      });
    },
  ],
};
