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
            <span className="icon-wrapper">
              <CalendarIcon />
            </span>
            <time className="date" dateTime={date}>
              {date.slice(0, 10)}
            </time>
          </div>

          <div className="misc-reading-time">
            <span className="icon-wrapper">
              <ClockIcon />
            </span>
            <p className="reading-time">{readingMinutes} min.</p>
          </div>
        </div>

        <ul className="tags-list">
          {tags && tags.map((tag, i) => <Tag key={i} tag={tag} />)}
        </ul>
      </motion.div>
    </motion.article>
  )
}

export default BlogPostHeader
