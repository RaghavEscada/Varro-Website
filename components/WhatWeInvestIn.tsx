import Image from 'next/image'

export default function WhatWeInvestIn() {
  const categories = [
    {
      title: 'Business',
      image: '/images/invest-business.jpg',
      items: [
        'Strong customer retention and satisfaction rates',
        'Sustainable competitive moats and differentiation',
        'Products or services integral to client operations',
      ],
    },
    {
      title: 'Leadership',
      image: '/images/invest-leadership.jpg',
      items: [
        'Keen to step back from day-to day operations',
        'Ready to explore new opportunities',
        'Owner considering retiring',
      ],
    },
    {
      title: 'Revenue Profile',
      image: '/images/invest-revenue.jpg',
      items: [
        'Recurring income streams and high customer lifetime value',
        'Record of consistent profitability and growth',
        'EBITA >$2M and revenue $10-30M',
      ],
    },
  ]

  return (
    <section id="what-we-invest" className="py-16 md:py-24 lg:py-32 bg-white scroll-mt-24">
      <div className="container-custom">
        {/* Header Section */}
        <div className="flex flex-col lg:flex-row justify-between items-start gap-8 lg:gap-0 mb-12 md:mb-16 lg:mb-20">
          <div className="max-w-full lg:max-w-[600px]">
            <h2 className="font-display text-[28px] md:text-[36px] lg:text-[45px] font-semibold leading-tight uppercase text-dark mb-5 md:mb-6 lg:mb-8">
              What We Invest In
            </h2>
            <p className="text-[15px] md:text-[16px] lg:text-[17px] font-medium leading-[1.7] text-[#626262]">
              Whether you&apos;re exploring immediate opportunities or planning for the future, we welcome discussions about the potential of your business. We focus on companies that align with these criteria.
            </p>
          </div>
          
          <div className="text-left lg:text-right w-full lg:w-auto">
            <div className="font-display text-[60px] md:text-[75px] lg:text-[90px] font-normal leading-none text-dark mb-3 lg:mb-4">
              $2M
            </div>
            <div className="text-base md:text-lg font-bold leading-tight text-dark mb-1.5 lg:mb-2">
              EBITA &gt;$2M
            </div>
            <div className="text-sm md:text-base font-medium leading-tight text-[#626262]">
              Consistent profitability<br />revenue $10-30M
            </div>
          </div>
        </div>
        
        {/* Three Column Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10 lg:gap-12">
          {categories.map((category, index) => (
            <div key={index} className="flex flex-col">
              <div className="relative w-full h-[280px] md:h-[320px] lg:h-[380px] mb-6 md:mb-7 lg:mb-8">
                <Image
                  src={category.image}
                  alt={category.title}
                  fill
                  className="object-cover"
                />
              </div>
              
              <h3 className="text-[22px] md:text-[24px] lg:text-[26px] font-semibold leading-tight text-dark mb-5 md:mb-5 lg:mb-6">
                {category.title}
              </h3>
              
              <ul className="list-none space-y-3 md:space-y-3.5 lg:space-y-4">
                {category.items.map((item, itemIndex) => (
                  <li
                    key={itemIndex}
                    className="text-[15px] md:text-[15px] lg:text-[16px] font-medium leading-[1.6] text-[#626262] relative pl-6"
                  >
                    <span className="absolute left-0 top-[10px] w-2 h-2 bg-dark rounded-full" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

