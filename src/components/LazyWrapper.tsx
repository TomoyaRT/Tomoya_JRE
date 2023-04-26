import { useRef } from 'react'
import type { ReactNode } from 'react'
import useOnScreen from '@/hooks/useOnScreen'

type TargetProps = {
  children: ReactNode
}
const LazyWrapper = (props: TargetProps) => {
  const { children } = props
  const targetRef = useRef(null)
  const targetOnScreen = useOnScreen(targetRef)
  const wrapperStyles = `w-full h-[500px]`
  const wrapper = (
    <div
      ref={targetRef}
      className={`${targetOnScreen ? '' : wrapperStyles}`}
    ></div>
  )

  return <>{targetOnScreen ? children : wrapper}</>
}

export default LazyWrapper
