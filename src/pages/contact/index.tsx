import type { GetStaticProps } from 'next'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'

import dynamic from 'next/dynamic'
import Contact from '@/components/home/Contact'
const StarsCanvas = dynamic(() => import('@/components/canvas/Stars'), {
  ssr: false,
})

const Home: React.FC = () => {
  return (
    <div className="relative z-0">
      <Contact />
      <StarsCanvas />
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
