import { Button } from '@/components/ui/button'
import React from 'react'
import Page from './dashboard/page'
import Header from '@/components/custom/Header'
import HeroSection from '@/components/custom/HeroSection'
import OurEvents from '@/components/custom/OurEvents'

const page = () => {
  return (
    <main className='max-w-[1400px] m-auto'>
      {/* <Page /> */}
      <Header />
      <HeroSection />
      <OurEvents />
    </main>
  )
}

export default page
