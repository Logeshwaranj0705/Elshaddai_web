import React from 'react'
import RevealWrapper from '../components/RevealWrapper'
import { useScrollReveal } from '../hooks/useScrollReveal'
import { ShieldCheck, Zap, BarChart3 } from 'lucide-react'

const cards = [
  {
    icon: ShieldCheck,
    iconBg: 'rgba(0,201,167,0.1)',
    iconBorder: 'rgba(0,201,167,0.22)',
    iconColor: '#00c9a7',
    title: 'Ethical Collections',
    desc: 'Respectful, compliant, and professional communication at every touchpoint in the recovery process.',
  },
  {
    icon: Zap,
    iconBg: 'rgba(30,111,255,0.1)',
    iconBorder: 'rgba(30,111,255,0.25)',
    iconColor: '#2d8cff',
    title: 'Rapid Recovery',
    desc: 'Structured workflows and experienced teams that accelerate resolution timelines significantly.',
  },
  {
    icon: BarChart3,
    iconBg: 'rgba(201,168,76,0.1)',
    iconBorder: 'rgba(201,168,76,0.25)',
    iconColor: '#c9a84c',
    title: 'Data-Driven Strategy',
    desc: 'Technology-enabled case management with real-time reporting and performance analytics.',
  },
]

const progressItems = [
  { label: 'Recovery Success Rate', value: 94 },
  { label: 'Client Satisfaction', value: 98 },
  { label: 'Compliance Rate', value: 100 },
]

function ProgressBar({ label, value }) {
  const { ref, visible } = useScrollReveal(0.1)

  return (
    <div ref={ref} className="mb-5 w-full">
      <div className="mb-2 flex items-center justify-between text-[13px] text-[#9aa9c7] sm:text-[14px]">
        <span>{label}</span>
        <span className="font-semibold text-[#c9d5ee]">{value}%</span>
      </div>

      <div className="h-[6px] overflow-hidden rounded-full bg-white/10">
        <div
          className="h-full rounded-full"
          style={{
            width: visible ? `${value}%` : '0%',
            transition: 'width 1.2s ease',
            background: 'linear-gradient(90deg, #1e6fff, #00c9a7)',
          }}
        />
      </div>
    </div>
  )
}

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative flex min-h-screen items-center overflow-hidden px-5 py-24 sm:px-8 sm:py-28 lg:px-10 lg:py-[130px]"
    >
      <div className="pointer-events-none absolute left-0 top-1/2 h-[420px] w-[420px] -translate-y-1/2 rounded-full bg-[#1e6fff]/[0.05] blur-[120px]" />
      <div className="pointer-events-none absolute right-0 top-1/3 h-[420px] w-[420px] rounded-full bg-[#00c9a7]/[0.045] blur-[120px]" />

      <div className="relative z-10 mx-auto grid w-full max-w-[1380px] grid-cols-1 items-center gap-16 md:gap-20 lg:grid-cols-[1.05fr_0.95fr] lg:gap-28 xl:gap-36">
        {/* LEFT CONTENT */}
        <RevealWrapper>
          <div className="max-w-[720px]">
            <span className="section-label">About Us</span>

            <h2
              className="mb-8 text-[38px] font-extrabold leading-[1.08] tracking-[-1px] text-[#f0f4ff] sm:text-[52px] lg:text-[68px]"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              A Partner You Can{' '}
              <span className="text-[#00c9a7]">Trust</span>
            </h2>

            <div className="max-w-[680px]">
              <p className="mb-6 text-[15px] leading-[1.9] text-[#9aa9c7] sm:text-[17px]">
                Elshaddai Enterprises is a professional debt collection agency
                dedicated to helping businesses recover outstanding payments in
                an ethical and efficient manner.
              </p>

              <p className="mb-6 text-[15px] leading-[1.9] text-[#9aa9c7] sm:text-[17px]">
                We work with organisations to manage overdue accounts, improve
                cash flow, and reduce financial risk. Our team follows a
                structured and compliant approach, ensuring respectful
                communication with customers while achieving strong recovery
                results.
              </p>

              <p className="mb-12 text-[15px] leading-[1.9] text-[#9aa9c7] sm:text-[17px]">
                We are committed to integrity, transparency, and building
                long-term partnerships with our clients.
              </p>
            </div>

            <div className="w-full max-w-[520px]">
              {progressItems.map((item) => (
                <ProgressBar
                  key={item.label}
                  label={item.label}
                  value={item.value}
                />
              ))}
            </div>
          </div>
        </RevealWrapper>

        {/* RIGHT CARDS */}
        <div className="flex flex-col gap-7 sm:gap-8 lg:gap-9">
          {cards.map((card, i) => {
            const Icon = card.icon

            return (
              <RevealWrapper key={card.title} delay={i * 120}>
                <div className="glass-card glass-card-hover group cursor-default rounded-[26px] border border-white/10 bg-white/[0.04] p-7 shadow-[0_26px_80px_rgba(0,0,0,0.25)] backdrop-blur-xl transition-all duration-300 hover:-translate-y-2 hover:border-[#00c9a7]/25 hover:bg-white/[0.06] sm:p-8 lg:p-9">
                  <div
                    style={{
                      background: card.iconBg,
                      border: `1px solid ${card.iconBorder}`,
                    }}
                    className="mb-6 flex h-[58px] w-[58px] items-center justify-center rounded-[16px] shadow-[0_0_30px_rgba(0,201,167,0.08)]"
                  >
                    <Icon size={25} color={card.iconColor} />
                  </div>

                  <h4
                    className="mb-4 text-[20px] font-extrabold leading-snug text-[#f0f4ff] sm:text-[22px] lg:text-[24px]"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    {card.title}
                  </h4>

                  <p className="text-[15px] leading-[1.85] text-[#9aa9c7] sm:text-[16px]">
                    {card.desc}
                  </p>
                </div>
              </RevealWrapper>
            )
          })}
        </div>
      </div>
    </section>
  )
}