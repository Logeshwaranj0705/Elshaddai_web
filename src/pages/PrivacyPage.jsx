import React from 'react'
import { Link } from 'react-router-dom'
import { ArrowLeft, ShieldCheck } from 'lucide-react'
import Footer from '../components/Footer'
import RevealWrapper from '../components/RevealWrapper'
import ParticleCanvas from '../components/ParticleCanvas'

const sections = [
  {
    title: '1. Information We Collect',
    content: `We may collect the following types of information when you interact with our website or services:

Personal Identification Information: Name, email address, phone number, company name, and other details you voluntarily provide through contact forms or enquiry submissions.

Usage Data: Information about how you access and use our website, including your IP address, browser type, pages visited, time spent on pages, and referring URLs. This data is collected automatically through standard web server logs and analytics tools.

Communication Records: Records of correspondence if you contact us directly, including emails, phone calls, or messages submitted through our website.`,
  },
  {
    title: '2. How We Use Your Information',
    content: `Elshaddai Enterprises uses the information we collect for the following purposes:

• To respond to your enquiries and provide the services you have requested
• To communicate with you regarding our debt recovery and collection services
• To send updates, service information, or operational notices relevant to our engagement
• To improve our website and service offerings based on usage patterns
• To comply with legal and regulatory obligations applicable to debt collection operations in India
• To maintain records required for compliance and audit purposes

We do not sell, trade, or otherwise transfer your personally identifiable information to third parties without your consent, except as required by law or as necessary to provide our services.`,
  },
  {
    title: '3. Legal Basis for Processing',
    content: `We process your personal information on the following legal bases:

Contractual Necessity: Processing required to deliver services you have engaged us for or to take steps at your request before entering into a contract.

Legitimate Interests: Processing necessary for our legitimate business interests, including responding to enquiries and improving our services, provided these interests are not overridden by your rights.

Legal Compliance: Processing required to comply with applicable laws and regulations, including the Information Technology Act, 2000, and Reserve Bank of India guidelines applicable to collection agencies.

Consent: Where you have given explicit consent for specific processing activities, such as receiving marketing communications.`,
  },
  {
    title: '4. Data Sharing and Disclosure',
    content: `We may share your information in the following circumstances:

Service Providers: We may engage trusted third-party service providers to assist in operating our website or conducting our business. These parties are contractually bound to keep your information confidential and may only use it for the purposes for which they were engaged.

Legal Requirements: We may disclose your information where required to do so by law, court order, or governmental authority, or where disclosure is necessary to protect our rights, prevent fraud, or ensure the safety of our team and clients.

Business Transfers: In the event of a merger, acquisition, or sale of business assets, your information may be transferred as part of that transaction. We will notify you before your information is transferred and becomes subject to a different privacy policy.

Client Institutions: In the context of debt recovery services, we may share relevant information with our client financial institutions as required to fulfil contractual obligations.`,
  },
  {
    title: '5. Data Retention',
    content: `We retain your personal information for as long as necessary to fulfil the purposes outlined in this Privacy Policy, unless a longer retention period is required or permitted by law.

For operational records related to debt recovery engagements, we retain data in accordance with applicable regulatory requirements and client contractual obligations.

Upon request, we will delete or anonymise your personal information unless we are legally obligated to retain it.`,
  },
  {
    title: '6. Security of Your Information',
    content: `We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. These measures include:

• Secure server infrastructure with access controls
• Encrypted data transmission using SSL/TLS protocols
• Regular security assessments and staff training
• Restricted internal access to personal data on a need-to-know basis

While we take all reasonable precautions, no method of transmission over the internet or electronic storage is 100% secure. We cannot guarantee absolute security but are committed to protecting your information to the best of our ability.`,
  },
  {
    title: '7. Your Rights',
    content: `You have the following rights with respect to your personal information:

Right of Access: You may request a copy of the personal information we hold about you.

Right to Rectification: You may request that we correct inaccurate or incomplete information.

Right to Erasure: You may request that we delete your personal information, subject to applicable legal retention obligations.

Right to Restriction: You may request that we limit the processing of your information in certain circumstances.

Right to Object: You may object to our processing of your information where we rely on legitimate interests as the legal basis.

To exercise any of these rights, please contact us at the details provided below. We will respond to your request within 30 days.`,
  },
  {
    title: '8. Cookies and Tracking Technologies',
    content: `Our website may use cookies and similar tracking technologies to enhance your browsing experience and collect usage data. Cookies are small text files stored on your device.

We use:
• Essential Cookies: Required for the website to function properly. These cannot be disabled.
• Analytics Cookies: Help us understand how visitors interact with our website so we can improve it.

You may control cookie settings through your browser preferences. Disabling certain cookies may affect the functionality of our website.`,
  },
  {
    title: '9. Third-Party Links',
    content: `Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to review the privacy policies of any third-party sites you visit.`,
  },
  {
    title: '10. Changes to This Privacy Policy',
    content: `We may update this Privacy Policy from time to time to reflect changes in our practices or applicable law. We will notify you of any material changes by posting the updated policy on our website with a revised effective date.

Your continued use of our website or services after any changes constitutes your acceptance of the updated Privacy Policy.`,
  },
  {
    title: '11. Contact Us',
    content: `If you have any questions, concerns, or requests regarding this Privacy Policy or the handling of your personal information, please contact us:

Elshaddai Enterprises
Chennai, Tamil Nadu, India
Email: info@elshaddaienterprises.com
Phone: +91 98765 43210

We are committed to addressing your concerns promptly and transparently.`,
  },
]

