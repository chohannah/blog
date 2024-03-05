import { defineDocumentType, makeSource } from 'contentlayer/source-files'
import readingTime from 'reading-time'
import remarkGfm from 'remark-gfm'
import remarkMath from 'remark-math'
import rehypePrettyCode from 'rehype-pretty-code'
import rehypeSlug from 'rehype-slug'
import rehypeAutolinkHeadings from 'rehype-autolink-headings'
import rehypeKatex from 'rehype-katex'

/** @type {import('contentlayer/source-files').ComputedFields} */
const computedFields = {
  slug: {
    type: 'string',
    resolve: (doc) => doc._raw.flattenedPath,
  },
  readingMinutes: {
    type: 'string',
    resolve: (doc) => Math.ceil(readingTime(doc.body.raw).minutes),
  },
  // tweetIds: {
  //   type: 'array',
  //   resolve: (doc) => {
  //     const tweetMatches = doc.body.raw.match(/<StaticTweet\sid="[0-9]+"\s\/>/g)
  //     return tweetMatches?.map((tweet) => tweet.match(/[0-9]+/g)[0]) || []
  //   },
  // },
  structuredData: {
    type: 'object',
    resolve: (doc) => ({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: doc.title,
      datePublished: doc.date,
      dateModified: doc.date,
      description: doc.summary,
      image: doc.image
        ? `https://chohannah.com${doc.image}`
        : `https://chohannah.com/api/og?title=${doc.title}`,
      url: `https://chohannah.com/blog/${doc._raw.flattenedPath}`,
      author: {
        '@type': 'Person',
        name: 'Hannah Cho',
      },
    }),
  },
}

export const Blog = defineDocumentType(() => ({
  name: 'Blog',
  filePathPattern: `**/*.mdx`,
  contentType: 'mdx',
  fields: {
    title: {
      type: 'string',
      description: 'The title of the post',
      required: true,
    },
    summary: {
      type: 'string',
      description: 'The summary of the post',
      required: true,
    },
    date: {
      type: 'date',
      description: 'The date of the post',
      required: true,
    },
    image: {
      type: 'string',
      description: 'The cover image of the post',
      required: false,
    },
    tags: {
      type: 'list',
      require: true,
      of: {
        type: 'string',
      },
    },
    draft: {
      type: 'boolean',
    },
  },
  computedFields,
}))

export default makeSource({
  contentDirPath: 'documents/posts',
  documentTypes: [Blog],
  mdx: {
    remarkPlugins: [remarkGfm, remarkMath],
    rehypePlugins: [
      rehypeSlug,
      [
        rehypePrettyCode,
        {
          theme: 'one-dark-pro',
          onVisitLine(node) {
            // Prevent lines from collapsing in `display: grid` mode, and allow empty
            // lines to be copy/pasted
            if (node.children.length === 0) {
              node.children = [{ type: 'text', value: ' ' }]
            }
          },
          onVisitHighlightedLine(node) {
            node.properties.className.push('line--highlighted')
          },
          onVisitHighlightedWord(node) {
            node.properties.className = ['word--highlighted']
          },
        },
      ],
      [
        rehypeAutolinkHeadings,
        {
          properties: {
            className: ['anchor'],
          },
        },
      ],
      rehypeKatex,
    ],
  },
})
