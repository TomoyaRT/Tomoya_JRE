import Tilt from 'react-parallax-tilt'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import { motion } from '@/plugins/FramerMotion'
import SectionWrapper from '@/hoc/SectionWrapper'
import SectionHead from '@/components/animation/SectionHead'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types/Animate'
import { About as AboutText, AboutCards } from '@/constants/Home'

interface CardProps {
  index: number
  title: string
  icon: string
  description: string[]
}

const CardContent = ({
  icon,
  title,
  description,
}: Omit<CardProps, 'index'>) => {
  const { t } = useTranslation('Home')

  const containerHoverStyles =
    'group hover:bg-primary hover:transition hover:ease-in hover:duration-300 active:bg-primary active:transition active:ease-in active:duration-300'
  const imgHoverStyles =
    'group-hover:opacity-0 group-hover:-z-10 group-hover:ease-in group-hover:transition group-hover:duration-300 group-active:opacity-0 group-active:-z-10 group-active:ease-in group-active:transition group-active:duration-300'
  const h3HoverStyles =
    'group-hover:opacity-0 group-hover:-z-10 group-hover:ease-in group-hover:transition group-hover:duration-300'
  const skillsHoverStyles =
    'group-hover:opacity-100 group-hover:z-10 group-hover:ease-in group-hover:transition group-hover:duration-300'

  return (
    <div
      className={`${containerHoverStyles} bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col cursor-move select-none`}
    >
      <Image
        src={icon}
        alt={title}
        width={50}
        height={50}
        className={`relative w-16 h-16 object-contain ${imgHoverStyles}`}
      />
      <h3
        className={`relative text-white text-[20px] font-bold text-center ${h3HoverStyles}`}
      >
        {t(title)}
      </h3>
      <ul
        className={`absolute text-white text-[20px] font-bold text-center opacity-0 -z-10 ${skillsHoverStyles}`}
      >
        {description.map((item: string) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </div>
  )
}

const Card = (props: CardProps) => {
  const { index, title, icon, description } = props
  return (
    <>
      <Tilt tiltReverse={true} className="mx-auto max-w-[350px] w-full">
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
          <CardContent title={title} icon={icon} description={description} />
        </motion.div>
      </Tilt>
    </>
  )
}

const About: React.FC = () => {
  const { t } = useTranslation('Home')

  return (
    <>
      <SectionHead
        title={t(AboutText.title)}
        subTitle={t(AboutText.subTitle)}
        styleType="hero"
      />
      <motion.p
        variants={fadeIn(Direction.None, Type.Spring, 0.1, 1, Ease.EaseOut)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {t(AboutText.description)}
      </motion.p>

      <div className="mt-20 grid mobile:grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
        {AboutCards.map((item, index) => (
          <Card key={item.title} index={index} {...item} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
