import js from '@eslint/js';
import vue from 'eslint-plugin-vue';

export default [
  {
    ignores: ['node_modules/', 'dist/', 'storybook-static/', '.git/', '.vscode/', 'coverage/'],
  },
  ...vue.configs['flat/recommended'],
  {
    files: ['src/**/*.{js,vue}', 'stories/**/*.js'],
    languageOptions: {
      ecmaVersion: 'latest',
      sourceType: 'module',
      globals: {
        console: 'readonly',
        process: 'readonly',
        document: 'readonly',
        window: 'readonly',
        setTimeout: 'readonly',
        clearTimeout: 'readonly',
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      'vue/multi-word-component-names': 'off',
      'vue/singleline-html-element-content-newline': 'off',
      'vue/no-v-html': 'off',
      'no-unused-vars': 'off',
    },
  },
];
