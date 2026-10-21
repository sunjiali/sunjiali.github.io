import DefaultTheme from 'vitepress/theme'
import type { Theme } from 'vitepress'
import PostsGrid from './PostsGrid.vue'
import './custom.css'

export default {
  extends: DefaultTheme,
  enhanceApp({ app }) {
    app.component('PostsGrid', PostsGrid)
  },
} satisfies Theme
