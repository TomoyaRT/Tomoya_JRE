import Link from '@/components/Link'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import { routes } from '@/constants/Routes'

const DesktopNavbar: React.FC = () => {
  const router = useRouter()
  const [active, setActive] = useState(router.pathname)
  useEffect(() => setActive(router.pathname), [router.pathname])

  return (
    <nav className="w-full flex items-center mobile:px-16 px-6 py-5 fixed top-0 z-20 bg-primary">
      <div className="w-full flex justify-between items-center max-w-7xl">
        <ul className="list-none flex flex-row gap-10">
          {routes.map((route) => {
            return (
              <Link
                key={route.path}
                isActive={active === route.path}
                route={{ name: route.name, path: route.path }}
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
