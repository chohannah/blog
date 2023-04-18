import fs from 'fs'
import matter from 'gray-matter'
import Link from 'next/link'
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

export default function Home() {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((post) => (
    // eslint-disable-next-line react/jsx-key
    <Link href={`/posts/${post.slug}`}>
      <h3>{post.title}</h3>
      <p>{post.description}</p>
    </Link>
  ))
  return <h1>{postPreviews}</h1>
}
