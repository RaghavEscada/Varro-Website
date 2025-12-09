'use client'

import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isVisible, setIsVisible] = useState(true)
  const [lastScrollY, setLastScrollY] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY

      // Always show navbar in hero section (top of page)
      if (currentScrollY < 100) {
        setIsVisible(true)
      } 
      // Show navbar when scrolling up, hide when scrolling down
      else if (currentScrollY < lastScrollY) {
        setIsVisible(true)
      } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
        setIsVisible(false)
      }

      setLastScrollY(currentScrollY)
    }

    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [lastScrollY])

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
    e.preventDefault()
    setMobileMenuOpen(false) // Close mobile menu when clicking a link
    const element = document.getElementById(sectionId)
    if (element) {
      const headerOffset = 100 // Account for fixed header
      const elementPosition = element.getBoundingClientRect().top
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth'
      })
    }
  }

  return (
    <header 
      className={`fixed top-0 left-0 right-0 bg-transparent z-[1000] py-5 md:py-6 lg:py-8 transition-transform duration-300 ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between">
          <Link href="/" className="logo-group relative w-[90px] h-[65px] md:w-[100px] md:h-[72px] lg:w-[113px] lg:h-[81px]">
            <Image
              src="/images/logo.svg"
              alt="Varro Group Logo"
              width={55}
              height={60}
              className="absolute left-[23px] md:left-[26px] lg:left-[29px] top-0 w-[44px] h-[48px] md:w-[50px] md:h-[54px] lg:w-[55px] lg:h-[60px]"
            />
            <span className="font-display text-[12px] md:text-[13.5px] lg:text-[14.84px] font-normal leading-[0.758em] uppercase text-white absolute bottom-0 left-0">
              Varro Group
            </span>
          </Link>
          
          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-20">
            <a 
              href="#what-we-invest" 
              onClick={(e) => scrollToSection(e, 'what-we-invest')}
              className="font-medium text-sm leading-tight uppercase text-white no-underline transition-opacity hover:opacity-70 tracking-wide cursor-pointer"
            >
              What We Invest In
            </a>
            <a 
              href="#our-process" 
              onClick={(e) => scrollToSection(e, 'our-process')}
              className="font-medium text-sm leading-tight uppercase text-white no-underline transition-opacity hover:opacity-70 tracking-wide cursor-pointer"
            >
              Our Process
            </a>
            <a 
              href="#about" 
              onClick={(e) => scrollToSection(e, 'about')}
              className="font-medium text-sm leading-tight uppercase text-white no-underline transition-opacity hover:opacity-70 tracking-wide cursor-pointer"
            >
              About Us
            </a>
          </nav>
          
          {/* Desktop Get in Touch Button */}
          <a 
            href="#contact" 
            onClick={(e) => scrollToSection(e, 'contact')}
            className="hidden lg:flex items-center gap-3 bg-transparent border-none font-medium text-sm leading-tight uppercase text-white cursor-pointer p-0 tracking-wide hover:opacity-90 transition-opacity"
          >
            Get in Touch
            <span className="w-9 h-9 rounded-full bg-accent flex items-center justify-center">
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 13L13 1M13 1H1M13 1V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </span>
          </a>

          {/* Mobile Hamburger Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="lg:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer z-[1001]"
            aria-label="Toggle menu"
          >
            <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-opacity duration-300 ${mobileMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`w-6 h-0.5 bg-white transition-transform duration-300 ${mobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        {mobileMenuOpen && (
          <div className="lg:hidden fixed inset-0 bg-[#0B1525] z-[1000] pt-24 px-5">
            <nav className="flex flex-col gap-8">
              <a 
                href="#what-we-invest" 
                onClick={(e) => scrollToSection(e, 'what-we-invest')}
                className="font-medium text-xl uppercase text-white no-underline transition-opacity hover:opacity-70 tracking-wide cursor-pointer py-2 border-b border-white/10"
              >
                What We Invest In
              </a>
              <a 
                href="#our-process" 
                onClick={(e) => scrollToSection(e, 'our-process')}
                className="font-medium text-xl uppercase text-white no-underline transition-opacity hover:opacity-70 tracking-wide cursor-pointer py-2 border-b border-white/10"
              >
                Our Process
              </a>
              <a 
                href="#about" 
                onClick={(e) => scrollToSection(e, 'about')}
                className="font-medium text-xl uppercase text-white no-underline transition-opacity hover:opacity-70 tracking-wide cursor-pointer py-2 border-b border-white/10"
              >
                About Us
              </a>
              <a 
                href="#contact" 
                onClick={(e) => scrollToSection(e, 'contact')}
                className="flex items-center gap-3 font-medium text-xl uppercase text-white cursor-pointer py-2 hover:opacity-90 transition-opacity mt-4"
              >
                Get in Touch
                <span className="w-10 h-10 rounded-full bg-accent flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 13L13 1M13 1H1M13 1V13" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </a>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}

