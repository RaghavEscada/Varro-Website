'use client'

import { FormEvent } from 'react'
import Image from 'next/image'

export default function Contact() {
  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted')
  }

  return (
    <section id="contact" className="py-[5708px] pb-[100px] bg-dark scroll-mt-24">
      <div className="container-custom">
        <div className="mb-[74px]">
          <h2 className="font-display text-[58px] font-semibold leading-[1.138em] capitalize text-white mb-[74px] max-w-[722px]">
            Ready to explore what's possible with Us?
          </h2>
          <h3 className="text-[26px] font-normal leading-[3.154em] uppercase text-white">
            Get in touch
          </h3>
        </div>
        
        <div className="max-w-[653px] ml-auto">
          <div className="bg-dark-tertiary py-16 px-[54px] rounded-none">
            <p className="text-xl font-medium leading-[1.4em] text-text-light mb-[102px]">
              Let's have a confidential conversation about your business and goals.
            </p>
            <form onSubmit={handleSubmit} className="flex flex-col gap-[35px]">
              <div className="flex gap-[25px]">
                <div className="flex-1 flex flex-col gap-[8.47px]">
                  <label htmlFor="firstName" className="text-[14.82px] font-medium leading-[2.5em] text-text-gray-light">
                    First Name*
                  </label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    required
                    className="bg-transparent border-none border-b-[1.06px] border-[rgba(255,255,255,0.25)] text-white font-primary text-[14.82px] py-2 outline-none"
                  />
                  <div className="h-[1.06px] bg-[rgba(255,255,255,0.25)] -mt-px" />
                </div>
                <div className="flex-1 flex flex-col gap-[8.47px]">
                  <label htmlFor="email" className="text-[14.82px] font-medium leading-[2.5em] text-text-gray-light">
                    Email*
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    className="bg-transparent border-none border-b-[1.06px] border-[rgba(255,255,255,0.25)] text-white font-primary text-[14.82px] py-2 outline-none"
                  />
                  <div className="h-[1.06px] bg-[rgba(255,255,255,0.25)] -mt-px" />
                </div>
              </div>
              
              <div className="flex flex-col gap-[8.47px]">
                <label htmlFor="subject" className="text-[14.82px] font-medium leading-[2.5em] text-text-gray-light">
                  Subject*
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  required
                  className="bg-transparent border-none border-b-[1.06px] border-[rgba(255,255,255,0.25)] text-white font-primary text-[14.82px] py-2 outline-none"
                />
                <div className="h-[1.06px] bg-[rgba(255,255,255,0.25)] -mt-px" />
              </div>
              
              <div className="flex flex-col gap-[8.47px]">
                <label htmlFor="message" className="text-[14.82px] font-medium leading-[2.5em] text-text-gray-light">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="bg-transparent border-none border-b-[1.06px] border-[rgba(255,255,255,0.25)] text-white font-primary text-[14.82px] py-2 outline-none resize-y min-h-[100px]"
                />
                <div className="h-[1.06px] bg-[rgba(255,255,255,0.25)] -mt-px" />
              </div>
              
              <button
                type="submit"
                className="flex items-center gap-[19px] bg-transparent border-none font-medium text-base leading-[0.957em] uppercase text-white cursor-pointer p-0 mt-[69px]"
              >
                send message
                <Image
                  src="/images/arrow-icon.svg"
                  alt="Arrow"
                  width={35.95}
                  height={35.95}
                />
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  )
}

