import React from 'react'
import { Card, CardContent } from '../ui/card'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel'

const OurEvents = () => {
    const eventsData = [
        {
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "",
            eventDescription: 'This is a great event'
        },
        {
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "",
            eventDescription: 'This is a great event'
        },{
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "",
            eventDescription: 'This is a great event'
        },{
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "",
            eventDescription: 'This is a great event'
        },{
            eventName : "Event 1",
            eventDate : '09-02-2026',
            eventPlace : "Hyderabad",
            eventImage : "",
            eventDescription: 'This is a great event'
        }
    ]
    return (
        <div>
            <h2 className='text-4xl uppercase text-orange-500 text-center mt-8'>Our Events</h2>
            <section className='mt-6 m-4'>
                <Carousel className="w-full">
                    <CarouselContent className="-ml-1">
                        {eventsData.map((event, index) => (
                            <CarouselItem key={index} className="basis-1/2 pl-1 lg:basis-1/3">
                                <div className="p-1">
                                    <Card>
                                        <CardContent className="flex aspect-square items-center justify-center p-6">
                                            <h3>{event.eventName}</h3>
                                            <p>{event.eventDescription}</p>
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