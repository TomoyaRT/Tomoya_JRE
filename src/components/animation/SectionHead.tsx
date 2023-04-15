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
  const getChar = (char: string) => (char === ' ' ? '\u00a0' : char)
  const useStyles =
    styleType === 'hero'
      ? ['hero-title-text', 'hero-sub-title-text']
      : ['section-title-text', 'section-sub-title-text']

  return (
    <motion.div
      className="select-none"
      variants={fadeIn(Direction.Down, Type.Spring, 0, 1, Ease.EaseOut)}
    >
      <p className={useStyles[1]}>
        {subTitleSplit.map((char, idx) => (
          <TextSpan key={idx}>{getChar(char)}</TextSpan>
        ))}
      </p>
      <h2 className={useStyles[0]}>
        {titleSplit.map((char, idx) => (
          <TextSpan key={idx}>{getChar(char)}</TextSpan>
        ))}
      </h2>
    </motion.div>
  )
}

export default SectionHead
