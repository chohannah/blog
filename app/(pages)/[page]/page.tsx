import fs from 'fs'
import Markdown from 'markdown-to-jsx'

const getPageContent = (page: string) => {
  const folder = 'documents/pages/'
  const file = `${folder}${page}.mdx`
  const content = fs.readFileSync(file, 'utf8')
  return content
}

const Page = (props: any) => {
  const page = props.params.page
  const content = getPageContent(page)

  return (
    <article>
      <h1>this is a {page} page</h1>
      <Markdown>{content}</Markdown>
    </article>
  )
}

export default Page
