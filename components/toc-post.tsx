import { useEffect } from 'react'
import tocbot from 'tocbot'

const TocPost = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc-list-wrapper',
      contentSelector: '.blog-post-content',
      headingSelector: 'h1, h2, h3',
      ignoreSelector: '.toc-title',
      orderedList: false,
      hasInnerContainers: true,
      includeTitleTags: true,
      headingsOffset: 108,
      scrollSmoothOffset: -108,
    })

    const adjustTocHeight = () => {
      const tocWrapper = document.querySelector(
        '.blog-post-content-toc'
      ) as HTMLElement | null
      const blogPostContent = document.querySelector(
        '.blog-post-content'
      ) as HTMLElement | null
      const mdBreakpoint = 768
      if (tocWrapper && blogPostContent && window.innerWidth >= mdBreakpoint) {
        tocWrapper.style.height = `${blogPostContent.clientHeight}px`
      }
    }

    adjustTocHeight()
    window.addEventListener('resize', adjustTocHeight)
    return () => {
      tocbot.destroy()
      window.removeEventListener('resize', adjustTocHeight)
    }
  }, [])

  return (
    <aside className="blog-post-content-toc">
      <div className="blog-post-content-toc-wrapper">
        <h2 className="toc-title">Table of Contents</h2>
        <div className="toc-list-wrapper"></div>
      </div>
    </aside>
  )
}

export default TocPost
