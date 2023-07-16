import type { Metadata } from 'next'
import Image from 'next/image'
import { notFound } from 'next/navigation'
import { allBlogs } from '@/root/.contentlayer/generated'
import { MdxRenderer } from '@/root/components/blog-post-content'
import Balancer from 'react-wrap-balancer'

import { CalendarIcon, ClockIcon } from '@/root/components/icons'
import Tag from '@/root/components/tag'
import PostNav from '@/root/components/post-nav'

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}: {
  params: any
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) {
    return
  }

  const { title, date: publishedTime, summary: description } = post

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      publishedTime,
      // url: `https://joyejin.com/blog/${slug}`,
    },
  }
}

export default async function BlogList({ params }: { params: any }) {
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const currentIndex = allBlogs.findIndex((p) => p.slug === params.slug)
  const prevPost = allBlogs[currentIndex - 1]
  const nextPost = allBlogs[currentIndex + 1]

  return (
    <section className="blog-post">
      <article className="blog-post-header">
        <h1 className="title">
          <Balancer>{post.title}</Balancer>
        </h1>

        <p className="desc">{post.summary}</p>

        <div className="post-image">
          <Image
            layout="responsive"
            width={272}
            height={204}
            src={`${post.image}`}
            alt={`${post.title}'s thumbnail image`}
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMMngkAAUUA7kMdgcIAAAAASUVORK5CYII="
            loading="lazy"
          />
        </div>

        <div className="misc">
          <div className="misc-date">
            <span className="icon-wrapper">
              <CalendarIcon />
            </span>
            <time className="date" dateTime={post.date}>
              {post.date.slice(0, 10)}
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
          {post.tags && post.tags.map((tag, i) => <Tag key={i} tag={tag} />)}
        </ul>
      </article>

      <MdxRenderer code={post.body.code} />

      <PostNav prevPost={prevPost} nextPost={nextPost} />
    </section>
  )
}
