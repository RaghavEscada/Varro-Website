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
        body: JSON.stringify(formData),
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
    <footer className="bg-[#0B1525] text-white py-16 md:py-24 relative overflow-hidden">
      {/* Background decorative pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-20 left-10 w-32 h-32 border border-white/20 transform rotate-45"></div>
        <div className="absolute bottom-20 right-20 w-40 h-40 border border-white/20 transform rotate-45"></div>
        <div className="absolute top-1/2 left-1/3 w-24 h-24 border border-white/10 transform rotate-45"></div>
      </div>

      {/* Large VG Logo Background - Large Light Blue Watermark - Grounded to Absolute Bottom */}
      <div className="absolute left-0 bottom-0 pointer-events-none z-0 overflow-hidden">
        <div 
          className="relative w-[400px] h-[400px] md:w-[600px] md:h-[600px] lg:w-[800px] lg:h-[800px]"
          style={{
            transform: 'translate(-20%, 0%)',
          }}
        >
          <Image
            src="/images/logo.svg"
            alt="VG Background"
            fill
            className="object-contain"
            style={{
              opacity: 0.08,
              filter: 'brightness(0) invert(1) sepia(100%) saturate(300%) hue-rotate(170deg) brightness(2)',
            }}
          />
        </div>
      </div>

      <div className="container mx-auto px-5 md:px-12 lg:px-16 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-12 lg:gap-20 items-start">
          {/* Left Side - Contact Info */}
          <div className="relative space-y-8 md:space-y-10 lg:space-y-12">
            {/* Heading */}
            <div className="relative z-10">
              <div className="flex items-center gap-3 md:gap-4 mb-5 md:mb-6">
                <h2 className="text-[14px] md:text-[16px] lg:text-[18px] font-medium tracking-[0.2em] uppercase">
                  GET IN TOUCH
                </h2>
                <div className="h-[2px] w-16 md:w-20 bg-white"></div>
              </div>
              <h3 className="font-serif text-[32px] md:text-[42px] lg:text-[56px] leading-tight font-normal">
                Ready To Explore What&apos;s Possible With Us?
              </h3>
            </div>

            {/* Contact Details */}
            <div className="relative z-10 space-y-6 md:space-y-7 lg:space-y-8">
              {/* Email */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0AAAA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] font-semibold uppercase tracking-wider mb-1 text-white/70">EMAIL</p>
                  <a href="mailto:hello@varro.com.au" className="text-[16px] md:text-[18px] lg:text-[20px] hover:text-[#0AAAA8] transition-colors">
                    hello@varro.com.au
                  </a>
                </div>
              </div>

              {/* Address */}
              <div className="flex items-start gap-3 md:gap-4">
                <div className="w-10 h-10 md:w-12 md:h-12 rounded-full bg-[#0AAAA8] flex items-center justify-center flex-shrink-0">
                  <svg className="w-5 h-5 md:w-6 md:h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <p className="text-[12px] md:text-[13px] lg:text-[14px] font-semibold uppercase tracking-wider mb-1 text-white/70">ADDRESS</p>
                  <p className="text-[16px] md:text-[18px] lg:text-[20px]">Australia, Sydney, Melbourne</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="relative mt-6 lg:mt-0">
            {/* Logo with Text */}
            <div className="absolute -top-6 md:-top-8 right-0 flex flex-col items-center gap-1.5 md:gap-2">
              <div className="relative w-16 h-16 md:w-20 md:h-20 lg:w-24 lg:h-24">
                <Image
                  src="/images/logo.svg"
                  alt="Varro Group"
                  fill
                  className="object-contain filter drop-shadow-lg"
                />
              </div>
              <p className="text-white text-[10px] md:text-[11px] lg:text-[12px] font-medium tracking-[0.15em] uppercase">
                VARRO GROUP
              </p>
            </div>

            {/* Form Box */}
            <div className="bg-[#152238] p-6 md:p-8 lg:p-10 rounded-sm mt-12 md:mt-14 lg:mt-16 shadow-2xl">
              <p className="text-[15px] md:text-[16px] lg:text-[18px] leading-relaxed mb-6 md:mb-7 lg:mb-8 text-white/90">
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
                      className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:border-[#0AAAA8] focus:outline-none transition-colors disabled:opacity-50"
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
                      className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:border-[#0AAAA8] focus:outline-none transition-colors disabled:opacity-50"
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <input
                    type="text"
                    name="subject"
                    placeholder="Subject*"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:border-[#0AAAA8] focus:outline-none transition-colors disabled:opacity-50"
                  />
                </div>

                {/* Message */}
                <div>
                  <textarea
                    name="message"
                    placeholder="Message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    disabled={isSubmitting}
                    className="w-full bg-transparent border-b border-white/30 py-3 text-white placeholder-white/50 focus:border-[#0AAAA8] focus:outline-none transition-colors resize-none disabled:opacity-50"
                  ></textarea>
                </div>

                {/* Submit Button */}
                <div className="flex justify-start pt-3 md:pt-4">
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="group flex items-center gap-2.5 md:gap-3 text-white text-[13px] md:text-[14px] font-semibold uppercase tracking-wider hover:text-[#0AAAA8] transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
                  >
                    <span className="border-b-2 border-white group-hover:border-[#0AAAA8] pb-1">
                      {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                    </span>
                    <div className="w-9 h-9 md:w-10 md:h-10 rounded-full bg-[#0AAAA8] flex items-center justify-center group-hover:scale-110 transition-transform">
                      {isSubmitting ? (
                        <svg className="animate-spin h-4 w-4 md:h-5 md:w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                          <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                          <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                        </svg>
                      ) : (
                        <svg className="w-4 h-4 md:w-5 md:h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
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

        {/* Copyright */}
        <div className="text-center mt-12 md:mt-14 lg:mt-16 pt-6 md:pt-7 lg:pt-8 border-t border-white/10">
          <p className="text-white/60 text-[13px] md:text-[14px]">
            © {new Date().getFullYear()} Varro Group. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}
