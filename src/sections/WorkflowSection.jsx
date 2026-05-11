import React, { useEffect } from 'react'
import RevealWrapper from '../components/RevealWrapper'
import AOS from 'aos'
import 'aos/dist/aos.css'

const steps = [
  {
    num: '01',
    title: 'Account Assignment',
    desc: 'Client portfolios are onboarded, categorised by delinquency stage, and assigned to specialised recovery teams through our case management system.',
  },
  {
    num: '02',
    title: 'Tele-Collection Outreach',
    desc: 'Trained tele-callers initiate contact using compliant communication protocols, assessing willingness and ability to pay while maintaining professionalism.',
  },
  {
    num: '03',
    title: 'Negotiation & Follow-up',
    desc: 'Payment plans are structured, negotiated, and followed up systematically through multiple touchpoints to maximise commitment and conversion.',
  },
  {
    num: '04',
    title: 'Field Visit if Required',
    desc: 'For high-priority accounts, trained field executives conduct in-person visits with full compliance documentation and de-escalation expertise.',
  },
  {
    num: '05',
    title: 'Resolution & Recovery Reporting',
    desc: 'Completed cases are documented with full audit trails, payment confirmations, and performance reports delivered to the client in real-time.',
  },
]

export default function WorkflowSection() {
  useEffect(() => {
    AOS.init({
      duration: 850,
      once: true,
      easing: 'ease-out-cubic',
      offset: 80,
    })
  }, [])

  return (
    <section
      id="workflow"
      className="relative overflow-hidden px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[110px]"
    >
      {/* Soft background glow */}
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#1e6fff]/[0.06] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-20 h-[360px] w-[360px] rounded-full bg-[#00c9a7]/[0.05] blur-[110px]" />

      <div className="relative z-10 mx-auto max-w-[1180px]">
        {/* Header */}
        <RevealWrapper>
          <div className="mx-auto mb-14 max-w-[760px] text-center sm:mb-16 lg:mb-20">
            <span className="section-label block text-center">
              Our Process
            </span>

            <h2
              className="mb-5 text-[32px] font-extrabold leading-[1.08] tracking-[-0.8px] text-[#f0f4ff] sm:text-[42px] lg:text-[56px]"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              How It <span className="text-[#2d8cff]">Works</span>
            </h2>

            <p className="mx-auto max-w-[620px] text-[14px] leading-[1.8] text-[#8899bb] sm:text-[15px] lg:text-[16px]">
              A proven, structured approach to every case — from account
              assignment to recovery reporting with clear communication and
              compliant follow-up at every stage.
            </p>
          </div>
        </RevealWrapper>

        {/* Timeline wrapper */}
        <div className="relative">
          {/* Center line desktop */}
          <div className="absolute left-1/2 top-0 hidden h-full w-[1px] -translate-x-1/2 bg-gradient-to-b from-transparent via-[#2d8cff]/40 to-transparent md:block" />

          {/* Left line mobile */}
          <div className="absolute left-[18px] top-0 h-full w-[1px] bg-gradient-to-b from-transparent via-[#2d8cff]/40 to-transparent md:hidden" />

          <div className="space-y-8 sm:space-y-10 lg:space-y-12">
            {steps.map((step, index) => {
              const isLeft = index % 2 === 0

              return (
                <div
                  key={step.num}
                  data-aos={isLeft ? 'fade-right' : 'fade-left'}
                  className={`relative grid grid-cols-1 md:grid-cols-2 ${
                    isLeft ? '' : 'md:[&>*]:col-start-2'
                  }`}
                >
                  {/* Timeline dot desktop */}
                  <div className="absolute left-1/2 top-8 hidden h-4 w-4 -translate-x-1/2 rounded-full border border-[#2d8cff]/60 bg-[#050d1a] shadow-[0_0_22px_rgba(45,140,255,0.8)] md:block">
                    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00c9a7]" />
                  </div>

                  {/* Timeline dot mobile */}
                  <div className="absolute left-[10px] top-7 h-4 w-4 rounded-full border border-[#2d8cff]/60 bg-[#050d1a] shadow-[0_0_18px_rgba(45,140,255,0.7)] md:hidden">
                    <div className="absolute left-1/2 top-1/2 h-2 w-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00c9a7]" />
                  </div>

                  {/* Step content */}
                  <div
                    className={`relative ml-10 md:ml-0 ${
                      isLeft
                        ? 'md:mr-14 lg:mr-20'
                        : 'md:ml-14 lg:ml-20'
                    }`}
                  >
                    <div className="group relative overflow-hidden rounded-[22px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00c9a7]/30 hover:bg-white/[0.055] hover:shadow-[0_24px_70px_rgba(0,0,0,0.35)] sm:p-6 lg:p-7">
                      {/* subtle top glow */}
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00c9a7]/50 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                      <div className="mb-4 flex items-center gap-4">
                        <span
                          className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[#00c9a7]/25 bg-[#00c9a7]/10 text-[12px] font-extrabold tracking-[1px] text-[#00c9a7] shadow-[0_0_24px_rgba(0,201,167,0.12)]"
                          style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                          {step.num}
                        </span>

                        <h3
                          className="text-[17px] font-extrabold leading-snug text-[#f0f4ff] sm:text-[19px] lg:text-[21px]"
                          style={{ fontFamily: 'Syne, sans-serif' }}
                        >
                          {step.title}
                        </h3>
                      </div>

                      <p className="text-[13px] leading-[1.8] text-[#8899bb] sm:text-[14px] lg:text-[10px]">
                        {step.desc}
                      </p>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </div>
    </section>
  )
}