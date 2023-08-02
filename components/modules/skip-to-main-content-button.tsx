'use client'

import Link from 'next/link'

import { usePathname } from 'next/navigation'

const SkipTopMainContentButton = () => {
  let pathname = usePathname() || '/'

  if (pathname !== '/') {
    return (
      <Link
        className="skip-to-main-content-button"
        href={`${pathname}#main-content`}
      >
        Skip to main content
      </Link>
    )
  } else {
    return null
  }
}

export default SkipTopMainContentButton
