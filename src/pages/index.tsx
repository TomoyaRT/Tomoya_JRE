import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import Hero from '@/components/home/Hero'
import About from '@/components/home/About'
import Portfolio from '@/components/home/Portfolio'
import Journey from '@/components/home/Journey'
import BookClub from '@/components/home/BookClub'
import WorkExperience from '@/components/home/WorkExperience'

const Home: React.FC = () => {
  return (
    <div className="relative z-0">
      <Hero />
      <About />
      <Portfolio />
      <Journey />
      <WorkExperience />
      <BookClub />
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
