import type { PropsWithChildren } from 'react'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

import Head from '@/layouts/Head'
import MobileNavbar from '@/layouts/MobileNavbar'
import DesktopNavbar from '@/layouts/DesktopNavbar'
import PageTransition from '@/components/PageTransition'
import useMediaQuery from '@/hooks/useMediaQuery'
import { useAppSelector } from '@/hooks/useStore'
import { Head as HeadText } from '@/constants/Home'
import { delay } from '@/plugins/Lodash'
import FirstLoading from '@/components/FirstLoading'

const Layout = (props: PropsWithChildren) => {
  const [firstLoading, setFirstLoading] = useState(true)
  const { t } = useTranslation('Home')
  const isMobile = useMediaQuery('(max-width: 500px)')
  const Navbar =
    isMobile !== null ? isMobile ? <MobileNavbar /> : <DesktopNavbar /> : null
  const pageTransitionReducer = useAppSelector(
    (state) => state.pageTransitionReducer
  )
  const isLoading = pageTransitionReducer.loading

  function firstLoadingHandler() {
    delay(() => setFirstLoading(false), 5000)
    return <FirstLoading />
  }

  return (
    <>
      <Head
        title={t(HeadText.title)}
        description={t(HeadText.description)}
        icon={HeadText.icon}
      />
      {firstLoading && firstLoadingHandler()}
      {isLoading && <PageTransition />}
      {Navbar}
      {props.children}
    </>
  )
}

export default Layout
