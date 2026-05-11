import React from 'react'
import RevealWrapper from '../components/RevealWrapper'

const purposeItems = [
  {
    label: 'Our Mission',
    color: '#00c9a7',
    title: 'Empowering Recovery. Delivering Results.',
    desc: 'To consistently deliver market-leading recovery solutions by empowering our team with continuous training, smart technology, and client-centric strategies that achieve targets efficiently.',
  },
  {
    label: 'Our Vision',
    color: '#2d8cff',
    title: "India's Most Trusted Recovery Partner.",
    desc: 'To be the most trusted and efficient debt recovery partner for the banking sector across India, setting new standards in ethical collection practices and client satisfaction.',
  },
]

function PurposeBlock({ label, color, title, desc, delay = 0 }) {
  return (
    <RevealWrapper delay={delay}>
      <div className="relative pl-5 sm:pl-6">
        <div
          className="absolute left-0 top-1 h-full w-[2px] rounded-full"
          style={{
            background: `linear-gradient(to bottom, ${color}, transparent)`,
          }}
        />

        <span
          className="mb-4 inline-block rounded-md px-3 py-1.5 text-[9px] font-bold uppercase tracking-[2px] sm:text-[10px]"
          style={{
            color,
            border: `1px solid ${color}33`,
            background: `${color}14`,
          }}
        >
          {label}
        </span>

        <h3
          className="mb-3 max-w-[600px] text-[17px] font-extrabold leading-[1.32] text-[#f0f4ff] sm:text-[19px] lg:text-[20px]"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          {title}
        </h3>

        <p className="max-w-[620px] text-[13px] leading-[1.85] text-[#8899bb] sm:text-[14px]">
          {desc}
        </p>
      </div>
    </RevealWrapper>
  )
}

export default function MissionVisionSection() {
  return (
    <section id="mission" className="w-full">
      <RevealWrapper>
        <div className="max-w-[660px]">
          <span className="section-label">Our Purpose</span>

          <h2
            className="mb-5 text-[28px] font-extrabold leading-[1.08] tracking-[-0.8px] text-[#f0f4ff] sm:text-[36px] lg:text-[44px]"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            Mission & <span className="text-[#00c9a7]">Vision</span>
          </h2>

          <p className="mb-10 max-w-[580px] text-[13px] leading-[1.85] text-[#8899bb] sm:text-[14px]">
            Our purpose is rooted in building trust, improving recovery performance,
            and setting a high standard for ethical and client-focused collection
            services.
          </p>
        </div>
      </RevealWrapper>

      <div className="flex flex-col gap-10 sm:gap-12">
        {purposeItems.map((item, index) => (
          <PurposeBlock
            key={item.label}
            {...item}
            delay={index * 120}
          />
        ))}
      </div>
    </section>
  )
}