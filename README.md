# sunjiali.github.io

我的个人网站，使用 [Astro](https://astro.build) 构建，部署在 GitHub Pages。

## 技术栈

- **Astro** - 现代静态网站生成器
- **TypeScript** - 类型安全的 JavaScript
- **Tailwind CSS** - 实用优先的 CSS 框架
- **GitHub Pages** - 免费静态网站托管

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

## 项目结构

```
├── public/          # 静态资源（图片、字体、favicon）
├── src/
│   ├── components/   # 可复用的 UI 组件
│   ├── content/
│   │   └── blog/      # Markdown 格式的博客文章
│   ├── layouts/      # 页面布局和模板
│   ├── pages/        # 路由和页面
│   └── styles/       # 全局样式和 CSS
├── astro.config.mjs  # Astro 配置
├── package.json      # 项目依赖和脚本
└── tsconfig.json     # TypeScript 配置
```

## 添加博客文章

在 `src/content/blog/` 中创建 Markdown 文件：

```markdown
---
title: "文章标题"
description: "文章描述"
pubDate: 2026-03-12
tags: ["tag1", "tag2"]
---

这里是文章内容...
```

## 作者

孙佳利
