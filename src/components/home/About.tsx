import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import Image from 'next/image'

import { SectionWrapper } from '@/hoc'
import { about, aboutCards } from '@/constants/Text'
import SectionText from '@/components/home/SectionText'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'

interface CardProps {
  index: number
  title: string
  icon: string
}

const CardContent = ({ icon, title }: Omit<CardProps, 'index'>) => {
  return (
    <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
      <Image
        src={icon}
        alt={title}
        width={50}
        height={50}
        className="w-16 h-16 object-contain"
      />
      <h3 className="text-white text-[20px] font-bold text-center">{title}</h3>
    </div>
  )
}

const Card = (props: CardProps) => {
  const { index, title, icon } = props
  return (
    <>
      <Tilt tiltReverse={true} className="mx-auto max-w-[300px] w-full">
        <motion.div
          variants={fadeIn(
            Direction.Right,
            Type.Spring,
            0.5 * index,
            0.75,
            Ease.EaseOut
          )}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <CardContent title={title} icon={icon} />
        </motion.div>
      </Tilt>
    </>
  )
}

const About: React.FC = () => {
  return (
    <>
      <SectionText title={about[0]} subTitle={about[1]} />
      <motion.p
        variants={fadeIn(Direction.None, Type.Spring, 0.1, 1, Ease.EaseOut)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {about[2]}
      </motion.p>

      <div className="mt-20 grid mobile:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {aboutCards.map((service, index) => (
          <Card key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
