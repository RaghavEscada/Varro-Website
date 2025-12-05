import Image from 'next/image'

export default function WhyUs() {
  const whyUsItems = [
    {
      number: '01',
      title: 'Long-term ownership, not a quick flip',
    },
    {
      number: '02',
      title: 'Backed by capital partners, with hands-on operational experience',
    },
    {
      number: '03',
      title: 'People-first transition',
    },
    {
      number: '04',
      title: 'No broker commissions',
    },
    {
      number: '05',
      title: 'Confidentiality and discretion',
    },
  ]

  return (
    <section className="pt-8 md:pt-10 lg:pt-12 pb-16 md:pb-24 lg:pb-32 bg-white">
      <div className="container-custom">
        {/* Header with line and title */}
        <div className="text-center mb-12 md:mb-18 lg:mb-24">
          <div className="w-[60px] md:w-[80px] lg:w-[100px] h-[2px] bg-dark mx-auto mb-4 md:mb-5 lg:mb-6" />
          <h2 className="font-display text-[28px] md:text-[36px] lg:text-[45px] font-semibold leading-tight uppercase text-dark tracking-wider">
            WHY US
          </h2>
        </div>
        
        {/* Two column layout */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-16 max-w-[1400px] mx-auto">
          {/* Left side - Image and text */}
          <div className="flex flex-col">
            <div className="relative w-full h-[300px] md:h-[380px] lg:h-[450px] mb-6 md:mb-7 lg:mb-8">
              <Image
                src="/images/why-us-city.jpg"
                alt="Sydney cityscape"
                fill
                className="object-cover"
                priority
              />
            </div>
            
            <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-[1.6] text-[#626262] font-medium mb-6 md:mb-7 lg:mb-8 max-w-full lg:max-w-[580px]">
              We're different from traditional private equity. Our approach combines entrepreneurial drive with the care and stability needed to protect your legacy.
            </p>
            
            <button className="flex items-center gap-3 text-dark font-semibold text-[13px] md:text-sm uppercase tracking-wide hover:opacity-70 transition-opacity mb-10 lg:mb-0">
              GET IN TOUCH
              <span className="w-8 h-8 md:w-9 md:h-9 rounded-full border-2 border-dark flex items-center justify-center">
                <svg width="12" height="12" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M1 11L11 1M11 1H1M11 1V11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
            </button>
          </div>
          
          {/* Right side - Numbered list */}
          <div className="flex flex-col gap-8 md:gap-10 lg:gap-12 pt-0 lg:pt-4">
            {whyUsItems.map((item, index) => (
              <div key={index} className="relative">
                <div className="flex items-start gap-4 md:gap-5 lg:gap-6">
                  <span className="text-[#E8E8E8] text-[40px] md:text-[48px] lg:text-[56px] font-light leading-none">
                    {item.number}
                  </span>
                  <h3 className="text-[18px] md:text-[20px] lg:text-[22px] leading-[1.4] text-dark font-medium pt-2 md:pt-2.5 lg:pt-3 flex-1">
                    {item.title}
                  </h3>
                </div>
                {index < whyUsItems.length - 1 && (
                  <div className="w-full h-[1px] bg-[#E8E8E8] mt-6 md:mt-7 lg:mt-8" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

