import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allBlogs } from '@/root/.contentlayer/generated'
import { Mdx } from '@/root/components/mdx'

export async function generateStaticParams() {
  return allBlogs.map((post) => ({
    slug: post.slug,
  }))
}

export async function generateMetadata({
  params,
}): Promise<Metadata | undefined> {
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) {
    return
  }

  const { title, date: publishedTime, summary: description, image, slug } = post

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

export default async function BlogList({ params }) {
  const post = allBlogs.find((post) => post.slug === params.slug)

  if (!post) {
    notFound()
  }

  return (
    <section>
      <h1>{post.title}</h1>
      <p>{post.date}</p>
      <p>{post.summary}</p>
      <Mdx code={post.body.code} />
    </section>
  )
}
