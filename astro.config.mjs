// @ts-check
import { defineConfig } from 'astro/config';
import sitemap, { ChangeFreqEnum } from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

export const SITE = {
  website: 'https://sunjiali.github.io',
  title: '孙佳利',
  description: '个人网站和博客',
  showArchives: true,
};

// https://astro.build/config
export default defineConfig({
  site: SITE.website,
  trailingSlash: 'never',
  markdown: {
    shikiConfig: {
      themes: { light: 'min-light', dark: 'night-owl' },
      wrap: true,
    },
  },
  integrations: [
    sitemap({
      changefreq: ChangeFreqEnum.WEEKLY,
      priority: 0.8,
    }),
  ],
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
    plugins: [tailwindcss()],
  },
});
