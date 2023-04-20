import { useState, useEffect, RefObject } from 'react'

type Ref = RefObject<HTMLElement | null>

const options = {
  root: null,
  rootMargin: '0px',
  threshold: 0,
}

const useOnScreen = (ref: Ref) => {
  const [isIntersecting, setIntersecting] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIntersecting(true)

        // observer use once
        observer.disconnect()
      }
    }, options)

    if (ref.current) observer.observe(ref.current)

    return () => observer.disconnect()
  }, [])

  return isIntersecting
}
export default useOnScreen
