'use client'

import { motion } from 'framer-motion'
import { fadeInHalf, staggerHalf } from '../constants/animations'
import Balancer from 'react-wrap-balancer'

import { homeBody } from '../lib/page-content'
import LinkOutlinedArrow from '../components/modules/link-outlined-arrow'

const WavingHand = () => (
  <motion.div
    style={{
      display: 'inline-block',
      top: '6px',
      left: '-2px',
    }}
    animate={{ rotate: 20 }}
    transition={{
      repeat: 7,
      repeatType: 'mirror',
      duration: 0.4,
      delay: 0.8,
      ease: 'easeInOut',
      type: 'tween',
    }}
  >
    👋
  </motion.div>
)

export default function HomePage() {
  return (
    <motion.section
      className="home"
      variants={staggerHalf}
      initial="initial"
      animate="animate"
    >
      <div className="container">
        <div className="row">
          <div className="col-md-1 col-lg-2" aria-hidden></div>
          <div className="col-sm-4 col-md-10 col-lg-8">
            <div className="home-text">
              <motion.h2 className="home-title" variants={fadeInHalf}>
                <Balancer ratio={0.4}>
                  Nice virtually meeting you <WavingHand />
                </Balancer>
              </motion.h2>

              <motion.div className="home-content" variants={fadeInHalf}>
                {' '}
                <p>
                  A Software Engineer(Frontend) strives to make intuitive,
                  aesthetic, and inclusive products.
                </p>
                <p>
                  Currently going through Senior year of Computer Science major
                  and looking for opportunities.
                </p>
                <p>Previously a User Experience Designer.</p>
              </motion.div>
            </div>

            <motion.button variants={fadeInHalf} type="button">
              <LinkOutlinedArrow href="/about" aria-label="Go to about page">
                more about me
              </LinkOutlinedArrow>
            </motion.button>
          </div>
          <div className="col-md-1 col-lg-2" aria-hidden></div>
        </div>
      </div>
    </motion.section>
  )
}
