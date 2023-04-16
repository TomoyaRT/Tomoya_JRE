import Link from '@/components/Link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { Routes } from '@/constants/Routes'
import Languages from '@/layouts/Languages'

const DesktopNavbar: React.FC = () => {
  const router = useRouter()
  const { pathname } = router
  const [active, setActive] = useState(pathname)
  const { t } = useTranslation('Home')
  useEffect(() => setActive(pathname), [pathname])

  return (
    <nav className="w-full flex items-center mobile:px-16 px-6 py-5 fixed top-0 z-30 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl">
        <ul className="list-none flex flex-row gap-10">
          {Routes.map((route) => {
            const { path, name } = route
            return (
              <Link
                key={path}
                isActive={active === path}
                route={{ name: t(name), path: path }}
              />
            )
          })}
        </ul>
        <div className="flex items-center">
          <Languages />
          <button className="rounded-md border-2 text-white px-3 py-1">
            <a href="/resume/Roger.pdf" download>
              Resume
            </a>
          </button>
        </div>
      </div>
    </nav>
  )
}

export default DesktopNavbar
