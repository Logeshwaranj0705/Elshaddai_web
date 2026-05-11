import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Mission', href: '#mission' },
  { label: 'Careers', href: '#careers' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''

    return () => {
      document.body.style.overflow = ''
    }
  }, [menuOpen])

  const scrollTo = (href) => {
    setMenuOpen(false)

    if (href.startsWith('#')) {
      const el = document.querySelector(href)

      if (el) {
        const navbarHeight = 80
        const elementTop = el.getBoundingClientRect().top + window.scrollY

        window.scrollTo({
          top: elementTop - navbarHeight,
          behavior: 'smooth',
        })
      }
    }
  }

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(5, 13, 26, 0.92)' : 'transparent',
        backdropFilter: scrolled ? 'blur(20px)' : 'none',
        WebkitBackdropFilter: scrolled ? 'blur(20px)' : 'none',
        borderBottom: scrolled
          ? '1px solid rgba(255, 255, 255, 0.08)'
          : '1px solid transparent',
      }}
    >
      <div
        style={{
          width: '100%',
          maxWidth: '1180px',
          margin: '0 auto',
          padding: scrolled ? '14px 22px' : '20px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '24px',
          transition: 'padding 0.35s ease',
        }}
      >
        {/* LEFT: Logo */}
        <Link
          to="/"
          onClick={() => setMenuOpen(false)}
          style={{
            textDecoration: 'none',
            flexShrink: 0,
          }}
        >
          <div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: '18px',
              fontWeight: 700,
              color: '#f0f4ff',
              letterSpacing: '.5px',
              whiteSpace: 'nowrap',
              lineHeight: 1,
            }}
          >
            Elshaddai{' '}
            <span style={{ color: '#00c9a7' }}>Enterprises</span>
          </div>
        </Link>

        {/* CENTER: Desktop Nav Links */}
        <ul
          className="hidden md:flex"
          style={{
            alignItems: 'center',
            justifyContent: 'center',
            gap: '24px',
            listStyle: 'none',
            margin: 0,
            padding: 0,
            flex: 1,
          }}
        >
          {navLinks.map((link) => (
            <li key={link.label}>
              <button
                type="button"
                onClick={() => scrollTo(link.href)}
                style={{
                  background: 'none',
                  border: 'none',
                  color: '#8899bb',
                  fontSize: '14px',
                  cursor: 'pointer',
                  transition: 'color 0.2s ease',
                  fontFamily: 'DM Sans, sans-serif',
                  padding: '8px 4px',
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = '#f0f4ff'
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = '#8899bb'
                }}
              >
                {link.label}
              </button>
            </li>
          ))}
        </ul>

        {/* RIGHT: Desktop CTA */}
        <div className="hidden md:block">
          <button
            type="button"
            className="btn-primary"
            style={{
              padding: '10px 22px',
              fontSize: '14px',
              whiteSpace: 'nowrap',
            }}
            onClick={() => scrollTo('#contact')}
          >
            Get Started
          </button>
        </div>

        {/* MOBILE: Menu Toggle - only visible on small screens */}
        <button
          type="button"
          onClick={() => setMenuOpen((prev) => !prev)}
          className="flex md:hidden"
          style={{
            background: 'rgba(255, 255, 255, 0.06)',
            border: '1px solid rgba(255, 255, 255, 0.1)',
            color: '#f0f4ff',
            cursor: 'pointer',
            width: '42px',
            height: '42px',
            borderRadius: '12px',
            alignItems: 'center',
            justifyContent: 'center',
            flexShrink: 0,
          }}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* MOBILE: Dropdown Menu */}
      {menuOpen && (
        <div
          className="md:hidden"
          style={{
            position: 'absolute',
            top: '100%',
            left: '14px',
            right: '14px',
            background: 'rgba(5, 13, 26, 0.97)',
            backdropFilter: 'blur(20px)',
            WebkitBackdropFilter: 'blur(20px)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '18px',
            padding: '14px',
            boxShadow: '0 24px 70px rgba(0, 0, 0, 0.45)',
          }}
        >
          {navLinks.map((link) => (
            <button
              type="button"
              key={link.label}
              onClick={() => scrollTo(link.href)}
              style={{
                display: 'block',
                width: '100%',
                textAlign: 'left',
                background: 'none',
                border: 'none',
                color: '#c9d5ee',
                fontSize: '16px',
                padding: '14px 12px',
                cursor: 'pointer',
                fontFamily: 'DM Sans, sans-serif',
                borderRadius: '12px',
                transition: 'background 0.2s ease, color 0.2s ease',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.06)'
                e.currentTarget.style.color = '#f0f4ff'
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = 'none'
                e.currentTarget.style.color = '#c9d5ee'
              }}
            >
              {link.label}
            </button>
          ))}

          <button
            type="button"
            className="btn-primary"
            style={{
              marginTop: '12px',
              width: '100%',
              padding: '13px 18px',
              fontSize: '15px',
            }}
            onClick={() => scrollTo('#contact')}
          >
            Get Started
          </button>
        </div>
      )}
    </nav>
  )
}