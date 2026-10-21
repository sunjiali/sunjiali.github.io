<script setup lang="ts">
import { data as posts } from './posts.data'

withDefaults(defineProps<{ limit?: number; heading?: boolean }>(), {
  limit: 6,
  heading: true,
})
</script>

<template>
  <div>
    <div v-if="heading" class="rb-section-head">
      <span class="rb-sticker">最新<em>文章</em></span>
      <a class="rb-more" href="/posts/">Browse all articles →</a>
    </div>
    <div class="rb-cards">
      <a v-for="p in posts.slice(0, limit)" :key="p.url" class="rb-card" :href="p.url">
        <div class="cover">
          <span class="cat">{{ p.category }}</span>
          {{ p.emoji }}
        </div>
        <div class="date">📅 {{ p.dateText }}</div>
        <h3>{{ p.title }}</h3>
        <p>{{ p.excerpt }}…</p>
        <div class="go">阅读全文 →</div>
      </a>
    </div>
  </div>
</template>
