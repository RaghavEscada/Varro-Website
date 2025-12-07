export default function AboutDetailed() {
  const companies = [
    { 
      name: 'BCG', 
      logo: 'https://logo.clearbit.com/bcg.com'
    },
    { 
      name: 'Amazon', 
      logo: 'https://logo.clearbit.com/amazon.com'
    },
    { 
      name: 'Audible', 
      logo: 'https://logo.clearbit.com/audible.com'
    },
    { 
      name: 'Finder', 
      logo: 'https://logo.clearbit.com/finder.com.au'
    },
    { 
      name: 'AMP', 
      logo: 'https://logo.clearbit.com/amp.com.au'
    },
    { 
      name: 'Edelman', 
      logo: 'https://logo.clearbit.com/edelman.com'
    },
    { 
      name: 'iFIT', 
      logo: 'https://logo.clearbit.com/ifit.com'
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
          <p className="text-[17px] md:text-[18px] lg:text-[19px] text-[#1a1a1a] leading-relaxed mb-8 md:mb-10 max-w-4xl mx-auto font-light">
            We combine operational leadership with patient, long-term capital to help established Australian businesses grow sustainably.
          </p>

          {/* Second Paragraph */}
          <p className="text-[17px] md:text-[18px] lg:text-[19px] text-[#1a1a1a] leading-relaxed mb-12 md:mb-14 lg:mb-16 max-w-4xl mx-auto font-light">
            Our background includes CEO and executive roles at companies such as:
          </p>

          {/* Company Logos */}
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-8 lg:gap-10">
            {companies.map((company, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl px-8 md:px-10 lg:px-12 py-5 md:py-6 flex items-center justify-center min-w-[140px] md:min-w-[160px] hover:border-gray-300 transition-colors"
              >
                <img 
                  src={company.logo} 
                  alt={company.name}
                  className="h-8 md:h-9 lg:h-10 w-auto object-contain opacity-60 grayscale"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}