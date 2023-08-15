'use client'

import { useEffect, useState } from 'react'
import tocbot from 'tocbot'
import { motion } from 'framer-motion'
import { staggerHalf, fadeInFull, fadeInUp } from '@/root/constants/animations'

const Toc = () => {
  const [shouldAdjustTocHeight, setShouldAdjustTocHeight] = useState(false)

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
      const toc = document.querySelector(
        '.blog-post-content-toc'
      ) as HTMLElement | null
      const blogPostContent = document.querySelector(
        '.blog-post-content'
      ) as HTMLElement | null
      const mdBreakpoint = 768

      if (toc && blogPostContent) {
        if (window.innerWidth >= mdBreakpoint) {
          if (!shouldAdjustTocHeight) {
            // adjust TOC height when screen size >= 768px
            setShouldAdjustTocHeight(true)
          }
          toc.style.height = `${blogPostContent.clientHeight}px`
        } else {
          if (shouldAdjustTocHeight) {
            // revert TOC height when screen size < 768px
            setShouldAdjustTocHeight(false)
            toc.style.height = ''
          }
        }
      }
    }

    adjustTocHeight()
    window.addEventListener('resize', adjustTocHeight)

    return () => {
      tocbot.destroy()
      window.removeEventListener('resize', adjustTocHeight)
    }
  }, [shouldAdjustTocHeight])

  return (
    <motion.aside
      className="blog-post-content-toc"
      variants={staggerHalf}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <motion.div className="blog-post-content-toc-wrapper" variants={fadeInUp}>
        <motion.h2 className="toc-title" variants={fadeInFull}>
          Table of Contents
        </motion.h2>
        <motion.div
          className="toc-list-wrapper"
          variants={fadeInFull}
        ></motion.div>
      </motion.div>
    </motion.aside>
  )
}

export default Toc
