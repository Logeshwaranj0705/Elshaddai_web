import React, { useEffect, useState } from 'react'
import RevealWrapper from '../components/RevealWrapper'
import { Phone, Mail, MapPin } from 'lucide-react'

const contactItems = [
  {
    icon: Phone,
    title: 'Phone',
    value: '+91 9384390923',
    href: 'tel:+919876543210',
  },
  {
    icon: Mail,
    title: 'Email',
    value: 'hrelshaddai78@gmail.com',
    href: 'mailto:hrelshaddai78@gmail.com',
  },
  {
    icon: MapPin,
    title: 'Address',
    value: 'No.13/8, Udhayam Royal Tower, Tanjore Road, T.Nagar, chennai-17',
    href: null,
  },
]

const emptyForm = {
  name: '',
  email: '',
  company: '',
  message: '',
}

function ContactInfoCard({ icon: Icon, title, value, href, delay }) {
  const [hovered, setHovered] = useState(false)

  return (
    <RevealWrapper delay={delay}>
      <div
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        className="flex items-start gap-4 rounded-[14px] p-4 transition-all duration-300 sm:p-5"
        style={{
          background: hovered
            ? 'rgba(255,255,255,0.08)'
            : 'rgba(255,255,255,0.04)',
          border: `1px solid ${
            hovered ? 'rgba(255,255,255,0.14)' : 'rgba(255,255,255,0.08)'
          }`,
        }}
      >
        <div
          className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-[10px]"
          style={{
            background: 'rgba(30,111,255,0.12)',
            border: '1px solid rgba(30,111,255,0.2)',
          }}
        >
          <Icon size={18} color="#2d8cff" />
        </div>

        <div>
          <h4 className="mb-1 text-[14px] font-bold text-[#f0f4ff]">
            {title}
          </h4>

          {href ? (
            <a
              href={href}
              className="break-all text-[13px] leading-relaxed text-[#8899bb] no-underline"
            >
              {value}
            </a>
          ) : (
            <p className="text-[13px] leading-relaxed text-[#8899bb]">
              {value}
            </p>
          )}
        </div>
      </div>
    </RevealWrapper>
  )
}

export default function ContactSection() {
  const [formData, setFormData] = useState(emptyForm)
  const [submitted, setSubmitted] = useState(false)

  useEffect(() => {
    const handleCareerApply = (event) => {
      const data = event.detail

      if (!data) return

      setSubmitted(false)

      setFormData((prev) => ({
        ...prev,
        company: data.company || '',
        message: data.message || '',
      }))
    }

    window.addEventListener('career-apply', handleCareerApply)

    return () => {
      window.removeEventListener('career-apply', handleCareerApply)
    }
  }, [])

  const handleChange = (e) => {
    const { name, value } = e.target

    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    setSubmitted(true)

    setTimeout(() => {
      setSubmitted(false)
    }, 4000)

    setFormData(emptyForm)
  }

  const inputStyle = {
    width: '100%',
    background: 'rgba(255,255,255,0.04)',
    border: '1px solid rgba(255,255,255,0.08)',
    borderRadius: '10px',
    padding: '12px 16px',
    color: '#f0f4ff',
    fontSize: '14px',
    fontFamily: 'DM Sans, sans-serif',
    transition: 'border-color 0.2s',
  }

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    color: '#8899bb',
    marginBottom: '8px',
    fontWeight: 500,
  }

  return (
    <section
      id="contact"
      className="bg-[#071224] px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[100px]"
    >
      <div className="mx-auto grid max-w-[1100px] grid-cols-1 items-start gap-10 md:gap-14 lg:grid-cols-2 lg:gap-20">
        <div>
          <RevealWrapper>
            <span className="section-label">Contact</span>

            <h2
              style={{
                fontFamily: 'Syne, sans-serif',
                fontWeight: 800,
                letterSpacing: '-0.5px',
                lineHeight: 1.15,
              }}
              className="mb-3 text-[28px] sm:text-[36px] lg:text-[48px]"
            >
              Get in Touch
              <br />
              <span className="text-[#2d8cff]">With Us</span>
            </h2>

            <p className="mb-8 text-[15px] leading-relaxed text-[#8899bb] sm:mb-9 sm:text-[16px] sm:leading-[1.7] lg:text-[17px]">
              Our team is ready to understand your recovery needs and design a
              tailored solution.
            </p>
          </RevealWrapper>

          <div className="flex flex-col gap-4">
            {contactItems.map((item, i) => (
              <ContactInfoCard key={item.title} {...item} delay={i * 100} />
            ))}
          </div>
        </div>

        <RevealWrapper delay={100}>
          <div
            className="rounded-[20px] p-5 sm:rounded-[24px] sm:p-7 lg:p-10"
            style={{
              background: 'rgba(255,255,255,0.04)',
              border: '1px solid rgba(255,255,255,0.08)',
            }}
          >
            <h3
              style={{ fontFamily: 'Syne, sans-serif', fontWeight: 700 }}
              className="mb-6 text-[18px] text-[#f0f4ff] sm:mb-7 sm:text-[20px]"
            >
              Send Us a Message
            </h3>

            {submitted && (
              <div
                className="mb-5 rounded-[10px] px-4 py-3 text-[14px]"
                style={{
                  background: 'rgba(0,201,167,0.12)',
                  border: '1px solid rgba(0,201,167,0.3)',
                  color: '#00c9a7',
                }}
              >
                ✓ Message sent! We will contact you within 24 hours.
              </div>
            )}

            <form onSubmit={handleSubmit}>
              <div className="mb-4 grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div>
                  <label style={labelStyle}>Full Name</label>
                  <input
                    style={inputStyle}
                    type="text"
                    name="name"
                    placeholder="John Smith"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div>
                  <label style={labelStyle}>Email Address</label>
                  <input
                    style={inputStyle}
                    type="email"
                    name="email"
                    placeholder="john@company.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              <div className="mb-4">
                <label style={labelStyle}>Company Name</label>
                <input
                  style={inputStyle}
                  type="text"
                  name="company"
                  placeholder="Your Organisation"
                  value={formData.company}
                  onChange={handleChange}
                />
              </div>

              <div className="mb-6">
                <label style={labelStyle}>Message</label>
                <textarea
                  style={{
                    ...inputStyle,
                    resize: 'vertical',
                    minHeight: '120px',
                  }}
                  name="message"
                  placeholder="Tell us about your debt recovery requirements..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-[10px] px-4 py-[14px] text-[15px] font-semibold text-white transition-opacity"
                style={{
                  background: 'linear-gradient(135deg, #1e6fff, #00c9a7)',
                  border: 'none',
                  fontFamily: 'DM Sans, sans-serif',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.opacity = '0.85'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.opacity = '1'
                }}
              >
                Send Message →
              </button>
            </form>
          </div>
        </RevealWrapper>
      </div>
    </section>
  )
}