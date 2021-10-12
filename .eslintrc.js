module.exports = {
  root: true,
  env: {
    node: true,
  },
  extends: [
    'plugin:vue/recommended',
    '@vue/airbnb',
  ],
  parserOptions: {
    parser: 'babel-eslint',
  },
  rules: {
    'import/no-extraneous-dependencies': 0,
    'max-len': ['error', { code: 200 }],
    'vue/no-v-html': 0,
  },
  overrides: [
    {
      files: [
        '**/__tests__/*.{j,t}s?(x)',
        '**/tests/unit/**/*.spec.{j,t}s?(x)',
        '**/src/**/*.test.{j,t}s?(x)',
      ],
      env: {
        jasmine: true,
        jest: true,
      },
    },
  ],
};
