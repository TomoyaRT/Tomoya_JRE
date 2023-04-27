import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

import LazyWrapper from '@/components/LazyWrapper'
import About from '@/components/home/About'
import Portfolio from '@/components/home/Portfolio'
import Journey from '@/components/home/Journey'
// const WorkExperience = dynamic(() => import('@/components/home/WorkExperience'))
import BookClub from '@/components/home/BookClub'
const Firework = dynamic(() => import('@/p5/Firework'), {
  ssr: false,
})
const Contact = dynamic(() => import('@/components/home/Contact'))
const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), {
  ssr: false,
})

const Home: React.FC = () => {
  return (
    <div className="relative z-0">
      <section className="w-full h-screen">
        <Firework />
      </section>
      <About />
      <Portfolio />
      <Journey />
      {/* <WorkExperience /> */}
      <BookClub />
      <LazyWrapper>
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        </div>
      </LazyWrapper>
    </div>
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

export default Home
