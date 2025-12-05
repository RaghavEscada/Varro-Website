import Image from 'next/image'

export default function AboutDetailed() {
  return (
    <section id="about" className="py-16 md:py-24 lg:py-32 bg-[#f5f5f5] relative scroll-mt-24 overflow-hidden">
      {/* Logo Background extending from Process curved area through About section */}
      <div 
        className="absolute left-0 right-0 pointer-events-none z-0"
        style={{
          top: '-100px',
          height: 'calc(100% + 100px)',
          backgroundImage: 'url(/images/logos.svg)',
          backgroundSize: '120%',
          backgroundPosition: 'center top',
          backgroundRepeat: 'repeat-y',
          opacity: 0.5,
          mixBlendMode: 'multiply',
          filter: 'grayscale(100%) contrast(1.2)',
          maskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)',
          WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,1) 0%, rgba(0,0,0,0.8) 40%, rgba(0,0,0,0.5) 70%, rgba(0,0,0,0) 100%)'
        }}
      ></div>

      <div className="container mx-auto px-5 md:px-12 lg:px-16 relative z-10">
        <div className="max-w-[1200px] mx-auto">
          {/* Top Section with Text and Button */}
          <div className="text-center mb-0">
            <p className="text-[16px] md:text-[19px] lg:text-[22px] font-normal leading-[1.6] text-[#1a1a1a] max-w-full md:max-w-[800px] lg:max-w-[900px] mx-auto mb-8 md:mb-10 lg:mb-12">
              Our Team Combines Deep Operational Expertise With Patient Capital, Allowing Us To Make Decisions That Prioritise Sustainable Growth Over Short-Term Returns.
            </p>
            
            {/* About Us Button with Connecting Line */}
            <div className="flex flex-col items-center">
              <button className="px-8 md:px-10 lg:px-12 py-2.5 md:py-3 border-2 border-[#0AAAA8] text-[#1a1a1a] text-[17px] md:text-[19px] lg:text-[20px] font-serif hover:bg-[#0AAAA8] hover:text-white transition-colors">
                About Us
              </button>
              <div className="w-[2px] h-20 md:h-32 lg:h-40 bg-[#0AAAA8]"></div>
            </div>
          </div>

          {/* Main Content Box */}
          <div className="border-2 border-[#0AAAA8] bg-white p-6 md:p-10 lg:p-12 relative overflow-hidden">
            <div className="flex flex-col md:flex-row gap-6 md:gap-10 lg:gap-12">
              {/* Left: Image */}
              <div className="w-full md:w-[45%] flex-shrink-0 mt-0 md:mt-6 lg:mt-8">
                <div className="relative w-full h-[280px] md:h-[350px] lg:h-[400px]">
                  <Image
                    src="/images/peoplelookin.jpg"
                    alt="Business professionals"
                    fill
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Right: Content */}
              <div className="flex-1 flex flex-col justify-between">
                <div className="mb-6 md:mb-7 lg:mb-8">
                  <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.8] text-[#4a4a4a] mb-5 md:mb-6">
                    We are <span className="font-semibold text-[#1a1a1a]">experienced entrepreneurs</span> and <span className="font-semibold text-[#1a1a1a]">operators</span> who understand the challenges of building and running a successful business.
                  </p>
                  <p className="text-[14px] md:text-[15px] lg:text-[16px] leading-[1.8] text-[#4a4a4a]">
                    We have been <span className="font-semibold text-[#1a1a1a]">CEOs and executives</span> at organisations such as Amazon and companies that have exited for <span className="font-semibold text-[#1a1a1a]">$400M and raised capital in excess of $30M.</span>
                  </p>
                </div>

                {/* Statistics */}
                <div className="flex items-center justify-start gap-6 md:gap-10 lg:gap-12 pt-5 md:pt-6 border-t border-gray-200">
                  <div className="flex flex-col">
                    <div className="font-serif text-[40px] md:text-[55px] lg:text-[70px] font-normal leading-none text-[#1a1a1a] mb-1.5 md:mb-2">
                      $2M
                    </div>
                    <div className="text-[13px] md:text-[14px] lg:text-[16px] font-semibold text-[#1a1a1a]">
                      EBITA &gt;$2M
                    </div>
                  </div>
                  
                  <div className="w-[2px] h-16 md:h-20 lg:h-24 bg-gray-300"></div>
                  
                  <div className="flex flex-col">
                    <div className="font-serif text-[40px] md:text-[55px] lg:text-[70px] font-normal leading-none text-[#1a1a1a] mb-1.5 md:mb-2">
                      $30M
                    </div>
                    <div className="text-[13px] md:text-[14px] lg:text-[16px] font-semibold text-[#1a1a1a]">
                      Capital Raised
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

