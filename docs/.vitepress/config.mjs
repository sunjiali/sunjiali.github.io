import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'Sun Jiali',
  description: '运维工程师 | AI工具探索者 | 内容创作者',
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'author', content: 'Sun Jiali' }],
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
        items: []
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunjiali' },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 Sun Jiali'
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
