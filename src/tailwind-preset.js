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
      transitionTimingFunction: {
        'in-mijin': 'cubic-bezier(0.7, 0, 0.84, 0)',
        'out-mijin': 'cubic-bezier(0.16, 1, 0.3, 1)',
        'in-out-mijin': 'cubic-bezier(0.87, 0, 0.13, 1)',
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
