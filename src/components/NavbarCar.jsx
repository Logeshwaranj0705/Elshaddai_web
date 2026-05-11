import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

export default function NavbarCar() {
  const [scrolled, setScrolled] = useState(false)
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 60)
    }

    const handleResize = () => {
      setIsMobile(window.innerWidth <= 640)
    }

    handleScroll()
    handleResize()

    window.addEventListener('scroll', handleScroll, { passive: true })
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('scroll', handleScroll)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <nav
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        transition: 'all 0.35s ease',
        background: scrolled ? 'rgba(5, 13, 26, 0.88)' : 'transparent',
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
          maxWidth: '90%',
          margin: '0 auto',
          padding: scrolled
            ? isMobile
              ? '12px 10px'
              : '14px 22px'
            : isMobile
            ? '16px 8px'
            : '20px 22px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: isMobile ? '12px' : '24px',
          transition: 'padding 0.35s ease',
        }}
      >
        <Link
          to="/"
          style={{
            textDecoration: 'none',
            flexShrink: 1,
            minWidth: 0,
          }}
        >
          <div
            style={{
              fontFamily: 'Syne, sans-serif',
              fontSize: isMobile ? '18px' : '30px',
              fontWeight: 700,
              color: '#f0f4ff',
              letterSpacing: '.5px',
              whiteSpace: 'nowrap',
              lineHeight: 1,
              overflow: 'hidden',
              textOverflow: 'ellipsis',
            }}
          >
            Elshaddai <span style={{ color: '#00c9a7' }}>Enterprises</span>
          </div>
        </Link>

        <Link
          to="/home"
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '8px',
            padding: isMobile ? '10px 16px' : '12px 22px',
            border: '1px solid rgba(255,255,255,0.22)',
            outline: 'none',
            borderRadius: '999px',
            background: 'rgba(255,255,255,0.08)',
            color: '#ffffff',
            fontSize: isMobile ? '0.72rem' : '0.82rem',
            fontWeight: 800,
            letterSpacing: isMobile ? '0.8px' : '1.2px',
            cursor: 'pointer',
            textDecoration: 'none',
            whiteSpace: 'nowrap',
            flexShrink: 0,
            backdropFilter: 'blur(12px)',
            WebkitBackdropFilter: 'blur(12px)',
            boxShadow: '0 10px 30px rgba(0,0,0,0.18)',
            transition:
              'transform 0.3s ease, box-shadow 0.3s ease, background 0.3s ease',
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.transform = 'translateY(-3px)'
            e.currentTarget.style.background = 'rgba(255,255,255,0.14)'
            e.currentTarget.style.boxShadow =
              '0 16px 40px rgba(0,0,0,0.22)'
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.transform = 'translateY(0)'
            e.currentTarget.style.background = 'rgba(255,255,255,0.08)'
            e.currentTarget.style.boxShadow =
              '0 10px 30px rgba(0,0,0,0.18)'
          }}
        >
          ENTER SITE
        </Link>
      </div>
    </nav>
  )
}