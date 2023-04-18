import { useTranslation } from 'next-i18next'
import { Hero } from '@/constants/Home'
import ParticlesText from '@/components/canvas/ParticlesText'
import { i18n } from 'next-i18next'

const HeroDescription = () => {
  const { t } = useTranslation('Home')
  const lang = i18n?.language
  const isJapanese = lang === 'jp'

  return (
    <div
      className={`w-full absolute z-10 pl-[7%] mobile:pl-[10%] sm:pl-[13%] md:pl-[15%] xl:pl-[17%] pt-[8rem] mobile:pt-[10rem] md:pt-32 text-white-100 select-none flex flex-row sm:justify-start`}
    >
      <div className="flex flex-col justify-center items-center">
        <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
        <div className="w-1 h-[15rem] violet-gradient"></div>
      </div>
      <div className="relative top-0 left-5 h-full">
        <div
          className={`font-black text-white text-[30px] sm:text-[35px] md:text-[40px] lg:text-[50px] flex ${
            isJapanese
              ? 'flex-col items-start sm:flex-row sm:items-center'
              : 'flex-row items-center'
          }`}
        >
          <div>{t(Hero[0])}</div>
          <div className={`flex items-center ${isJapanese && '-ml-4 sm:ml-0'}`}>
            <ParticlesText text={t(Hero[1])} color={'#7737ff'} font={'Arial'} />
            <div className={`${isJapanese ? 'block' : 'hidden'} ml-3`}>
              です
            </div>
          </div>
        </div>
        <div className="font-medium text-white text-[18px] lg:text-[20px]">
          {t(Hero[2])}
          <br />
          <p className="w-[300px] mobile:w-[375px] md:w-[500px]">
            {t(Hero[3])}
          </p>
        </div>
      </div>
    </div>
  )
}

export default HeroDescription
