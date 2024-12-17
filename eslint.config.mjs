import globals from 'globals';
import pluginJs from '@eslint/js';
import pluginTseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';
import pluginSecurity from 'eslint-plugin-security';
import reactCompiler from 'eslint-plugin-react-compiler'

export default [
  {
    files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'],
  },
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
      globals: { ...globals.browser, ...globals.node },
    },
  },
  {
    plugins: {
      'react-compiler': reactCompiler,
    },
    rules: {
      'react-compiler/react-compiler': 'error',
    },
    settings: {
      'react-compiler': {
        target: '18',
      },
    }
  },
  pluginJs.configs.recommended,
  ...pluginTseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  pluginSecurity.configs.recommended,
  {
    ignores: [
      '.detoxrc-ci.js',
      '.eslintrc.js',
      '.prettierrc.js',
      '.node_modules/',
      '.git/',
      '**/*.config.js',
      ' **/*.config.mjs',
    ],
  },
];
