import { useEffect, useState } from 'react'

export function useScrollSpy(ids, offset = 120) {
  const [active, setActive] = useState(ids[0])

  useEffect(() => {
    function onScroll() {
      const scrollPos = window.scrollY + offset
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= scrollPos) {
          current = id
        }
      }
      setActive(current)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    onScroll()
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids, offset])

  return active
}
