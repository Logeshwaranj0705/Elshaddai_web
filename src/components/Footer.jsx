import React from 'react'
import { Link } from 'react-router-dom'

const quickLinks = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Vision & Mission', href: '#mission' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

const services = [
  'Early Collections',
  'Late-Stage Recovery',
  'Field Collections',
  'Bulk Account Mgmt',
  'Recovery Support',
  'Tele-Collection',
]

const linkStyle = {
  display: 'block',
  color: '#8899bb',
  fontSize: '14px',
  textDecoration: 'none',
  marginBottom: '10px',
  transition: 'color 0.2s',
  background: 'none',
  border: 'none',
  cursor: 'pointer',
  fontFamily: 'DM Sans, sans-serif',
  textAlign: 'left',
  padding: 0,
}

export default function Footer() {
  const scrollTo = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer style={{ background: '#071224', borderTop: '1px solid rgba(255,255,255,0.08)', padding: '60px 40px 32px' }}>
      <div style={{  margin: '0 auto' }}>
        {/* Top grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: '48px',
            marginBottom: '48px',
          }}
        >
          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'Syne, sans-serif', fontSize: '20px', fontWeight: 700, color: '#f0f4ff', marginBottom: '16px' }}>
              Elshaddai <span style={{ color: '#00c9a7' }}>Enterprises</span>
            </div>
            <p style={{ fontSize: '14px', color: '#8899bb', lineHeight: 1.7, maxWidth: '280px' }}>
              Professional debt recovery and collection services for financial institutions and businesses across India.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h5
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#f0f4ff',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '20px',
              }}
            >
              Company
            </h5>
            {quickLinks.map((link) => (
              <button
                key={link.label}
                style={linkStyle}
                onClick={() => scrollTo(link.href)}
                onMouseEnter={(e) => (e.target.style.color = '#f0f4ff')}
                onMouseLeave={(e) => (e.target.style.color = '#8899bb')}
              >
                {link.label}
              </button>
            ))}
          </div>

          {/* Services */}
          <div>
            <h5
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#f0f4ff',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '20px',
              }}
            >
              Services
            </h5>
            {services.map((s) => (
              <button
                key={s}
                style={linkStyle}
                onClick={() => scrollTo('#services')}
                onMouseEnter={(e) => (e.target.style.color = '#f0f4ff')}
                onMouseLeave={(e) => (e.target.style.color = '#8899bb')}
              >
                {s}
              </button>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h5
              style={{
                fontSize: '13px',
                fontWeight: 700,
                color: '#f0f4ff',
                textTransform: 'uppercase',
                letterSpacing: '1px',
                marginBottom: '20px',
              }}
            >
              Legal
            </h5>
            <Link
              to="/privacy"
              style={{ ...linkStyle, display: 'block' }}
              onMouseEnter={(e) => (e.target.style.color = '#f0f4ff')}
              onMouseLeave={(e) => (e.target.style.color = '#8899bb')}
            >
              Privacy Policy
            </Link>
            <button
              style={linkStyle}
              onClick={() => scrollTo('#contact')}
              onMouseEnter={(e) => (e.target.style.color = '#f0f4ff')}
              onMouseLeave={(e) => (e.target.style.color = '#8899bb')}
            >
              Contact Us
            </button>
          </div>
        </div>

        {/* Bottom bar */}
        <div
          style={{
            borderTop: '1px solid rgba(255,255,255,0.08)',
            paddingTop: '24px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '12px',
          }}
        >
          <p style={{ fontSize: '13px', color: '#8899bb' }}>
            © {new Date().getFullYear()} Elshaddai Enterprises. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: '20px' }}>
            <Link
              to="/privacy"
              style={{ fontSize: '13px', color: '#8899bb', textDecoration: 'none', transition: 'color 0.2s' }}
              onMouseEnter={(e) => (e.target.style.color = '#f0f4ff')}
              onMouseLeave={(e) => (e.target.style.color = '#8899bb')}
            >
              Privacy
            </Link>
            <button
              style={{ ...linkStyle, marginBottom: 0, fontSize: '13px' }}
              onClick={() => scrollTo('#contact')}
              onMouseEnter={(e) => (e.target.style.color = '#f0f4ff')}
              onMouseLeave={(e) => (e.target.style.color = '#8899bb')}
            >
              Contact
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}
