import { useEffect } from 'react'
import tocbot from 'tocbot'

const Toc = () => {
  useEffect(() => {
    tocbot.init({
      tocSelector: '.toc-list-wrapper', // Select the wrapper of toc
      contentSelector: '.blog-post-content', // Select the warpper of contents
      headingSelector: 'h1, h2, h3', // Choose the heading tags
      ignoreSelector: '.toc-title',
      orderedList: false,
      hasInnerContainers: true,
      includeTitleTags: true,

      // handling sticky header for sm screen size
      headingsOffset: 108,
      scrollSmoothOffset: -108,

      //enable to handle if 'active' class on scroll won't work properly
      //   hasInnerContainers: true,
    })

    return () => tocbot.destroy()
  }, [])

  return (
    <aside className="blog-post-content-toc">
      <h2 className="toc-title">Table of Contents</h2>

      <div className="toc-list-wrapper"></div>
    </aside>
  )
}

export default Toc
