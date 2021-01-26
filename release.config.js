module.exports = {
  branches: ['main', 'next'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    '@semantic-release/npm',
    ['@semantic-release/changelog', {
      changelogFile: 'CHANGELOG.md',
    }],
    ['@semantic-release/git', {
      assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
      message: 'chore(release): ${nextRelease.version} [skip ci]', // eslint-disable-line no-template-curly-in-string
    }],
  ],
};
