import React, { useState } from 'react'
import RevealWrapper from '../components/RevealWrapper'
import {
  Phone,
  Scale,
  FolderOpen,
  Handshake,
  RefreshCw,
  MapPin,
  X,
  ArrowRight,
  CheckCircle,
  Briefcase,
  ShieldCheck,
  Layers,
} from 'lucide-react'

const services = [
  {
    icon: Phone,
    tag: 'Recovery Service',
    title: 'Early-Stage Collections',
    type: 'Customer Outreach',
    process: 'Early Recovery',
    focus: 'Low-Friction',
    desc: 'Proactive outreach at the earliest stage of delinquency to achieve faster, lower-cost recoveries with minimal friction.',
    fullInfo:
      'Our early-stage collection service focuses on quick and respectful customer outreach before accounts become severely overdue. We use structured calling scripts, reminder workflows, payment follow-ups, and professional communication to reduce risk at the earliest stage.',
    points: [
      'Early customer reminder calls',
      'Payment commitment tracking',
      'Low-friction recovery process',
      'Professional customer communication',
      'Daily recovery status updates',
    ],
  },
  {
    icon: Scale,
    tag: 'Recovery Service',
    title: 'Late-Stage / Delinquent Collections',
    type: 'Delinquent Recovery',
    process: 'Escalation Based',
    focus: 'Compliance First',
    desc: 'Specialised strategies for severely overdue accounts, combining negotiation expertise with structured escalation protocols.',
    fullInfo:
      'For late-stage and delinquent accounts, we use a more structured recovery approach with careful escalation, negotiation, and documentation. Our team works to recover overdue payments while maintaining compliance and professionalism.',
    points: [
      'Specialised overdue account handling',
      'Negotiation and settlement follow-ups',
      'Escalation-based recovery workflows',
      'Detailed customer interaction records',
      'Compliance-focused communication',
    ],
  },
  {
    icon: FolderOpen,
    tag: 'Portfolio Support',
    title: 'Bulk Account Management',
    type: 'Portfolio Handling',
    process: 'Bulk Workflow',
    focus: 'Reporting',
    desc: 'Efficiently process large portfolios of overdue accounts with systematic workflows and comprehensive reporting dashboards.',
    fullInfo:
      'Our bulk account management service is designed for banks and financial organisations handling large overdue portfolios. We categorise, prioritise, assign, and monitor cases through systematic workflows.',
    points: [
      'Large portfolio handling',
      'Case categorisation and assignment',
      'Team-based workflow management',
      'Performance tracking',
      'Portfolio-level reporting',
    ],
  },
  {
    icon: Handshake,
    tag: 'Customer Support',
    title: 'Customer Follow-ups & Negotiation',
    type: 'Follow-Up',
    process: 'Negotiation',
    focus: 'Relationship Care',
    desc: 'Empathetic engagement strategies that preserve customer relationships while achieving committed payment arrangements.',
    fullInfo:
      'We focus on respectful customer follow-ups and practical negotiation methods to encourage payment commitments. Our approach balances recovery goals with customer relationship management.',
    points: [
      'Customer payment follow-ups',
      'Promise-to-pay tracking',
      'Negotiated repayment plans',
      'Relationship-focused communication',
      'Follow-up reminders and reporting',
    ],
  },
  {
    icon: RefreshCw,
    tag: 'Operational Support',
    title: 'Recovery Support Services',
    type: 'Admin Support',
    process: 'Documentation',
    focus: 'Resolution',
    desc: 'End-to-end administrative and operational support for your internal teams — compliance tracking, documentation, and resolution reporting.',
    fullInfo:
      'Recovery support services help your internal teams with documentation, tracking, reporting, and administrative recovery workflows. This ensures smoother operations and better visibility.',
    points: [
      'Recovery documentation support',
      'Compliance tracking',
      'Case status updates',
      'Operational assistance',
      'Resolution reporting',
    ],
  },
  {
    icon: MapPin,
    tag: 'Featured Service',
    title: 'Field Collection Services',
    type: 'Field-Based',
    process: 'On-Ground Visits',
    focus: 'Compliance First',
    desc: 'On-ground field executives who conduct in-person visits with professionalism, legal compliance, and results-oriented focus.',
    fullInfo:
      'Our field collection team supports cases that require on-ground visits. Field executives conduct professional visits, collect updates, submit reports, and follow ethical recovery practices.',
    points: [
      'On-ground customer visits',
      'Field visit documentation',
      'Professional executive handling',
      'Location-based recovery support',
      'Compliance-first field process',
    ],
    featured: true,
  },
]

