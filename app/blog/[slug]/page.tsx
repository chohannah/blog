import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { allBlogs } from '@/root/.contentlayer/generated'

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

  const { title } = post

  return {
    title,
    openGraph: {
      title,
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
    </section>
  )
}
