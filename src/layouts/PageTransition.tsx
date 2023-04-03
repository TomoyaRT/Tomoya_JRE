import { useRouter } from 'next/router'
import { useEffect, ReactNode } from 'react'
import PageTransitionAnimation from '@/layouts/PageTransitionAnimation'
import { useAppSelector } from '@/hooks/useStore'
import { useAppDispatch } from '@/hooks/useStore'
import {
  updateRouteStart,
  updateRouteComplete,
} from '@/store/slices/pageTransitionSlice'

interface Props {
  children: ReactNode
}
const PageTransition = ({ children }: Props) => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const pageTransitionReducer = useAppSelector(
    (state) => state.pageTransitionReducer
  )
  const { routeChangeStart, pageTransitionComplete } = pageTransitionReducer
  const showPageTransition = routeChangeStart || !pageTransitionComplete
  console.log('showPageTransition', showPageTransition)
  const routeChangeHandler = (type: string) => {
    if (type === 'start') {
      dispatch(updateRouteStart(true))
      dispatch(updateRouteComplete(false))
    } else {
      dispatch(updateRouteStart(false))
      dispatch(updateRouteComplete(true))
    }
  }

  useEffect(() => {
    router.events.on('routeChangeStart', () => routeChangeHandler('start'))
    router.events.on('routeChangeComplete', () => routeChangeHandler('end'))
    router.events.on('routeChangeError', () => routeChangeHandler('end'))

    return () => {
      router.events.off('routeChangeStart', () => routeChangeHandler('start'))
      router.events.off('routeChangeComplete', () => routeChangeHandler('end'))
      router.events.off('routeChangeError', () => routeChangeHandler('end'))
    }
  }, [router])

  return (
    <>
      {showPageTransition && <PageTransitionAnimation />}
      {children}
    </>
  )
}

export default PageTransition
