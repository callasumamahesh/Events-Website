import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import Logo from '../../../public/eventLogo.png'

function Footer() {
  return (
    <footer className='bg-zinc-50 text-zinc-900 overflow-hidden relative border-t border-zinc-200 overflow-hidden'>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-100 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 py-16 md:py-24 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-8 items-center border-b border-zinc-200 pb-20 mb-12">
                <div className='flex flex-col gap-8 max-w-xl'>
                    <h2 className='text-zinc-900 text-4xl md:text-5xl font-roboto font-light tracking-tight leading-tight'>
                        An event is not just a gathering — it’s a story that <span className='text-amber-600 font-medium'>lives forever</span> in hearts.
                    </h2>
                    <p className='text-zinc-500 font-light text-lg leading-relaxed'>
                        Every celebration deserves magic, elegance, and flawless execution. From intimate moments to grand occasions, we turn your dreams into timeless memories.
                    </p>
                </div>
                <div className="flex md:justify-end">
                    <div className="flex items-center gap-4 group cursor-pointer">
                        <div className="h-16 w-16 bg-white rounded-full flex items-center justify-center p-3 border border-zinc-200 shadow-sm transition-all duration-300 group-hover:shadow-md">
                           <Image className='object-contain transition-transform duration-500 group-hover:scale-105' src={Logo} alt="Event Logo" width={40} height={40}/>
                        </div>
                        <h1 className='text-2xl font-medium font-roboto tracking-widest text-zinc-900 uppercase'>Attuluri Events</h1>
                    </div>
                </div>
            </div>
            
            <div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm font-light text-zinc-500">
                <p>&copy; {new Date().getFullYear()} Attuluri Events. All rights reserved.</p>
                <div className="flex gap-8">
                    <Link href="#" className="hover:text-amber-600 transition-colors">Privacy Policy</Link>
                    <Link href="#" className="hover:text-amber-600 transition-colors">Terms of Service</Link>
                    <Link href="#" className="hover:text-amber-600 transition-colors">Instagram</Link>
                </div>
            </div>
        </div>
    </footer>
  )
}

export default Footer