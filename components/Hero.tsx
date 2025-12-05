'use client'

import Image from 'next/image'
import { useState } from 'react'

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0)
  const totalSlides = 4

  return (
    <section className="relative min-h-screen bg-[#1E2F4D] overflow-hidden">
      {/* Background video */}
      <div className="absolute inset-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover"
        >
          <source src="/videos/Varro Groups Video.mp4" type="video/mp4" />
        </video>
      </div>
      
      {/* Dark overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a2841]/95 via-[#1E2F4D]/90 to-[#253852]/85" />
      
      <div className="container mx-auto px-5 md:px-8 lg:px-12 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 lg:gap-20 pt-24 md:pt-32 lg:pt-40 pb-16 md:pb-24 lg:pb-32 items-start">
          {/* Left side - Text content */}
          <div className="flex flex-col justify-start pt-0 lg:pt-4">
            <h1 className="text-white mb-6 md:mb-8 lg:mb-10 font-display">
              <span className="block text-[32px] md:text-[40px] lg:text-[50px] leading-[1.15] font-normal tracking-tight">
                Acquiring High-Quality
              </span>
              <span className="block text-[32px] md:text-[40px] lg:text-[50px] leading-[1.15] font-bold tracking-tight">
                Australian SMBs Ready{' '}
              </span>
              <span className="block text-[32px] md:text-[40px] lg:text-[50px] leading-[1.15] font-normal tracking-tight">
                for Growth
              </span>
            </h1>
            
            <p className="text-white/90 text-[14px] md:text-[15px] lg:text-[16px] leading-relaxed font-light max-w-full lg:max-w-[520px] mb-10 md:mb-16 lg:mb-20">
              Our approach combines entrepreneurial drive with the care and stability needed to protect your legacy and team while unlocking their full potential.
            </p>
            
            {/* Carousel dots */}
            <div className="flex items-center gap-2.5 mb-10 lg:mb-0">
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setActiveSlide(index)}
                  className={`h-[3px] rounded-full transition-all duration-300 ${
                    index === activeSlide 
                      ? 'w-[52px] bg-[#0AAAA8]' 
                      : 'w-[8px] bg-white/40'
                  }`}
                  aria-label={`Go to slide ${index + 1}`}
                />
              ))}
            </div>
          </div>
          
          {/* Right side - Video/Image with text below */}
          <div className="flex flex-col pt-0 lg:pt-2">
            <div className="relative w-full aspect-[16/10] mb-6 md:mb-8 lg:mb-10 rounded-lg overflow-hidden shadow-2xl">
              <Image
                src="/images/about-image.svg"
                alt="Business professional"
                fill
                className="object-cover"
              />
              
       
            
            </div>
            
            {/* Text below image */}
            <p className="text-white text-[14px] md:text-[16px] lg:text-[17px] leading-[1.65] font-normal tracking-wide">
              We Are An Operator-Led Team Committed To Stewarding Founder-Owned And Family-Run Businesses For The Long Term.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}