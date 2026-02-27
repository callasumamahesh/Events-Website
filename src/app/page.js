import React from 'react'
import Header from '@/components/custom/Header'
import HeroSection from '@/components/custom/HeroSection'
import OurEvents from '@/components/custom/OurEvents'
import EventPrices from '@/components/custom/EventPrices'
import Reviews from '@/components/custom/Reviews'
import Contact from '@/components/custom/Contact'
import Footer from '@/components/custom/Footer'

const page = () => {
  return (
    <div className="bg-zinc-50 min-h-screen selection:bg-amber-200 selection:text-amber-900">
      <Header />
      <main>
        <HeroSection />
        <OurEvents />
        <EventPrices />
        {/* <Myteam/> */}
        <Reviews />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default page
