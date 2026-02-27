import React from 'react'
import Logo from '../../../public/eventLogo.png'
import Image from 'next/image'
import { Button } from '../ui/button'

function HeroSection() {
    return (
        <section className='relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-zinc-50' id='about'>
            {/* Soft background glow */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-100 rounded-full blur-[120px] opacity-40 mix-blend-multiply pointer-events-none"></div>

            <div className='container mx-auto px-6 py-16 md:py-24 relative z-10 flex flex-col md:flex-row items-center gap-16'>
                <div className='flex-1 flex flex-col gap-8 md:pr-10 lg:pl-16'>
                    <div className="space-y-4">
                        <h2 className='text-5xl md:text-7xl font-roboto font-light tracking-tight text-zinc-900'>
                            Crafting <span className="text-amber-600 font-medium">Unforgettable</span> Memories
                        </h2>
                        <p className='text-xl md:text-2xl font-light text-zinc-500 tracking-wide'>
                            Shanmukha — CEO of Attuluri Events
                        </p>
                    </div>
                    
                    <p className='text-zinc-600 leading-relaxed text-lg font-light max-w-2xl'>
                        Every celebration is a unique story waiting to be told. We bring your vision to life with meticulous attention to detail, breathtaking designs, and seamless execution. Discover the art of premium event management.
                    </p>
                    
                    <div className='flex flex-wrap gap-4 pt-4'>
                        <Button className="bg-amber-600 hover:bg-amber-700 text-white rounded-full px-8 py-6 text-sm uppercase tracking-widest font-medium transition-all shadow-md hover:shadow-lg shadow-amber-600/20">
                            Book an Event
                        </Button>
                        <Button variant='outline' className="rounded-full px-8 py-6 text-sm uppercase tracking-widest font-medium border-zinc-300 text-zinc-700 hover:bg-zinc-100 hover:text-zinc-900 transition-all">
                            Follow on Insta
                        </Button>
                    </div>
                </div>
                
                <div className='flex-1 flex justify-center relative'>
                    {/* Decorative elements */}
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-50 to-transparent rounded-full blur-3xl -z-10"></div>
                    <div className="relative group">
                        <div className="absolute -inset-1 bg-gradient-to-r from-amber-600 to-amber-300 rounded-full blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
                        <Image 
                            className='relative h-[300px] w-[300px] md:h-[450px] md:w-[450px] object-cover rounded-full shadow-2xl border-8 border-white' 
                            src={Logo} 
                            alt='CEO Image' 
                            height={500} 
                            width={500}
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default HeroSection