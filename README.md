# @solarcommerce/config

This package contains configurations for various tools such as **Prettier, ESLint, Stylelint, etc**. These are the configurations we use in our **Solar Commerce team**, which we tried to choose to keep our code consistent and clean.

## Installation

To install our config, just enter:

```console
npm i -D @solarcommerce/config
```

## Usage

We have tried to make importing configurations as simple as possible. Below are examples of how to add our configuration to the project.

### Prettier

```javascript
// prettier.config.js

const config = require('@solarcommerce/config');
module.exports = config.prettier;
```

## Configs

If you do not want to install our package or need configuration for a single tool, below we provide ready-made files that you can copy straight to your project.

### prettier.config.js

```javascript
const config = {
  printWidth: 120,
  tabWidth: 2,
  useTabs: false,
  semi: true,
  singleQuote: true,
  quoteProps: 'as-needed',
  jsxSingleQuote: false,
  trailingComma: 'all',
  bracketSpacing: true,
  bracketSameLine: false,
  arrowParens: 'always',
  singleAttributePerLine: false,
};

export default config;
```
