import dynamic from 'next/dynamic'

import SectionWrapper from '@/hoc/SectionWrapper'
import SectionHead from '@/components/animation/SectionHead'
import WorkDescription from '@/components/home/WorkDescription'
import { useTranslation } from 'next-i18next'
import { WorkExperience as WorkExperienceText } from '@/constants/Home'
const ComputersCanvas = dynamic(() => import('@/components/canvas/Computer'), {
  ssr: false,
})
const { title, subTitle, data } = WorkExperienceText

const WorkExperience = () => {
  const { t } = useTranslation('Home')
  const description = data.description.map((i) => t(i))

  return (
    <div className="flex flex-col">
      <SectionHead title={t(title)} subTitle={t(subTitle)} styleType="hero" />
      <div className="w-full h-full mt-10 flex flex-col xl:flex-row gap-10 items-center">
        <div className="w-full md:w-[75%] lg:w-[60%] xl:w-[80%] h-[500px]">
          <WorkDescription data={description} />
        </div>
        <div className="w-full h-[400px] sm:h-[500px]">
          <ComputersCanvas />
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(WorkExperience, '')
