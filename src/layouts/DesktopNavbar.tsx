import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/router'
import { useAppDispatch } from '@/hooks/useStore'
import { updateLoading } from '@/store/slices/pageTransitionSlice'
import { delay as _delay } from 'lodash-es'

type RouteType = {
  path: string
  name: string
}

interface Props {
  routes: RouteType[]
}

const DesktopNavbar = ({ routes }: Props) => {
  const [active, setActive] = useState('')
  const router = useRouter()
  const dispatch = useAppDispatch()

  const handleClick = async (event: React.MouseEvent, href: string) => {
    event.preventDefault()
    dispatch(updateLoading(true))
    router.prefetch(href)
    _delay(() => router.push(href), 850)
    _delay(() => dispatch(updateLoading(false)), 2000)
  }

  return (
    <nav
      className={
        'padding-x w-full flex items-center py-5 fixed top-0 z-20 bg-primary'
      }
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        {/* Navigation */}
        <ul className="list-none hidden xs:flex flex-row gap-10">
          {routes.map((route) => {
            return (
              <li
                key={route.name}
                className={`${
                  active === route.name ? 'text-white' : 'text-secondary'
                } hover:text-white text-[18px] font-medium cursor-pointer`}
                onClick={() => setActive(route.name)}
              >
                <Link
                  href={route.path}
                  onClick={(event) => handleClick(event, route.path)}
                >
                  {route.name}
                </Link>
              </li>
            )
          })}
        </ul>
        {/* Resume */}
        <button className="rounded-md border-2 text-white px-3 py-1">
          Resume
        </button>
      </div>
    </nav>
  )
}

export default DesktopNavbar
