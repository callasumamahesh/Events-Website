import { Button } from '@/components/ui/button'
import React from 'react'
import Page from './dashboard/page'
import Header from '@/components/custom/Header'
import HeroSection from '@/components/custom/HeroSection'
import OurEvents from '@/components/custom/OurEvents'
import EventPrices from '@/components/custom/EventPrices'
import Myteam from '@/components/custom/Myteam'
import Reviews from '@/components/custom/Reviews'
import Contact from '@/components/custom/Contact'
import Footer from '@/components/custom/Footer'

const page = () => {
  return (
    <div>
      <main className='max-w-350 m-auto'>
        <Header />
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
