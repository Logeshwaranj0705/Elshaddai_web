import React from 'react'
import { useScrollReveal } from '../hooks/useScrollReveal'

export default function RevealWrapper({ children, delay = 0, className = '', style = {} }) {
  const { ref, visible } = useScrollReveal(0.12)

  return (
    <div
      ref={ref}
      className={className}
      style={{
        opacity: visible ? 1 : 0,
        transform: visible ? 'translateY(0)' : 'translateY(30px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
        ...style,
      }}
    >
      {children}
    </div>
  )
}
