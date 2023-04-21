import Link from '@/components/Link'
import React, { useState } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import useMediaQuery from '@/hooks/useMediaQuery'
import { Routes } from '@/constants/Routes'
import Languages from '@/layouts/Languages'
import Resume from '@/layouts/Resume'

const DesktopNavbar: React.FC = () => {
  const { t } = useTranslation('Home')
  const isDesktop = useMediaQuery('(min-width: 500px)')
  const router = useRouter()
  const { pathname } = router
  const [active, setActive] = useState(pathname)

  return (
    <nav className="w-full flex items-center px-[5%] lg:px-[7%] py-5 fixed top-0 z-30 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl">
        <ul className="list-none flex flex-row gap-10">
          {Routes.map((route) => {
            const { path, name } = route
            return (
              <Link
                key={path}
                isActive={active === path}
                route={{ name: t(name), path: path }}
                clickEvent={() => setActive}
              />
            )
          })}
        </ul>
        <div className="flex items-center">
          <Languages isMobile={!isDesktop} />
          <Resume />
        </div>
      </div>
    </nav>
  )
}

export default DesktopNavbar
