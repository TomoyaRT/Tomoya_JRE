import Hero from '@/components/Hero'
import About from '@/components/About'
import Experience from '@/components/Experience'
import Tech from '@/components/Tech'
import Works from '@/components/Works'
import Feedbacks from '@/components/Feedbacks'
import Contact from '@/components/Contact'
import CardsStack from '@/components/home/CardsStack'
import Stagger from '@/components/animation/Stagger'

import dynamic from 'next/dynamic'

import { motion } from 'framer-motion'
const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), {
  ssr: false,
})
const fadeInConfig = {
  hidden: {
    x: 0,
    y: -50,
    opacity: 0,
  },
  visible: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      duration: 0.3,
    },
  },
}

export default function Home() {
  return (
    <>
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Hero />
        </div>
        <About />
        <Experience />
        <div className="padding max-w-7xl mx-auto relative z-0 flex flex-col sm:flex-row  justify-center items-center ">
          <div className="bg-white w-[340px] h-[340px] mb-[10px] rounded-[10px]">
            <Stagger stagger={0.2} delay={5}>
              <ul>
                <motion.div variants={fadeInConfig}>
                  <li>第一點哦 聽清楚了</li>
                </motion.div>
                <motion.div variants={fadeInConfig}>
                  <li>第一點哦 聽清楚了</li>
                </motion.div>
                <motion.div variants={fadeInConfig}>
                  <li>第一點哦 聽清楚了</li>
                </motion.div>
                <motion.div variants={fadeInConfig}>
                  <li>第一點哦 聽清楚了</li>
                </motion.div>
              </ul>
            </Stagger>
          </div>
          <CardsStack />
        </div>
        <Tech />
        <Works />
        <Feedbacks />
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </div>
    </>
  )
}
