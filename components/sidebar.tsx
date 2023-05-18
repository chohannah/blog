'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import clsx from 'clsx'
import { LayoutGroup, motion } from 'framer-motion'

import { LinkArrowIcon } from './icons'

const navItems = {
  '/about': {
    menu: 'about',
  },
  '/blog': {
    menu: 'blog',
  },
  '/links': {
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
    <div className="col-sm-4 col-md-3 col-lg-3">
      <header className="sidebar">
        <h1 className="sidebar-logo">
          <Link href="/">
            <Image
              width={42}
              height={42}
              src="/images/logo.svg"
              alt="logo of yejin's blog"
              priority
            />
          </Link>
        </h1>

        <LayoutGroup>
          <nav className="sidebar-nav">
            <ul className="sidebar-nav-list">
              {Object.entries(navItems).map(([path, { menu }]) => {
                const isActive = path === pathname

                return (
                  <Link
                    key={path}
                    href={path}
                    className={clsx({
                      'menu-active': isActive,
                      'menu-inactive': !isActive,
                    })}
                  >
                    <li className="sidebar-nav-list-item">
                      {menu}
                      {path === pathname ? (
                        <motion.div
                          className="menu-dynamic-bg"
                          layoutId="sidebar"
                          transition={{
                            type: 'spring',
                            stiffness: 216,
                            damping: 32,
                          }}
                        />
                      ) : null}
                    </li>
                  </Link>
                )
              })}
            </ul>
          </nav>
        </LayoutGroup>

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
      </header>
    </div>
  )
}
