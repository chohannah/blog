import Link from 'next/link'
import getPageMetadata from '../lib/page-metadata'

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
