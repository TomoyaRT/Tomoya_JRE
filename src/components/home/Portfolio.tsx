import { useTranslation } from 'next-i18next'
import { motion } from '@/plugins/FramerMotion'
import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import SectionHead from '@/components/animation/SectionHead'
import { Portfolio as PortfolioText } from '@/constants/Home'
import SectionWrapper from '@/hoc/SectionWrapper'
import TiltImgCard from '@/components/TiltImgCard'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'

const Portfolio = () => {
  const { t } = useTranslation('Home')

  return (
    <>
      <SectionHead
        title={t(PortfolioText.title)}
        subTitle={t(PortfolioText.subTitle)}
        styleType="hero"
      />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {PortfolioText.data.map((item, index) => (
          <motion.div
            className="mx-auto"
            key={item.name}
            variants={fadeIn(
              Direction.Down,
              Type.Tween,
              index * 0.2,
              0.75,
              Ease.BackOut
            )}
          >
            <TiltImgCard {...item} description={t(item.description)} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) {
    throw new Error('locale is undefined')
  }

  return {
    props: {
      ...(await serverSideTranslations(locale ?? 'en', ['Home'])),
    },
  }
}

export default SectionWrapper(Portfolio, '')
