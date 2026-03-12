# sunjiali.github.io

孙佳利的个人网站和博客，使用 [Astro](https://astro.build) 构建，参考 [steipete.me](https://steipete.me) 的技术栈。

## 技术栈

- **Astro 5** - 现代静态网站生成器
- **TypeScript** - 类型安全的 JavaScript
- **Tailwind CSS 4** - 实用优先的 CSS 框架
- **React 19** - UI 组件库
- **MDX** - Markdown 扩展
- **Biome** - 快速的 linter 和 formatter
- **Vercel** - 云端部署平台

## 功能

- 响应式设计，支持移动端
- 深色模式支持
- PWA（Progressive Web App）
- 搜索功能（通过 Pagefind）
- RSS 订阅源
- 网站地图

## 快速开始

### 安装依赖

```bash
npm install
```

### 开发服务器

```bash
npm run dev
```

在 [http://localhost:4321](http://localhost:4321) 查看网站

### 构建生产版本

```bash
npm run build
```

### 预览生产构建

```bash
npm run preview
```

## 部署

### Vercel 部署

```bash
npm install -g vercel
vercel
```

或者直接推送到 GitHub，通过 Vercel 集成自动部署。

## 项目结构

```
sunjiali.github.io/
├── public/          # 静态资源（图片、字体、favicon）
├── src/
│   ├── components/   # 可复用的 UI 组件
│   ├── content/
│   │   ├── config.ts      # 内容集合配置
│   │   └── blog/          # Markdown 格式的博客文章
│   ├── layouts/      # 页面布局和模板
│   ├── pages/        # 路由和页面
│   ├── styles/       # 全局样式和 CSS
│   ├── utils/        # 工具函数
│   └── config.ts      # 网站配置
├── astro.config.mjs  # Astro 配置
├── vercel.json       # Vercel 配置
├── package.json      # 项目依赖和脚本
├── tsconfig.json     # TypeScript 配置
└── biome.json        # Biome 配置
```

## 添加博客文章

在 `src/content/blog/` 中创建 Markdown 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
pubDate: 2026-03-12
tags: ["tag1", "tag2"]
draft: false
---

这里是文章内容...
```

## 代码质量

使用 Biome 进行 lint 和 format：

```bash
# Lint
npm run lint

# 自动修复
npm run lint:fix

# Format
npm run format

# 检查
npm run check
```

## 作者

孙佳利
