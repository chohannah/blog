import Link from 'next/link'
import { MDArrowIcon } from './icons'

const LinkOutlinedArrow = ({
  ref: _,
  className,
  href,
  children,
  ...props
}: React.ComponentProps<'a'>) => {
  return (
    <Link {...props} href={href ?? '/'} className="link-outlined-arrow">
      {children} <MDArrowIcon />
    </Link>
  )
}

export default LinkOutlinedArrow
