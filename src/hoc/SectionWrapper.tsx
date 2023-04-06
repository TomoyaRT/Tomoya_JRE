import { motion } from 'framer-motion'

const SectionWrapper = (Component: React.FC, idName: string) => {
  return function HOC() {
    return (
      <motion.section
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.25 }}
        className="padding max-w-7xl mx-auto relative z-0"
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    )
  }
}

export default SectionWrapper
