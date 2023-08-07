'use client'

import { useMemo } from 'react'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'

import clsx from 'clsx'
import { LayoutGroup, motion } from 'framer-motion'

import { siteConfig } from '../../config'

export default function GNB() {
  let pathname = usePathname() || '/'
  if (pathname.includes('/blog/')) {
    pathname = '/blog'
  }
  const currentYear = useMemo(() => new Date().getFullYear(), [])

  return (
    <header className="gnb">
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-lg-2" aria-hidden></div>
          <div className="col-sm-4 col-md-10 col-lg-8">
            <div className="gnb-wrapper">
              <h1 className="gnb-logo">
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
                <nav className="gnb-links">
                  <ul className="gnb-links-list">
                    {Object.entries(siteConfig.navItems).map(
                      ([path, { menu }]) => {
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
                            <li className="gnb-links-list-item">
                              {menu}
                              {path === pathname ? (
                                <motion.div
                                  className="menu-dynamic-bg"
                                  layoutId="gnb"
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
                      }
                    )}
                  </ul>
                </nav>
              </LayoutGroup>
            </div>
          </div>
          <div className="col-md-1 col-lg-2" aria-hidden></div>
        </div>
      </div>
    </header>
  )
}
