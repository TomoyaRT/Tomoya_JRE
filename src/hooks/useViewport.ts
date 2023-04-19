import { useState, useLayoutEffect, useCallback } from 'react'
import { debounce } from '@/plugins/Lodash'
import { ViewportSize } from '@/types'

function useViewport(): ViewportSize {
  const isClient = typeof window === 'object'
  const [width, setWidth] = useState(isClient ? window.innerWidth : 0)
  const [height, setHeight] = useState(isClient ? window.innerHeight : 0)

  const handleResize = useCallback(
    () =>
      debounce(() => {
        setWidth(window.innerWidth)
        setHeight(window.innerHeight)
      }, 100),
    []
  )

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return { width, height }
}

export default useViewport
