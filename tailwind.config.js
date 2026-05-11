/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#050d1a',
          2: '#071224',
          3: '#0a1830',
        },
        brand: {
          blue: '#1e6fff',
          blue2: '#2d8cff',
          teal: '#00c9a7',
          gold: '#c9a84c',
          muted: '#8899bb',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'system-ui', 'sans-serif'],
        display: ['"Syne"', 'sans-serif'],
      },
      animation: {
        'float-1': 'float1 6s ease-in-out infinite',
        'float-2': 'float2 7s ease-in-out infinite',
        'float-3': 'float3 8s ease-in-out infinite',
        'pulse-glow': 'pulseGlow 3s ease-in-out infinite',
        'scroll-dot': 'scrollDot 2s ease-in-out infinite',
        'wf-pulse': 'wfPulse 3s ease-out infinite',
        'badge-pulse': 'badgePulse 2s infinite',
      },
      keyframes: {
        float1: { '0%,100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(-12px)' } },
        float2: { '0%,100%': { transform: 'translateY(-6px)' }, '50%': { transform: 'translateY(6px)' } },
        float3: { '0%,100%': { transform: 'translateY(8px)' }, '50%': { transform: 'translateY(-8px)' } },
        pulseGlow: { '0%,100%': { boxShadow: '0 0 20px rgba(30,111,255,0.2)' }, '50%': { boxShadow: '0 0 40px rgba(30,111,255,0.5)' } },
        scrollDot: { '0%,100%': { transform: 'translateY(0)', opacity: '1' }, '60%': { transform: 'translateY(10px)', opacity: '0' } },
        wfPulse: { '0%': { transform: 'scale(0.8)', opacity: '0.6' }, '100%': { transform: 'scale(1.8)', opacity: '0' } },
        badgePulse: { '0%,100%': { opacity: '1', transform: 'scale(1)' }, '50%': { opacity: '0.5', transform: 'scale(1.5)' } },
      },
      backdropBlur: { xs: '4px' },
    },
  },
  plugins: [],
}
