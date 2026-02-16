import React from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/eventLogo.png'
import { Button } from '../ui/button';
const Header = () => {

    const headerLinks = [
        {
            label : "About",
            value : "#about"
        },
        {
            label : "Our Events",
            value : "#ourEvents"
        },
        {
            label : "Event Prices",
            value : "#eventPrices"
        },
        // {
        //     label : "Our Team",
        //     value : "#eventTeam"
        // },
        {
            label : "Reviews",
            value : "#reviews"
        },
        {
            label : "Contact Us",
            value : "#contact-us"
        }
    ]

  return (
    <header className='min-h-18 flex items-center justify-between pl-4 pr-4 sticky top-0 bg-white z-50 pt-6 pb-6'>
        <section className="logo-section flex gap-10 h-full basis-100 items-center">
            <Image className='h-12.5' src={Logo} alt="Event Logo" width={50} height={50}/>
            <h1 className='text-4xl text-black uppercase'>Attuluri Events</h1>
        </section>
        <section className='flex justify-between basis-200'>
            {
                headerLinks.map((link, i) => {
                    return(
                        <Button key={i} variant='outline' className='border-0'>
                            <Link href={`${link.value}`} className='uppercase'>{link.label}</Link>
                        </Button>
                    )
                })
            }
        </section>
    </header>
  )
}

export default Header
