import getPostMetadata from '../lib/post-metadata'
import PostPreview from '../components/post-preview'

const Home = () => {
  const postMetadata = getPostMetadata()
  const postPreviews = postMetadata.map((post) => (
    <PostPreview key={post.slug} {...post} />
  ))
  return <article>{postPreviews}</article>
}
export default Home
