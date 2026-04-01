import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import tseslint from 'typescript-eslint';
import eslintPluginPrettier from 'eslint-plugin-prettier/recommended';
import configPrettier from 'eslint-config-prettier';
import eslintPluginReact from 'eslint-plugin-react';

export default tseslint.config(
  {ignores: ['.next/**', 'out/**', 'build/**', 'next-env.d.ts']},
  {
    extends: [js.configs.recommended, ...tseslint.configs.recommended],
    files: ['src/**/*.{ts,tsx,d.ts}'],
    languageOptions: {
      ecmaVersion: 2020,
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
    plugins: {
      'react-hooks': reactHooks,
      react: eslintPluginReact,
    },
    rules: {
      ...configPrettier.rules,
      ...reactHooks.configs.recommended.rules,
      '@typescript-eslint/no-explicit-any': 'off',
      'no-multiple-empty-lines': ['error', {max: 1, maxEOF: 1}],
      'react/jsx-curly-brace-presence': ['error', {props: 'always', children: 'always'}],
      '@typescript-eslint/no-unused-vars': [
        'error',
        {
          vars: 'all',
          args: 'after-used',
          varsIgnorePattern: '^_',
          argsIgnorePattern: '^_',
        },
      ],
      'react/no-danger': 'warn',
      'react-hooks/rules-of-hooks': 'error',
      'react-hooks/exhaustive-deps': 'warn',
    },
  },
  eslintPluginPrettier,
);
