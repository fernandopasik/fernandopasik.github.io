import markdown from '@eslint/markdown';
import prettier from 'eslint-config-prettier';
import { configs as ymlConfigs } from 'eslint-plugin-yml';
import { defineConfig } from 'eslint/config';

export default defineConfig([
  {
    extends: [markdown.configs.recommended, markdown.configs.processor],
    files: ['**/*.md'],
    language: 'markdown/gfm',
  },
  {
    extends: [ymlConfigs['flat/standard'], ymlConfigs['flat/prettier']],
    files: ['*.yaml', '*.yml'],
  },
  prettier,
]);
