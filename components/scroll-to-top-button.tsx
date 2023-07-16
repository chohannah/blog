'use client'

import { useEffect, useState } from 'react'

import { LinkArrowIcon } from './icons'

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let observer: IntersectionObserver | undefined

    if (!observer) {
      observer = new IntersectionObserver(
        ([entry]) => {
          setShow(!entry.isIntersecting)
        },
        { threshold: 0.9 }
      )
    }

    const nav = document.querySelector('.sidebar .sidebar-logo')

    if (nav) {
      observer.observe(nav)
    }
  }, [])

  return (
    <button
      className="scroll-to-top-button"
      type="button"
      onClick={() => window.scrollTo({ top: 0 })}
      style={{ display: show ? '' : 'none' }}
    >
      <LinkArrowIcon />
    </button>
  )
}

export default ScrollToTopButton
