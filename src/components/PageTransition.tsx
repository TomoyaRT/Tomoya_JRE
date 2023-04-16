import { motion } from '@/plugins/FramerMotion'
import { useState } from 'react'
import { range, delay } from '@/plugins/Lodash'

const staggerConfig = {
  initial: {},
  startLoading: {
    transition: {
      staggerChildren: 0.05,
      ease: 'circOut',
    },
  },
  endLoading: {
    transition: {
      staggerChildren: 0.05,
      ease: 'circOut',
    },
  },
}
const fadeInConfig = {
  initial: {
    y: '-100%',
  },
  startLoading: {
    y: '0%',
    transition: {
      duration: 0.5,
    },
  },
  endLoading: {
    y: '100%',
    transition: {
      duration: 0.5,
    },
  },
}

const PageTransition = () => {
  const [isLoading, setIsLoading] = useState(false)

  // 第一段動畫時間 -> (7*0.05) + 0.5 = 0.85
  // delay -> 0.3
  // 第二段動畫時間 -> (7*0.05) + 0.5 = 0.85
  const lineNumber = 7
  const lineBgColor = '#000000'
  const lineWidth = '100vw'
  const lineHeight = '100vh'

  return (
    <motion.div
      variants={staggerConfig}
      initial="initial"
      animate={isLoading ? 'endLoading' : 'startLoading'}
      onAnimationComplete={() => delay(() => setIsLoading(true), 300)}
      className={`fixed top-0 left-0 w-[100vw] h-[100vh] flex z-50`}
    >
      {range(lineNumber).map((i) => {
        return (
          <motion.div
            key={i}
            style={{
              width: lineWidth,
              height: lineHeight,
              backgroundColor: lineBgColor,
            }}
            variants={fadeInConfig}
          ></motion.div>
        )
      })}
    </motion.div>
  )
}

export default PageTransition
