import tailwindConf from './lib/tailwind.config';

tailwindConf.theme.extend.fontFamily = {
  sans: ['Inter', 'sans-serif'],
};

tailwindConf.purge = {
  enabled: process.env.NODE_ENV === 'production',
  content: [
    'doc/components/**/*.vue',
    'doc/layouts/**/*.vue',
    'doc/pages/**/*.vue',
    'doc/plugins/**/*.js',
    'lib/components/**/*.vue',
    'nuxt.config.js',
  ],
};

module.exports = tailwindConf;
