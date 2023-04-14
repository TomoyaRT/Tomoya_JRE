import { useTranslation } from 'next-i18next'
import { Hero } from '@/constants/Home'
import ParticlesText from '@/components/canvas/ParticlesText'

const HeroText: React.FC = () => {
  const { t } = useTranslation('Home')

  return (
    <div
      className={
        'padding-x inset-0 max-w-7xl mx-auto flex flex-row items-start gap-5'
      }
    >
      <div className="absolute z-10 ml-5 mt-[150px] text-white-100">
        <ParticlesText />
      </div>
      <p className="absolute z-10 hero-sub-text ml-[20px] mt-[240px] sm:mt-[280px] text-white-100 select-none">
        {t(Hero[2])}
        <br className="block sm:hidden" /> {t(Hero[3])}
      </p>
    </div>
  )
}

export default HeroText
