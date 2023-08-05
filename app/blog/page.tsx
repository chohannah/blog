'use client'

// import type { Metadata } from 'next'
import { useEffect } from 'react'
import Balancer from 'react-wrap-balancer'
import Link from 'next/link'
import Image from 'next/image'
import { allBlogs } from '@/root/.contentlayer/generated'
import { motion } from 'framer-motion'

import { siteConfig } from '@/root/config'
import { CalendarIcon, ClockIcon } from '@/root/components/modules/icons'
import Tag from '@/root/components/modules/tag'
import { staggerHalf, fadeInHalf, fadeInUp } from '@/root/constants/animations'
import formatDate from '@/root/lib/formatDate'

// export const metadata: Metadata = {
//   title: 'blog',
//   description: 'thoughs on tech, mindfulness, design and more',
// }

export default function BlogPage() {
  const pageTitle = 'blog'

  useEffect(() => {
    document.title = `${pageTitle} | ${siteConfig.title}`
  }, [])

  return (
    <motion.section
      className="blog"
      variants={staggerHalf}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <motion.h1 className="blog-title" variants={fadeInHalf}>
              All Posts ({allBlogs.length})
            </motion.h1>

            <motion.section variants={staggerHalf}>
              {allBlogs
                .sort((a, b) => {
                  if (new Date(a.date) > new Date(b.date)) {
                    return -1
                  }

                  return 1
                })
                .map((post) => (
                  <motion.div key={post.slug} variants={fadeInUp}>
                    <Link
                      className="blog-list-item-wrapper"
                      href={`/blog/${post.slug}`}
                    >
                      <motion.article
                        className="blog-list-item"
                        variants={fadeInHalf}
                        initial="initial"
                        whileInView="animate"
                        exit="exit"
                        viewport={{ amount: 0.4, once: true }}
                      >
                        {post.image ? (
                          <div className="item-image">
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

                        <div className="item-content">
                          <div className="text-group">
                            <h2 className="title">
                              <Balancer>{post.title}</Balancer>
                            </h2>
                            <p className="desc">{post.summary}</p>
                          </div>

                          <div className="misc">
                            <div className="misc-date">
                              <span className="icon-wrapper" aria-hidden>
                                <CalendarIcon />
                              </span>
                              <time
                                className="date"
                                dateTime={post.date}
                                aria-label="date when this post is written"
                              >
                                {formatDate(post.date)}
                              </time>
                            </div>
                            <div className="misc-reading-time">
                              <span className="icon-wrapper" aria-hidden>
                                <ClockIcon />
                              </span>
                              <p
                                className="reading-time"
                                aria-label="expected minutes to read this post"
                              >
                                {post.readingMinutes} min.
                              </p>
                            </div>
                          </div>

                          <ul className="tags-list">
                            {post.tags &&
                              post.tags.map((tag, i) => (
                                <Tag key={i} tag={tag} />
                              ))}
                          </ul>
                        </div>
                      </motion.article>
                    </Link>
                  </motion.div>
                ))}
            </motion.section>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
