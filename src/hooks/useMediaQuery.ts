import { useState, useEffect } from 'react'

function useMediaQuery(query: string) {
  const [matches, setMatches] = useState<boolean>(false)
  const updateMatches = (e: MediaQueryListEvent) => setMatches(e.matches)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    setMatches(mediaQuery.matches)

    mediaQuery.addEventListener('change', updateMatches)
    return () => mediaQuery.removeEventListener('change', updateMatches)
  }, [query])

  return matches
}

export default useMediaQuery
