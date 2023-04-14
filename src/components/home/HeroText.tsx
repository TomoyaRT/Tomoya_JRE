import { useTranslation } from 'next-i18next'
import { Hero } from '@/constants/Home'

const HeroText: React.FC = () => {
  const { t } = useTranslation('Home')

  return (
    <div>
      <h1 className="hero-head-text">
        {t(Hero[0])}
        <span className="text-[#915eff]">{t(Hero[1])}</span>
      </h1>
      <p className="hero-sub-text mt-2 text-white-100">
        {t(Hero[2])}
        <br className="sm:block hidden" /> {t(Hero[3])}
      </p>
    </div>
  )
}

export default HeroText
