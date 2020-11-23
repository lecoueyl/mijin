module.exports = {
  plugins: [
    'stylelint-scss',
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],
  rules: {
    'at-rule-no-unknown': [
      true,
      {
        ignoreAtRules: [
          'tailwind',
          'apply',
          'variants',
          'responsive',
          'screen',
        ],
      },
    ],
    'declaration-block-trailing-semicolon': null,
    'no-descending-specificity': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always',
  },
};
