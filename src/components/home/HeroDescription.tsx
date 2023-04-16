import { useTranslation } from 'next-i18next'
import { Hero } from '@/constants/Home'
import ParticlesText from '@/components/canvas/ParticlesText'

const HeroDescription = () => {
  const { t } = useTranslation('Home')

  return (
    <div
      className={
        'w-full absolute z-10 pl-[17%] pt-28 text-white-100 select-none flex flex-row justify-start'
      }
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
        <div className="w-1 sm:h-72 h-40 violet-gradient"></div>
      </div>
      <div className="relative top-0 left-5 h-full">
        <div className="font-black text-white text-[50px] flex flex-row items-center">
          <div>{t(Hero[0])}</div>
          <ParticlesText text={t(Hero[1])} color={'#7737ff'} font={'Arial'} />
        </div>
        <div className="font-medium text-white text-[20px]">
          {t(Hero[2])}
          <br />
          <p className="w-[450px]">{t(Hero[3])}</p>
        </div>
      </div>
    </div>
  )
}

export default HeroDescription
