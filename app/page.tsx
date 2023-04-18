import Link from 'next/link'
import getPostMetadata from '../lib/post-metadata'

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
