import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Image from 'next/image'
import { motion } from 'framer-motion'
import { useTranslation } from 'next-i18next'

import SectionWrapper from '@/hoc/SectionWrapper'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'
import { Home } from '@/constants'

interface JourneyCardProps {
  title: string
  company_name: string
  icon: string
  iconBg: string
  date: string
  points: string[]
}

const Icon = ({
  icon,
  company_name,
}: Pick<JourneyCardProps, 'icon' | 'company_name'>) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <Image
        width={50}
        height={50}
        src={icon}
        alt={company_name}
        className="w-[60%] h-[60%] object-contain"
      />
    </div>
  )
}

const JourneyCard = (props: JourneyCardProps) => {
  const { date, iconBg, icon, company_name, title, points } = props
  const iconInfo = { icon, company_name }
  const { t } = useTranslation('Home')

  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={`${t(date)}`}
      iconStyle={{ background: iconBg }}
      icon={<Icon {...iconInfo} />}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{t(title)}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {t(company_name)}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {t(point)}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Journey: React.FC = () => {
  const { t } = useTranslation('Home')

  return (
    <>
      <motion.div
        variants={fadeIn(Direction.Up, Type.Spring, 0, 1.25, Ease.Linear)}
      >
        <p className="hero-head-text">{t(Home.Journey.title)}</p>
        <h2 className="hero-sub-text">{t(Home.Journey.subTitle)}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {Home.Journey.data.map((item, index) => (
            <JourneyCard key={index} {...item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Journey, '')
