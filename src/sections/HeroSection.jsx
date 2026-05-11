import React from 'react'
import ParticleCanvas from '../components/ParticleCanvas'

const floatingCards = [
  { label: 'Recovery Rate', value: '94.7%', fill: '95%', colorClass: 'teal', pos: 'top-[20%] left-[3%]', anim: 'animate-float-1' },
  { label: 'Active Cases', value: '12,480', fill: '78%', colorClass: 'blue', pos: 'top-[15%] right-[3%]', anim: 'animate-float-2' },
  { label: 'On-Time Delivery', value: '98%', fill: '98%', colorClass: 'white', pos: 'bottom-[25%] left-[2%]', anim: 'animate-float-3' },
  { label: 'Expert Team', value: '120+', fill: '82%', colorClass: 'gold', pos: 'bottom-[20%] right-[4%]', anim: 'animate-float-1' },
]

const colorMap = {
  teal: '#00c9a7',
  blue: '#2d8cff',
  white: '#f0f4ff',
  gold: '#c9a84c',
}

function FloatCard({ label, value, fill, colorClass, pos, anim }) {
  const color = colorMap[colorClass]

  return (
    <div
      className={`absolute hidden xl:block ${pos} ${anim}`}
      style={{
        background: 'rgba(255,255,255,0.05)',
        border: '1px solid rgba(255,255,255,0.08)',
        borderRadius: '14px',
        padding: '16px 20px',
        backdropFilter: 'blur(12px)',
        minWidth: '180px',
        pointerEvents: 'none',
      }}
    >
      <div
        style={{
          fontSize: '11px',
          color: '#8899bb',
          textTransform: 'uppercase',
          letterSpacing: '1px',
          marginBottom: '8px',
        }}
      >
        {label}
      </div>

      <div
        style={{
          fontSize: '22px',
          fontWeight: 700,
          color,
          fontFamily: 'Syne, sans-serif',
        }}
      >
        {value}
      </div>

      <div
        style={{
          height: '4px',
          borderRadius: '2px',
          background: 'rgba(255,255,255,0.08)',
          marginTop: '10px',
          overflow: 'hidden',
        }}
      >
        <div
          style={{
            height: '100%',
            width: fill,
            borderRadius: '2px',
            background: 'linear-gradient(90deg, #1e6fff, #00c9a7)',
          }}
        />
      </div>
    </div>
  )
}

export default function HeroSection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="home"
      className="relative flex min-h-screen items-center justify-center overflow-hidden px-5 pt-28 pb-16 sm:px-8 sm:pt-32 sm:pb-20 lg:px-10 lg:pt-[100px] lg:pb-[60px]"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 80% 60% at 50% 0%, rgba(30,111,255,0.18) 0%, transparent 70%), radial-gradient(ellipse 60% 40% at 80% 80%, rgba(0,201,167,0.12) 0%, transparent 70%), #050d1a',
        }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
          maskImage:
            'radial-gradient(ellipse 80% 80% at 50% 50%, black 40%, transparent 100%)',
        }}
      />

      {/* Particles */}
      <ParticleCanvas />

      {/* Floating Cards */}
      {floatingCards.map((card) => (
        <FloatCard key={card.label} {...card} />
      ))}

      {/* Content */}
      <div className="relative z-[2] w-full max-w-[900px] text-center">
        {/* Badge */}
        <div
          className="mb-6 inline-flex max-w-full items-center gap-2 rounded-full border px-4 py-2 text-[11px] sm:mb-8 sm:px-[18px] sm:text-[13px]"
          style={{
            background: 'rgba(0,201,167,0.10)',
            borderColor: 'rgba(0,201,167,0.25)',
            color: '#00c9a7',
            fontWeight: 500,
          }}
        >
          <span
            style={{
              width: '6px',
              height: '6px',
              borderRadius: '50%',
              background: '#00c9a7',
              display: 'inline-block',
              animation: 'badgePulse 2s infinite',
              flexShrink: 0,
            }}
          />
          <span className="whitespace-normal sm:whitespace-nowrap">
            Trusted by Leading Financial Institutions
          </span>
        </div>

        {/* Headline */}
        <h1
          style={{
            fontFamily: 'Syne, sans-serif',
            fontWeight: 800,
            lineHeight: 1.1,
            letterSpacing: '-1px',
          }}
          className="mb-5 text-[36px] sm:text-[48px] md:text-[60px] lg:text-[72px]"
        >
          Recover Debts
          <br />
          <span className="text-gradient">Efficiently, Ethically,</span>
          <br />
          and Professionally
        </h1>

        {/* Sub */}
        <p
          className="mx-auto mb-8 max-w-[600px] text-[15px] leading-relaxed text-[#8899bb] sm:mb-10 sm:text-[17px] sm:leading-[1.7] lg:text-[18px]"
        >
          Elshaddai Enterprises helps financial institutions and businesses recover outstanding dues while maintaining strong client relationships.
        </p>

        {/* CTAs */}
        <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
          <button
            className="btn-primary w-full sm:w-auto"
            onClick={() => scrollTo('#contact')}
          >
            Get Started
          </button>

          <button
            className="btn-outline w-full sm:w-auto"
            onClick={() => scrollTo('#services')}
          >
            Explore Services
          </button>
        </div>
      </div>

      {/* Scroll hint */}
      <div
        className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[12px] text-[#8899bb] sm:flex"
        style={{
          animation: 'float1 2s ease-in-out infinite',
        }}
      >
        <div
          style={{
            width: '22px',
            height: '34px',
            border: '1px solid rgba(255,255,255,0.14)',
            borderRadius: '11px',
            display: 'flex',
            justifyContent: 'center',
            paddingTop: '6px',
          }}
        >
          <div
            style={{
              width: '4px',
              height: '6px',
              background: '#00c9a7',
              borderRadius: '2px',
              animation: 'scrollDot 2s ease-in-out infinite',
            }}
          />
        </div>
        <span>Scroll</span>
      </div>
    </section>
  )
}