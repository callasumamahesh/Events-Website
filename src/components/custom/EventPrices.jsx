import React from 'react'
import { Button } from '../ui/button'

const EventPrices = () => {

    const prices = [
        {
            eventType: 'Intimate Gathering',
            eventCost: '5k - 15k',
            eventcount: 10,
            features: ['Cozy Setup', 'Basic Decoration', 'Minimal Guest List']
        },
        {
            eventType: 'Signature Event',
            eventCost: '15k - 50k',
            eventcount: 10,
            features: ['Premium Decoration', 'Theme Planning', 'Dedicated Coordinator'],
            isPopular: true
        },
        {
            eventType: 'Grand Celebration',
            eventCost: '50k - 1L+',
            eventcount: 10,
            features: ['Luxury Setup', 'Full Event Management', 'Custom Aesthetics']
        }
    ]

  return (
    <div className='bg-zinc-50 py-16 md:py-24 scroll-mt-20' id='eventPrices'>
        <div className="max-w-7xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
                <p className="text-amber-600 font-medium tracking-widest uppercase text-sm font-roboto">Packages</p>
                <h2 className='text-4xl md:text-5xl font-roboto font-light tracking-tight text-zinc-900'>Curated <span className="font-medium">Experiences</span></h2>
                <p className="text-zinc-500 font-light text-lg">Choose a package that perfectly aligns with your vision and celebration scale.</p>
            </div>
            
            <section className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                {prices.map((price, i) => (
                    <div 
                        key={i} 
                        className={`relative group p-8 md:p-10 rounded-2xl flex flex-col items-center text-center transition-all duration-300 ${price.isPopular ? 'bg-white border-2 border-amber-500 shadow-2xl shadow-amber-600/10 md:scale-105 z-10' : 'bg-white border border-zinc-100 hover:border-zinc-200 hover:shadow-xl hover:shadow-zinc-200/50'}`}
                    >
                        {price.isPopular && (
                            <div className="absolute -top-4 bg-amber-600 text-white text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full font-roboto">
                                Most Popular
                            </div>
                        )}
                        <h3 className={`uppercase tracking-widest text-sm font-medium mb-4 font-roboto ${price.isPopular ? 'text-amber-600' : 'text-zinc-500'}`}>{price.eventType}</h3>
                        <div className="flex items-baseline gap-1 mb-6">
                            <span className="text-4xl lg:text-5xl font-light text-zinc-900">{price.eventCost}</span>
                        </div>
                        
                        <p className={`font-light mb-8 ${price.isPopular ? 'text-zinc-600' : 'text-zinc-500'}`}>
                            We have executed <span className={price.isPopular ? 'text-amber-600 font-medium' : 'text-amber-600 font-medium'}>{price.eventcount}+</span> successful events
                        </p>

                        <ul className="space-y-4 mb-10 w-full flex-grow">
                            {price.features.map((feature, idx) => (
                                <li key={idx} className={`font-light text-sm ${price.isPopular ? 'text-zinc-700' : 'text-zinc-600'}`}>
                                    {feature}
                                </li>
                            ))}
                        </ul>

                        <Button 
                            className={`w-full rounded-full py-6 font-medium tracking-wider uppercase text-xs transition-all ${price.isPopular ? 'bg-amber-600 hover:bg-amber-700 text-white shadow-md shadow-amber-600/20' : 'bg-zinc-100 hover:bg-zinc-200 text-zinc-900'}`}
                        >
                            Select Plan
                        </Button>
                    </div>
                ))}
            </section>
        </div>
    </div>
  )
}

export default EventPrices