import tailwindConf from './src/tailwind.config';

tailwindConf.theme.extend.fontFamily = {
  sans: ['Inter', 'sans-serif'],
  mono: ['Fira Code', 'monospace'],
};

tailwindConf.purge = {
  enabled: process.env.NODE_ENV === 'production',
  content: [
    'doc/components/**/*.vue',
    'doc/layouts/**/*.vue',
    'doc/pages/**/*.vue',
    'doc/plugins/**/*.js',
    'src/components/**/*.vue',
    'nuxt.config.js',
  ],
};

module.exports = tailwindConf;
