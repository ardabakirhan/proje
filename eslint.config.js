import js from '@eslint/js'
import globals from 'globals'
import reactHooks from 'eslint-plugin-react-hooks'
import reactRefresh from 'eslint-plugin-react-refresh'
import tseslint from 'typescript-eslint'

export default [
  // Global ignores
  {
    ignores: [
      'dist/**',
      'node_modules/**',
      'public/**',
      '.github/**',
      '.vscode/**',
      '**/.vite/**',
      '**/coverage/**',
      '**/*.min.js',
      '**/*.bundle.js',
      'vite.config.ts',
      'tailwind.config.js',
      'postcss.config.js',
      'eslint.config.js',
      'server/**' // Completely ignore server directory
    ]
  },
  // Base JavaScript config
  js.configs.recommended,
  // TypeScript configs
  ...tseslint.configs.recommended,
  // React-specific configuration
  {
    files: ['src/**/*.{ts,tsx}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      'react-hooks': reactHooks,
      'react-refresh': reactRefresh,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      'react-refresh/only-export-components': [
        'warn',
        { allowConstantExport: true },
      ],
      // Allow any type for rapid development
      '@typescript-eslint/no-explicit-any': 'warn',
      // Allow empty interfaces
      '@typescript-eslint/no-empty-object-type': 'warn',
      // Allow unused variables starting with underscore
      '@typescript-eslint/no-unused-vars': ['error', { 
        argsIgnorePattern: '^_',
        varsIgnorePattern: '^_',
        ignoreRestSiblings: true 
      }],
      // Encourage consistent code style
      'prefer-const': 'error',
      'no-var': 'error',
      'no-console': 'warn',
      // React specific improvements
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
]
