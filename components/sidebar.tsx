'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import clsx from 'clsx'
import { LayoutGroup, motion } from 'framer-motion'

import LinkGhostArrow from './link-ghost-arrow'
import { siteConfig } from '../config'

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
              {Object.entries(siteConfig.navItems).map(([path, { menu }]) => {
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
            {siteConfig.email}
          </Link>

          <ul className="links-list">
            {siteConfig.socialItems.map((item) => {
              return (
                <li className="links-list-item" key={item.name}>
                  <LinkGhostArrow href={item.link}>{item.name}</LinkGhostArrow>
                </li>
              )
            })}
          </ul>

          <p className="copyright">
            &copy;{currentYear} {siteConfig.name}
          </p>
        </div>
      </header>
    </div>
  )
}
