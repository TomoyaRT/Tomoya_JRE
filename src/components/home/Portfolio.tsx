import SectionHead from '@/components/home/SectionHead'
import { Home } from '@/constants'
import SectionWrapper from '@/hoc/SectionWrapper'
import TiltImgCard from '@/components/TiltImgCard'
import { motion } from 'framer-motion'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types'

const Portfolio = () => {
  return (
    <>
      <SectionHead title={'作品集'} subTitle={'描述描述'} styleType="hero" />
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {Home.Portfolio.map((item, index) => (
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
            <TiltImgCard {...item} />
          </motion.div>
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(Portfolio, '')
