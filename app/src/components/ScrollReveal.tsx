import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export function ScrollRevealProvider({ children }: { children: React.ReactNode }) {
  const { pathname } = useLocation()

  useEffect(() => {
    // Small delay to let new page content render
    const timer = setTimeout(() => {
      const observer = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry) => {
            if (entry.isIntersecting) {
              entry.target.classList.add('is-visible')
              observer.unobserve(entry.target)
            }
          })
        },
        { threshold: 0, rootMargin: '0px 0px -15% 0px' }
      )

      const elements = document.querySelectorAll('.reveal:not(.is-visible)')
      elements.forEach((el) => observer.observe(el))

      return () => observer.disconnect()
    }, 100)

    return () => clearTimeout(timer)
  }, [pathname])

  return <>{children}</>
}