function ServiceMeta({ service }) {
  const items = [
    { icon: Briefcase, text: service.type },
    { icon: Layers, text: service.process },
    { icon: ShieldCheck, text: service.focus },
  ]

  return (
    <div className="flex flex-wrap gap-2.5">
      {items.map((item) => {
        const Icon = item.icon

        return (
          <span
            key={item.text}
            className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[11px] font-semibold text-[#b5c2dc] sm:text-[12px]"
          >
            <Icon size={12} color="#00c9a7" />
            {item.text}
          </span>
        )
      })}
    </div>
  )
}

function ServiceModal({ service, onClose }) {
  const isFeatured = service.featured
  const tagColor = isFeatured ? '#00c9a7' : '#2d8cff'

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/25 px-4 pb-5 pt-[78px] backdrop-blur-md sm:px-6 sm:pb-6 sm:pt-[92px] lg:px-8"
    >
      <style>
        {`
          .service-spline-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            opacity: 1;
            transform: scale(1.20);
            pointer-events: none;
            filter: saturate(1.2) brightness(1);
          }

          .service-modal-career-style {
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.08),
              0 34px 110px rgba(0,0,0,0.55),
              0 0 80px rgba(0,201,167,0.12);
          }

          .service-modal-career-style::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 24px;
            padding: 1px;
            background: linear-gradient(
              135deg,
              rgba(0, 201, 167, 0.48),
              rgba(45, 140, 255, 0.22),
              rgba(255,255,255,0.07),
              rgba(0, 201, 167, 0.2)
            );
            -webkit-mask:
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            z-index: 5;
          }

          .service-modal-shine {
            background: linear-gradient(
              115deg,
              transparent 0%,
              transparent 31%,
              rgba(255,255,255,0.08) 42%,
              rgba(255,255,255,0.20) 48%,
              rgba(0,201,167,0.14) 53%,
              rgba(45,140,255,0.12) 58%,
              transparent 70%,
              transparent 100%
            );
            transform: translateX(-150%);
            animation: serviceModalShine 5s ease-in-out infinite;
            mix-blend-mode: screen;
          }

          @keyframes serviceModalShine {
            0% { transform: translateX(-150%); opacity: 0; }
            12% { opacity: 1; }
            34% { transform: translateX(150%); opacity: 1; }
            45% { transform: translateX(150%); opacity: 0; }
            100% { transform: translateX(150%); opacity: 0; }
          }

          .service-modal-scroll::-webkit-scrollbar {
            width: 6px;
          }

          .service-modal-scroll::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.04);
            border-radius: 999px;
          }

          .service-modal-scroll::-webkit-scrollbar-thumb {
            background: rgba(0,201,167,0.35);
            border-radius: 999px;
          }
        `}
      </style>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <div className="hidden h-full w-full md:block">
          <spline-viewer
            class="service-spline-bg"
            url="https://prod.spline.design/KTYKtPwyBnsIeogn/scene.splinecode"
          ></spline-viewer>
        </div>

        <div className="absolute inset-0 bg-[#050d1a] md:hidden" />
        <div className="absolute left-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-[#1e6fff]/[0.14] blur-[110px] md:hidden" />
        <div className="absolute bottom-[-140px] right-[-140px] h-[380px] w-[380px] rounded-full bg-[#00c9a7]/[0.12] blur-[120px] md:hidden" />
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="service-modal-career-style relative z-10 flex max-h-[calc(100dvh-112px)] w-full max-w-[760px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#071224]/55 backdrop-blur-2xl"
      >
        <div className="service-modal-shine pointer-events-none absolute inset-0 z-[1]" />

        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-[80] flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#071224]/85 text-[#f0f4ff] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-[#00c9a7]/45 hover:bg-[#00c9a7]/15 sm:right-4 sm:top-4"
          aria-label="Close service details"
          type="button"
        >
          <X size={19} />
        </button>

        <div className="service-modal-scroll relative z-10 overflow-y-auto px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10">
          <span
            className="mb-5 inline-flex rounded-lg px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[2px]"
            style={{
              color: tagColor,
              border: `1px solid ${tagColor}40`,
              background: `${tagColor}18`,
            }}
          >
            {service.tag}
          </span>

          <h2
            className="mb-5 max-w-[620px] pr-12 text-[24px] font-extrabold leading-[1.15] tracking-[-0.6px] text-[#f0f4ff] sm:text-[30px] lg:text-[34px]"
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {service.title}
          </h2>

          <div className="mb-7">
            <ServiceMeta service={service} />
          </div>

          <p className="mb-7 text-[13px] leading-[1.85] text-[#9aa9c7] sm:text-[14px]">
            {service.fullInfo}
          </p>

          <div className="mb-8 space-y-3">
            <h3 className="text-[13px] font-extrabold uppercase tracking-[2px] text-[#f0f4ff]">
              Key Service Highlights
            </h3>

            <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
              {service.points.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-3 rounded-[14px] border border-white/10 bg-white/[0.04] p-3.5 backdrop-blur-xl"
                >
                  <CheckCircle
                    className="mt-[2px] shrink-0"
                    size={16}
                    color="#00c9a7"
                  />
                  <span className="text-[13px] leading-relaxed text-[#c9d5ee]">
                    {point}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={onClose}
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-[14px] bg-gradient-to-r from-[#1e6fff] to-[#00c9a7] px-6 py-3.5 text-[14px] font-extrabold text-white shadow-[0_18px_50px_rgba(30,111,255,0.25)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_24px_70px_rgba(0,201,167,0.28)] sm:rounded-[16px]"
            type="button"
          >
            <span className="absolute inset-0 translate-x-[-140%] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[140%]" />
            <span className="relative z-10">Got It</span>
            <ArrowRight className="relative z-10" size={17} />
          </button>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ icon: Icon, title, desc, featured, delay, onOpen }) {
  const [hovered, setHovered] = useState(false)

  return (
    <RevealWrapper delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="relative flex h-full min-h-[260px] cursor-pointer flex-col overflow-hidden rounded-[18px] p-5 transition-all duration-300 sm:rounded-[20px] sm:p-7 lg:p-9"
        style={{
          background: featured
            ? 'linear-gradient(135deg, rgba(30,111,255,0.1), rgba(0,201,167,0.08))'
            : hovered
              ? 'rgba(255,255,255,0.08)'
              : 'rgba(255,255,255,0.04)',
          border: featured
            ? '1px solid rgba(30,111,255,0.25)'
            : `1px solid ${
                hovered
                  ? 'rgba(30,111,255,0.3)'
                  : 'rgba(255,255,255,0.08)'
              }`,
          transform: hovered ? 'translateY(-6px)' : 'translateY(0)',
          boxShadow: hovered ? '0 20px 60px rgba(30,111,255,0.12)' : 'none',
        }}
      >
        <div
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            height: '1px',
            background:
              'linear-gradient(90deg, transparent, #2d8cff, transparent)',
            opacity: hovered ? 1 : 0,
            transition: 'opacity 0.3s',
          }}
        />

        <div
          className="mb-5 flex h-[48px] w-[48px] items-center justify-center rounded-[12px] sm:mb-6 sm:h-[52px] sm:w-[52px] lg:h-[56px] lg:w-[56px] lg:rounded-[14px]"
          style={{
            background: featured
              ? 'rgba(0,201,167,0.12)'
              : 'rgba(30,111,255,0.12)',
            border: `1px solid ${
              featured ? 'rgba(0,201,167,0.2)' : 'rgba(30,111,255,0.2)'
            }`,
          }}
        >
          <Icon size={22} color={featured ? '#00c9a7' : '#2d8cff'} />
        </div>

        <h3
          style={{ fontFamily: 'Syne, sans-serif' }}
          className="mb-3 text-[17px] font-bold text-[#f0f4ff] sm:text-[18px]"
        >
          {title}
        </h3>

        <p className="mb-6 text-[13px] leading-relaxed text-[#8899bb] sm:text-[14px] sm:leading-[1.65]">
          {desc}
        </p>

        <button
          type="button"
          onClick={onOpen}
          className="relative z-10 mt-auto flex w-fit items-center text-[12px] font-semibold text-[#00c9a7] transition-all sm:text-[13px]"
          style={{
            gap: hovered ? '10px' : '6px',
          }}
        >
          View Info <ArrowRight size={14} />
        </button>
      </div>
    </RevealWrapper>
  )
}

export default function ServicesSection() {
  const [activeService, setActiveService] = useState(null)

  return (
    <section
      id="services"
      className="px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[100px]"
    >
      {activeService && (
        <ServiceModal
          service={activeService}
          onClose={() => setActiveService(null)}
        />
      )}

      <div className="mx-auto max-w-[75%]">
        <div className="mx-auto max-w-[600px] text-center">
          <RevealWrapper>
            <span className="section-label block text-center">
              What We Offer
            </span>

            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                letterSpacing: '-0.5px',
                lineHeight: 1.15,
              }}
              className="mb-10 text-[28px] sm:mb-12 sm:text-[36px] lg:mb-[60px] lg:text-[48px]"
            >
              Enterprise-Grade{' '}
              <span className="text-[#2d8cff]">Recovery Services</span>
            </h2>
          </RevealWrapper>
        </div>

        <div className="grid grid-cols-1 gap-4 sm:gap-5 md:grid-cols-2 lg:gap-6 xl:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.title}
              {...service}
              delay={(i % 3) * 100}
              onOpen={() => setActiveService(service)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}