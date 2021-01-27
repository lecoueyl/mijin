<p align="center">
  <img alt="mijin-logo" height="70" alt="mijin logo" src="https://user-images.githubusercontent.com/8327054/105704502-3ff65f80-5f52-11eb-8862-57ea49668516.png"/>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/mijin"><img src="https://img.shields.io/npm/v/mijin.svg?sanitize=true" alt="Version"></a>
  <a href="https://www.npmjs.com/package/mijin"><img src="https://img.shields.io/npm/l/vue.svg?sanitize=true" alt="License"></a>
  <a href="https://codecov.io/github/lecoueyl/mijin"><img src="https://img.shields.io/codecov/c/github/lecoueyl/mijin.svg?sanitize=true" alt="Coverage Status"></a>
  <img src="https://img.shields.io/badge/%20%20%F0%9F%93%A6%F0%9F%9A%80-semantic--release-e10079.svg" alt="semantic-release"></a>
</p>

# mijin

> [Tailwind CSS](https://tailwindcss.com) UI components build for [Vue.js](https://vuejs.org) / [Nuxt.js](https://nuxtjs.org)

<!-- - [📖 Documentation](https://mijin.design/docs/getting-started) -->

## Features

- 💅 Component style relying uniquely on Tailwind CSS presets classes
- 📱 Responsive
- 🌗 Support dark and light mode
- 🕵️ No dependencies

## Getting Started

> [tailwindcss](https://tailwindcss.com) version >= 2.0 must be already present in your application

1. Add `mijin` dependency to your project

```bash
# using npm
npm install mijin --save-dev
# using yarn
yarn add mijin --dev
```

2. Add mijin Tailwind CSS preset `tailwind-preset.js` to your Tailwind CSS configuration file `tailwind.config.js`

```javascript
// tailwind.config.js
const mijin = require('mijin/dist/tailwind-preset.js');

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

// or
import {
  Button
  Input,
  // ...
} from 'mijin'

Vue.component('MjButton', Button)
Vue.component('MjInput', Select)
```

### Nuxt.js

Add `mijin.js` file to your `plugins` directory

```javascript
// plugins.mijin.js
import Vue from 'vue';

Vue.use(Mijin)
```

Load the plugin from `nuxt.config.js`

```javascript
// nuxt.config.js
...
  plugins: [
    '~/plugins/mijin.js',
  ],
...
```

<!-- [📖 &nbsp;Read more](https://mijin.design/docs/getting-started) -->
## Support

### Create a bug report

If you see an error message or run into an issue, please create a bug report, this effort is valued and it will help everybody.

[**Create bug report**](https://github.com/lecoueyl/mijin/issues/new?assignees=&labels=bug&template=bug_report.md&title=)

### Submit a feature request

If you're missing a component or want to add a new feature, please submit a request.
If a similar feature request already exists, don't forget to leave a "+1". Adding some information about the feature will be embraced warmly.

[**Submit feature request**](https://github.com/lecoueyl/mijin/issues/new?assignees=&labels=enhancement&template=feature_request.md&title=)

# Contributing

Mijin is an open source project. We are committed to a fully transparent development process and highly appreciate any contributions. Whether you are helping us fix bugs, proposing new features, improving our documentation or spreading the word - we would love to have you as part of the community.

Please refer to our [contribution guidelines](./CONTRIBUTING.md).
