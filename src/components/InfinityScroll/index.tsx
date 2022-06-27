import { useEffect, useRef } from 'react'

export function InfinityScroll({ fetchMore }) {
  const containerRef = useRef()

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: '0px',
      threshold: 1.0,
    }
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        observer.disconnect()
        fetchMore()
      }
    }, options)

    observer.observe(containerRef.current)

    return () => {
      observer.disconnect()
    }

  }, [])

  return <div ref={containerRef} />
}
