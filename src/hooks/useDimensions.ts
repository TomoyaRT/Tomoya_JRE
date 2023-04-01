import { useLayoutEffect, useRef, useState } from 'react'

interface Dimensions {
  width: number
  height: number
}

export const useDimensions = (
  ref: React.RefObject<HTMLElement>
): Dimensions => {
  const [dimensions, setDimensions] = useState<Dimensions>({
    width: 0,
    height: 0,
  })
  const dimensionsRef = useRef<Dimensions>()

  useLayoutEffect(() => {
    const node = ref.current
    if (node === null) throw new Error('ref is null')

    const getDimensions = (): Dimensions => ({
      width: node.offsetWidth,
      height: node.offsetHeight,
    })

    const handleResize = (): void => {
      dimensionsRef.current = getDimensions()
      setDimensions(dimensionsRef.current)
    }

    handleResize()

    window.addEventListener('resize', handleResize)
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [ref])

  return dimensions
}
