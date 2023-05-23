import type { Metadata } from 'next'
import Link from 'next/link'
import Balancer from 'react-wrap-balancer'
import { allBlogs } from '@/root/.contentlayer/generated'

export const metadata: Metadata = {
  title: "blog | yejin's space",
  description: 'thoughs on tech, mindfulness, design and more',
}

export default function BlogPage() {
  return (
    <section>
      <h1>blog</h1>
      {allBlogs
        .sort((a, b) => {
          if (new Date(a.date) > new Date(b.date)) {
            return -1
          }

          return 1
        })
        .map((post) => (
          <Link key={post.slug} href={`/blog/${post.slug}`}>
            <article>
              <h2>
                <Balancer>{post.title}</Balancer>
              </h2>
            </article>
          </Link>
        ))}
    </section>
  )
}
