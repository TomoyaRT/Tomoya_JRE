import { PropsWithChildren } from 'react'
import { useTranslation } from 'next-i18next'

import Head from '@/layouts/Head'
import MobileNavbar from '@/layouts/MobileNavbar'
import DesktopNavbar from '@/layouts/DesktopNavbar'
import PageTransition from '@/components/PageTransition'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useAppSelector } from '@/hooks/useStore'
import { Home } from '@/constants'

const Layout = (props: PropsWithChildren) => {
  const { t } = useTranslation('Home')
  const isMobile = useMediaQuery('(max-width: 500px)')
  const Navbar = isMobile ? <MobileNavbar /> : <DesktopNavbar />
  const pageTransitionReducer = useAppSelector(
    (state) => state.pageTransitionReducer
  )
  const isLoading = pageTransitionReducer.loading

  return (
    <>
      <Head
        title={t(Home.Head.title)}
        description={t(Home.Head.description)}
        icon={Home.Head.icon}
      />
      {isLoading && <PageTransition />}
      {Navbar}
      {props.children}
    </>
  )
}

export default Layout
