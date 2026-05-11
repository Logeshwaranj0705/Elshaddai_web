import React from 'react'
import RevealWrapper from '../components/RevealWrapper'
import { useScrollReveal, useCounter } from '../hooks/useScrollReveal'

const metrics = [
  {
    icon: '⏱️',
    target: 98,
    suffix: '%',
    label: 'On-Time Rate',
    title: 'On-Time Recovery',
    glowColor: 'rgba(30,111,255,0.35)',
    glowShadow: 'rgba(30,111,255,0.18)',
    gradEnd: '#00c9a7',
  },
  {
    icon: '👥',
    target: 120,
    suffix: '+',
    label: 'Professionals',
    title: 'Expert Members',
    glowColor: 'rgba(0,201,167,0.35)',
    glowShadow: 'rgba(0,201,167,0.18)',
    gradEnd: '#1e6fff',
  },
  {
    icon: '🔔',
    target: 24,
    suffix: '/7',
    label: 'Availability',
    title: '24/7 Support',
    glowColor: 'rgba(201,168,76,0.35)',
    glowShadow: 'rgba(201,168,76,0.14)',
    gradEnd: '#c9a84c',
  },
]

function MetricItem({
  icon,
  target,
  suffix,
  label,
  title,
  glowColor,
  glowShadow,
  gradEnd,
  delay,
}) {
  const { ref, visible } = useScrollReveal(0.2)

  // IMPORTANT:
  // Keep suffix empty here, otherwise it gets added twice.
  const { value, start } = useCounter(target, '', 1500)

  const [hovered, setHovered] = React.useState(false)

  React.useEffect(() => {
    if (visible) {
      start()
    }
  }, [visible, start])

  return (
    <div
      ref={ref}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      className="relative min-w-0 pt-1"
      style={{
        opacity: visible ? 1 : 0,
        transform: visible
          ? hovered
            ? 'translateY(-4px)'
            : 'translateY(0px)'
          : 'translateY(20px)',
        transition: `opacity 0.7s ease ${delay}ms, transform 0.7s ease ${delay}ms`,
      }}
    >
      {/* Icon */}
      <div
        className="mb-3 flex h-[38px] w-[38px] items-center justify-center rounded-full text-[15px] sm:mb-4 sm:h-[56px] sm:w-[56px] sm:text-[20px] lg:h-[60px] lg:w-[60px] lg:text-[22px]"
        style={{
          border: `1.5px solid ${glowColor}`,
          boxShadow: `0 0 22px ${glowShadow}`,
          background: 'rgba(255,255,255,0.02)',
        }}
      >
        {icon}
      </div>

      {/* Number */}
      <div
        className="mb-1.5 flex items-end gap-[2px] whitespace-nowrap leading-none sm:mb-2 sm:gap-1"
        style={{
          fontFamily: 'Syne, sans-serif',
          background: `linear-gradient(135deg, #f0f4ff, ${gradEnd})`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        <span className="text-[22px] font-black tracking-[-0.7px] sm:text-[36px] sm:tracking-[-1px] lg:text-[40px]">
          {value}
        </span>

        {suffix && (
          <span className="pb-[2px] text-[13px] font-extrabold tracking-[-0.3px] sm:pb-[3px] sm:text-[21px] sm:tracking-[-0.5px] lg:text-[23px]">
            {suffix}
          </span>
        )}
      </div>

      {/* Label */}
      <div className="mb-1.5 text-[8px] uppercase tracking-[1.2px] text-[#8899bb] sm:mb-2 sm:text-[11px] sm:tracking-[1.6px]">
        {label}
      </div>

      {/* Title */}
      <div className="text-[10px] font-bold leading-snug text-[#f0f4ff] sm:text-[14px]">
        {title}
      </div>
    </div>
  )
}

export default function MetricsSection() {
  return (
    <section id="metrics" className="w-full">
      <RevealWrapper>
        <div className="max-w-[650px]">
          <span className="section-label">Why Choose Us</span>

          <h2
            className="mb-5 text-[30px] font-extrabold leading-[1.08] tracking-[-0.8px] text-[#f0f4ff] sm:text-[40px] lg:text-[52px]"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Why Leading Businesses Trust{' '}
            <span className="text-[#00c9a7]">Elshaddai Enterprises</span>
          </h2>

          <p className="mb-10 max-w-[600px] text-[14px] leading-[1.85] text-[#8899bb] sm:text-[15px]">
            We combine ethical recovery practices, operational speed, and a
            highly trained team to help businesses resolve dues efficiently
            while maintaining professionalism at every stage.
          </p>
        </div>
      </RevealWrapper>

      <div className="grid grid-cols-3 gap-4 sm:gap-8 lg:gap-10">
        {metrics.map((metric, index) => (
          <MetricItem
            key={metric.title}
            {...metric}
            delay={index * 150}
          />
        ))}
      </div>
    </section>
  )
}