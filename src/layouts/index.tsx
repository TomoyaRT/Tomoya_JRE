import { PropsWithChildren } from 'react'

import Head from '@/layouts/Head'
import MobileNavbar from '@/layouts/MobileNavbar'
import DesktopNavbar from '@/layouts/DesktopNavbar'
import PageTransition from '@/components/PageTransition'

import useMediaQuery from '@/hooks/useMediaQuery'
import { useAppSelector } from '@/hooks/useStore'
import { Text } from '@/constants'
const { head } = Text

const Layout = (props: PropsWithChildren) => {
  const isMobile = useMediaQuery('(max-width: 500px)')
  const Navbar = isMobile ? <MobileNavbar /> : <DesktopNavbar />
  const pageTransitionReducer = useAppSelector(
    (state) => state.pageTransitionReducer
  )
  const isLoading = pageTransitionReducer.loading

  return (
    <>
      <Head
        title={head.title}
        description={head.description}
        icon={head.icon}
      />
      {isLoading && <PageTransition />}
      {Navbar}
      {props.children}
    </>
  )
}

export default Layout
