import { Variants } from 'framer-motion'

export const easeInOutQuart = [0.76, 0, 0.24, 1]
export const easeInQuart = [0.5, 0, 0.75, 0]
export const easeOutQuart = [0.25, 1, 0.5, 1]

export const staggerSecond: Variants = {
  animate: { transition: { staggerChildren: 0.4 } },
}

export const staggerFirst: Variants = {
  animate: { transition: { staggerChildren: 0.2 } },
}

export const staggerHalf: Variants = {
  animate: { transition: { staggerChildren: 0.1 } },
}

export const staggerImmediate: Variants = {
  animate: { transition: { staggerChildren: 0.02 } },
}

export const fadeInHalf: Variants = {
  initial: {
    opacity: 0.4,
    transition: { duration: 0.4, ease: easeInOutQuart },
    willChange: 'opacity',
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.4, ease: easeInOutQuart },
    willChange: 'opacity',
  },
  exit: {
    opacity: 0.2,
    transition: { duration: 0.4, ease: easeInOutQuart },
    willChange: 'opacity',
  },
}

export const fadeInFull: Variants = {
  initial: {
    opacity: 0,
    transition: { duration: 0.8, ease: easeInOutQuart },
    willChange: 'opacity',
  },
  animate: {
    opacity: 1,
    transition: { duration: 0.8, ease: easeInOutQuart },
    willChange: 'opacity',
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.8, ease: easeInOutQuart },
    willChange: 'opacity',
  },
}

export const fadeInUp: Variants = {
  initial: {
    opacity: 0,
    y: 36,
    transition: { duration: 0.4, ease: easeInQuart },
    willChange: 'opacity, transform',
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: easeInQuart },
    willChange: 'opacity, transform',
  },
  exit: {
    opacity: 0,
    y: 36,
    transition: { duration: 0.4, ease: easeInQuart },
    willChange: 'opacity, transform',
  },
}
