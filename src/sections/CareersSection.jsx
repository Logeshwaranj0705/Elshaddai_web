import React, { useEffect, useState } from 'react'
import RevealWrapper from '../components/RevealWrapper'
import {
  X,
  PhoneCall,
  MapPin,
  Users,
  Briefcase,
  Award,
  ArrowRight,
  Send,
} from 'lucide-react'

const roles = [
  {
    icon: PhoneCall,
    tag: 'Open Role',
    title: 'Tele Collection Executive',
    type: 'Full-Time',
    location: 'Chennai, TN',
    level: 'Entry – Mid Level',
    shortDesc:
      'Handle inbound and outbound collection calls with professionalism. Negotiate payment plans, update records, and achieve daily recovery targets.',
    fullDesc: `We are looking for motivated Tele Collection Executives to join our growing team.

Key Responsibilities:
• Make outbound calls to customers with overdue accounts
• Receive inbound calls and handle payment queries professionally
• Negotiate payment plans and commitments within approved guidelines
• Accurately update customer records in the CRM system
• Meet daily, weekly, and monthly recovery targets
• Maintain compliance with all regulatory and company guidelines
• Escalate unresolved cases to the Team Leader as needed

Requirements:
• Minimum 10+2 qualification; graduate preferred
• 0–2 years of experience in collections, BPO, or customer service
• Strong communication skills in Tamil and English
• Ability to handle objections calmly and professionally
• Basic computer literacy

What We Offer:
• Competitive salary + performance incentives
• Structured training programme
• Career growth opportunities within 6–12 months
• Supportive and professional work environment`,
  },
  {
    icon: MapPin,
    tag: 'Open Role',
    title: 'Field Collection Executive',
    type: 'Full-Time',
    location: 'Field-Based',
    level: 'Mid Level',
    shortDesc:
      'Conduct in-person visits to customers for payment collection and resolution. Maintain professionalism, safety compliance, and thorough documentation.',
    fullDesc: `We are hiring Field Collection Executives with strong interpersonal skills and a results-oriented mindset.

Key Responsibilities:
• Visit customer locations as assigned for payment collection
• Conduct respectful, compliant, and professional interactions
• Negotiate and secure payment commitments or settlements
• Collect and submit accurate field visit reports daily
• Coordinate with the office team on case status and escalations
• Adhere strictly to legal and ethical collection guidelines
• Meet daily visit targets and collection milestones

Requirements:
• Minimum 10+2 qualification
• 1–3 years of field collection or field sales experience preferred
• Valid two-wheeler driving licence
• Strong knowledge of the assigned geography
• Physical fitness and willingness to travel daily
• Tamil and basic English communication skills

What We Offer:
• Fixed salary + fuel allowance + performance incentive
• Company-issued SIM and field kit
• Daily attendance bonus
• Clear promotion path to Senior Executive / Team Leader`,
  },
  {
    icon: Users,
    tag: 'Leadership',
    title: 'Team Leader – Collections',
    type: 'Full-Time',
    location: 'Chennai, TN',
    level: 'Senior Level',
    shortDesc:
      'Lead and coach a team of collection executives. Set targets, monitor performance, provide guidance, and drive team results consistently.',
    fullDesc: `We are seeking an experienced Team Leader to manage and motivate a high-performance collections team.

Key Responsibilities:
• Lead a team of 10–15 Tele / Field Collection Executives
• Set individual and team daily/monthly targets
• Monitor calls and field visits for quality and compliance
• Provide coaching, feedback, and on-the-job training
• Prepare and present daily performance reports to management
• Resolve escalated customer disputes professionally
• Ensure full team compliance with regulatory guidelines
• Identify process improvement opportunities

Requirements:
• Graduate in any discipline
• Minimum 3–5 years in collections with 1–2 years in a supervisory role
• Strong knowledge of debt collection processes and compliance
• Excellent leadership, communication, and analytical skills
• Proficient in MS Excel and collection CRM tools
• Fluency in Tamil and English

What We Offer:
• Competitive salary commensurate with experience
• Managerial incentive structure
• Leadership development programme
• Direct reporting to Operations Manager`,
  },
]

