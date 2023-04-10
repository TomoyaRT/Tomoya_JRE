import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import dynamic from 'next/dynamic'
import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Journey from '@/components/home/Journey'
import BookClub from '@/components/home/BookClub'
import Contact from '@/components/home/Contact'
import Work from '@/components/home/Work'
const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), {
  ssr: false,
})

const Home: React.FC = () => {
  return (
    <div className="relative z-0">
      <div className="home-pattern bg-cover bg-no-repeat bg-center">
        <Hero />
      </div>
      <About />
      <Journey />
      <Work />
      <BookClub />
      <div className="relative z-0">
        <Contact />
        <StarsCanvas />
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  if (!locale) {
    throw new Error('locale is undefined')
  }
  const Home = await serverSideTranslations(locale, ['Home'])

  return {
    props: {
      ...Home,
    },
  }
}

export default Home
