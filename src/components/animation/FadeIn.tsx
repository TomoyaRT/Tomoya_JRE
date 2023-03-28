import { motion } from 'framer-motion'
import { ReactNode } from 'react'

interface Props {
  children: ReactNode
}

const FadeIn = (props: Props) => {
  const { children } = props

  const fadeInConfig = {
    hidden: {
      x: 0,
      y: -100,
      opacity: 0,
    },
    visible: {
      x: 0,
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
      },
    },
  }

  return <motion.div variants={fadeInConfig}>{children}</motion.div>
}

export default FadeIn
