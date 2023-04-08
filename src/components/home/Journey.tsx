import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import Image from 'next/image'

import { SectionWrapper } from '@/hoc'
import SectionText from '@/components/home/SectionText'
import { journey } from '@/constants/Text'

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
  return (
    <VerticalTimelineElement
      contentStyle={{ background: '#1d1836', color: '#fff' }}
      contentArrowStyle={{ borderRight: '7px solid #232631' }}
      date={date}
      iconStyle={{ background: iconBg }}
      icon={<Icon {...iconInfo} />}
    >
      <div>
        <h3 className="text-white text-[24px] font-bold">{title}</h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {points.map((point, index) => (
          <li
            key={`experience-point-${index}`}
            className="text-white-100 text-[14px] pl-1 tracking-wider"
          >
            {point}
          </li>
        ))}
      </ul>
    </VerticalTimelineElement>
  )
}

const Journey: React.FC = () => {
  return (
    <>
      <SectionText title={journey.title} subTitle={journey.subTitle} />

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {journey.data.map((item, index) => (
            <JourneyCard key={index} {...item} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Journey, '')
