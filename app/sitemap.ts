import { allBlogs } from 'contentlayer/generated'

export default async function sitemap() {
  const blogs = allBlogs.map((post) => ({
    url: `http://localhost:3000/blog/${post.slug}`,
    lastModified: post.date,
  }))

  const routes = ['', '/about', '/blog', '/links'].map((route) => ({
    url: `http://localhost:3000${route}`,
    lastModified: new Date().toISOString().split('T')[0],
  }))

  return [...routes, ...blogs]
}
