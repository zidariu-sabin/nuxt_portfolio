import { defineContentConfig, defineCollection, z } from '@nuxt/content'


export const blogSchema = z.object({
  date: z.date(),
  title: z.string(),
})
export type Blog = z.infer<typeof blogSchema>


export const projectSchema = z.object({
  title: z.string(),
  description: z.string(),
  languages: z.array(z.string()),
  languageColors: z.array(z.string()),
  languageSizes: z.array(z.number()),
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