import fs from 'fs'
import Link from 'next/link'

const getPageMetadata = () => {
  const folder = 'documents/pages/'
  const files = fs.readdirSync(folder)
  const markdownPages = files.filter((file) => file.endsWith('.mdx'))
  const pages = markdownPages.map((file) => file.replace('.mdx', ''))
  return pages
}

const Header = () => {
  const pageMetadata = getPageMetadata()
  const pageMenus = pageMetadata.map((page) => (
    // eslint-disable-next-line react/jsx-key
    <li>
      <Link href={`${page}`}>{page}</Link>
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
