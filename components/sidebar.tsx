'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import { LinkArrowIcon } from './icons'

const navItems = {
  '/': {
    menu: 'about',
  },
  '/about': {
    menu: 'blog',
  },
  '/blog': {
    menu: 'links',
  },
}

const socialItems = [
  {
    name: 'GitHub',
    link: 'https://github.com/yejinc',
  },
  {
    name: 'Playlist',
    link: 'https://music.apple.com/profile/yejinlistens',
  },
  {
    name: 'Read.cv',
    link: 'https://read.cv/yejincho',
  },
  {
    name: 'LinkedIn',
    link: 'https://www.linkedin.com/in/yjincho/',
  },
]

export default function Sidebar() {
  let pathname = usePathname() || '/'
  if (pathname.includes('/blog/')) {
    pathname = '/blog'
  }
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <header className="sidebar">
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-3 col-lg-2">
            <div className="sidebar-wrapper">
              <h1 className="sidebar-logo">
                <Link href="/">
                  <Image
                    width={42}
                    height={42}
                    src="/images/logo.svg"
                    alt="logo of yejin's blog"
                  />
                </Link>
              </h1>

              <nav className="sidebar-nav">
                <ul className="sidebar-nav-list">
                  {Object.entries(navItems).map(([path, { menu }]) => {
                    const isActive = path === pathname

                    return (
                      <Link key={path} href={path}>
                        <li className="sidebar-nav-list-item">{menu}</li>
                      </Link>
                    )
                  })}
                </ul>
              </nav>

              <div className="sidebar-links sm-hidden">
                <Link className="email" href="mailto:hey.yejinc@gmail.com">
                  hey.yejinc@gmail.com
                </Link>

                <ul className="links-list">
                  {socialItems.map((item) => {
                    return (
                      <li className="links-list-item" key={item.name}>
                        <Link href={item.link}>
                          {item.name}
                          <span className="icon-arrow">
                            <LinkArrowIcon />
                          </span>
                        </Link>
                      </li>
                    )
                  })}
                </ul>

                <p className="copyright">&copy;{currentYear} yejin cho</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  )
}
