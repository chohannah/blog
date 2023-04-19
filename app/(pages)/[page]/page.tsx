import getPageMetadata from '@/root/lib/page-metadata'
import fs from 'fs'
import matter from 'gray-matter'
import Markdown from 'markdown-to-jsx'

const getPageContent = (page: string) => {
  const folder = 'documents/pages/'
  const file = `${folder}${page}.mdx`
  const content = fs.readFileSync(file, 'utf8')
  const matterResult = matter(content)
  return matterResult
}

export const generateStaticParams = async () => {
  const pages = getPageMetadata()
  return pages.map((page) => ({
    slug: page.slug,
  }))
}

const Page = (props: any) => {
  const page = props.params.page
  const wholePage = getPageContent(page)

  return (
    <article>
      <h1>this is a {wholePage.data.title} page</h1>
      <Markdown>{wholePage.content}</Markdown>
    </article>
  )
}

export default Page
