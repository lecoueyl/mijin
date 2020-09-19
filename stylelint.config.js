module.exports = {
  plugins: [
    'stylelint-scss',
  ],
  extends: [
    'stylelint-config-standard',
    'stylelint-config-rational-order',
  ],
  rules: {
    'at-rule-no-unknown': null,
    'scss/at-rule-no-unknown': true,
    'scss/dollar-variable-colon-space-after': 'always',
  },
};
