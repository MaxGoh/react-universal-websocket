module.exports = {
  env: {
    browser: true,
    commonjs: true,
    es6: true,
    jest: true,
    browser: true,
    node: true
  },
  extends: ['eslint:recommended', 'plugin:react/recommended'],
  parserOptions: {
    ecmaFeatures: {
      experimentalObjectRestSpread: true,
      jsx: true
    },
    sourceType: 'module'
  },
  parser: 'babel-eslint',
  plugins: ['react'],
  rules: {
    'react/display-name': [0, { ignoreTranspilerName: false }],
    indent: ['error', 2],
    'linebreak-style': ['error', 'unix'],
    quotes: ['error', 'single'],
    semi: ['error', 'never'],
    strict: 0,
    extends: ['prettier']
  }
}
