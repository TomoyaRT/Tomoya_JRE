import { useTranslation } from 'next-i18next'
import { motion } from '@/plugins/FramerMotion'

import SectionHead from '@/components/animation/SectionHead'
import { Portfolio as PortfolioText } from '@/constants/Home'
import SectionWrapper from '@/hoc/SectionWrapper'
import TiltImgCard from '@/components/TiltImgCard'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types/Animate'

const Portfolio = () => {
  const { t } = useTranslation('Home')

  return (
    <>
      <SectionHead
        title={t(PortfolioText.title)}
        subTitle={t(PortfolioText.subTitle)}
        styleType="section"
      />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PortfolioText.data.map((item, index) => (
          <motion.a
            href={item.url}
            target="_blank"
            className="mx-auto block"
            key={item.name}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.25 }}
            variants={fadeIn(
              Direction.Right,
              Type.Spring,
              0.1,
              0.65,
              Ease.EaseOut
            )}
          >
            <TiltImgCard {...item} description={t(item.description)} />
          </motion.a>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Portfolio, '')
