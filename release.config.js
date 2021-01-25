module.exports = {
  branches: ['main', 'next'],
  plugins: [
    '@semantic-release/commit-analyzer',
    '@semantic-release/release-notes-generator',
    '@semantic-release/github',
    ['@semantic-release/npm', {
      npmPublish: false,
    }],
    ['@semantic-release/changelog', {
      changelogFile: 'CHANGELOG.md',
    }],
    ['@semantic-release/git', {
      assets: ['package.json', 'package-lock.json', 'CHANGELOG.md'],
      message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
    }],
  ],
};
