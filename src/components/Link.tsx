import { useAppDispatch } from '@/hooks/useStore'
import { useRouter } from 'next/router'
import { updateLoading } from '@/store/slices/pageTransitionSlice'
import { delay } from '@/plugins/Lodash'
import { Route } from '@/types'

interface Props {
  route: Route
  isActive: boolean
}

const Link = (props: Props) => {
  const { path, name } = props.route
  const isActive = props.isActive
  const dispatch = useAppDispatch()
  const router = useRouter()

  const handleClick = async (event: React.MouseEvent, path: string) => {
    event.preventDefault()
    dispatch(updateLoading(true))
    router.prefetch(path)
    delay(() => router.push(path), 850)
    delay(() => dispatch(updateLoading(false)), 2000)
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
