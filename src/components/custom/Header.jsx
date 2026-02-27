'use client'
import React, { useState } from 'react'
import Link from 'next/link';
import Image from 'next/image';
import Logo from '../../../public/eventLogo.png'

const Header = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const headerLinks = [
        { label : "About", value : "#about" },
        { label : "Our Events", value : "#ourEvents" },
        { label : "Packages", value : "#eventPrices" },
        { label : "Reviews", value : "#reviews" },
        { label : "Contact Us", value : "#contact-us" }
    ]

  return (
    <header className='sticky top-0 z-50 px-6 md:px-12 py-4 bg-white/90 backdrop-blur-md border-b border-zinc-100 transition-all duration-300'>
        <div className="flex items-center justify-between">
            <Link href="#" className="flex items-center gap-4 group">
                <Image className='h-10 w-10 object-contain transition-transform duration-300 group-hover:scale-105' src={Logo} alt="Event Logo" width={40} height={40}/>
                <h1 className='text-xl md:text-2xl font-medium font-roboto tracking-tight text-zinc-900 uppercase'>Attuluri Events</h1>
            </Link>

            {/* Desktop Nav */}
            <nav className='hidden md:flex items-center gap-8'>
                {headerLinks.map((link, i) => (
                    <Link 
                        key={i} 
                        href={link.value} 
                        className='text-sm font-medium text-zinc-600 hover:text-amber-600 uppercase tracking-widest transition-colors duration-300'
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>

            {/* Mobile Toggle Button */}
            <button 
                className="md:hidden p-2 text-zinc-600 hover:text-amber-600 transition-colors"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
            >
                {isMobileMenuOpen ? (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
                ) : (
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><line x1="3" y1="12" x2="21" y2="12"></line><line x1="3" y1="6" x2="21" y2="6"></line><line x1="3" y1="18" x2="21" y2="18"></line></svg>
                )}
            </button>
        </div>

        {/* Mobile Dropdown Nav */}
        {isMobileMenuOpen && (
            <nav className="md:hidden pt-6 pb-4 flex flex-col gap-6 animate-in slide-in-from-top-4 duration-300 border-t border-zinc-100 mt-4">
                {headerLinks.map((link, i) => (
                    <Link 
                        key={i} 
                        href={link.value} 
                        onClick={() => setIsMobileMenuOpen(false)}
                        className='text-base font-medium text-zinc-600 hover:text-amber-600 uppercase tracking-widest transition-colors duration-300 block'
                    >
                        {link.label}
                    </Link>
                ))}
            </nav>
        )}
    </header>
  )
}

export default Header
