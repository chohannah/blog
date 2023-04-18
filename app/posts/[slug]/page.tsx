import fs from 'fs'
import Markdown from 'markdown-to-jsx'
import matter from 'gray-matter'

const getPostContent = (slug: string) => {
  const folder = 'posts/'
  const file = `${folder}${slug}.mdx`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

const PostPage = (props: any) => {
  const slug = props.params.slug
  const post = getPostContent(slug)

  return (
    <>
      <h1>this is a post page of {post.data.title}</h1>
      <Markdown>{post.content}</Markdown>
    </>
  )
}
export default PostPage
