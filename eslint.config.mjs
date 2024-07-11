import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from '@typescript-eslint/eslint-plugin';
import parser from '@typescript-eslint/parser';


export default [
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
    languageOptions: {
      sourceType: 'commonjs',
      parser,
      parserOptions: {
        ecmaVersion: 'latest',
        sourceType: 'module'
      }
    },
    plugins: {
      '@typescript-eslint': tseslint
    },
    rules: {
      ...pluginJs.configs.recommended.rules,
      ...tseslint.configs.recommended.rules
    }
  },
  {
    files: ['**/*.js'],
    languageOptions: {
      sourceType: 'commonjs'
    },
    globals: globals.node
  }, 
  {
    files: ['**/*.ts'],
    languageOptions: {
      sourceType: 'module',
      globals: globals.node
    },
  }
];