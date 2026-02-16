import React from 'react'
import { Card, CardContent, CardFooter, CardTitle } from '../ui/card'
import { Button } from '../ui/button'

const EventPrices = () => {

    const prices = [
        {
            eventType: 'small Event',
            eventCost: '5k-15k',
            eventcount: 10
        },
        {
            eventType: 'Medium Event',
            eventCost: '15k-50k',
            eventcount: 10
        },
        {
            eventType: 'Large Event',
            eventCost: '50k-1L',
            eventcount: 10
        }
    ]

  return (
    <div className='max-w-300 m-auto' id='eventPrices'>
            <h2 className='text-4xl uppercase text-orange-500 text-center mt-8'>Event Prices</h2>
            <section className='mt-8 m-4 grid grid-cols-3 gap-3'>
                {
                    prices.map((price, i) => {
                        return(
                            <Card key={i} className='p-8 flex flex-col justify-center items-center bg-[#d2d1cc24] border-0'>
                                <CardTitle className='uppercase text-2xl'>{price.eventType}</CardTitle>
                                <CardContent className='text-xl'>{price.eventCost}</CardContent>
                                <CardContent className=''>We made approximately <span className='text-orange-500'>{price.eventcount}</span> events</CardContent>
                                <CardFooter>
                                    <Button variant='defaultprimary'>Explore All Events</Button></CardFooter>
                            </Card>
                        )
                    })
                }
            </section>
    </div>
  )
}

export default EventPrices