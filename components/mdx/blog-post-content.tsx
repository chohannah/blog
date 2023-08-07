'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import { motion } from 'framer-motion'

import { MdxProps } from '../../types/mdx'
import CodeBlock from './code-block'
import Toc from './toc'
import { staggerHalf, fadeInHalf } from '@/root/constants/animations'

const mdxComponents = {
  Toc,
  pre: CodeBlock,
}

export const MdxRenderer = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code)

  return (
    <motion.article
      className="blog-post-content"
      variants={staggerHalf}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-lg-2" aria-hidden></div>

          <motion.div
            className="col-sm-4 col-md-10 col-lg-8"
            variants={fadeInHalf}
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{ amount: 0.02, once: true }}
          >
            <Component components={mdxComponents} />
          </motion.div>

          <div className="col-md-1 col-lg-2" aria-hidden></div>
        </div>
      </div>
    </motion.article>
  )
}
