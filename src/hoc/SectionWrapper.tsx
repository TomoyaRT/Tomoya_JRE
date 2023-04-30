import { motion } from '@/plugins/FramerMotion'

const SectionWrapper = (Component: React.FC, idName: string) => {
  return function HOC() {
    return (
      <motion.section className="padding max-w-7xl mx-auto relative z-0">
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    )
  }
}

export default SectionWrapper
