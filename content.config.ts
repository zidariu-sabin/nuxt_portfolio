import { defineContentConfig, defineCollection, z } from '@nuxt/content'

export const blogSchema = z.object({
  date: z.date(),
  title: z.string(),
})
export type Blog = z.infer<typeof blogSchema>

const lannguageSchema = z.object({
  name: z.string(),
  color: z.string(),
  size: z.number(),
})

export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  label: z.string().optional(),
  url: z.string().optional(),
  updatedAt: z.date().optional(),
  languages: z.array(lannguageSchema),
})

export type Project = z.infer<typeof projectSchema>


export default defineContentConfig({
  collections: {
    //collection name
    blog: defineCollection({
      type: 'page',
      source: 'blog/**/*.md',
      schema: blogSchema
    }),
    projects: defineCollection({
      type: 'page',
      source: 'projects/**/*.md',
      schema: projectSchema
    })

  }
})