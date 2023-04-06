import { Transition, Animate } from '@/types'

const mobileNavbar = {
  // menu button
  buttonVariants: {
    topLine: {
      closed: { d: 'M 2 2.5 L 20 2.5' },
      open: { d: 'M 3 16.5 L 17 2.5' },
    },
    centerLine: {
      closed: { opacity: 1 },
      open: { opacity: 0 },
    },
    bottomLine: {
      closed: { d: 'M 2 16.346 L 20 16.346' },
      open: { d: 'M 3 2.5 L 17 16.346' },
    },
  },
  // circle container
  circleVariants: {
    open: (height = 1000) => ({
      clipPath: `circle(${height * 1.3}px at calc(100% - 52px) 42.5px)`,
      transition: {
        type: 'spring',
        stiffness: 20,
        restDelta: 2,
      },
    }),
    closed: {
      clipPath: 'circle(30px at calc(100% - 52px) 42.5px)',
      transition: {
        delay: 0.5,
        type: 'spring',
        stiffness: 400,
        damping: 40,
      },
    },
  },
  // navigation link list <ul>
  ulVariants: {
    open: {
      transition: { staggerChildren: 0.07, delayChildren: 0.2 },
    },
    closed: {
      transition: { staggerChildren: 0.05, staggerDirection: -1 },
    },
  },
  // navigation link item <li>
  liVariants: {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  },
}

interface ScrollDownButton {
  animate: Animate
  transition: Transition
}
const scrollDownButton: ScrollDownButton = {
  animate: {
    y: [0, 24, 0],
  },
  transition: {
    duration: 1.5,
    repeat: Infinity,
    repeatType: 'loop',
  },
}

export { mobileNavbar, scrollDownButton }
