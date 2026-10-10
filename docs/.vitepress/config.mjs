import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Robin',
  description: '运维工程师 | AI工具探索者 | 内容创作者',
  lang: 'zh-CN',

  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'author', content: 'Robin' }],
  ],

  themeConfig: {
    logo: '/favicon.svg',

    nav: [
      { text: '首页', link: '/' },
      { text: '文章', link: '/posts/' },
      { text: '关于', link: '/about/' },
    ],

    sidebar: [
      {
        text: '博客文章',
        items: [
          { text: '开篇：一个运维工程师的 AI 笔记', link: '/posts/ai-ip-opening' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunjiali' },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 Robin'
    },

    search: {
      provider: 'local'
    }
  },

  markdown: {
    theme: {
      light: 'github-light',
      dark: 'github-dark'
    }
  },

  vite: {
    server: {
      port: 3000
    }
  }
})
