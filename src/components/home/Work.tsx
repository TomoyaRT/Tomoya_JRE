import SectionWrapper from '@/hoc/SectionWrapper'
import Stagger from '@/components/animation/Stagger'
import { motion } from 'framer-motion'
import Tilt from 'react-parallax-tilt'
import CardsStack from '@/components/CardsStack'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'

const Item = ({ index, text }) => {
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

const itemData = [
  '第一點哦 聽清楚了1',
  '第一點哦 聽清楚了2',
  '第一點哦 聽清楚了3',
  '第一點哦 聽清楚了4',
  '第一點哦 聽清楚了5',
]

const Card = () => {
  return (
    <>
      <Tilt tiltReverse={true} className="w-[400px] h-[400px]">
        <div className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card">
          <div className="bg-tertiary rounded-[20px] py-5 px-12 h-[400px] flex justify-evenly items-center flex-col">
            {itemData.map((text, index) => (
              <Item key={text} index={index} text={text} />
            ))}
          </div>
        </div>
      </Tilt>
    </>
  )
}

const CardsStackDescription = () => {
  return (
    <div className="mt-20 flex justify-between items-center w-full">
      <Card />
      <CardsStack />
    </div>
  )
}

const Work: React.FC = () => {
  return (
    <div className="flex justify-center items-center">
      <CardsStackDescription />
    </div>
  )
}

export default SectionWrapper(Work, '')
