import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'

interface Props {
  title: string
  subTitle: string
}

const SectionText: React.FC<Props> = (props) => {
  const { title, subTitle } = props

  return (
    <motion.div
      variants={fadeIn(Direction.Up, Type.Spring, 0, 1.25, Ease.Linear)}
    >
      <p className="hero-head-text">{title}</p>
      <h2 className="hero-sub-text">{subTitle}</h2>
    </motion.div>
  )
}

export default SectionText
