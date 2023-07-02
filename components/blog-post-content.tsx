import { useMDXComponent } from 'next-contentlayer/hooks'
import { MdxProps } from '../types/mdx'

export const MdxRenderer = ({ code }: MdxProps) => {
  const Component = useMDXComponent(code)

  return (
    <article className="blog-post-content">
      <Component />
    </article>
  )
}
