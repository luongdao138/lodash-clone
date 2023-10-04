/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
module.exports = {
  extends: [
    // Chúng ta sẽ dùng các rule mặc định từ các plugin mà chúng ta đã cài.
    'eslint:recommended',
    'plugin:import/errors',
    'plugin:import/warnings',
    'plugin:import/typescript',
    'plugin:@typescript-eslint/recommended',
    // Disable các rule mà eslint xung đột với prettier.
    // Để cái này ở dưới để nó override các rule phía trên!.
    'prettier',
    'eslint-config-prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: { project: ['./tsconfig.json'], sourceType: 'module' },
  plugins: ['prettier'],
  settings: {
    // Nói ESLint cách xử lý các import
    'import/resolver': {
      node: {
        paths: [path.resolve(__dirname)],
        extensions: ['.ts', '.tsx', '.js', '.jsx']
      },
      typescript: {
        project: path.resolve(__dirname, './tsconfig.json')
      }
    }
  },
  env: {
    node: true,
    browser: true,
    es6: true,
    jest: true
  },
  rules: {
    'prettier/prettier': [
      'error',
      {
        arrowParens: 'always',
        semi: true,
        trailingComma: 'none',
        tabWidth: 2,
        endOfLine: 'auto',
        useTabs: false,
        singleQuote: true,
        printWidth: 120,
        jsxSingleQuote: true
      }
    ],
    'no-console': ['error'],
    'no-unused-vars': 'off',
    'no-sparse-arrays': 'off',
    '@typescript-eslint/no-unused-vars': ['error'],
    '@typescript-eslint/no-var-requires': 'off',
    '@typescript-eslint/no-explicit-any': 'off',

    // no need to exlicity define the return type
    '@typescript-eslint/explicit-module-boundary-types': 'off'
  }
};
