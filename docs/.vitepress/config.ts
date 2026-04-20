import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'SunJiLi',
  description: '运维工程师 | AI工具探索者 | 内容创作者',
  lang: 'zh-CN',
  
  head: [
    ['link', { rel: 'icon', href: '/favicon.svg' }],
    ['meta', { name: 'author', content: 'SunJiLi' }],
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
          { text: '运维工程师的AI提效之路', link: '/posts/devops-ai-efficiency' },
          { text: '如何用小红书做副业', link: '/posts/xiaohongshu-side-hustle' },
          { text: '从运维到内容创作者的转型思考', link: '/posts/devops-to-creator' },
          { text: '我的投资理财心得', link: '/posts/investment-experience' },
          { text: '技术工具推荐清单', link: '/posts/tech-tools-recommendation' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/sunjiali' },
    ],

    footer: {
      message: '基于 VitePress 构建',
      copyright: 'Copyright © 2024 SunJiLi'
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
