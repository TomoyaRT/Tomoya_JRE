import Navbar from '@/layouts/navbar'
import { PropsWithChildren } from 'react'

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
  return (
    <>
      <Navbar routes={routes} />
      {props.children}
    </>
  )
}

export default Layout
