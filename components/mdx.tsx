import { useMDXComponent } from 'next-contentlayer/hooks'
import { MdxProps } from '../types/mdx'

export function MdxRenderer({ code }: MdxProps) {
  const Component = useMDXComponent(code)

  return (
    <article>
      <Component />
    </article>
  )
}
