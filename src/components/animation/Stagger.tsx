import { motion } from '@/plugins/FramerMotion'
import { ReactNode } from 'react'

interface Props {
  stagger: number
  delay: number
  children: ReactNode
}

const Stagger = (props: Props) => {
  const { stagger, delay, children } = props

  const staggerConfig = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: stagger,
        delayChildren: delay,
      },
    },
  }

  return (
    <motion.div variants={staggerConfig} initial="hidden" animate="visible">
      {children}
    </motion.div>
  )
}

export default Stagger
