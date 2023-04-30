import { useMDXComponent } from 'next-contentlayer/hooks'
import { MdxProps } from '../lib/mdx'

export function Mdx({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article>
      <Component />
    </article>
  )
}
