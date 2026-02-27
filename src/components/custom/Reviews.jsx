"use client"
import React from 'react'
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '../ui/carousel';
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
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
    <div id='reviews' className='scroll-mt-32 max-w-7xl mx-auto px-6 py-16 md:py-24'>
        <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
            <p className="text-amber-600 font-medium tracking-widest uppercase text-sm font-roboto">Testimonials</p>
            <h2 className='text-4xl md:text-5xl font-roboto font-light tracking-tight text-zinc-900'>Words of <span className="font-medium">Love</span></h2>
        </div>
      
      <section className='max-w-4xl mx-auto relative'>
        <Carousel
          plugins={[plugin.current]}
          className="w-full"
          onMouseEnter={plugin.current.stop}
          onMouseLeave={plugin.current.reset}
        >
          <CarouselContent>
            {reviews.map((review, index) => (
              <CarouselItem key={index}>
                <div className="p-4 md:p-10">
                    <div className="flex flex-col items-center text-center space-y-8">
                        {/* Quote Icon decorative */}
                        <div className="text-amber-200">
                            <svg width="48" height="48" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.017 21L16.41 14.596C17.653 14.596 18.673 14.187 19.475 13.364C20.281 12.541 20.686 11.455 20.686 10.1C20.686 8.58301 20.06 7.23401 18.81 6.05201C17.564 4.87101 16.036 4.28101 14.232 4.28101C12.399 4.28101 10.852 4.90801 9.593 6.16201C8.337 7.41201 7.71 8.95801 7.71 10.8C7.71 12.536 8.271 14.025 9.389 15.267C10.51 16.505 11.907 17.159 13.578 17.228L11.583 21H14.017ZM6.307 21L8.7 14.596C9.943 14.596 10.963 14.187 11.765 13.364C12.571 12.541 12.976 11.455 12.976 10.1C12.976 8.58301 12.35 7.23401 11.1 6.05201C9.854 4.87101 8.326 4.28101 6.522 4.28101C4.689 4.28101 3.142 4.90801 1.883 6.16201C0.627 7.41201 0 8.95801 0 10.8C0 12.536 0.561 14.025 1.679 15.267C2.8 16.505 4.197 17.159 5.868 17.228L3.873 21H6.307Z" />
                            </svg>
                        </div>
                        
                        <p className="text-xl md:text-3xl font-light text-zinc-700 leading-relaxed">
                            "{review.review}"
                        </p>
                        
                        <div className="flex flex-col items-center gap-3 pt-6 border-t border-zinc-100 w-full">
                            <StarRating rating={review.rating} />
                            <div className="flex items-center gap-4 mt-2">
                                <Avatar className="h-12 w-12 border-2 border-white shadow-sm">
                                    <AvatarFallback className="bg-amber-100 text-amber-700 font-medium">
                                        {review.name.split(' ').map(n => n[0]).join('')}
                                    </AvatarFallback>
                                </Avatar>
                                <div className="text-left">
                                    <p className="font-medium text-zinc-900">{review.name}</p>
                                    <p className="text-sm text-zinc-500 font-light">{review.event} • {review.location}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <div className="hidden md:block">
            <CarouselPrevious className='-left-12 border-zinc-200 text-zinc-400 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all bg-transparent' />
            <CarouselNext className='-right-12 border-zinc-200 text-zinc-400 hover:bg-amber-600 hover:text-white hover:border-amber-600 transition-all bg-transparent' />
          </div>
        </Carousel>
      </section>
    </div>
  )
}

export default Reviews