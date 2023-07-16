import Link from 'next/link'

import { Post } from '../lib/types'

import { MDArrowIcon } from './icons'

export type PostNavProps = {
  prevPost: Pick<Post, 'title' | 'slug'> | null
  nextPost: Pick<Post, 'title' | 'slug'> | null
}

const PostNav = ({ prevPost, nextPost }: PostNavProps) => {
  return (
    <nav className="post-nav">
      {prevPost && (
        <Link
          href={`/blog/${prevPost.slug}`}
          className="post-nav-prev"
          aria-label={`Go to previous blog post: ${prevPost.title}`}
        >
          <p className="post-nav-prev-text">
            <span className="subtitle">PREV</span>
            <span className="title">{prevPost.title}</span>
          </p>

          <span className="post-nav-prev-icon">
            <MDArrowIcon />
          </span>
        </Link>
      )}
      {nextPost && (
        <Link
          href={`/blog/${nextPost.slug}`}
          className="post-nav-next"
          aria-label={`Go to next blog post: ${nextPost.title}`}
        >
          <p className="post-nav-next-text">
            <span className="subtitle">NEXT</span>
            <span className="title">{nextPost.title}</span>
          </p>

          <span className="post-nav-next-icon">
            <MDArrowIcon />
          </span>
        </Link>
      )}
    </nav>
  )
}

export default PostNav
