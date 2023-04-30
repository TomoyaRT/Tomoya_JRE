import dynamic from 'next/dynamic'
import { motion } from '@/plugins/FramerMotion'
import SectionWrapper from '@/hoc/SectionWrapper'
import { fadeIn } from '@/utils/FramerMotion'
import { Direction, Type, Ease } from '@/types/Animate'
import ContactForm from '@/components/home/ContactForm'
const EarthCanvas = dynamic(() => import('@/components/canvas/Earth'), {
  ssr: false,
})

const Contact = () => {
  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <div className="flex-[0.7]">
        <ContactForm />
      </div>
      <motion.div
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        variants={fadeIn(Direction.Left, Type.Tween, 0.2, 0.75, Ease.EaseOut)}
        className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
      >
        <EarthCanvas />
      </motion.div>
    </div>
  )
}

export default SectionWrapper(Contact, '')
