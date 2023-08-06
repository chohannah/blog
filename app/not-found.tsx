'use client'

import Link from 'next/link'
import Image from 'next/image'

import { motion } from 'framer-motion'
import { fadeInHalf, staggerHalf } from '../constants/animations'

import { notFoundGifUrlIdList } from '../constants/images'
import LinkOutlinedArrow from '../components/modules/link-outlined-arrow'

export default function NotFound() {
  const randomIndex = Math.floor(Math.random() * notFoundGifUrlIdList.length)
  const selectedGifUrl = `https://media.giphy.com/media/${notFoundGifUrlIdList[randomIndex].id}/giphy.gif`

  return (
    <motion.section
      className="not-found"
      variants={staggerHalf}
      initial="initial"
      animate="animate"
    >
      <div className="container">
        <div className="row">
          <div className="col-sm-4 col-md-6 col-lg-7 sm-hidden">
            <motion.div className="not-found-title" variants={fadeInHalf}>
              <h2 className="not-found-title-first">404</h2>
              <h3 className="not-found-title-second">Oops! Page not found.</h3>
            </motion.div>

            <motion.div className="not-found-guide" variants={fadeInHalf}>
              <h4 className="not-found-guide-title">How about:</h4>

              <ol className="not-found-guide-list">
                <li className="not-found-guide-list-item">
                  Double-check the URL for any typos or errors.
                </li>
                <li className="not-found-guide-list-item">
                  Return to the <Link href="/">Homepage</Link> to explore other
                  content.
                </li>
                <li className="not-found-guide-list-item">
                  Use the navigation menu above to find what you&apos;re looking
                  for.
                </li>
              </ol>

              <LinkOutlinedArrow
                className="not-found-button"
                href="/"
                aria-label="Go to home"
              >
                Back to home
              </LinkOutlinedArrow>
            </motion.div>
          </div>

          <div className="col-sm-4 col-md-6 col-lg-5">
            <motion.figure
              className="not-found-image-group"
              variants={fadeInHalf}
            >
              <div className="image">
                <Image
                  src={selectedGifUrl}
                  alt="error image"
                  className="giphy-embed"
                  fill
                  loading="lazy"
                />
              </div>
              <figcaption className="image-caption">
                <a href={notFoundGifUrlIdList[randomIndex].url}>via GIPHY</a>
              </figcaption>
            </motion.figure>
          </div>

          <div className="col-sm-4 col-md-6 col-lg-7 sm-only">
            <motion.div className="not-found-title" variants={fadeInHalf}>
              <h2 className="not-found-title-first">404</h2>
              <h3 className="not-found-title-second">Oops! Page not found.</h3>
            </motion.div>

            <motion.div className="not-found-guide" variants={fadeInHalf}>
              <h4 className="not-found-guide-title">How about:</h4>

              <ol className="not-found-guide-list">
                <li className="not-found-guide-list-item">
                  Double-check the URL for any typos or errors.
                </li>
                <li className="not-found-guide-list-item">
                  Return to the <Link href="/">Homepage</Link> to explore other
                  content.
                </li>
                <li className="not-found-guide-list-item">
                  Use the navigation menu above to find what you&apos;re looking
                  for.
                </li>
              </ol>

              <LinkOutlinedArrow
                className="not-found-button"
                href="/"
                target="_blank"
                aria-label="Go to home"
              >
                Back to home
              </LinkOutlinedArrow>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  )
}
