'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import { MdxProps } from '../types/mdx'
import TocPost from './toc-post'

const mdxComponents = {
  TocPost,
}

export const MdxRenderer = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code)

  return (
    <article className="blog-post-content">
      <Component components={mdxComponents} />
    </article>
  )
}
