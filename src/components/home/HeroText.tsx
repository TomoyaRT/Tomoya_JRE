import { useTranslation } from 'next-i18next'
import { Home } from '@/constants'

const HeroText: React.FC = () => {
  const { t } = useTranslation('Home')

  return (
    <div>
      <h1 className="hero-head-text">
        {t(Home.Hero[0])}
        <span className="text-[#915eff]">{t(Home.Hero[1])}</span>
      </h1>
      <p className="hero-sub-text mt-2 text-white-100">
        {t(Home.Hero[2])}
        <br className="sm:block hidden" /> {t(Home.Hero[3])}
      </p>
    </div>
  )
}

export default HeroText
