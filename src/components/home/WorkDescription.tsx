import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'

type ItemProps = {
  index: number
  text: string
}
const Item = ({ index, text }: ItemProps) => {
  return (
    <motion.div
      className="text-white text-[18px] text-start"
      variants={fadeIn(
        Direction.Down,
        Type.Spring,
        index * 0.3,
        0.8,
        Ease.EaseInOut
      )}
    >
      {index}: {text}
    </motion.div>
  )
}

type DisplayPanelProps = {
  data: string[]
}
const DisplayPanel = ({ data }: DisplayPanelProps) => {
  return (
    <Tilt tiltReverse={true} className="w-full h-full">
      <div className="w-full h-full green-pink-gradient p-[2px] rounded-[20px] shadow-card">
        <div className="w-full h-full bg-tertiary rounded-[20px] p-4 flex flex-col">
          {data.map((text, index) => (
            <Item key={text} index={index} text={text} />
          ))}
        </div>
      </div>
    </Tilt>
  )
}

export default DisplayPanel
