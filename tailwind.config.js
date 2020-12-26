const blueberry = require('./src/tailwind-preset');

module.exports = {
  presets: [
    blueberry,
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['IBM Plex Mono', 'monospace'],
      },
    },
  },
  purge: {
    enabled: process.env.NODE_ENV === 'production',
    content: [
      'doc/components/**/*.vue',
      'doc/layouts/**/*.vue',
      'doc/pages/**/*.vue',
      'doc/plugins/**/*.js',
      'src/components/**/*.vue',
      'nuxt.config.js',
    ],
  },
};
