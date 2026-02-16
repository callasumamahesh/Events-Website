import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'
import Image from 'next/image'

const OurEvents = () => {
    const eventsData = [
        {
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "/Event1.jpg",
            eventDescription: 'This is a great event'
        },
        {
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "/Event2.jpg",
            eventDescription: 'This is a great event'
        },{
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "/Event3.jpg",
            eventDescription: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Temporibus, quisquam? Ratione enim explicabo sequi suscipit magni assumenda in quam ab deleniti officia nulla, at, quod reiciendis beatae praesentium ut? Praesentium.'
        },{
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "/Event4.jpg",
            eventDescription: 'This is a great event'
        },{
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "/Event1.jpg",
            eventDescription: 'This is a great event'
        }
    ]
    return (
        <div id='ourEvents' className='scroll-mt-50'>
            <h2 className='text-4xl uppercase text-orange-500 text-center mt-8'>Our Events</h2>
            <section className='mt-8 m-4'>
                <Carousel className="w-full">
                    <CarouselContent className="-ml-1">
                        {eventsData.map((event, index) => (
                            <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                                <div className="p-1 h-full">
                                    <Card className='h-full'>
                                        <CardContent className=''>
                                            <Image src={event.eventImage} alt='Event Images' className="rounded-sm w-full h-full aspect-video" width={400} height={400}/>
                                        </CardContent>
                                        <CardContent className="flex flex-col gap-2 items-center justify-center p-6">
                                            <h3 className='text-2xl text-black'>{event.eventName}</h3>
                                            <p>{event.eventDescription}</p>
                                            <div className='w-full flex justify-between items-center'>
                                                <p>{event.eventDate}</p>
                                                <p>{event.eventPlace}</p>
                                            </div>
                                        </CardContent>
                                    </Card>
                                </div>
                            </CarouselItem>
                        ))}
                    </CarouselContent>
                    <CarouselPrevious className='bg-orange-500 text-white hover:bg-orange-600 hover:text-white'/>
                    <CarouselNext className='bg-orange-500 text-white hover:bg-orange-600 hover:text-white'/>
                </Carousel>
            </section>
        </div>
    )
}

export default OurEvents