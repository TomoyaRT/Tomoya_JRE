import type { GetStaticProps } from 'next'
import type { ReactNode } from 'react'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRef } from 'react'
import dynamic from 'next/dynamic'

import useOnScreen from '@/hooks/useOnScreen'
import Hero from '@/components/home/Hero'
const About = dynamic(() => import('@/components/home/About'))
const Portfolio = dynamic(() => import('@/components/home/Portfolio'))
const Journey = dynamic(() => import('@/components/home/Journey'))
const BookClub = dynamic(() => import('@/components/home/BookClub'))
const WorkExperience = dynamic(() => import('@/components/home/WorkExperience'))
const Contact = dynamic(() => import('@/components/home/Contact'))
const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), {
  ssr: false,
})

type TargetProps = {
  children: ReactNode
}
const LazyWrapper = (props: TargetProps) => {
  const { children } = props
  const targetRef = useRef(null)
  const targetOnScreen = useOnScreen(targetRef)
  const wrapperStyles = `w-full h-[500px]`
  const wrapper = (
    <div
      ref={targetRef}
      className={`${targetOnScreen ? '' : wrapperStyles}`}
    ></div>
  )

  return <>{targetOnScreen ? children : wrapper}</>
}

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
