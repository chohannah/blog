import fs from 'fs'
import Link from 'next/link'
import matter from 'gray-matter'
import { PageMetadata } from '../lib/page-metadata'

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

const Header = () => {
  const pageMetadata = getPageMetadata()
  const pageMenus = pageMetadata.map((page) => (
    // eslint-disable-next-line react/jsx-key
    <li>
      <Link href={`${page.slug}`}>{page.title}</Link>
    </li>
  ))

  return (
    <header>
      <h1>
        <Link href="/">yejin&apos;s blog</Link>
      </h1>

      <nav>
        <ul>{pageMenus}</ul>
      </nav>
    </header>
  )
}

export default Header
