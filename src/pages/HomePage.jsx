import React, { useEffect, useState } from 'react'
import HeroSection from '../sections/HeroSection'
import AboutSection from '../sections/AboutSection'
import ServicesSection from '../sections/ServicesSection'
import MetricsSection from '../sections/MetricsSection'
import MissionVisionSection from '../sections/MissionVisionSection'
import WorkflowSection from '../sections/WorkflowSection'
import CareersSection from '../sections/CareersSection'
import CTASection from '../sections/CTASection'
import ContactSection from '../sections/ContactSection'
import Footer from '../components/Footer'
import ParticleCanvas from '../components/ParticleCanvas'
import Preloader from '../components/Preloader'
import WorkflowOrbit from "../sections/WorkflowOrbit"

export default function HomePage() {
  const [showPreloader, setShowPreloader] = useState(true)
  const [particlesEnabled, setParticlesEnabled] = useState(true)

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowPreloader(false)
    }, 2300)

    return () => clearTimeout(timer)
  }, [])

  return (
    <>
      {showPreloader && <Preloader />}

      <main className="relative min-h-screen overflow-hidden bg-[#050d1a]">
        {particlesEnabled && <ParticleCanvas />}

        <div className="pointer-events-none fixed inset-0 z-[1] bg-[#050d1a]/55" />

        <div className="relative z-10">
          <HeroSection />
          <AboutSection />
          <ServicesSection />

          <section className="relative px-5 py-16 sm:px-8 sm:py-20 lg:px-10 lg:py-[100px]">
            <div className="mx-auto grid max-w-[1320px] grid-cols-1 items-start gap-20 lg:grid-cols-[1fr_1fr] lg:gap-32 xl:gap-40">
              <MetricsSection />
              <MissionVisionSection />
            </div>
          </section>

          <WorkflowSection />
          <WorkflowOrbit />

          <CareersSection setParticlesEnabled={setParticlesEnabled} />

          <CTASection />
          <ContactSection />
          <Footer />
        </div>
      </main>
    </>
  )
}