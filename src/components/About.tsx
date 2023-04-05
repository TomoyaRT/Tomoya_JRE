import Tilt from 'react-parallax-tilt'
import { motion } from 'framer-motion'
import { fadeIn, textVariant } from '@/utils/motion'
import { SectionWrapper } from '@/hoc'
import { copywriting, cards } from '@/constants/About'

const ServiceCard = (props) => {
  const { index, title, icon } = props
  return (
    <>
      <Tilt tiltReverse={true} className="mobile:w-[250px] w-full">
        <motion.div
          variants={fadeIn('right', 'spring', 0.5 * index, 0.75)}
          className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
        >
          <div
            options={{
              max: 45,
              scale: 1,
              speed: 450,
            }}
            className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
          >
            <img src={icon} alt={title} className="w-16 h-16 object-contain" />
            <h3 className="text-white text-[20px] font-bold text-center">
              {title}
            </h3>
          </div>
        </motion.div>
      </Tilt>
    </>
  )
}

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className="hero-head-text">{copywriting[0]}</p>
        <h2 className="hero-sub-text">{copywriting[1]}</h2>
      </motion.div>

      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        {copywriting[2]}
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {cards.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
