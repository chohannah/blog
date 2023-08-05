'use client'

import Image from 'next/image'
import Balancer from 'react-wrap-balancer'
import { motion } from 'framer-motion'

import { CalendarIcon, ClockIcon } from '@/root/components/modules/icons'
import Tag from '@/root/components/modules/tag'
import {
  staggerHalf,
  fadeInHalf,
  fadeInUp,
  fadeInFull,
} from '@/root/constants/animations'
import formatDate from '@/root/lib/formatDate'

interface BlogPostHeaderProps {
  title: string
  summary: string
  image?: string
  date: string
  readingMinutes: string
  tags?: string[]
}

const BlogPostHeader: React.FC<BlogPostHeaderProps> = ({
  title,
  summary,
  image,
  date,
  readingMinutes,
  tags,
}) => {
  return (
    <motion.article
      className="blog-post-header"
      variants={staggerHalf}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-4">
            <motion.h1 className="title" variants={fadeInHalf}>
              <Balancer>{title}</Balancer>
            </motion.h1>

            <motion.p className="desc" variants={fadeInHalf}>
              {summary}
            </motion.p>

            {image ? (
              <motion.div className="post-image" variants={fadeInFull}>
                <Image
                  layout="responsive"
                  width={272}
                  height={204}
                  src={`${image}`}
                  alt={`${title}'s thumbnail image`}
                  placeholder="blur"
                  blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mMMngkAAUUA7kMdgcIAAAAASUVORK5CYII="
                  loading="lazy"
                />
              </motion.div>
            ) : null}

            <motion.div className="header-bottom" variants={fadeInUp}>
              <div className="misc">
                <div className="misc-date">
                  <span className="icon-wrapper" aria-hidden>
                    <CalendarIcon />
                  </span>
                  <time
                    className="date"
                    dateTime={date}
                    aria-label="date when this post is written"
                  >
                    {formatDate(date)}
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
                    {readingMinutes} min.
                  </p>
                </div>
              </div>

              <ul className="tags-list">
                {tags && tags.map((tag, i) => <Tag key={i} tag={tag} />)}
              </ul>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.article>
  )
}

export default BlogPostHeader
