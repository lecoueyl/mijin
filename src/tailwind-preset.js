const colors = require('tailwindcss/colors');
const { borderRadius } = require('tailwindcss/defaultTheme');
const plugin = require('tailwindcss/plugin');

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
    plugin(({ addUtilities }) => {
      const animationDelay = {
        '.animation-delay-75': {
          'animation-delay': '75ms',
        },
        '.animation-delay-100': {
          'animation-delay': '100ms',
        },
        '.animation-delay-150': {
          'animation-delay': '150ms',
        },
        '.animation-delay-200': {
          'animation-delay': '200ms',
        },
        '.animation-delay-300': {
          'animation-delay': '300ms',
        },
        '.animation-delay-500': {
          'animation-delay': '500ms',
        },
        '.animation-delay-600': {
          'animation-delay': '600ms',
        },
        '.animation-delay-700': {
          'animation-delay': '700ms',
        },
        '.animation-delay-1000': {
          'animation-delay': '1000ms',
        },
      };

      addUtilities(animationDelay, ['responsive']);
    }),
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