function RoleMeta({ role }) {
  const items = [
    { icon: Briefcase, text: role.type },
    { icon: MapPin, text: role.location },
    { icon: Award, text: role.level },
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

function fillContactForm(role) {
  const careerData = {
    company: `Career Application - ${role.title}`,
    message: `Hello Elshaddai Enterprises Team,

I am interested in applying for the ${role.title} position.

Role Details:
• Type: ${role.type}
• Location: ${role.location}
• Level: ${role.level}

Please contact me with the next steps.

Thank you.`,
  }

  window.dispatchEvent(
    new CustomEvent('career-apply', {
      detail: careerData,
    })
  )

  setTimeout(() => {
    const contactSection = document.querySelector('#contact')

    if (contactSection) {
      const navbarHeight = 90
      const elementTop =
        contactSection.getBoundingClientRect().top + window.scrollY

      window.scrollTo({
        top: elementTop - navbarHeight,
        behavior: 'smooth',
      })
    }
  }, 100)
}

function JobModal({ role, onClose }) {
  const isLeader = role.tag === 'Leadership'
  const tagColor = isLeader ? '#2d8cff' : '#00c9a7'

  const handleApply = () => {
    fillContactForm(role)
    onClose()
  }

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-[9999] flex items-center justify-center overflow-hidden bg-black/75 px-4 pb-5 pt-[78px] backdrop-blur-xl sm:px-6 sm:pb-6 sm:pt-[92px] lg:px-8"
    >
      <style>
        {`
          .career-spline-bg {
            position: absolute;
            inset: 0;
            width: 100%;
            height: 100%;
            opacity: 1;
            transform: scale(1.20);
            pointer-events: none;

          }

          .career-modal {
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.08),
              0 34px 110px rgba(0,0,0,0.55),
              0 0 80px rgba(0,201,167,0.12);
          }

          .career-modal::before {
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

          .career-modal-shine {
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
            animation: modalShine 5s ease-in-out infinite;
            mix-blend-mode: screen;
          }

          @keyframes modalShine {
            0% { transform: translateX(-150%); opacity: 0; }
            12% { opacity: 1; }
            34% { transform: translateX(150%); opacity: 1; }
            45% { transform: translateX(150%); opacity: 0; }
            100% { transform: translateX(150%); opacity: 0; }
          }

          .career-modal-scroll::-webkit-scrollbar {
            width: 6px;
          }

          .career-modal-scroll::-webkit-scrollbar-track {
            background: rgba(255,255,255,0.04);
            border-radius: 999px;
          }

          .career-modal-scroll::-webkit-scrollbar-thumb {
            background: rgba(0,201,167,0.35);
            border-radius: 999px;
          }
        `}
      </style>

      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        {/* Spline only on tablet / desktop */}
        <div className="hidden h-full w-full md:block">
          <spline-viewer
            class="career-spline-bg"
            url="https://prod.spline.design/KTYKtPwyBnsIeogn/scene.splinecode"
          ></spline-viewer>
        </div>

        {/* Desktop overlay */}
        <div className="absolute inset-0 hidden bg-[#050d1a]/62 md:block" />

        {/* Mobile static background — no Spline animation */}
        <div className="absolute inset-0 bg-[#050d1a] md:hidden" />
        <div className="absolute left-[-120px] top-[-120px] h-[360px] w-[360px] rounded-full bg-[#1e6fff]/[0.14] blur-[110px] md:hidden" />
        <div className="absolute bottom-[-140px] right-[-140px] h-[380px] w-[380px] rounded-full bg-[#00c9a7]/[0.12] blur-[120px] md:hidden" />
      </div>

      <div
        onClick={(e) => e.stopPropagation()}
        className="career-modal relative z-10 flex max-h-[calc(100dvh-112px)] w-full max-w-[760px] flex-col overflow-hidden rounded-[24px] border border-white/10 bg-[#071224]/55 backdrop-blur-2xl"
      >
        <div className="career-modal-shine pointer-events-none absolute inset-0 z-[1]" />

        <button
          onClick={onClose}
          className="absolute right-3 top-3 z-[80] flex h-10 w-10 items-center justify-center rounded-full border border-white/15 bg-[#071224]/85 text-[#f0f4ff] shadow-[0_10px_30px_rgba(0,0,0,0.35)] backdrop-blur-xl transition-all duration-300 hover:border-[#00c9a7]/45 hover:bg-[#00c9a7]/15 sm:right-4 sm:top-4"
          aria-label="Close job details"
          type="button"
        >
          <X size={19} />
        </button>

        <div
          className={`career-modal-scroll relative z-10 overflow-y-auto ${
            isLeader
              ? 'px-5 pb-5 pt-4 sm:px-7 sm:pb-6 sm:pt-5 lg:px-9 lg:pt-6'
              : 'px-5 py-7 sm:px-8 sm:py-9 lg:px-10 lg:py-10'
          }`}
        >
          <span
            className={`inline-flex rounded-lg px-3.5 py-2 text-[10px] font-extrabold uppercase tracking-[2px] ${
              isLeader ? 'mb-3' : 'mb-5'
            }`}
            style={{
              color: tagColor,
              border: `1px solid ${tagColor}40`,
              background: `${tagColor}18`,
            }}
          >
            {role.tag}
          </span>

          <h2
            className={`max-w-[620px] pr-12 font-extrabold leading-[1.15] tracking-[-0.6px] text-[#f0f4ff] ${
              isLeader
                ? 'mb-3 text-[22px] sm:text-[27px] lg:text-[30px]'
                : 'mb-5 text-[24px] sm:text-[30px] lg:text-[34px]'
            }`}
            style={{ fontFamily: 'Syne, sans-serif' }}
          >
            {role.title}
          </h2>

          <div className={isLeader ? 'mb-4' : 'mb-7'}>
            <RoleMeta role={role} />
          </div>

          <pre
            className={`whitespace-pre-wrap font-sans text-[#9aa9c7] ${
              isLeader
                ? 'mb-5 text-[12.5px] leading-[1.62] sm:text-[13px]'
                : 'mb-8 text-[13px] leading-[1.85] sm:text-[14px]'
            }`}
          >
            {role.fullDesc}
          </pre>

          <button
            className="group relative flex w-full items-center justify-center gap-2 overflow-hidden rounded-[14px] bg-gradient-to-r from-[#1e6fff] to-[#00c9a7] px-6 py-3.5 text-[14px] font-extrabold text-white shadow-[0_18px_50px_rgba(30,111,255,0.25)] transition-all duration-300 hover:scale-[1.015] hover:shadow-[0_24px_70px_rgba(0,201,167,0.28)] sm:rounded-[16px]"
            onClick={handleApply}
            type="button"
          >
            <span className="absolute inset-0 translate-x-[-140%] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover:translate-x-[140%]" />
            <Send className="relative z-10" size={17} />
            <span className="relative z-10">Apply for This Role</span>
          </button>
        </div>
      </div>
    </div>
  )
}

function JobCard({ role, delay, index, onOpen }) {
  const Icon = role.icon
  const tagColor = role.tag === 'Leadership' ? '#2d8cff' : '#00c9a7'

  return (
    <RevealWrapper delay={delay}>
      <article
        onClick={onOpen}
        className="career-card group relative flex h-full min-h-[430px] cursor-pointer flex-col overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl transition-all duration-500 hover:-translate-y-3 hover:border-[#00c9a7]/40 hover:bg-white/[0.065] hover:shadow-[0_30px_95px_rgba(0,0,0,0.42),0_0_60px_rgba(0,201,167,0.14)] sm:p-7 lg:p-8 xl:p-9"
        style={{
          '--shine-delay': `${index * 0.65}s`,
        }}
      >
        <div className="pointer-events-none absolute -left-20 -top-20 h-[230px] w-[230px] rounded-full bg-[#2d8cff]/[0.12] blur-[80px] transition-all duration-700 group-hover:bg-[#2d8cff]/[0.2]" />
        <div className="pointer-events-none absolute -bottom-20 -right-20 h-[250px] w-[250px] rounded-full bg-[#00c9a7]/[0.1] blur-[85px] transition-all duration-700 group-hover:bg-[#00c9a7]/[0.2]" />

        <div className="career-card-shine pointer-events-none absolute inset-0 z-[1]" />
        <div className="career-hover-glow pointer-events-none absolute inset-0 z-[2] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

        <div className="pointer-events-none absolute inset-x-0 top-0 z-[3] h-px bg-gradient-to-r from-transparent via-[#00c9a7]/70 to-transparent opacity-70" />

        <div
          className="relative z-10 mb-6 flex h-[62px] w-[62px] items-center justify-center rounded-[18px] border shadow-[0_0_32px_rgba(0,201,167,0.12)] transition-all duration-500 group-hover:scale-105"
          style={{
            color: tagColor,
            borderColor: `${tagColor}40`,
            background: `${tagColor}16`,
          }}
        >
          <Icon size={26} color={tagColor} />
        </div>

        <span
          className="relative z-10 mb-5 inline-flex w-fit rounded-lg px-3.5 py-1.5 text-[10px] font-extrabold uppercase tracking-[2px]"
          style={{
            color: tagColor,
            border: `1px solid ${tagColor}40`,
            background: `${tagColor}18`,
          }}
        >
          {role.tag}
        </span>

        <h3
          className="relative z-10 mb-4 text-[21px] font-extrabold leading-[1.25] tracking-[-0.4px] text-[#f0f4ff] sm:text-[23px]"
          style={{ fontFamily: 'Syne, sans-serif' }}
        >
          {role.title}
        </h3>

        <p className="relative z-10 mb-7 text-[14px] leading-[1.8] text-[#9aa9c7] sm:text-[15px]">
          {role.shortDesc}
        </p>

        <div className="relative z-10 mb-8">
          <RoleMeta role={role} />
        </div>

        <button
          onClick={(e) => {
            e.stopPropagation()
            onOpen()
          }}
          className="group/button relative z-10 mt-auto flex w-full items-center justify-center gap-2 overflow-hidden rounded-[14px] bg-gradient-to-r from-[#1e6fff] to-[#00c9a7] px-5 py-3.5 text-[14px] font-extrabold text-white shadow-[0_18px_50px_rgba(30,111,255,0.24)] transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_24px_70px_rgba(0,201,167,0.28)]"
          type="button"
        >
          <span className="absolute inset-0 translate-x-[-140%] bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 group-hover/button:translate-x-[140%]" />
          <span className="relative z-10">View & Apply</span>
          <ArrowRight className="relative z-10" size={17} />
        </button>
      </article>
    </RevealWrapper>
  )
}

export default function CareersSection({ setParticlesEnabled }) {
  const [activeRole, setActiveRole] = useState(null)

  useEffect(() => {
    if (!setParticlesEnabled) return

    const isDesktop = window.matchMedia('(min-width: 768px)').matches

    if (activeRole && isDesktop) {
      setParticlesEnabled(false)
    } else {
      setParticlesEnabled(true)
    }

    return () => {
      setParticlesEnabled(true)
    }
  }, [activeRole, setParticlesEnabled])

  const closeModal = () => {
    setActiveRole(null)

    if (setParticlesEnabled) {
      setParticlesEnabled(true)
    }
  }

  const openModal = (role) => {
    const isDesktop = window.matchMedia('(min-width: 768px)').matches

    if (setParticlesEnabled && isDesktop) {
      setParticlesEnabled(false)
    }

    setActiveRole(role)
  }

  return (
    <section
      id="careers"
      className="relative overflow-hidden px-5 py-20 sm:px-8 sm:py-24 lg:px-10 lg:py-[120px]"
    >
      <style>
        {`
          .career-card {
            box-shadow:
              inset 0 1px 0 rgba(255,255,255,0.08),
              0 24px 80px rgba(0,0,0,0.28);
          }

          .career-card::before {
            content: "";
            position: absolute;
            inset: 0;
            border-radius: 28px;
            padding: 1px;
            background: linear-gradient(
              135deg,
              rgba(0, 201, 167, 0.45),
              rgba(45, 140, 255, 0.2),
              rgba(255, 255, 255, 0.07),
              rgba(0, 201, 167, 0.18)
            );
            -webkit-mask:
              linear-gradient(#fff 0 0) content-box,
              linear-gradient(#fff 0 0);
            -webkit-mask-composite: xor;
            mask-composite: exclude;
            pointer-events: none;
            opacity: 0.65;
            z-index: 4;
          }

          .career-card-shine {
            background: linear-gradient(
              115deg,
              transparent 0%,
              transparent 28%,
              rgba(255,255,255,0.00) 36%,
              rgba(255,255,255,0.16) 43%,
              rgba(0,201,167,0.24) 48%,
              rgba(45,140,255,0.16) 53%,
              rgba(255,255,255,0.1) 58%,
              transparent 68%,
              transparent 100%
            );
            transform: translateX(-160%);
            animation: careerCardShine 5s ease-in-out infinite;
            animation-delay: var(--shine-delay);
            opacity: 0;
            mix-blend-mode: screen;
          }

          .career-hover-glow {
            background: radial-gradient(
              circle at 30% 15%,
              rgba(255,255,255,0.14),
              rgba(0,201,167,0.1) 26%,
              transparent 50%
            );
            mix-blend-mode: screen;
          }

          .career-card:hover .career-card-shine {
            animation: careerHoverSweep 1.05s ease-in-out forwards;
          }

          @keyframes careerCardShine {
            0% { transform: translateX(-160%); opacity: 0; }
            12% { opacity: 1; }
            34% { transform: translateX(160%); opacity: 1; }
            42% { transform: translateX(160%); opacity: 0; }
            100% { transform: translateX(160%); opacity: 0; }
          }

          @keyframes careerHoverSweep {
            0% { transform: translateX(-160%); opacity: 0; }
            18% { opacity: 1; }
            100% { transform: translateX(160%); opacity: 0; }
          }
        `}
      </style>

      {activeRole && <JobModal role={activeRole} onClose={closeModal} />}

      <div className="relative z-10 mx-auto max-w-[1380px]">
        <RevealWrapper>
          <div className="mx-auto mb-14 max-w-[760px] text-center lg:mb-[72px]">
            <span className="section-label block text-center">
              Join Our Team
            </span>

            <h2
              className="mb-6 text-[34px] font-extrabold leading-[1.06] tracking-[-1px] text-[#f0f4ff] sm:text-[46px] lg:text-[58px]"
              style={{ fontFamily: 'Syne, sans-serif' }}
            >
              Build Your Career With{' '}
              <span className="text-[#00c9a7]">Purpose</span>
            </h2>

            <p className="mx-auto max-w-[680px] text-[15px] leading-[1.85] text-[#9aa9c7] sm:text-[16px]">
              We are always looking for driven, ethical, and professional
              individuals to join our growing team and build meaningful careers
              in recovery services.
            </p>
          </div>
        </RevealWrapper>

        <div className="grid grid-cols-1 gap-7 md:grid-cols-2 xl:grid-cols-3 xl:gap-8">
          {roles.map((role, index) => (
            <JobCard
              key={role.title}
              role={role}
              delay={index * 120}
              index={index}
              onOpen={() => openModal(role)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}