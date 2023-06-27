module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:react/recommended',
    'prettier',
  ],
  overrides: [],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: false,
  },
  plugins: ['@typescript-eslint'],
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    'no-console': ['error', { allow: ['error'] }],
    indent: ['error', 2],
    quotes: ['error', 'single'],
    semi: ['error', 'always'],
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
  },
  ignorePatterns: ['node_modules/'],
};
