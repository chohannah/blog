'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'

const navItems = {
  '/': {
    menu: 'home',
  },
  '/about': {
    menu: 'about',
  },
  '/blog': {
    menu: 'blog',
  },
}

export default function Sidebar() {
  let pathname = usePathname() || '/'
  if (pathname.includes('/blog/')) {
    pathname = '/blog'
  }
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <header>
      <h1>
        <Link href="/">yejin&apos;s blog</Link>
      </h1>

      <nav>
        <ul>
          {Object.entries(navItems).map(([path, { menu }]) => {
            const isActive = path === pathname

            return (
              <Link key={path} href={path}>
                <li>{menu}</li>
              </Link>
            )
          })}
        </ul>
      </nav>

      <p>{currentYear}</p>
    </header>
  )
}
