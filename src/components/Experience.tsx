import { motion } from 'framer-motion'
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component'
import 'react-vertical-timeline-component/style.min.css'
import { experiences, copywriting } from '@/constants/Experience'
import { SectionWrapper } from '@/hoc'
import { textVariant } from '@/utils/motion'

const Icon = ({ icon, company_name }) => {
  return (
    <div className="flex justify-center items-center w-full h-full">
      <img
        src={icon}
        alt={company_name}
        className="w-[60%] h-[60%] object-contain"
      />
    </div>
  )
}

const ExperienceCard = (props) => {
  const { date, iconBg, icon, company_name, title, points } = props.experience
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

const Experience = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="section-sub-text">{copywriting[0]}</p>
        <h2 className="section-head-text">{copywriting[1]}</h2>
      </motion.div>

      <div className="mt-20 flex flex-col">
        <VerticalTimeline>
          {experiences.map((experience, index) => (
            <ExperienceCard key={index} experience={experience} />
          ))}
        </VerticalTimeline>
      </div>
    </>
  )
}

export default SectionWrapper(Experience, 'work')
