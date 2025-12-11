'use client'

import { useEffect, useRef, useState } from 'react'

export default function ProcessImage() {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const processSteps = [
    {
      week: 'Week 1',
      title: 'Initial Conversation',
      description:
        'Confidential, no-obligation discussion to understand goals and assess fit. No documents needed.',
    },
    {
      week: 'Week 2',
      title: 'Information Sharing & Light Review',
      description:
        'High-level financial and operational information to confirm mutual interest.',
    },
    {
      week: 'Week 3',
      title: 'Indicative Offer',
      description:
        'A concise, non-binding valuation range and proposed deal structure to guide next steps',
    },
    {
      week: 'Week 4-6',
      title: 'Due Diligence',
      description:
        'Focused review of financials, operations, customer mix, people and systems to validate fit',
    },
    {
      week: 'Week 6+',
      title: 'Final Terms & Transition Planning',
      description:
        'Refining the agreement and planning a smooth operational handover, tailored to whether you prefer to stay involved or fully step away.',
    },
  ]

  // ACTIVE STEP DETECTION
  useEffect(() => {
    const handleScroll = () => {
      const midY = window.scrollY + window.innerHeight / 2

      stepRefs.current.forEach((ref, idx) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const top = rect.top + window.scrollY
          const bottom = top + rect.height

          if (midY >= top && midY <= bottom) {
            setActiveStep(idx)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll()
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section
      id="our-process"
      className="relative w-full bg-[#04092C] py-24 md:py-32 lg:py-40 overflow-hidden"
    >
      {/* GRID BACKGROUND */}
      <div className="absolute inset-0 opacity-[0.04] pointer-events-none">
        <svg className="absolute inset-0 w-full h-full">
          <defs>
            <pattern id="grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path
                d="M 50 0 L 0 0 0 50"
                fill="none"
                stroke="rgba(255,255,255,0.5)"
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      {/* CURVED BOTTOM */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden leading-none z-20">
        <svg
          className="w-full h-[70px] md:h-[90px] lg:h-[110px]"
          viewBox="0 0 1200 120"
          preserveAspectRatio="none"
        >
          <path
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z"
            fill="#ffffff"
          />
        </svg>
      </div>

      {/* HEADER */}
      <div className="relative z-10 container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 text-center mb-10 sm:mb-12 md:mb-24">
        <h2 className="font-abhaya text-[32px] sm:text-[36px] md:text-[60px] lg:text-[72px] text-white tracking-tight mb-3 sm:mb-4 md:mb-6">
          Our Process
        </h2>
        <p className="text-white/80 text-[13px] sm:text-[14px] md:text-[18px] lg:text-[20px] max-w-3xl mx-auto leading-relaxed px-2">
          A thoughtful, respectful approach that puts your business needs and timeline first.
        </p>
      </div>

      {/* TIMELINE CONTAINER */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 md:px-12 lg:px-20 pb-10 sm:pb-12 md:pb-24">

        {/* CENTER LINE */}
        <div className="absolute left-1/2 top-0 bottom-0 -translate-x-1/2 w-[2px] md:w-[3px] bg-white/60 z-0 hidden md:block"></div>

        {/* FLEX COLUMN WITH FIXED GAPS (MATCH FIGMA SPACING) */}
        <div className="relative flex flex-col gap-12 sm:gap-16 md:gap-[320px] lg:gap-[380px]">

          {processSteps.map((step, index) => (
            <div
              key={index}
              ref={(el) => { stepRefs.current[index] = el }}
              className="relative z-10"
            >
              <div className="grid grid-cols-1 md:grid-cols-[1fr_auto_1fr] gap-4 sm:gap-6 md:gap-20 lg:gap-28 items-center">

                {/* LEFT SIDE */}
                <div className="flex flex-col items-start md:items-end text-left md:text-right pr-0 md:pr-6 order-1 md:order-1">
                  <div
                    className={`px-5 sm:px-6 md:px-8 py-2 md:py-3 bg-[#1DB5BE] rounded-full mb-3 sm:mb-4 md:mb-6 transition-all ${
                      activeStep === index
                        ? 'scale-110 shadow-lg shadow-[#1DB5BE]/40'
                        : ''
                    }`}
                  >
                    <span
                      className={`text-white text-[12px] sm:text-[14px] md:text-[17px] ${
                        activeStep === index ? 'font-bold' : 'font-semibold'
                      }`}
                    >
                      {step.week}
                    </span>
                  </div>

                  <h3
                    className={`text-white text-[18px] sm:text-[20px] md:text-[28px] lg:text-[32px] leading-tight transition-all ${
                      activeStep === index ? 'font-medium' : 'font-light'
                    }`}
                  >
                    {step.title}
                  </h3>
                </div>

                {/* CENTER DOT */}
                <div className="flex items-center justify-start md:justify-center order-2 md:order-2 mb-3 sm:mb-4 md:mb-0">
                  <div
                    className={`w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 rounded-full bg-white flex items-center justify-center transition-all ${
                      activeStep === index ? 'scale-125 shadow-lg shadow-white/30' : ''
                    }`}
                  >
                    <div className="w-2 h-2 sm:w-2.5 sm:h-2.5 md:w-3 md:h-3 lg:w-4 lg:h-4 rounded-full bg-[#00BCD4]"></div>
                  </div>
                </div>

                {/* RIGHT SIDE */}
                <div className="pl-0 md:pl-6 order-3 md:order-3">
                  <p
                    className={`text-white/70 text-[13px] sm:text-[15px] md:text-[19px] lg:text-[20px] max-w-2xl leading-relaxed transition-all ${
                      activeStep === index ? 'text-white/85' : ''
                    }`}
                  >
                    {step.description}
                  </p>
                </div>

              </div>
            </div>
          ))}

        </div>
      </div>
    </section>
  )
}
