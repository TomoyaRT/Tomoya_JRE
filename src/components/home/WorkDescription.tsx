import { motion } from '@/plugins/FramerMotion'
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
      className="text-slate-500 text-[18px] text-start hover:text-white hover:transition hover:duration-300"
      variants={fadeIn(
        Direction.Down,
        Type.Spring,
        index * 0.3,
        0.8,
        Ease.EaseInOut
      )}
    >
      {text}
    </motion.div>
  )
}

type DisplayPanelProps = {
  data: string[]
}
const DisplayPanel = ({ data }: DisplayPanelProps) => {
  return (
    <Tilt
      tiltReverse={true}
      scale={1.1}
      transitionSpeed={1000}
      perspective={500}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className="w-full h-full select-none"
    >
      <div className="w-full h-full green-pink-gradient p-[2px] rounded-[20px] shadow-card">
        <div className="w-full h-full bg-tertiary rounded-[20px] p-6 flex flex-col justify-between">
          {data.map((text, index) => (
            <Item key={text} index={index} text={text} />
          ))}
        </div>
      </div>
    </Tilt>
  )
}

export default DisplayPanel
