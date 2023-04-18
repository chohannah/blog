import Link from 'next/link'
import { PostMetadata } from '../types/post-metadata'

const PostPreview = (props: PostMetadata) => {
  return (
    <Link href={`/posts/${props.slug}`}>
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </Link>
  )
}

export default PostPreview
