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
    'max-len': ['error', { code: 160 }],
    'no-return-assign': 0,
    'no-param-reassign': 0,
    'import/no-extraneous-dependencies': 0,
    'import/extensions': ['error', 'always', {
      js: 'never',
      vue: 'never',
      svg: 'never',
    }],
  },
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.vue'],
      },
      nuxt: {
        extensions: ['.js', '.vue'],
      },
    },
  },
};
