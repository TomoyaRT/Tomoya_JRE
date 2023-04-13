import SectionWrapper from '@/hoc/SectionWrapper'
import CardsStack from '@/components/home/CardsStack'
import SectionHead from '@/components/home/SectionHead'
import WorkDescription from '@/components/home/WorkDescription'
import { useTranslation } from 'next-i18next'
import { Home } from '@/constants'
const { title, subTitle, data } = Home.WorkExperience

const WorkExperience = () => {
  const { t } = useTranslation('Home')
  const description = data.description.map((i) => t(i))

  return (
    <div className="flex flex-col">
      <SectionHead title={t(title)} subTitle={t(subTitle)} styleType="hero" />
      <div className="w-full mt-10 flex flex-col md:flex-row  justify-between  items-center">
        <div className="w-[55vw] h-[45vh] min-w-[350px] min-h-[350px] mb-10 md:min-w-0 md:min-h-0 md:mb-0 md:w-[45vw] md:h-[55vh] lg:w-[35vw] lg:h-[55vh]">
          <WorkDescription data={description} />
        </div>
        <div className="w-[55vw] h-[45vh] min-w-[350px] min-h-[350px] md:min-w-0 md:min-h-0 md:w-[45vw] md:h-[55vh] lg:w-[35vw] lg:h-[55vh]">
          <CardsStack data={data.images} />
        </div>
      </div>
    </div>
  )
}

export default SectionWrapper(WorkExperience, '')
