export default function ProcessImage() {
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

  return (
    <section 
      className="w-full relative bg-[#1a2844] py-16 md:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/process-background-pattern.svg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Subtle Grid Pattern Overlay */}
      <div className="absolute inset-0 opacity-10">
        <svg className="absolute inset-0 w-full h-full" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <pattern id="process-grid" width="40" height="40" patternUnits="userSpaceOnUse">
              <path 
                d="M 40 0 L 0 0 0 40" 
                fill="none" 
                stroke="rgba(255,255,255,0.3)" 
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
        <div className="text-center mb-16 md:mb-20 lg:mb-24">
          <h2 className="font-serif text-[40px] md:text-[52px] lg:text-[64px] font-normal text-white mb-4 md:mb-6">
            Our Process
          </h2>
          <p className="text-[16px] md:text-[17px] lg:text-[18px] text-white/90 font-light max-w-3xl mx-auto leading-relaxed">
            A thoughtful, respectful approach that puts your business needs and timeline first.
          </p>
        </div>

        {/* Timeline - Centered with left/right content */}
        <div className="max-w-6xl mx-auto relative pb-12">
          {/* Vertical line in center */}
          <div className="absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-[2px] bg-white/30"></div>
          
          {/* Steps */}
          {processSteps.map((step, index) => (
            <div key={index} className="relative mb-32 md:mb-36 lg:mb-40 last:mb-0">
              <div className="grid grid-cols-[1fr_auto_1fr] gap-12 md:gap-16 items-start">
                {/* Left side - Week badge and Title */}
                <div className="text-right flex flex-col items-end pr-4">
                  <div className="px-6 py-2 bg-[#00BCD4] rounded-[10rem] inline-block mb-4">
                    <span className="text-white font-medium text-[14px]">
                      {step.week}
                    </span>
                  </div>
                  <h3 className="text-white/90 text-[20px] md:text-[22px] lg:text-[24px] font-light leading-tight">
                    {step.title}
                  </h3>
                </div>

                {/* Center - Dot */}
                <div className="flex items-start justify-center pt-2">
                  <div className="w-5 h-5 md:w-6 md:h-6 rounded-full bg-white border-4 border-[#1a2844] relative z-10"></div>
                </div>

                {/* Right side - Description */}
                <div className="pt-2 pl-4">
                  <p className="text-white/70 text-[15px] md:text-[16px] leading-relaxed font-light max-w-lg">
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