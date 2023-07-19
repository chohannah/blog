import Link from 'next/link'
import { LinkArrowIcon } from './icons'

const LinkGhostArrow = ({
  ref: _,
  className,
  href,
  children,
  ...props
}: React.ComponentProps<'a'>) => {
  return (
    <Link {...props} href={href ?? '/'} className="link-ghost-arrow">
      {children}{' '}
      <span className="icon-arrow">
        <LinkArrowIcon />
      </span>
    </Link>
  )
}

export default LinkGhostArrow
