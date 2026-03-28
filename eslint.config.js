import markdown from '@eslint/markdown';
import prettier from 'eslint-config-prettier';
import ymlPlugin from 'eslint-plugin-yml';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  ...ymlPlugin.configs['flat/recommended'],
  ...ymlPlugin.configs['flat/prettier'],
  {
    extends: [markdown.configs.recommended, markdown.configs.processor],
    files: ['**/*.md'],
    language: 'markdown/gfm',
  },
  prettier,
]);
