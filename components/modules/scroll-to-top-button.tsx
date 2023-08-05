'use client'
import { useEffect, useState } from 'react'

import { LinkArrowIcon } from './icons'

const ScrollToTopButton = () => {
  const [show, setShow] = useState(false)

  useEffect(() => {
    let timeout: NodeJS.Timeout

    const observer = new IntersectionObserver(
      ([entry]) => {
        clearTimeout(timeout)
        timeout = setTimeout(() => {
          setShow(!entry.isIntersecting)
        }, 100) // 100ms 디바운싱 시간
      },
      { threshold: 0.9 }
    )

    const nav = document.querySelector('.gnb')

    if (nav) {
      observer.observe(nav)
    }

    return () => {
      clearTimeout(timeout)
      observer.disconnect()
    }
  }, [])

  return (
    <button
      className="scroll-to-top-button"
      type="button"
      onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      style={{ display: show ? '' : 'none' }}
    >
      <LinkArrowIcon />
    </button>
  )
}

export default ScrollToTopButton
