'use client'

import Image from 'next/image'
import { useState, FormEvent } from 'react'

export default function Footer() {
  const [formData, setFormData] = useState({
    firstName: '',
    email: '',
    subject: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<{
    type: 'success' | 'error' | null
    message: string
  }>({ type: null, message: '' })

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitStatus({ type: null, message: '' })

    try {
      const response = await fetch('/api/send-email', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          subject: formData.subject || 'New Contact Form Submission'
        }),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus({
          type: 'success',
          message: '✨ Thank you! Your message has been sent successfully. We\'ll get back to you soon!',
        })
        setFormData({ firstName: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus({
          type: 'error',
          message: data.error || 'Failed to send message. Please try again.',
        })
      }
    } catch (error) {
      setSubmitStatus({
        type: 'error',
        message: 'Network error. Please check your connection and try again.',
      })
    } finally {
      setIsSubmitting(false)
    }
  }

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }
  return (
    <footer id="contact" className="bg-[#03092E] text-white min-h-screen flex flex-col relative overflow-hidden scroll-mt-24">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/10 transform rotate-45"></div>
      </div>

      {/* Large VG Logo Background - Large Light Blue Watermark - Grounded to Absolute Bottom */}
      <div className="absolute left-0 bottom-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="relative w-[280px] h-[280px] md:w-[400px] md:h-[400px] lg:w-[520px] lg:h-[520px]"
          style={{
            transform: 'translate(0%, 0%)',
          }}
        >
          <Image
            src="/images/logo.svg"
            alt="VG Background"
            fill
            className="object-contain"
            style={{
              opacity: 0.03,
              filter: 'brightness(0) invert(1) sepia(100%) saturate(300%) hue-rotate(170deg) brightness(2)',
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-12 lg:px-16 relative z-10 flex-1 flex items-center py-12 md:py-16 lg:py-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-10 lg:gap-16 items-start w-full">
          {/* Left Side - Contact Info */}
          <div className="relative space-y-5 md:space-y-6 lg:space-y-7">
            {/* Heading */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-5">
                <h2 className="text-[14px] md:text-[15px] lg:text-[16px] font-medium tracking-[0.2em] uppercase">
                  GET IN TOUCH
                </h2>
                <div className="h-[2px] w-20 md:w-24 lg:w-28 bg-white"></div>
              </div>
              <h3 className="font-abhaya text-[32px] md:text-[38px] lg:text-[44px] leading-[1.2] font-normal mb-24 md:mb-32 lg:mb-40">
                Thinking About Succession?<br />
                Explore What&apos;s Possible<br />
                With Us.
              </h3>
            </div>

            {/* Contact Details */}
            <div className="relative z-10 space-y-4 md:space-y-5">
              {/* Phone */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent border-2 border-black flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="#0AAAA8" viewBox="0 0 24 24">
                    <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <a href="tel:+61-0408-023-231" className="text-[16px] md:text-[18px] lg:text-[20px] hover:text-[#0AAAA8] transition-colors">
                  +61-0408-023-231
                </a>
              </div>

              {/* Email */}
              <div className="flex items-center gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-transparent border-2 border-black flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6" fill="#0AAAA8" viewBox="0 0 24 24">
                    <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z" />
                  </svg>
                </div>
                <a href="mailto:hello@varro.com.au" className="text-[16px] md:text-[18px] lg:text-[20px] hover:text-[#0AAAA8] transition-colors">
                  hello@varro.com.au
                </a>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form with Logo */}
          <div className="relative mt-6 lg:mt-0">
            {/* Top Right Logo */}
            <div className="absolute -top-8 md:-top-10 lg:-top-12 right-0 z-20 flex flex-col items-end gap-1.5">
              <div className="relative w-12 h-12 md:w-14 md:h-14 lg:w-16 lg:h-16">
                <Image
                  src="/images/logo.svg"
                  alt="Varro Group"
                  fill
                  className="object-contain filter drop-shadow-lg"
                />
              </div>
              <p className="text-white text-[9px] md:text-[10px] lg:text-[11px] font-medium tracking-[0.15em] uppercase">
                VARRO GROUP
              </p>
            </div>
            {/* Form Box */}
            <div className="bg-[#0A1230] p-6 md:p-8 lg:p-10 shadow-2xl mt-12 md:mt-16 lg:mt-20">
              <p className="text-[15px] md:text-[16px] lg:text-[17px] leading-relaxed mb-5 md:mb-6 lg:mb-7 text-white/85 font-light">
                Let&apos;s have a confidential conversation about your business and goals.
              </p>

              {submitStatus.type && (
                <div
                  className={`p-4 rounded-sm mb-6 ${
                    submitStatus.type === 'success'
                      ? 'bg-[#0AAAA8]/20 border border-[#0AAAA8]/50 text-[#0AAAA8]'
                      : 'bg-red-500/20 border border-red-500/50 text-red-300'
                  }`}
                >
                  <p className="text-[14px] md:text-[15px]">{submitStatus.message}</p>
                </div>
              )}

              <form onSubmit={handleSubmit} className="space-y-5 md:space-y-6">
                {/* First Name & Email Row */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5 md:gap-6">
                  <div>
                    <input
                      type="text"
                      name="firstName"
                      placeholder="First Name*"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-white text-[15px] md:text-[16px] placeholder-white/50 focus:border-[#0AAAA8] focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>
                  <div>
                    <input
                      type="email"
                      name="email"
                      placeholder="Email*"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      disabled={isSubmitting}
                      className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-white text-[15px] md:text-[16px] placeholder-white/50 focus:border-[#0AAAA8] focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="-mt-2 md:-mt-3">
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-white/20 py-3 md:py-4 text-white text-[15px] md:text-[16px] placeholder-white/50 focus:border-[#0AAAA8] focus:outline-none transition-colors resize-none disabled:opacity-50"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start pt-3 md:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center gap-3 text-white text-[14px] md:text-[15px] font-semibold uppercase tracking-wider hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="border-b-2 border-white pb-1">
                      {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                    </span>
                    <div className="w-10 h-10 md:w-11 md:h-11 rounded-full bg-[#0AAAA8] flex items-center justify-center group-hover:scale-105 transition-transform">
                      {isSubmitting ? (
                        <svg className="animate-spin h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                        </svg>
                      )}
                    </div>
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center py-4 md:py-5 border-t border-white/10 relative z-10">
        <p className="text-white/60 text-[12px] md:text-[13px]">
          © {new Date().getFullYear()} Varro Group. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
