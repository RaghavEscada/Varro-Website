export default function Hero() {
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
        <div className="max-w-4xl pt-32 md:pt-40 lg:pt-48 pb-12 md:pb-16 lg:pb-20">
          {/* Text content */}
          <div className="flex flex-col">
            <h1 className="text-white mb-8 md:mb-10 lg:mb-12 font-serif text-[40px] md:text-[52px] lg:text-[64px] leading-tight font-normal">
              Acquiring High-Quality<br />
              Australian SMBs Ready<br />
              for Growth
            </h1>
            
            <p className="text-white text-[16px] md:text-[17px] lg:text-[18px] leading-relaxed font-light max-w-2xl">
              Our approach combines entrepreneurial drive with the care and stability needed to protect your legacy and team while unlocking their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}