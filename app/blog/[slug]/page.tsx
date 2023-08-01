import type { Metadata } from 'next'

import { notFound } from 'next/navigation'
import { allBlogs } from '@/root/.contentlayer/generated'
import { MdxRenderer } from '@/root/components/mdx/blog-post-content'

import PostNav from '@/root/components/layouts/post-nav'
import ScrollToTopButton from '@/root/components/modules/scroll-to-top-button'
import ReadingProgressBar from '@/root/components/mdx/reading-progress-bar'
import BlogPostHeader from '@/root/components/mdx/blog-post-header'

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

export default async function BlogPost({ params }: { params: any }) {
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const currentIndex = allBlogs.findIndex((post) => post.slug === params.slug)
  const prevPost = allBlogs[currentIndex - 1]
  const nextPost = allBlogs[currentIndex + 1]

  return (
    <section className="blog-post transition-fade">
      <ReadingProgressBar />

      <BlogPostHeader
        title={post.title}
        summary={post.summary}
        image={post.image}
        date={post.date}
        tags={post.tags}
        readingMinutes={post.readingMinutes}
      />

      <MdxRenderer code={post.body.code} />

      <PostNav prevPost={prevPost} nextPost={nextPost} />

      <ScrollToTopButton />
    </section>
  )
}
