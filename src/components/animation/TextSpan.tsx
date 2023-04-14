import type { ReactNode } from 'react'
import { useState } from 'react'
import { motion, useAnimationControls } from '@/plugins/FramerMotion'

type TextSpanProps = {
  children: ReactNode
}

const transform = [
  'scale3d(1, 1, 1)',
  'scale3d(1.4, .55, 1)',
  'scale3d(.75, 1.25, 1)',
  'scale3d(1.25, .85, 1)',
  'scale3d(.9, 1.05, 1)',
  'scale3d(1, 1, 1)',
]
const times = [0, 0.4, 0.6, 0.7, 0.8, 0.9]

const TextSpan = ({ children }: TextSpanProps) => {
  const controls = useAnimationControls()
  const [isPlaying, setIsPlaying] = useState(false)

  const mouseOverHandler = () => {
    if (isPlaying) return
    controls.start({
      transform,
      transition: { times, duration: 0.8 },
    })
    setIsPlaying(true)
  }

  return (
    <motion.span
      className="inline-block cursor-pointer"
      animate={controls}
      onMouseOver={() => mouseOverHandler()}
      onAnimationComplete={() => setIsPlaying(false)}
    >
      {children}
    </motion.span>
  )
}

export default TextSpan
