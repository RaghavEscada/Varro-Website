export default function Hero() {
  return (
    <section className="relative min-h-screen bg-[#04092C] overflow-hidden">
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
      <div className="absolute inset-0 bg-gradient-to-br from-[#04092C]/95 via-[#04092C]/90 to-[#04092C]/85" />
      
      <div className="relative z-10 flex items-center min-h-screen">
        <div className="container mx-auto px-6 md:px-12 lg:px-16 xl:px-20">
          <div className="max-w-[651px] pt-24 md:pt-0">
            {/* Text content */}
            <h1 className="text-white mb-8 lg:mb-10 font-abhaya">
              <span className="block text-[42px] md:text-[56px] lg:text-[64px] leading-[1.03125] font-normal tracking-[0%]">
                Acquiring <span className="font-bold">High-Quality</span>
              </span>
              <span className="block text-[42px] md:text-[56px] lg:text-[64px] leading-[1.03125] font-normal tracking-[0%]">
                Australian SMBs Ready
              </span>
              <span className="block text-[42px] md:text-[56px] lg:text-[64px] leading-[1.03125] font-normal tracking-[0%]">
                for Growth
              </span>
            </h1>
            
            <p className="text-white/85 text-[16px] md:text-[17px] lg:text-[18px] leading-[1.7] font-light max-w-[680px]">
              Our approach combines entrepreneurial drive with the care and stability needed to protect your legacy and team while unlocking their full potential.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}