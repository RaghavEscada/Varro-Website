'use client'

export default function WhyUs() {
  const valueProps = [
    { number: '01', text: 'Long-term ownership, not a quick flip' },
    { number: '02', text: 'Backed by capital partners, with hands-on operational experience' },
    { number: '03', text: 'People-first transition' },
    { number: '04', text: 'No broker commissions' },
    { number: '05', text: 'Confidentiality and discretion' },
  ]

  const businessItems = [
    'Strong customer retention and satisfaction rates',
    'Sustainable competitive moats and differentiation',
    'Products or services integral to client operations',
  ]

  const leadershipItems = [
    'Keen to step back from day-to day operations',
    'Ready to explore new opportunities',
    'Owner considering retiring',
  ]

  const revenueItems = [
    'Recurring income streams and high customer lifetime value',
    'Record of consistent profitability and growth',
    'EBITA >$2M and revenue $10-30M',
  ]

  return (
    <section className="bg-white pt-0 pb-16 md:pb-20 lg:pb-24">
      <div className="container mx-auto px-5 md:px-12 lg:px-16 max-w-[1400px]">
        {/* Why Us Header */}
        <div className="text-center mb-12 md:mb-16 lg:mb-20">
          <div className="w-[60px] md:w-[80px] lg:w-[100px] h-[2px] bg-[#1A1A1A] mx-auto mb-6 md:mb-8"></div>
          <h2 className="font-display text-[36px] md:text-[44px] lg:text-[52px] font-semibold text-[#1A1A1A] mb-6 md:mb-8 uppercase">
            WHY US
          </h2>
          <p className="text-[15px] md:text-[16px] lg:text-[18px] text-[#666666] max-w-[700px] mx-auto leading-relaxed">
            We are an operator-led team committed to stewarding founder-owned and family-run businesses for the long term.
          </p>
        </div>

        {/* Value Propositions Grid with Vertical Dividers */}
        <div className="relative mb-16 md:mb-20 lg:mb-24 bg-gray-100 rounded-lg p-8 md:p-10 lg:p-12">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-0 auto-rows-auto">
            {/* First Row: Items 1, 2, 3 */}
            {valueProps.slice(0, 3).map((prop, index) => (
              <div
                key={index}
                className={`relative p-8 md:p-10 lg:p-12 row-start-1 ${
                  index < 2 ? 'border-b md:border-b-0 md:border-r lg:border-b-0 lg:border-r border-gray-200' : ''
                } ${
                  index === 2 ? 'md:border-b lg:border-b-0 lg:border-r-0 border-gray-200' : ''
                }`}
              >
                {/* Large Number Above */}
                <div className="text-[80px] md:text-[90px] lg:text-[100px] font-medium text-[#CCCCCC] leading-none mb-4 md:mb-6">
                  {prop.number}
                </div>
                
                {/* Content with Teal Bullet */}
                <div className="flex items-start gap-3">
                  <div className="w-2 h-2 rounded-full bg-[#00BCD4] flex-shrink-0 mt-2"></div>
                  <p className="text-[#1A1A1A] text-[16px] md:text-[17px] lg:text-[18px] font-medium leading-relaxed">
                    {prop.text}
                  </p>
                </div>
              </div>
            ))}
            
            {/* Second Row: Items 4, 5 - Centered */}
            <div className="col-span-1 md:col-span-2 lg:col-span-3 row-start-2 border-t border-gray-200">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-0 md:max-w-[calc(200%/3)] lg:max-w-[calc(200%/3)] mx-auto">
                {valueProps.slice(3, 5).map((prop, index) => (
                  <div
                    key={index + 3}
                    className={`relative p-8 md:p-10 lg:p-12 ${
                      index === 0 ? 'border-b md:border-b-0 md:border-r border-gray-200' : ''
                    }`}
                  >
                    {/* Large Number Above */}
                    <div className="mb-4 md:mb-6">
                      <div className="inline-block bg-gray-100 px-4 md:px-5 lg:px-6 py-2 md:py-3 lg:py-4 rounded">
                        <div className="text-[80px] md:text-[90px] lg:text-[100px] font-medium text-[#CCCCCC] leading-none">
                          {prop.number}
                        </div>
                      </div>
                    </div>
                    
                    {/* Content with Teal Bullet */}
                    <div className="flex items-start gap-3">
                      <div className="w-2 h-2 rounded-full bg-[#00BCD4] flex-shrink-0 mt-2"></div>
                      <p className="text-[#1A1A1A] text-[16px] md:text-[17px] lg:text-[18px] font-medium leading-relaxed">
                        {prop.text}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
            
        {/* What We Invest In Section */}
        <div id="what-we-invest" className="bg-white py-16 md:py-20 lg:py-24 -mx-5 md:-mx-12 lg:-mx-16 px-5 md:px-12 lg:px-16 mb-16 md:mb-20 lg:mb-24 scroll-mt-24">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_auto] gap-8 lg:gap-12 mb-12 md:mb-16 lg:mb-20">
            {/* Left Side - Description */}
            <div>
              <div className="flex items-center gap-4 mb-6 md:mb-8">
                <h3 className="font-serif text-[28px] md:text-[36px] lg:text-[42px] font-semibold text-[#1A1A1A]">
                  What We Invest In
                </h3>
                <div className="w-[60px] md:w-[80px] h-[2px] bg-[#1A1A1A]"></div>
              </div>
              <p className="text-[15px] md:text-[16px] lg:text-[17px] text-[#666666] leading-relaxed max-w-[600px]">
                Whether you&apos;re exploring immediate opportunities or planning for the future, we welcome discussions about the potential of your business. We focus on companies that align with these criteria.
              </p>
          </div>
          
            {/* Right Side - Key Metrics Box */}
            <div className="border-2 border-[#00BCD4] bg-white p-6 md:p-8 lg:p-10 min-w-[280px] lg:min-w-[320px]">
              <div className="space-y-4 md:space-y-5">
                <div className="flex items-center gap-3">
                  <span className="text-[#00BCD4] text-lg">♦</span>
                  <span className="text-[#00BCD4] text-[18px] md:text-[20px] lg:text-[22px] font-semibold">
                    EBITA &gt;$2M
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#00BCD4] text-lg">♦</span>
                  <span className="text-[#00BCD4] text-[16px] md:text-[17px] lg:text-[18px] font-medium">
                    Consistent profitability
                  </span>
                </div>
                <div className="flex items-center gap-3">
                  <span className="text-[#00BCD4] text-lg">♦</span>
                  <span className="text-[#00BCD4] text-[16px] md:text-[17px] lg:text-[18px] font-medium">
                    $10-30M enterprise value
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Three Columns */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
            {/* Business Column */}
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 md:p-8">
              <h4 className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#1A1A1A] mb-6 md:mb-8">
                Business
              </h4>
              <ul className="space-y-4 md:space-y-5">
                {businessItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-[#666666] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[14px] md:text-[15px] lg:text-[16px] text-[#666666] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Leadership Column */}
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 md:p-8">
              <h4 className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#1A1A1A] mb-6 md:mb-8">
                Leadership
              </h4>
              <ul className="space-y-4 md:space-y-5">
                {leadershipItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-[#666666] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[14px] md:text-[15px] lg:text-[16px] text-[#666666] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Revenue Profile Column */}
            <div className="bg-gray-50 border border-gray-100 rounded-lg p-6 md:p-8">
              <h4 className="text-[20px] md:text-[22px] lg:text-[24px] font-semibold text-[#1A1A1A] mb-6 md:mb-8">
                Revenue Profile
              </h4>
              <ul className="space-y-4 md:space-y-5">
                {revenueItems.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <div className="w-5 h-5 md:w-6 md:h-6 rounded-full border-2 border-[#666666] flex items-center justify-center flex-shrink-0 mt-0.5">
                      <svg className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#666666]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <span className="text-[14px] md:text-[15px] lg:text-[16px] text-[#666666] leading-relaxed">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Get In Touch Button */}
        <div className="flex justify-center">
          <button 
            onClick={(e) => {
              e.preventDefault()
              const element = document.getElementById('contact')
              if (element) {
                const headerOffset = 100
                const elementPosition = element.getBoundingClientRect().top
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset
                window.scrollTo({
                  top: offsetPosition,
                  behavior: 'smooth'
                })
              }
            }}
            className="group flex items-center gap-4 bg-[#00BCD4] hover:bg-[#00ACC1] text-white px-8 md:px-10 py-4 md:py-5 rounded-full text-[14px] md:text-[15px] lg:text-[16px] font-semibold uppercase tracking-wider transition-all duration-300 shadow-lg hover:shadow-xl cursor-pointer"
          >
            GET IN TOUCH
            <div className="w-8 h-8 md:w-9 md:h-9 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
              <svg className="w-4 h-4 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </section>
  )
}
