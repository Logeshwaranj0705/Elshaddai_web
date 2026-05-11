import { useEffect, useRef, useState } from 'react'

export function useScrollReveal(threshold = 0.15) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true)
          observer.disconnect()
        }
      },
      { threshold }
    )
    if (ref.current) observer.observe(ref.current)
    return () => observer.disconnect()
  }, [threshold])

  return { ref, visible }
}

export function useCounter(target, suffix = '', duration = 1500) {
  const [value, setValue] = useState('0' + suffix)
  const [started, setStarted] = useState(false)

  const start = () => {
    if (started) return
    setStarted(true)
    const steps = 60
    const stepVal = target / steps
    let current = 0
    const timer = setInterval(() => {
      current = Math.min(current + stepVal, target)
      setValue(Math.floor(current) + suffix)
      if (current >= target) clearInterval(timer)
    }, duration / steps)
  }

  return { value, start }
}
