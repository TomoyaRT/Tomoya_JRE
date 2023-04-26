import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import dynamic from 'next/dynamic'

import LazyWrapper from '@/components/LazyWrapper'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
const Portfolio = dynamic(() => import('@/components/home/Portfolio'))
const Journey = dynamic(() => import('@/components/home/Journey'))
const WorkExperience = dynamic(() => import('@/components/home/WorkExperience'))
const BookClub = dynamic(() => import('@/components/home/BookClub'))
const Contact = dynamic(() => import('@/components/home/Contact'))
const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), {
  ssr: false,
})

const Home: React.FC = () => {
  return (
    <div className="relative z-0">
      <Hero />
      <About />
      <LazyWrapper>
        <Portfolio />
      </LazyWrapper>
      <LazyWrapper>
        <Journey />
      </LazyWrapper>
      <LazyWrapper>
        <WorkExperience />
      </LazyWrapper>
      <LazyWrapper>
        <BookClub />
      </LazyWrapper>
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
