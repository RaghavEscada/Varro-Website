'use client'

import { useEffect, useRef, useState } from 'react'

export default function ProcessImage() {
  const [activeStep, setActiveStep] = useState(0)
  const stepRefs = useRef<(HTMLDivElement | null)[]>([])

  const processSteps = [
    {
      week: 'Week 1',
      title: 'Initial Conversation',
      description: 'Confidential, no-obligation discussion to understand goals and assess fit. No documents needed.',
    },
    {
      week: 'Week 2',
      title: 'Information Sharing & Light Review',
      description: 'High-level financial and operational information to confirm mutual interest.',
    },
    {
      week: 'Week 3',
      title: 'Indicative Offer',
      description: 'A concise, non-binding valuation range and proposed deal structure to guide next steps',
    },
    {
      week: 'Week 4-6',
      title: 'Due Diligence',
      description: 'Focused review of financials, operations, customer mix, people and systems to validate fit',
    },
    {
      week: 'Week 6+',
      title: 'Final Terms & Transition Planning',
      description: 'Refining the agreement and planning a smooth operational handover, tailored to whether you prefer to stay involved or fully step away.',
    },
  ]

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2

      stepRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect()
          const elementTop = rect.top + window.scrollY
          const elementBottom = elementTop + rect.height

          if (scrollPosition >= elementTop && scrollPosition <= elementBottom) {
            setActiveStep(index)
          }
        }
      })
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    handleScroll() // Initial check
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <section 
      id="our-process"
      className="w-full relative bg-[#04092C] py-20 md:py-28 lg:py-36 overflow-hidden scroll-mt-24"
    >
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-[0.04]">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="process-grid" width="50" height="50" patternUnits="userSpaceOnUse">
              <path 
                d="M 50 0 L 0 0 0 50" 
                fill="none" 
                stroke="rgba(255,255,255,0.5)" 
                strokeWidth="0.5"
              />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#process-grid)" />
        </svg>
      </div>

      {/* Curved bottom edge */}
      <div className="absolute bottom-0 left-0 right-0 w-full overflow-hidden leading-none z-30">
        <svg 
          className="relative block w-full h-[60px] md:h-[80px] lg:h-[100px]" 
          viewBox="0 0 1200 120" 
          preserveAspectRatio="none"
        >
          <path 
            d="M0,0 C300,100 900,100 1200,0 L1200,120 L0,120 Z" 
            fill="#ffffff"
          ></path>
        </svg>
      </div>

      <div className="container mx-auto px-5 md:px-12 lg:px-16 relative z-10">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20 lg:mb-24 pt-12 md:pt-16 lg:pt-20">
          <h2 className="font-abhaya text-[48px] md:text-[60px] lg:text-[72px] font-normal text-white mb-5 md:mb-6 lg:mb-7 tracking-tight leading-tight">
            Our Process
          </h2>
          <p className="text-[16px] md:text-[18px] lg:text-[19px] text-white/80 font-light max-w-3xl mx-auto leading-relaxed">
            A thoughtful, respectful approach that puts your business needs and timeline first.
          </p>
        </div>

        {/* Timeline - Centered with left/right content */}
        <div className="max-w-7xl mx-auto relative pb-16">
          {/* Continuous vertical line connecting all nodes */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/30 z-0"></div>
          
          {/* Steps */}
          {processSteps.map((step, index) => (
            <div 
              key={index} 
              ref={(el) => { stepRefs.current[index] = el }}
              className="relative mb-48 md:mb-60 lg:mb-72 last:mb-0 z-10"
            >
              <div className="grid grid-cols-[1fr_auto_1fr] gap-14 md:gap-20 lg:gap-24 items-start">
                {/* Left side - Week badge and Title */}
                <div className="text-right flex flex-col items-end pr-6">
                  <div className={`px-8 py-3 bg-[#1DB5BE] rounded-full inline-block mb-6 transition-all duration-300 ${
                    activeStep === index ? 'scale-110 shadow-lg shadow-[#1DB5BE]/40' : ''
                  }`}>
                    <span className={`text-white text-[16px] md:text-[17px] transition-all duration-300 ${
                      activeStep === index ? 'font-bold tracking-wide' : 'font-semibold'
                    }`}>
                      {step.week}
                    </span>
                  </div>
                  <h3 className={`text-white text-[24px] md:text-[28px] lg:text-[32px] leading-tight transition-all duration-300 ${
                    activeStep === index ? 'font-medium' : 'font-light'
                  }`}>
                    {step.title}
                  </h3>
                </div>

                {/* Center - Dot */}
                <div className="flex items-start justify-center pt-3">
                  <div className={`w-6 h-6 md:w-7 md:h-7 rounded-full bg-white border-[5px] border-[#04092C] relative z-10 transition-all duration-300 ${
                    activeStep === index ? 'scale-125 shadow-lg shadow-white/30' : ''
                  }`}></div>
                </div>

                {/* Right side - Description */}
                <div className="pt-3 pl-6">
                  <p className={`text-[17px] md:text-[19px] lg:text-[20px] leading-relaxed font-light max-w-2xl transition-all duration-300 ${
                    activeStep === index ? 'text-white/85' : 'text-white/65'
                  }`}>
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