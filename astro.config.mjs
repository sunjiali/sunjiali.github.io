import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';

export default defineConfig({
  integrations: [mdx()],
  site: 'https://sunjiali.github.io',
  base: '/',
  output: 'static',
  build: {
    format: 'directory'
  }
});
