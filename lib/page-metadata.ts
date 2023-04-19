import fs from 'fs'
import matter from 'gray-matter'
import { PageMetadata } from '../types/page-metadata'

const getPageMetadata = (): PageMetadata[] => {
  const folder = 'documents/pages/'
  const files = fs.readdirSync(folder)
  const markdownPages = files.filter((file) => file.endsWith('.mdx'))

  // get gray-matter data from each page
  const pages = markdownPages.map((fileName) => {
    const fileContents = fs.readFileSync(`documents/pages/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)
    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      slug: fileName.replace('.mdx', ''),
    }
  })

  return pages
}

export default getPageMetadata
