import Link from '@/components/Link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { Routes } from '@/constants'
const { routes } = Routes

const DesktopNavbar: React.FC = () => {
  const router = useRouter()
  const { pathname } = router
  const [active, setActive] = useState(pathname)
  useEffect(() => setActive(pathname), [pathname])

  return (
    <nav className="w-full flex items-center mobile:px-16 px-6 py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl">
        <ul className="list-none flex flex-row gap-10">
          {routes.map((route) => {
            const { path, name } = route
            return (
              <Link
                key={path}
                isActive={active === path}
                route={{ name: name, path: path }}
              />
            )
          })}
        </ul>
        <button className="rounded-md border-2 text-white px-3 py-1">
          Resume
        </button>
      </div>
    </nav>
  )
}

export default DesktopNavbar
