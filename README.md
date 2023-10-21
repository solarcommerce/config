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

### ESLint (Next.js)

```javascript
// .eslintrc.js

const config = require('@solarcommerce/config');
module.exports = config.eslint.nextjs;
```

## Config files

If you do not want to install our package or need configuration for a single tool, below we provide ready-made files that you can copy straight to your project.

### *prettier.config.js*

```javascript
module.exports = {
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
```

### *.eslintrc.js (Next.js)*

```javascript
module.exports = {
  root: true,
  extends: [
    'airbnb',
    'airbnb-typescript',
    'airbnb/hooks',
    'plugin:@typescript-eslint/recommended',
    'plugin:@typescript-eslint/recommended-requiring-type-checking',
    'plugin:@next/next/recommended',
    'prettier',
  ],
  settings: {
    'import/resolver': {
      typescript: {},
    },
  },
  parser: '@typescript-eslint/parser',
  parserOptions: {
    project: ['./tsconfig.json'],
  },
  plugins: ['@typescript-eslint'],
  rules: {
    'react/react-in-jsx-scope': 'off',
    'react/prop-types': 'off',
    'react/require-default-props': 'off',
    'no-void': ['error', { allowAsStatement: true }],
  },
};
```
