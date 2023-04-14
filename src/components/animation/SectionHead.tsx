import { motion } from '@/plugins/FramerMotion'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'
import TextSpan from '@/components/animation/TextSpan'

interface Props {
  title: string
  subTitle: string
  styleType: string
}

const SectionHead = (props: Props) => {
  const { title, subTitle, styleType } = props
  const subTitleSplit = subTitle.split('')
  const titleSplit = title.split('')

  return (
    <motion.div
      variants={fadeIn(Direction.Down, Type.Spring, 0, 1, Ease.EaseOut)}
    >
      <p className={`${styleType}-sub-text`}>
        {subTitleSplit.map((text) => (
          <TextSpan key={text}>{text}</TextSpan>
        ))}
      </p>
      <h2 className={`${styleType}-head-text`}>
        {titleSplit.map((text) => (
          <TextSpan key={text}>{text}</TextSpan>
        ))}
      </h2>
    </motion.div>
  )
}

export default SectionHead
