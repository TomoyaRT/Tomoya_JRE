import { motion } from '@/plugins/FramerMotion'
import Image from 'next/image'
import { useTranslation } from 'next-i18next'

import SectionHead from '@/components/home/SectionHead'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'
import SectionWrapper from '@/hoc/SectionWrapper'
import { Home } from '@/constants'

interface Props {
  index: number
  testimonial: string
  name: string
  designation: string
  company: string
  image: string
}

const Card = (props: Props) => {
  const { index, testimonial, name, designation, company, image } = props
  const { t } = useTranslation('Home')

  return (
    <motion.div
      variants={fadeIn(
        Direction.None,
        Type.Spring,
        index * 0.5,
        0.75,
        Ease.EaseOut
      )}
      className="bg-black-200 p-10 rounded-3xl w-full"
    >
      <p className="text-white font-black text-[48px]">&quot;</p>
      <div className="mt-1">
        <p className="text-white tracking-wider text-[18px]">
          {t(testimonial)}
        </p>
        <div className="mt-7 flex justify-between items-center gap-1">
          <div className="flex-1 flex flex-col">
            <p className="text-white font-medium text-[16px]">
              <span className="blue-text-gradient">&#64;</span> {t(name)}
            </p>
            <p className="mt-1 text-secondary text-[12px]">
              {t(designation)} of {t(company)}
            </p>
          </div>
          <Image
            src={image}
            alt={`feedback-by-${name}`}
            className="w-10 h-10 rounded-full object-cover"
            width={50}
            height={50}
          />
        </div>
      </div>
    </motion.div>
  )
}

const BookClub = () => {
  const { t } = useTranslation('Home')

  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className="padding bg-tertiary rounded-2xl min-h-[300px]">
        <SectionHead
          title={t(Home.BookClub.title)}
          subTitle={t(Home.BookClub.subTitle)}
          styleType="section"
        />
      </div>
      <div className="padding-x -mt-20 pb-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
        {Home.BookClub.thoughts.map((testimonial, index) => (
          <Card key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  )
}

export default SectionWrapper(BookClub, '')
