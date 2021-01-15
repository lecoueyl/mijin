<p align="center">
  <a href="https://mijin.design" target="_blank">
    <img alt="amplication-logo" height="70" alt="Amplication Logo" src="https://amplication.com/assets/amplication-logo-purple.svg"/>
  </a>
</p>

<p align="center">
    <a href="https://mijin.design/docs">📖 Documentation</a>
</p>

Amplication is an open‑source development tool. It helps professional Node.js developers develop quality Node.js applications without spending time on repetitive coding tasks.
## Features

- 💅 Component style relying uniquely on Tailwind CSS presets classes
- 📱 Responsive
- 🌗 Support dark and light mode
- 🕵️ No dependencies

## Getting Started

Install package:

```bash
# Using npm
npm install --save-dev mijin
# Using yarn
yarn add --dev mijin
```

Add mijin Tailwind CSS presets to your `tailwindcss.config.js` file

```javascript
const mijin = require('mijin/tailwind-preset.js');

module.exports = {
  presets: [
    mijin,
  ],
};
```

Load the plugin in your vue application

### vuejs

```javascript
import Vue from 'vue'
import Mijin from 'mijin'

Vue.use(Mijin)
```

### nuxtjs

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

If you're missing a component or add a new feature, please submit a request.<br/>
In case a similar feature request already exists, don't forget to leave a "+1". Adding some more information such as thoughts and your vision about the feature will be embraced warmly :)

[**Submit feature request**](https://github.com/lecoueyl/mijin/issues/new?assignees=&labels=type%3A%20feature%20request&template=feature_request.md&title=)

# Contributing

Mijin is an open source project. We are committed to a fully transparent development process and highly appreciate any contributions. Whether you are helping us fix bugs, proposing new features, improving our documentation or spreading the word - we would love to have you as part of the community.

Please refer to our [contribution guidelines](./CONTRIBUTING.md).
