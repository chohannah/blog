'use client'

import { useMemo } from 'react'
import Link from 'next/link'

import { siteConfig } from '../../config'

import LinkGhostArrow from '../modules/link-ghost-arrow'

const Footer = () => {
  const currentYear = useMemo(() => new Date().getFullYear(), [])
  return (
    <footer className="footer">
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-lg-2" aria-hidden></div>
          <div className="col-sm-4 col-md-10 col-lg-8">
            <Link className="email" href={`mailto:${siteConfig.email}`}>
              <span className="email-text">{siteConfig.email}</span>
            </Link>

            <ul className="links-list">
              {siteConfig.socialItems.map((item) => {
                return (
                  <li className="links-list-item" key={item.name}>
                    <LinkGhostArrow href={item.link} target="_blank">
                      <span className="item-text">{item.name}</span>
                    </LinkGhostArrow>
                  </li>
                )
              })}
            </ul>

            <p className="copyright">
              &copy;{currentYear} {siteConfig.name} · powered by Next.js · made
              with 💜
            </p>
          </div>
          <div className="col-md-1 col-lg-2" aria-hidden></div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
