import Link from 'next/link'
import { PageMetadata } from '../types/page-metadata'

const PageMenus = (props: PageMetadata) => {
  return (
    <li>
      <Link href={`${props.slug}`}>{props.title}</Link>
    </li>
  )
}

export default PageMenus
