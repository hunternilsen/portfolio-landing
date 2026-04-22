import { useEffect, useState } from 'react'

export function useScrollSpy(sectionIds: string[], offset = 120, enabled = true): string {
  const [active, setActive] = useState<string>('')

  useEffect(() => {
    if (!enabled) {
      setActive('')
      return
    }
    function update() {
      const scrollTop = window.pageYOffset || document.documentElement.scrollTop
      let current = ''
      for (let i = sectionIds.length - 1; i >= 0; i--) {
        const section = document.getElementById(sectionIds[i])
        if (section && section.offsetTop - offset <= scrollTop) {
          current = sectionIds[i]
          break
        }
      }
      setActive(current)
    }
    update()
    window.addEventListener('scroll', update, { passive: true })
    return () => window.removeEventListener('scroll', update)
  }, [sectionIds, offset, enabled])

  return active
}
