import { useAppDispatch } from '@/hooks/useStore'
import { useRouter } from 'next/router'
import { setLoading } from '@/store/slices/loadingSlice'
import { delay } from '@/plugins/Lodash'

interface Route {
  path: string
  name: string
}

interface Props {
  route: Route
  isActive: boolean
  clickEvent?: (path: string) => void
}

const Link = (props: Props) => {
  const { path, name } = props.route
  const { clickEvent } = props
  const isActive = props.isActive
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleClick = async (event: React.MouseEvent, path: string) => {
    event.preventDefault()
    if (path === router.asPath) return
    clickEvent && clickEvent(path)
    dispatch(setLoading({ loading: true, type: 'Page' }))
    router.prefetch(path)
    delay(() => router.push(path), 850)
  }

  return (
    <li
      className={`${
        isActive ? 'text-white' : 'text-secondary'
      } hover:text-white text-[18px] font-medium cursor-pointer`}
      onClick={(event) => handleClick(event, path)}
    >
      {name}
    </li>
  )
}

export default Link
