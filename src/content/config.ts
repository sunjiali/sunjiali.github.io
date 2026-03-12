import { defineCollection } from 'astro:content';

const blog = defineCollection({
  schema: {
    title: {
      type: 'string',
      required: true,
    },
    description: {
      type: 'string',
    },
    pubDate: {
      type: 'date',
      required: true,
    },
    tags: {
      type: 'array',
      items: { type: 'string' },
    },
  },
});

export const collections = { blog };
