'use client'

// import type { Metadata } from 'next'
import { useEffect } from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'
import Balancer from 'react-wrap-balancer'

import { siteConfig } from '@/root/config'
import {
  staggerHalf,
  fadeInHalf,
  fadeInFull,
  fadeInUp,
} from '@/root/constants/animations'

import ScrollToTopButton from '@/root/components/modules/scroll-to-top-button'

// export const metadata: Metadata = {
//   title: 'about',
//   description: `about ${siteConfig.title}`,
// }

export default function AboutPage() {
  const pageTitle = 'about'

  useEffect(() => {
    document.title = `${pageTitle} | ${siteConfig.title}`
  }, [])

  return (
    <motion.section
      className="about"
      variants={staggerHalf}
      initial="initial"
      animate="animate"
      exit="exit"
    >
      <h1 className="srOnly">about page</h1>

      <motion.article className="about-intro" variants={fadeInHalf}>
        <h2 className="about-intro-title">
          <Balancer>About Yejin</Balancer>
        </h2>
        <p>
          Hi, I’m a frontend software engineer who strives to create intuitive,
          aesthetic, and inclusive products.
        </p>
        <p>
          I believe in the credo “Weniger, Aber Besser” (less, but better),
          which inspires me to simplify my life and focus on what’s truly
          important.
        </p>
        <p>
          Although I’m not sure if I would define myself as a minimalist, I find
          that simplifying my life helps me realise my priorities. My main
          focuses in current life are technology, learning, flexibility,
          connectivity, and kombucha.
        </p>
      </motion.article>

      <motion.div className="about-image" variants={fadeInFull}>
        <Image
          fill
          src="./images/about-image.jpg"
          alt="yejin is walking along river"
          // placeholder="blur"
          priority
          // blurDataURL="data:image/jpeg;base64,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"
        />
      </motion.div>

      <motion.article className="about-details" variants={fadeInUp}>
        <motion.div
          variants={fadeInFull}
          initial="initial"
          whileInView="animate"
          exit="exit"
          viewport={{ amount: 0.4, once: true }}
        >
          <h2 className="about-details-title">
            <Balancer>Passions, Experience, Education</Balancer>
          </h2>
          <p>
            I’m passionate about creative fields, such as design, music,
            photography, and coding — for sure.
          </p>
          <p>
            In fact, previous work experience as a User Experience Designer at
            TEDxSeoul and Marketing Intern at BMW led me to pursue current
            career path as a frontend software engineer.
          </p>
          <p>
            I genuinely love the web and am fascinated by its endless
            possibilities, especially when witnessing how people from all over
            the world can connect and solve problems together. <br />
            Also, majoring in Computer Science at Korean National Open
            University(KNOU) helps me to understand more about the web and
            computer in general — although the more I study the more I realise
            that there is still so much to learn.
          </p>
          <p>
            Yes, it’s frustrating at times, I find it exciting most of the time
            as I enjoy learning.
          </p>
        </motion.div>
      </motion.article>

      <motion.article className="about-values" variants={fadeInUp}>
        <motion.h2
          className="about-values-title"
          variants={fadeInFull}
          initial="initial"
          whileInView="animate"
          exit="exit"
        >
          <Balancer>Pursuing Values When Working</Balancer>
        </motion.h2>

        <dl className="about-values-list">
          <motion.div
            className="about-values-list-item"
            variants={fadeInFull}
            initial="initial"
            whileInView="animate"
            exit="exit"
          >
            <dt>
              <sup>01</sup>Growth Mindset
            </dt>
            <dd>
              I believe that talents can be developed through hard work, good
              strategies, and input from others.
            </dd>
            <dd>
              At the same time, I am aware that we all have fixed mindsets that
              can trigger feelings of insecurity or defensiveness when faced
              with challenges or criticism. By acknowledging this fact, I strive
              to learn from these experiences and grow as a result.
            </dd>
          </motion.div>

          <motion.div
            className="about-values-list-item"
            variants={fadeInFull}
            initial="initial"
            whileInView="animate"
            exit="exit"
          >
            <dt>
              <sup>02</sup>
              Abundance Mindset
            </dt>
            <dd>
              Before beginning work on a project, I always think about what I
              can contribute and how I can grow along with the organisation.
            </dd>
            <dd>
              I feel empowered and engaged when I am able to share my knowledge
              and experience with others.
            </dd>
          </motion.div>

          <motion.div
            className="about-values-list-item"
            variants={fadeInFull}
            initial="initial"
            whileInView="animate"
            exit="exit"
          >
            <dt>
              <sup>03</sup>
              Respect
            </dt>
            <dd>
              I believe that it’s important to treat colleagues with respect,
              especially when giving feedback.
            </dd>
            <dd>
              I also believe that everyone has something to learn from others,
              and I try to actively listen when communicating.
            </dd>
          </motion.div>
        </dl>
      </motion.article>

      <ScrollToTopButton />
    </motion.section>
  )
}
