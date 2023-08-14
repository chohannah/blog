import type { Metadata } from 'next'

import { notFound } from 'next/navigation'
import { allBlogs } from '@/root/.contentlayer/generated'
import { MdxRenderer } from '@/root/components/mdx/blog-post-content'
import { siteConfig } from '@/root/config'

import PostNav from '@/root/components/layouts/post-nav'
import ScrollToTopButton from '@/root/components/modules/scroll-to-top-button'
import ReadingProgressBar from '@/root/components/mdx/reading-progress-bar'
import BlogPostHeader from '@/root/components/mdx/blog-post-header'
import Comments from '@/root/components/mdx/comments'

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

  const { title, date: publishedTime, summary: description, image, slug } = post
  const ogImage = image
    ? `${siteConfig.baseUrl}${image}`
    : `${siteConfig.baseUrl}/og?title=${title}`

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      publishedTime,
      url: `${siteConfig.baseUrl}/blog/${slug}`,
      images: [
        {
          url: ogImage,
        },
      ],
    },
  }
}

export default async function BlogPost({ params }: { params: any }) {
  const filteredPost = allBlogs.filter((post) => !post.draft)
  const post = filteredPost.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  const currentIndex = filteredPost.findIndex(
    (post) => post.slug === params.slug
  )
  const prevPost = filteredPost[currentIndex - 1]
  const nextPost = filteredPost[currentIndex + 1]

  return (
    <section className="blog-post">
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

      <Comments />

      <PostNav prevPost={prevPost} nextPost={nextPost} />

      <ScrollToTopButton />
    </section>
  )
}
