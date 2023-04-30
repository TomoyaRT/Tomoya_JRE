import { useState } from 'react'

import { motion } from '@/plugins/FramerMotion'
import { range, delay } from '@/plugins/Lodash'
import { useAppDispatch } from '@/hooks/useStore'
import { setLoading } from '@/store/slices/loadingSlice'
import useViewport from '@/hooks/useViewport'

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

const PageLoading = () => {
  const [animation, setAnimation] = useState('startLoading')
  const dispatch = useAppDispatch()
  const { width, height } = useViewport()

  // 第一段動畫 -> 3.55
  // 間隔時間 -> 1
  // 第二段動畫 -> 3.55
  const lineNumber = 7
  const lineBgColor = '#000000'
  const lineWidth = width
  const lineHeight = height

  function onAnimationCompleteHandler(key: 'startLoading' | 'endLoading') {
    key === 'startLoading'
      ? delay(() => setAnimation('endLoading'), 1000)
      : dispatch(setLoading({ loading: false, type: 'Page' }))
  }

  return (
    <motion.div
      variants={staggerConfig}
      initial="initial"
      animate={animation === 'startLoading' ? 'startLoading' : 'endLoading'}
      onAnimationComplete={onAnimationCompleteHandler}
      className="fixed top-0 left-0 w-[100vw] h-[100vh] flex z-50"
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

export default PageLoading
