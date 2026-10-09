import { useEffect, type CSSProperties } from 'react'

/*
 * Fades `.reveal` elements in the first time they scroll into view.
 * One observer for the whole page; each element is dropped once it has shown.
 */
export function useReveal() {
  useEffect(() => {
    const els = document.querySelectorAll<HTMLElement>('.reveal')
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue
          entry.target.classList.add('is-visible')
          observer.unobserve(entry.target)
        }
      },
      { rootMargin: '0px 0px -10% 0px' },
    )
    els.forEach((el) => observer.observe(el))
    return () => observer.disconnect()
  }, [])
}

/** Staggers a revealed item by its position in a list. */
export function stagger(i: number): CSSProperties {
  return { '--i': i } as CSSProperties
}
