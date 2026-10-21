import { createContentLoader } from 'vitepress'

export interface PostItem {
  url: string
  title: string
  date: string
  dateText: string
  category: string
  emoji: string
  excerpt: string
}

declare const data: PostItem[]
export { data }

export default createContentLoader('posts/*.md', {
  excerpt: true,
  transform(raw): PostItem[] {
    return raw
      .filter((p) => !p.url.endsWith('/posts/') && !p.url.endsWith('/posts/index'))
      .map((p) => {
        const fm = p.frontmatter as Record<string, string>
        const d = fm.date ? new Date(fm.date) : null
        return {
          url: p.url,
          title: fm.title || '未命名文章',
          date: fm.date || '',
          dateText: d
            ? `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`
            : '',
          category: fm.category || '随笔',
          emoji: fm.emoji || '✍️',
          excerpt: (
            fm.description ||
            (p.excerpt || '').replace(/<[^>]+>/g, '').trim()
          ).slice(0, 90),
        }
      })
      .sort((a, b) => (b.date > a.date ? 1 : -1))
  },
})
