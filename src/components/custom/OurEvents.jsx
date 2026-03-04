import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'

const OurEvents = () => {
    const eventsData = [
        {
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "/event1.jpeg",
            eventDescription: 'This is a great event'
        },
        {
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "/event2.jpeg",
            eventDescription: 'This is a great event'
        },{
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "/event3.jpeg",
            eventDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quisquam? Ratione enim explicabo sequi suscipit magni assumenda in quam ab deleniti officia nulla, at, quod reiciendis beatae praesentium ut? Praesentium.'
        },{
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "/event4.jpeg",
            eventDescription: 'This is a great event'
        },{
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "/event5.jpeg",
            eventDescription: 'This is a great event'
        }
    ]
    return (
        <div id='ourEvents' className='scroll-mt-32 max-w-7xl mx-auto px-6 py-16 md:py-24'>
            <div className="flex flex-col items-start md:flex-row justify-between items-end mb-12">
                <div className="space-y-2">
                    <p className="text-amber-600 font-medium tracking-widest uppercase text-sm font-roboto">Portfolio</p>
                    <h2 className='text-4xl md:text-5xl font-roboto font-light tracking-tight text-zinc-900'>Our Exquisite <span className="font-medium">Events</span></h2>
                </div>
            </div>
            
            <section className='relative'>
                <Carousel 
                    className="w-full touch-pan-y"
                    opts={{
                        align: "start",
                        dragFree: true,
                        loop: true
                    }}
                >
                    <CarouselContent className="-ml-4">
                        {eventsData.map((event, index) => (
                            <CarouselItem key={index} className="pl-4 basis-[85%] md:basis-1/2 lg:basis-1/3">
                                <div className="group cursor-pointer">
                                    <div className="overflow-hidden rounded-2xl relative">
                                        <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
                                        <Image src={event.eventImage} alt='Event Images' className="w-full h-full aspect-[4/5] object-cover transition-transform duration-700 group-hover:scale-105" width={400} height={400}/>
                                    </div>
                                    <div className="flex flex-col gap-1 mt-6">
                                        <div className='flex justify-between items-center text-sm text-zinc-500 font-light'>
                                            <p>{event.eventDate}</p>
                                            <p>{event.eventPlace}</p>
                                        </div>
                                        <h3 className='text-2xl text-zinc-900 font-light font-roboto mt-1'>{event.eventName}</h3>
                                        <p className="text-zinc-600 font-light line-clamp-2 mt-2 leading-relaxed">{event.eventDescription}</p>
                                    </div>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    
                    {/* Mobile Navigation */}
                    <div className="flex justify-center gap-4 mt-8 md:hidden">
                        <CarouselPrevious className='static translate-x-0 translate-y-0 text-zinc-700 hover:bg-amber-600 hover:text-white border-zinc-200 transition-all'/>
                        <CarouselNext className='static translate-x-0 translate-y-0 text-zinc-700 hover:bg-amber-600 hover:text-white border-zinc-200 transition-all'/>
                    </div>
                    
                    {/* Desktop Navigation */}
                    <div className="hidden md:block">
                        <CarouselPrevious className='-left-12 border-zinc-200 text-zinc-700 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all'/>
                        <CarouselNext className='-right-12 border-zinc-200 text-zinc-700 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all'/>
                    </div>
                </Carousel>
            </section>
        </div>
    )
}

export default OurEvents