---
title: "欢迎来到我的新网站！"
description: "从 Jekyll 迁移到 Astro 的第一篇文章"
pubDate: 2026-03-12
tags: ["更新", "astro"]
---

你将在 `src/content/blog/` 目录中找到这篇文章。可以随意编辑并重新构建站点以查看更改。

## 命名格式

博客文章文件需要按照以下格式命名：

`YEAR-MONTH-DAY-title.md`

其中 `YEAR` 是四位数字，`MONTH` 和 `DAY` 都是两位数字，而 `MARKUP` 是文件扩展名。之后，包含必要的 front matter。

## 代码高亮示例

Astro 也支持代码片段：

```javascript
function printHi(name) {
  console.log(`Hi, ${name}!`);
}
printHi('Tom');
// => 打印 'Hi, Tom!' 到控制台
```

## 下一步

- 在 `src/content/blog/` 中添加更多博客文章
- 自定义 `src/layouts/Layout.astro` 中的布局
- 在 `src/styles/global.css` 中调整样式

祝您使用愉快！
