module.exports = {
  env: {
    browser: true,
    es2021: true
  },
  extends: [
    'plugin:react/recommended',
    'airbnb',
    'prettier'
  ],
  parser: '@typescript-eslint/parser',
  parserOptions: {
    ecmaFeatures: {
      jsx: true,
    },
    ecmaVersion: 12,
    sourceType: 'module',
  },
  plugins: [
    'react',
    '@typescript-eslint',
    'testing-library'
  ],
  rules: {
    'react/jsx-filename-extension': [
      1, { 'extensions': ['.js', '.jsx', '.ts', '.tsx'] }
    ],
    'react/require-default-props': [
      'error',
      { ignoreFunctionalComponents: true }
    ],
    'react/jsx-props-no-spreading': 'off',
    'import/extensions': 'off',
    'no-param-reassign': 'off',
    'no-use-before-define': 'off',
    'import/order': 'off',
    'import/prefer-default-export': 'off',
    'import/no-extraneous-dependencies': 'off',
  },
  settings: {
    'import/resolver': {
      'node': {
        'extensions': ['.js', '.jsx', '.ts', '.tsx']
      }
    }
  },
  overrides: [
    {
      files: [
        '**/*.spec.ts',
        '**/*.spec.tsx'
      ],
      env: {
        'jest': true
      }
    }
  ]
};
