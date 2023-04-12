import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'

interface Props {
  title: string
  subTitle: string
  styleType: string
}

const SectionHead = (props: Props) => {
  const { title, subTitle, styleType } = props

  return (
    <motion.div
      variants={fadeIn(Direction.Down, Type.Spring, 0, 1, Ease.EaseOut)}
    >
      <h2 className={`${styleType}-sub-text`}>{subTitle}</h2>
      <p className={`${styleType}-head-text`}>{title}</p>
    </motion.div>
  )
}

export default SectionHead
