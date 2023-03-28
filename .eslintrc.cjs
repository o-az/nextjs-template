/** @type {import('eslint').Linter.Config} */
module.exports = {
  root: true,
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    warnOnUnsupportedTypeScriptVersion: true,
  },
  env: { node: true, browser: true },
  reportUnusedDisableDirectives: true,
  extends: [
    'eslint:recommended',
    'plugin:unicorn/all',
    'plugin:@typescript-eslint/recommended',
    'next',
    'next/core-web-vitals',
    'prettier',
  ],
  plugins: ['@typescript-eslint', 'prettier'],
  settings: {},
  overrides: [],
  rules: {
    'unicorn/no-array-reduce': ['off'],
    'unicorn/prefer-top-level-await': ['off'],
    'unicorn/prefer-event-target': ['off'],
    'unicorn/prevent-abbreviations': [
      'error',
      {
        allowList: {
          ProcessEnv: true,
        },
        checkFilenames: false,
      },
    ],
    'import/no-anonymous-default-export': ['off'],
    'no-unused-vars': ['off'],
    'array-element-newline': ['error', 'consistent'],
    'object-curly-spacing': ['error', 'always'],
    'prettier/prettier': [
      'warn',
      {},
      {
        usePrettierrc: true,
        fileInfoOptions: {
          withNodeModules: true,
        },
      },
    ],
    'no-mixed-operators': ['off'],
    'no-multiple-empty-lines': ['off'],
    'no-unexpected-multiline': ['off'],
    '@typescript-eslint/no-var-requires': ['off'],
    '@typescript-eslint/prefer-namespace-keyword': ['off'],
    '@typescript-eslint/no-empty-interface': ['off'],
    '@typescript-eslint/consistent-type-imports': [
      'warn',
      {
        prefer: 'type-imports',
        fixStyle: 'inline-type-imports',
      },
    ],
    '@typescript-eslint/ban-ts-comment': ['off'],
    '@typescript-eslint/ban-types': [
      'warn',
      {
        types: {
          String: {
            message: 'Use string instead',
            fixWith: 'string',
          },

          '{}': {
            message: 'Use object instead',
            fixWith: 'object',
          },
        },
      },
    ],
  },
}
