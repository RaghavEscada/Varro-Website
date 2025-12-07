import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import WhyUs from '@/components/WhyUs'
import ProcessImage from '@/components/ProcessImage'
import AboutDetailed from '@/components/AboutDetailed'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <main className="min-h-screen">
      <Header />
      <Hero />
      <About />
      <WhyUs />
      <ProcessImage />
      <AboutDetailed />
      <Footer />
    </main>
  )
}