export default function PrivacyPage() {
  return (
    <>
      <main className="relative min-h-screen overflow-hidden bg-[#050d1a]">
        <style>
          {`
            .privacy-glass {
              box-shadow:
                inset 0 1px 0 rgba(255,255,255,0.08),
                0 24px 80px rgba(0,0,0,0.28);
            }

            .privacy-glass::before {
              content: "";
              position: absolute;
              inset: 0;
              border-radius: 28px;
              padding: 1px;
              background: linear-gradient(
                135deg,
                rgba(0, 201, 167, 0.42),
                rgba(45, 140, 255, 0.22),
                rgba(255, 255, 255, 0.07),
                rgba(0, 201, 167, 0.16)
              );
              -webkit-mask:
                linear-gradient(#fff 0 0) content-box,
                linear-gradient(#fff 0 0);
              -webkit-mask-composite: xor;
              mask-composite: exclude;
              pointer-events: none;
              opacity: 0.62;
            }

            .privacy-shine {
              background: linear-gradient(
                115deg,
                transparent 0%,
                transparent 30%,
                rgba(255,255,255,0.00) 37%,
                rgba(255,255,255,0.14) 44%,
                rgba(0,201,167,0.20) 49%,
                rgba(45,140,255,0.14) 54%,
                rgba(255,255,255,0.08) 59%,
                transparent 70%,
                transparent 100%
              );
              transform: translateX(-160%);
              animation: privacyShine 6.2s ease-in-out infinite;
              opacity: 0;
              mix-blend-mode: screen;
            }

            .privacy-section-card {
              transition:
                transform 0.35s ease,
                background 0.35s ease,
                border-color 0.35s ease,
                box-shadow 0.35s ease;
            }

            .privacy-section-card:hover {
              transform: translateY(-4px);
              background: rgba(255,255,255,0.055);
              border-color: rgba(0,201,167,0.24);
              box-shadow:
                inset 0 1px 0 rgba(255,255,255,0.08),
                0 24px 80px rgba(0,0,0,0.34),
                0 0 42px rgba(0,201,167,0.08);
            }

            .privacy-section-card:hover .privacy-card-line {
              opacity: 1;
            }

            @keyframes privacyShine {
              0% { transform: translateX(-160%); opacity: 0; }
              12% { opacity: 1; }
              34% { transform: translateX(160%); opacity: 1; }
              42% { transform: translateX(160%); opacity: 0; }
              100% { transform: translateX(160%); opacity: 0; }
            }
          `}
        </style>

        <ParticleCanvas />

        <div className="pointer-events-none fixed inset-0 z-[1] bg-[#050d1a]/55" />

        <div className="pointer-events-none absolute left-[-180px] top-[180px] z-[2] h-[520px] w-[520px] rounded-full bg-[#1e6fff]/[0.075] blur-[150px]" />
        <div className="pointer-events-none absolute right-[-160px] top-[520px] z-[2] h-[560px] w-[560px] rounded-full bg-[#00c9a7]/[0.065] blur-[160px]" />
        <div className="pointer-events-none absolute left-1/2 top-[220px] z-[2] h-[700px] w-[700px] -translate-x-1/2 rounded-full bg-[#2d8cff]/[0.035] blur-[170px]" />

        <section className="relative z-10 px-5 pb-20 pt-[110px] sm:px-8 sm:pb-24 sm:pt-[130px] lg:px-10 lg:pb-[120px] lg:pt-[150px]">
          <div className="mx-auto max-w-[1080px]">
            <RevealWrapper>
              <Link
                to="/"
                className="group mb-10 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2.5 text-[13px] font-bold text-[#00c9a7] no-underline backdrop-blur-xl transition-all duration-300 hover:-translate-y-1 hover:border-[#00c9a7]/35 hover:bg-white/[0.07] hover:shadow-[0_18px_50px_rgba(0,201,167,0.12)] sm:mb-12"
              >
                <ArrowLeft
                  size={16}
                  className="transition-transform duration-300 group-hover:-translate-x-1"
                />
                Back to Home
              </Link>
            </RevealWrapper>

            <RevealWrapper delay={80}>
              <div className="privacy-glass relative mb-12 overflow-hidden rounded-[28px] border border-white/10 bg-white/[0.045] p-6 backdrop-blur-2xl sm:mb-14 sm:p-8 lg:mb-16 lg:p-10">
                <div className="privacy-shine pointer-events-none absolute inset-0" />

                <div className="pointer-events-none absolute -left-24 -top-24 h-[320px] w-[320px] rounded-full bg-[#2d8cff]/[0.16] blur-[95px]" />
                <div className="pointer-events-none absolute -bottom-28 -right-28 h-[360px] w-[360px] rounded-full bg-[#00c9a7]/[0.13] blur-[105px]" />

                <div className="relative z-10">
                  <div className="mb-6 flex h-[64px] w-[64px] items-center justify-center rounded-[20px] border border-[#00c9a7]/25 bg-[#00c9a7]/10 shadow-[0_0_34px_rgba(0,201,167,0.12)]">
                    <ShieldCheck size={28} color="#00c9a7" />
                  </div>

                  <span className="section-label">Legal</span>

                  <h1
                    className="mb-6 text-[38px] font-extrabold leading-[1.05] tracking-[-1px] text-[#f0f4ff] sm:text-[54px] lg:text-[72px]"
                    style={{ fontFamily: 'Syne, sans-serif' }}
                  >
                    Privacy{' '}
                    <span className="text-[#00c9a7]">Policy</span>
                  </h1>

                  <p className="mb-8 text-[14px] leading-[1.8] text-[#9aa9c7] sm:text-[15px]">
                    Effective Date: January 1, 2025 &nbsp;·&nbsp; Last Updated:
                    January 1, 2025
                  </p>

                  <div className="rounded-[18px] border border-[#2d8cff]/20 bg-[#2d8cff]/[0.07] p-5 text-[14px] leading-[1.85] text-[#b5c2dc] sm:p-6 sm:text-[15px]">
                    Elshaddai Enterprises ("we," "us," or "our") is committed
                    to protecting your privacy and handling your personal
                    information with transparency and integrity. This Privacy
                    Policy explains how we collect, use, disclose, and safeguard
                    your information when you visit our website or engage our
                    services.
                  </div>
                </div>
              </div>
            </RevealWrapper>

            <div className="grid grid-cols-1 gap-5 sm:gap-6">
              {sections.map((section, index) => (
                <RevealWrapper key={section.title} delay={(index % 4) * 80}>
                  <article className="privacy-section-card relative overflow-hidden rounded-[24px] border border-white/10 bg-white/[0.035] p-5 backdrop-blur-xl sm:p-6 lg:p-7">
                    <div className="privacy-card-line pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00c9a7]/70 to-transparent opacity-40 transition-opacity duration-300" />

                    <div
                      className="pointer-events-none absolute -right-20 -top-20 h-[220px] w-[220px] rounded-full blur-[80px]"
                      style={{
                        background:
                          index % 2 === 0
                            ? 'rgba(45,140,255,0.08)'
                            : 'rgba(0,201,167,0.075)',
                      }}
                    />

                    <div className="relative z-10">
                      <h2
                        className="mb-4 text-[18px] font-extrabold leading-snug text-[#f0f4ff] sm:text-[20px] lg:text-[22px]"
                        style={{ fontFamily: 'Syne, sans-serif' }}
                      >
                        {section.title}
                      </h2>

                      <p className="whitespace-pre-line text-[14px] leading-[1.85] text-[#9aa9c7] sm:text-[15px]">
                        {section.content}
                      </p>
                    </div>
                  </article>
                </RevealWrapper>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  )
}