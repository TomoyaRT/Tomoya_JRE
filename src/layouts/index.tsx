import MobileNavbar from '@/layouts/MobileNavbar'
import DesktopNavbar from '@/layouts/DesktopNavbar'
import { PropsWithChildren } from 'react'
import useMediaQuery from '@/hooks/useMediaQuery'

const routes = [
  {
    path: '/',
    name: 'Home',
  },
  {
    path: '/blog',
    name: 'Blog',
  },
  {
    path: '/portfolio',
    name: 'Portfolio',
  },
]

function Layout(props: PropsWithChildren) {
  const isMobile = useMediaQuery('(max-width: 450px)')
  const Navbar = isMobile ? <MobileNavbar /> : <DesktopNavbar routes={routes} />

  return (
    <>
      {/* 這邊的 Navbar 要分為兩個 Component (電腦用, 手機用) */}
      {Navbar}
      {props.children}
    </>
  )
}

export default Layout
