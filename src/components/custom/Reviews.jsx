"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Card, CardContent } from '../ui/card';
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import Image from 'next/image';
import Autoplay from "embla-carousel-autoplay"
import StarRating from '../utiles/Stars';

function Reviews() {
  const reviews = [
    {
      id: 1,
      name: "Priya Sharma",
      event: "Wedding Event",
      rating: 5,
      review: "They made our wedding absolutely magical. Every detail was perfectly handled, and the decoration was beyond our expectations. Truly unforgettable!",
      location: "Hyderabad"
    },
    {
      id: 2,
      name: "Rahul Reddy",
      event: "Birthday Celebration",
      rating: 4,
      review: "Amazing theme setup and smooth coordination. My daughter’s birthday party was colorful and well organized. Highly recommended!",
      location: "Bangalore"
    },
    {
      id: 3,
      name: "Sneha Kapoor",
      event: "Corporate Event",
      rating: 5,
      review: "Professional execution and timely management. The team ensured everything ran smoothly without any stress. Excellent service!",
      location: "Chennai"
    },
    {
      id: 4,
      name: "Arjun Varma",
      event: "Engagement Ceremony",
      rating: 5,
      review: "Beautiful stage design and lighting. Our engagement felt like a dream event. Thank you for making it special!",
      location: "Hyderabad"
    },
    {
      id: 5,
      name: "Meghana Rao",
      event: "Baby Shower",
      rating: 4,
      review: "Creative decorations and friendly staff. The entire event was well planned and executed with care.",
      location: "Vijayawada"
    },
    {
      id: 6,
      name: "Karthik Menon",
      event: "Corporate Product Launch",
      rating: 5,
      review: "Outstanding professionalism and classy setup. The event enhanced our brand image perfectly.",
      location: "Mumbai"
    }
  ];

  const plugin = React.useRef(
    Autoplay({ delay: 2000, stopOnInteraction: true })
  )



  return (
    <div id='reviews' className='scroll-mt-40'>
      <h2 className='text-4xl uppercase text-orange-500 text-center mt-8'>Reviews</h2>
      <section className='w-200 mt-8 m-auto'>
        <Carousel
          plugins={[plugin.current]}
          className="w-full max-h-50"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent className='h-50'>
            {reviews.map((review, index) => (
              <CarouselItem key={index} className='h-full'>
                <div className="p-1">
                  <Card className='h-49 p-5'>
                    <CardContent className="flex aspect-square items-center justify-center p-6 h-full">
                      <section className='grid gap-6 grid-cols-[250px_auto] items-center'>
                        <div className='flex gap-1.5 flex-col'>
                          <Avatar>
                            <Image src="" alt={review.name} className='w-10 h-10' width={10} height={10} />
                          </Avatar>
                          <p>{review.name}</p>
                          <p>{review.event}</p>
                        </div>
                        <div className='flex gap-2 flex-col'>
                          <StarRating rating={review.rating}/>
                          <p>{review.review}</p>
                        </div>
                      </section>
                    </CardContent>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className='bg-orange-500 text-white hover:bg-orange-600 hover:text-white' />
          <CarouselNext className='bg-orange-500 text-white hover:bg-orange-600 hover:text-white' />
        </Carousel>
      </section>
    </div>
  )
}

export default Reviews