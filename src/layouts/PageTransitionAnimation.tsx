import { motion } from 'framer-motion'
import { useDimensions } from '@/hooks/useDimensions'
import { useRef, useState } from 'react'
import { useAppDispatch } from '@/hooks/useStore'
import { updateTransitionComplete } from '@/store/slices/pageTransitionSlice'
import {
  divide as _divide,
  ceil as _ceil,
  flow as _flow,
  range as _range,
} from 'lodash-es'

// TODO 寫出這傢伙 使用 Framer Motion 搭配 xxxx.module.css
// https://codepen.io/alphardex/pen/KKwZwqr
// https://codepen.io/mitori/details/zLKZVZ

// TODO 1. 停止使用者滾動行為
// TODO 2. 監測目前的視窗高度
// TODO 3. 開始動畫

const staggerConfig = {
  initial: {},
  startLoading: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
      ease: 'circOut',
    },
  },
  endLoading: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.2,
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
      duration: 0.6,
    },
  },
  endLoading: {
    y: '100%',
    transition: {
      duration: 0.4,
    },
  },
}

const PageTransitionAnimation = () => {
  const dispatch = useAppDispatch()
  const pageContainerRef = useRef(null)
  const [isLoading, setIsLoading] = useState(false)
  const { width, height } = useDimensions(pageContainerRef)
  const getWidthFlow = _flow(_divide, _ceil)

  const lineNumber = 7
  const lineBgColor = '#000000'
  const lineWidth = `${getWidthFlow(width, lineNumber)}px`
  const lineHeight = `${height}px`

  return (
    <motion.div
      ref={pageContainerRef}
      variants={staggerConfig}
      initial="initial"
      animate={isLoading ? 'endLoading' : 'startLoading'}
      onAnimationStart={(type) => {
        if (type === 'endLoading') return
        dispatch(updateTransitionComplete(false))
      }}
      onAnimationComplete={(type) => {
        setIsLoading(true)
        if (type === 'startLoading') return
        dispatch(updateTransitionComplete(true))
      }}
      className="absolute top-0 left-0 w-[100vw] h-[100vh] z-50 flex"
    >
      {_range(lineNumber).map((i) => {
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

export default PageTransitionAnimation
