import fs from 'fs'
import matter from 'gray-matter'
import { PostMetadata } from '../types/post-metadata'

const getPostMetadata = (): PostMetadata[] => {
  const folder = 'posts/'
  const files = fs.readdirSync(folder)
  const markdownPosts = files.filter((file) => file.endsWith('.mdx'))

  //get gray-matter data from each post
  const posts = markdownPosts.map((fileName) => {
    const fileContents = fs.readFileSync(`posts/${fileName}`, 'utf8')
    const matterResult = matter(fileContents)

    return {
      title: matterResult.data.title,
      date: matterResult.data.date,
      description: matterResult.data.description,
      image: matterResult.data.image,
      slug: fileName.replace('.mdx', ''),
    }
  })

  return posts
}

export default getPostMetadata
