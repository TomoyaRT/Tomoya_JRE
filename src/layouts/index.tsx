import React, { PropsWithChildren } from 'react'

import Head from '@/layouts/Head'
import DesktopNavbar from '@/layouts/DesktopNavbar'
import AppLoading from '@/layouts/AppLoading'
import PageLoading from '@/layouts/PageLoading'
import { useAppSelector } from '@/hooks/useStore'

const Layout = (props: PropsWithChildren) => {
  const loadingReducer = useAppSelector((state) => state.loadingReducer)
  const loadingType = loadingReducer.loadingType
  const isLoading = loadingReducer.isLoading
  const Navbar = DesktopNavbar
  const LoadingComponent = loadingType === 'App' ? AppLoading : PageLoading

  return (
    <>
      <Head />
      {isLoading && <LoadingComponent />}
      <Navbar />
      {props.children}
    </>
  )
}

export default Layout
