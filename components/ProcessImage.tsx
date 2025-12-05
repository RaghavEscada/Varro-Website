import Image from 'next/image'

export default function ProcessImage() {
  return (
    <section 
      className="w-full min-h-screen relative bg-[#1a2844] py-12 md:py-20 lg:py-24 overflow-hidden"
      style={{
        backgroundImage: 'url(/images/process-background-pattern.svg)',
        backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}
    >
      {/* Converging Grid Lines with Perspective */}
      <div className="absolute inset-0 overflow-hidden" style={{ perspective: '1000px' }}>
        <svg 
          className="absolute inset-0 w-full h-full" 
          style={{ 
            transform: 'rotateX(60deg) translateZ(-200px)',
            transformStyle: 'preserve-3d'
          }}
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
              <path 
                d="M 80 0 L 0 0 0 80" 
                fill="none" 
                stroke="rgba(0,0,0,0.4)" 
                strokeWidth="1"
              />
            </pattern>
          </defs>
          <rect width="100%" height="200%" fill="url(#grid)" />
        </svg>
      </div>
      
      {/* Dark overlay for better text readability */}
      <div className="absolute inset-0 bg-[#1a2844]/30"></div>
      
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
        <div className="text-center mb-10 md:mb-14 lg:mb-16">
          <h2 className="font-serif text-[36px] md:text-[48px] lg:text-[56px] font-normal text-white mb-3 md:mb-4 lg:mb-5">
            Our Process
          </h2>
          <p className="text-[15px] md:text-[16px] lg:text-[17px] text-white/80 font-light max-w-3xl mx-auto px-4 md:px-0">
            A thoughtful, respectful approach that puts your business needs and timeline first.
          </p>
        </div>

        {/* Process Timeline - Mobile: Stacked, Desktop: Positioned */}
        <div className="relative max-w-[1400px] mx-auto">
          {/* Mobile Layout */}
          <div className="block md:hidden space-y-12 pb-16">
            {/* Step 1 - Initial Discussion */}
            <div className="relative pl-6 border-l-2 border-white/20">
              <div className="inline-block px-4 py-1.5 bg-[#0AAAA8] rounded-full mb-4">
                <span className="text-white font-medium text-[12px]">Week 1</span>
              </div>
              <h3 className="text-white text-[22px] font-medium mb-2 leading-tight">
                Initial Discussion
              </h3>
              <p className="text-white/70 text-[14px] leading-relaxed font-light">
                Confidential, no obligation<br />
                assessment of fit
              </p>
            </div>

            {/* Center 3D Asset - Mobile */}
            <div className="flex justify-center py-8">
              <div className="relative w-[280px] h-[280px]">
                <Image
                  src="/images/3dasset.png"
                  alt="3D Process Visualization"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Step 2 - Due Diligence */}
            <div className="relative pl-6 border-l-2 border-white/20">
              <div className="inline-block px-4 py-1.5 bg-[#0AAAA8] rounded-full mb-4">
                <span className="text-white font-medium text-[12px]">XXX</span>
              </div>
              <h3 className="text-white text-[22px] font-medium mb-2 leading-tight">
                Due Diligence
              </h3>
              <p className="text-white/70 text-[14px] leading-relaxed font-light">
                Comprehensive but respectful<br />
                review of financials, operations,<br />
                and market position
              </p>
            </div>

            {/* Step 3 - Partnership Design */}
            <div className="relative pl-6 border-l-2 border-white/20">
              <div className="inline-block px-4 py-1.5 bg-[#0AAAA8] rounded-full mb-4">
                <span className="text-white font-medium text-[12px]">Months XX</span>
              </div>
              <h3 className="text-white text-[22px] font-medium mb-2 leading-tight">
                Partnership Design
              </h3>
              <p className="text-white/70 text-[14px] leading-relaxed font-light">
                Flexible arrangements including<br />
                earnouts, consulting agreements,
              </p>
            </div>

            {/* Down Arrow - Mobile */}
            <div className="flex justify-center pt-4">
              <div className="w-12 h-12 rounded-full border-2 border-white/40 flex items-center justify-center">
                <svg
                  className="w-5 h-5 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>

          {/* Desktop Layout */}
          <div className="hidden md:block relative h-[600px] lg:h-[750px]">
            {/* Step 1 - Initial Discussion (Left) */}
            <div className="absolute left-[8%] top-[18%] max-w-[280px] lg:max-w-[340px] z-20">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/20"></div>
              
              <div className="pl-6 lg:pl-8">
                <div className="inline-block px-4 lg:px-5 py-1.5 bg-[#0AAAA8] rounded-full mb-4 lg:mb-5">
                  <span className="text-white font-medium text-[12px] lg:text-[13px]">Week 1</span>
                </div>
                <h3 className="text-white text-[22px] lg:text-[28px] font-medium mb-2 lg:mb-3 leading-tight">
                  Initial Discussion
                </h3>
                <p className="text-white/70 text-[14px] lg:text-[15px] leading-relaxed font-light">
                  Confidential, no obligation<br />
                  assessment of fit
                </p>
              </div>
            </div>

            {/* Center 3D Asset - Desktop */}
            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10">
              <div className="relative w-[400px] h-[400px] lg:w-[550px] lg:h-[550px]">
                <Image
                  src="/images/3dasset.png"
                  alt="3D Process Visualization"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </div>

            {/* Step 2 - Due Diligence (Right) */}
            <div className="absolute right-[8%] top-[32%] max-w-[300px] lg:max-w-[380px] z-20">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 bottom-0 w-[2px] bg-white/20"></div>
              
              <div className="pl-6 lg:pl-8">
                <div className="inline-block px-4 lg:px-5 py-1.5 bg-[#0AAAA8] rounded-full mb-4 lg:mb-5">
                  <span className="text-white font-medium text-[12px] lg:text-[13px]">XXX</span>
                </div>
                <h3 className="text-white text-[22px] lg:text-[28px] font-medium mb-2 lg:mb-3 leading-tight">
                  Due Diligence
                </h3>
                <p className="text-white/70 text-[14px] lg:text-[15px] leading-relaxed font-light">
                  Comprehensive but respectful<br />
                  review of financials, operations,<br />
                  and market position
                </p>
              </div>
            </div>

            {/* Step 3 - Partnership Design (Bottom Left) */}
            <div className="absolute left-[8%] bottom-[8%] max-w-[300px] lg:max-w-[380px] z-20">
              {/* Vertical line */}
              <div className="absolute left-0 top-0 h-16 lg:h-20 w-[2px] bg-white/20"></div>
              
              <div className="pl-6 lg:pl-8">
                <div className="inline-block px-4 lg:px-5 py-1.5 bg-[#0AAAA8] rounded-full mb-4 lg:mb-5">
                  <span className="text-white font-medium text-[12px] lg:text-[13px]">Months XX</span>
                </div>
                <h3 className="text-white text-[22px] lg:text-[28px] font-medium mb-2 lg:mb-3 leading-tight">
                  Partnership Design
                </h3>
                <p className="text-white/70 text-[14px] lg:text-[15px] leading-relaxed font-light">
                  Flexible arrangements including<br />
                  earnouts, consulting agreements,
                </p>
              </div>
            </div>

            {/* Down Arrow - Desktop */}
            <div className="absolute bottom-[2%] left-1/2 transform -translate-x-1/2 z-20">
              <div className="w-12 h-12 lg:w-14 lg:h-14 rounded-full border-2 border-white/40 flex items-center justify-center hover:border-white/60 transition-colors">
                <svg
                  className="w-5 h-5 lg:w-6 lg:h-6 text-white"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M19 14l-7 7m0 0l-7-7m7 7V3"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}