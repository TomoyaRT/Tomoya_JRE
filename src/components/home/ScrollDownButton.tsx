import { scrollDownButton } from '@/constants/Animation'
import { motion } from 'framer-motion'

const ScrollDownButton: React.FC = () => {
  return (
    <div className="absolute bottom-24 sm:bottom-12 mb:bottom-5 w-full flex justify-center items-center">
      <a href="#about">
        <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
          <motion.div
            animate={scrollDownButton.animate}
            transition={scrollDownButton.transition}
            className="w-3 h-3 rounded-full bg-secondary mb-1"
          ></motion.div>
        </div>
      </a>
    </div>
  )
}

export default ScrollDownButton
