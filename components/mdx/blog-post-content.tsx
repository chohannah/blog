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
          <motion.div
            className="col-sm-4"
            variants={fadeInHalf}
            initial="initial"
            whileInView="animate"
            exit="exit"
            viewport={{ amount: 0.02, once: true }}
          >
            <Component components={mdxComponents} />
          </motion.div>
        </div>
      </div>
    </motion.article>
  )
}
