module.exports = {
  env: {
    node: true,
    es6: true,
    commonjs: true
  },
  extends: [
    'eslint:recommended'
  ],
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'script'
  },
  rules: {
    'no-console': 'off',
    'no-unused-vars': 'warn',
    'no-undef': 'off'
  },
  globals: {
    'process': 'readonly',
    'console': 'readonly',
    '__dirname': 'readonly',
    '__filename': 'readonly',
    'require': 'readonly',
    'module': 'readonly',
    'exports': 'readonly',
    'Buffer': 'readonly',
    'global': 'readonly',
    'setTimeout': 'readonly',
    'clearTimeout': 'readonly',
    'setInterval': 'readonly',
    'clearInterval': 'readonly'
  }
};
