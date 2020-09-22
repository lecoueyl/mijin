const { resolve } = require('path');

module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  extends: [
    '@nuxtjs/eslint-config-typescript',
    'airbnb-base',
    'plugin:nuxt/recommended',
  ],
  // add your custom rules here
  rules: {
    'import/extensions': ['error', 'always', {
      js: 'never',
      svg: 'never',
      vue: 'never',
    }],
    'import/no-extraneous-dependencies': 0,
    'max-len': ['error', { code: 160 }],
    'vue/no-v-html': 0,
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue'],
        alias: {
          '~': resolve(__dirname, 'doc'),
        },
      },
      nuxt: {
        extensions: ['.js', '.vue'],
        alias: {
          '~': resolve(__dirname, 'doc'),
        },
      },
    },
  },
};
