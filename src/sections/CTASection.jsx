import React from 'react'
import RevealWrapper from '../components/RevealWrapper'

export default function CTASection() {
  const scrollTo = (id) => {
    const el = document.querySelector(id)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      className="relative overflow-hidden border-y border-white/10 px-5 py-16 text-center sm:px-8 sm:py-20 lg:px-10 lg:py-[100px]"
      style={{
        background:
          'linear-gradient(135deg, rgba(30,111,255,0.08) 0%, rgba(0,201,167,0.08) 100%)',
      }}
    >
      {/* Animated background shapes */}
      <div
        className="pointer-events-none absolute -left-20 -top-20 h-[220px] w-[220px] rounded-full sm:-left-24 sm:-top-24 sm:h-[300px] sm:w-[300px] lg:-left-[100px] lg:-top-[100px] lg:h-[400px] lg:w-[400px]"
        style={{
          background:
            'radial-gradient(circle, rgba(30,111,255,0.08) 0%, transparent 70%)',
          animation: 'float1 8s ease-in-out infinite',
        }}
      />
      <div
        className="pointer-events-none absolute -bottom-20 -right-20 h-[220px] w-[220px] rounded-full sm:-bottom-24 sm:-right-24 sm:h-[300px] sm:w-[300px] lg:-bottom-[100px] lg:-right-[100px] lg:h-[400px] lg:w-[400px]"
        style={{
          background:
            'radial-gradient(circle, rgba(0,201,167,0.08) 0%, transparent 70%)',
          animation: 'float2 10s ease-in-out infinite',
        }}
      />

      <div className="relative z-[1] mx-auto max-w-[700px]">
        <RevealWrapper>
          <span className="section-label block text-center">Ready to Begin?</span>

          <h2
            style={{
              fontFamily: 'Syne, sans-serif',
              fontWeight: 900,
              letterSpacing: '-0.5px',
              lineHeight: 1.1,
            }}
            className="mb-5 text-[28px] sm:text-[38px] lg:text-[52px]"
          >
            Start Recovering Your
            <br />
            <span className="text-[#00c9a7]">Outstanding Dues Today</span>
          </h2>

          <p className="mx-auto mb-8 max-w-[500px] text-[15px] leading-relaxed text-[#8899bb] sm:mb-10 sm:text-[16px] sm:leading-[1.7] lg:text-[17px]">
            Partner with Elshaddai Enterprises for professional, ethical, and
            results-driven debt recovery services.
          </p>

          <div className="flex flex-col items-center justify-center gap-3 sm:flex-row sm:flex-wrap sm:gap-4">
            <button
              className="btn-primary w-full sm:w-auto"
              onClick={() => scrollTo('#contact')}
            >
              Request a Consultation
            </button>

            <button
              className="btn-outline w-full sm:w-auto"
              onClick={() => scrollTo('#contact')}
            >
              Contact Our Team
            </button>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}