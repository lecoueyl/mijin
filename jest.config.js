module.exports = {
  preset: '@vue/cli-plugin-unit-jest',
  testMatch: ['**/src/**/*.test.js'],
  collectCoverage: true,
  collectCoverageFrom: [
    '<rootDir>/src/components/**/*.vue',
  ],
};
