import Image from 'next/image'

export default function AboutDetailed() {
  const companies = [
    { 
      name: 'BCG', 
      logo: '/images/bcg.png'
    },
    { 
      name: 'Amazon', 
      logo: '/images/amazon.png'
    },
    { 
      name: 'Audible', 
      logo: '/images/audible.png'
    },
    { 
      name: 'Finder', 
      logo: '/images/finder.png'
    },
    { 
      name: 'AMP', 
      logo: '/images/amp.png'
    },
    { 
      name: 'Edelman', 
      logo: '/images/edelman.png'
    },
    { 
      name: 'iFIT', 
      logo: '/images/ifit.png'
    },
  ]

  return (
    <section id="about" className="py-20 md:py-24 lg:py-28 bg-white relative scroll-mt-24">
      <div className="container mx-auto px-5 md:px-12 lg:px-16">
        <div className="max-w-5xl mx-auto text-center">
          {/* Title */}
          <h2 className="font-serif text-[44px] md:text-[52px] lg:text-[60px] font-normal text-[#1a1a1a] mb-10 md:mb-12 lg:mb-14">
            About Us
          </h2>

          {/* First Paragraph */}
          <p className="text-[17px] md:text-[18px] lg:text-[19px] text-[#1a1a1a] leading-relaxed mb-8 md:mb-10 max-w-4xl mx-auto font-semibold">
            We combine operational leadership with patient, long-term capital to help established Australian businesses grow sustainably.
          </p>

          {/* Second Paragraph */}
          <p className="text-[17px] md:text-[18px] lg:text-[19px] text-[#1a1a1a] leading-relaxed mb-12 md:mb-14 lg:mb-16 max-w-4xl mx-auto font-semibold">
            Our background includes CEO and executive roles at companies such as:
          </p>

          {/* Company Logos */}
          <div className="flex flex-nowrap justify-center items-center gap-2 md:gap-3 lg:gap-4 w-full">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl px-3 md:px-4 lg:px-5 py-3 md:py-4 flex items-center justify-center flex-1 max-w-[140px] md:max-w-[160px] hover:border-gray-300 transition-colors"
              >
                <Image 
                  src={company.logo} 
                  alt={company.name}
                  width={120}
                  height={40}
                  className="h-6 md:h-7 lg:h-8 w-full object-contain opacity-80 grayscale"
                  unoptimized
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}