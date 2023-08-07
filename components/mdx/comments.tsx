'use client'

import { useRouter } from 'next/navigation'
import { useEffect, useRef, useState } from 'react'
// import { useTheme } from 'next-themes'

const Comments = () => {
  const ref = useRef<HTMLDivElement>(null)
  const [mounted, setMounted] = useState(false)
  const router = useRouter()

  // https://github.com/giscus/giscus/tree/main/styles/themes
  // const theme = resolvedTheme === 'dark' ? 'dark' : 'light'

  useEffect(() => {
    if (!ref.current || ref.current.hasChildNodes()) return

    const scriptElem = document.createElement('script')
    scriptElem.src = 'https://giscus.app/client.js'
    scriptElem.async = true
    scriptElem.crossOrigin = 'anonymous'

    scriptElem.setAttribute('data-repo', 'yejinc/blog')
    scriptElem.setAttribute('data-repo-id', 'R_kgDOIXxszw')
    scriptElem.setAttribute('data-category-id', 'DIC_kwDOIXxsz84CYGZD')
    scriptElem.setAttribute('data-mapping', 'pathname')
    scriptElem.setAttribute('data-strict', '0')
    scriptElem.setAttribute('data-reactions-enabled', '1')
    scriptElem.setAttribute('data-emit-metadata', '0')
    scriptElem.setAttribute('data-input-position', 'top')
    scriptElem.setAttribute('data-theme', 'dark')
    scriptElem.setAttribute('data-lang', 'en')
    scriptElem.setAttribute('data-loading', 'lazy')

    ref.current.appendChild(scriptElem)
    setMounted(true)
  }, [])

  // https://github.com/giscus/giscus/blob/main/ADVANCED-USAGE.md#isetconfigmessage
  useEffect(() => {
    if (!mounted) return
  }, [mounted])

  useEffect(() => {
    const iframe = document.querySelector<HTMLIFrameElement>(
      'iframe.giscus-frame'
    )
    iframe?.contentWindow?.postMessage(
      { giscus: { setConfig: { term: router } } },
      'https://giscus.app'
    )
  }, [router])

  return (
    <section className="comments">
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-lg-2" aria-hidden></div>

          <div className="col-sm-4 col-md-10 col-lg-8">
            <section ref={ref} />
          </div>

          <div className="col-md-1 col-lg-2" aria-hidden></div>
        </div>
      </div>
    </section>
  )
}

export default Comments
