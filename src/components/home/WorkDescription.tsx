import { motion } from '@/plugins/FramerMotion'
import Tilt from 'react-parallax-tilt'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types/Animate'

type ItemProps = {
  index: number
  text: string
}
const Item = ({ text }: ItemProps) => {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.25 }}
      className="text-slate-500 text-[16px] mobile:text-[18px]  text-start hover:text-white hover:transition hover:duration-300 sm:text-[20px] xl:text-[18px]"
      variants={fadeIn(Direction.Right, Type.Spring, 0.1, 0.65, Ease.EaseOut)}
    >
      {text}
    </motion.div>
  )
}

type WorkDescriptionProps = {
  data: string[]
}
const WorkDescription = ({ data }: WorkDescriptionProps) => {
  return (
    <Tilt
      tiltReverse={true}
      scale={1.07}
      transitionSpeed={1000}
      perspective={500}
      tiltMaxAngleX={5}
      tiltMaxAngleY={5}
      className="w-full h-full select-none"
    >
      <div className="w-full h-full green-pink-gradient p-[2px] rounded-[20px] shadow-card">
        <div className="w-full h-full bg-tertiary rounded-[20px] p-4 flex flex-col justify-between">
          {data.map((text, index) => (
            <Item key={text} index={index} text={text} />
          ))}
        </div>
      </div>
    </Tilt>
  )
}

export default WorkDescription
