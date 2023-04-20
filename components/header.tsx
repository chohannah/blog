import Link from 'next/link'
import getPageMetadata from '../lib/page-metadata'
import PageMenus from './page-menus'

const Header = () => {
  const pageMetadata = getPageMetadata()
  const pageMenus = pageMetadata.map((page) => (
    <PageMenus key={page.slug} {...page} />
  ))

  return (
    <header>
      <h1>
        <Link href="/">yejin&apos;s blog</Link>
      </h1>

      <nav>
        <ul>
          <li>
            <Link href="/">posts</Link>
          </li>
          {pageMenus}
        </ul>
      </nav>
    </header>
  )
}

export default Header
