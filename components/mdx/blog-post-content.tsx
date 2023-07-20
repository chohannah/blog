'use client'

import { useMDXComponent } from 'next-contentlayer/hooks'
import { MdxProps } from '../../types/mdx'
import CodeBlock from './code-block'
import Toc from './toc'

const mdxComponents = {
  Toc,
  pre: CodeBlock,
}

export const MdxRenderer = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code)

  return (
    <article className="blog-post-content">
      <Component components={mdxComponents} />
    </article>
  )
}
