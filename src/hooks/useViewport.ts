import { useState, useLayoutEffect, useCallback } from 'react'
import { debounce as _debounce } from 'lodash-es'
import { ViewportSize } from '@/types'

function useViewport(): ViewportSize {
  const [width, setWidth] = useState(window.innerWidth)
  const [height, setHeight] = useState(window.innerHeight)

  const handleResize = useCallback(
    _debounce(() => {
      setWidth(window.innerWidth)
      setHeight(window.innerHeight)
    }, 200),
    []
  )

  useLayoutEffect(() => {
    window.addEventListener('resize', handleResize)
    return () => window.removeEventListener('resize', handleResize)
  }, [handleResize])

  return { width, height }
}

export default useViewport
