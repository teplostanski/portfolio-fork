// src/utils/getMarkdownData.ts
import fs from 'fs'
import matter from 'gray-matter'
import { normalizePath } from './normalizePath'

export interface Metadata {
  name: string
  description: string
  image?: string
}

export interface MarkdownData {
  metadata: Metadata
  slug: string
  content: string
}

export default function getMarkdownData(basePath: string): MarkdownData[] {
  const folder = normalizePath(basePath, false, false)
  const files = fs.readdirSync(folder).filter((file) => file.endsWith('.md'))

  return files.map((filename) => {
    const fileContents = fs.readFileSync(folder + '/' + filename, 'utf8')
    const matterResult = matter(fileContents)

    return {
      metadata: {
        name: matterResult.data.name,
        description: matterResult.data.description,
        image: matterResult.data.image,
      },
      slug: filename.replace('.md', ''),
      content: matterResult.content,
    }
  })
}
