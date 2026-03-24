import { defineCollection, z } from 'astro:content';

const blog = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    date: z.coerce.date(),
    tags: z.array(z.string()).optional(),
    categories: z.array(z.string()).optional(),
    featured: z.boolean().default(false),
  }),
});

const news = defineCollection({
  type: 'content',
  schema: z.object({
    title: z.string().optional(),
    date: z.coerce.date(),
    inline: z.boolean().default(false),
    url: z.string().optional(),
  }),
});

export const collections = { blog, news };
