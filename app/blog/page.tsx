import type { Metadata } from 'next'
import Balancer from 'react-wrap-balancer'
import Link from 'next/link'
import Image from 'next/image'
import { allBlogs } from '@/root/.contentlayer/generated'

import { CalendarIcon, ClockIcon } from '@/root/components/modules/icons'
import Tag from '@/root/components/modules/tag'

export const metadata: Metadata = {
  title: 'blog | joyejin',
  description: 'thoughs on tech, mindfulness, design and more',
}

const BlogPage = () => {
  return (
    <section className="blog">
      <h1 className="blog-title">All Posts ({allBlogs.length})</h1>

      {allBlogs
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1
          }

          return 1
        })
        .map((post) => (
          <Link
            className="blog-list-post-wrapper"
            key={post.slug}
            href={`/blog/${post.slug}`}
          >
            <article className="blog-list-post">
              {post.image ? (
                <div className="post-image">
                  <Image
                    fill
                    src={`${post.image}`}
                    alt={`${post.title}'s thumbnail image`}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMMngkAAUUA7kMdgcIAAAAASUVORK5CYII="
                    loading="lazy"
                  />
                </div>
              ) : null}

              <div className="post-content">
                <div className="text-group">
                  <h2 className="title">
                    <Balancer>{post.title}</Balancer>
                  </h2>
                  <p className="desc">{post.summary}</p>
                </div>

                <div className="misc">
                  <div className="misc-date">
                    <span className="icon-wrapper">
                      <CalendarIcon />
                    </span>
                    <time className="date" dateTime={post.date}>
                      2023-05-23
                    </time>
                  </div>
                  <div className="misc-reading-time">
                    <span className="icon-wrapper">
                      <ClockIcon />
                    </span>
                    <p className="reading-time">{post.readingMinutes} min.</p>
                  </div>
                </div>

                <ul className="tags-list">
                  {post.tags &&
                    post.tags.map((tag, i) => <Tag key={i} tag={tag} />)}
                </ul>
              </div>
            </article>
          </Link>
        ))}
    </section>
  )
}
export default BlogPage
