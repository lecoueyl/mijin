<p align="center">
  <img alt="mijin-logo" height="70" alt="mijin logo" src="./.github/mijin-logo.svg"/>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/v/vue.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/vue"><img src="https://img.shields.io/npm/l/vue.svg?sanitize=true" alt="License"></a>
  <a href="https://codecov.io/github/vuejs/vue?branch=dev"><img src="https://img.shields.io/codecov/c/github/vuejs/vue/dev.svg?sanitize=true" alt="Coverage Status"></a>
</p>

# mijin

> [Tailwind CSS](https://tailwindcss.com) UI components build for [Vue.js](https://vuejs.org) / [Nuxt.js](https://nuxtjs.org)

- 📖 Documentation

## Features

- 💅 Component style relying uniquely on Tailwind CSS presets classes
- 📱 Responsive
- 🌗 Support dark and light mode
- 🕵️ No dependencies

## Getting Started

1. Add `mijin` dependency to your project

```bash
# Using npm
npm install --save-dev mijin
# Using yarn
yarn add --dev mijin
```

2. Add mijin Tailwind CSS presets file `tailwind-preset.js` to your Tailwind CSS configuration file `tailwindcss.config.js`

```javascript
const mijin = require('mijin/tailwind-preset.js');

module.exports = {
  presets: [
    mijin,
  ],
};
```

3. Load the plugin in your vue application

### Vue.js

```javascript
import Vue from 'vue'
import Mijin from 'mijin'

Vue.use(Mijin)
```

### Nuxt.js

Add `mijin.js` file to your `plugins` directory

```javascript
import Vue from 'vue';

Vue.use(Mijin)
```

Load the plugin from `nuxt.config.js`

```javascript
...
  plugins: [
    '~/plugins/mijin',
  ],
...
```

[📖 &nbsp;Read more](https://mijin.design/docs/getting-started)
## Support

### Create a bug report

If you see an error message or run into an issue, please create a bug report, this effort is valued and it will help everybody.

[**Create bug report**](https://github.com/lecoueyl/mijin/issues/new?assignees=&labels=type%3A%20bug&template=bug_report.md&title=)

### Submit a feature request

If you're missing a component or want to add a new feature, please submit a request.
If a similar feature request already exists, don't forget to leave a "+1". Adding some information about the feature will be embraced warmly.

[**Submit feature request**](https://github.com/lecoueyl/mijin/issues/new?assignees=&labels=type%3A%20feature%20request&template=feature_request.md&title=)

# Contributing

Mijin is an open source project. We are committed to a fully transparent development process and highly appreciate any contributions. Whether you are helping us fix bugs, proposing new features, improving our documentation or spreading the word - we would love to have you as part of the community.

Please refer to our [contribution guidelines](./CONTRIBUTING.md).
