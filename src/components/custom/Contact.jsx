'use client'
import React, { useState } from 'react'
import { Button } from '../ui/button'

function Contact() {
    const [data, setData] = useState({
        name:'',
        phoneNumber:'',
        message:''
    })

    const handleChange = (e) => {
        const {name, value} = e.target;
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

  return (
    <div className='bg-zinc-50 py-16 md:py-24 scroll-mt-20' id='contact-us'>
        <div className="max-w-4xl mx-auto px-6">
            <div className="text-center max-w-2xl mx-auto mb-12 space-y-4">
                <p className="text-amber-600 font-medium tracking-widest uppercase text-sm font-roboto">Reach Out</p>
                <h2 className='text-4xl md:text-5xl font-roboto font-light tracking-tight text-zinc-900'>Start Your <span className="font-medium">Journey</span></h2>
                <p className="text-zinc-500 font-light">Tell us about your upcoming event, and we will get back to you with a curated proposal.</p>
            </div>
            
            <div className='bg-white rounded-3xl p-8 md:p-12 shadow-2xl shadow-zinc-200/50 border border-zinc-100'>
                <form action="" className='flex flex-col gap-6 md:gap-8'>
                    <div className='grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8'>
                        <div className='flex flex-col gap-2'>
                            <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest pl-1 font-roboto">Name</label>
                            <input type="text" required placeholder='Jane Doe' value={data.name} name='name' onChange={(e) => handleChange(e)} className='bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none p-4 w-full rounded-xl transition-all font-light placeholder:text-zinc-400'/>
                        </div>
                        <div className='flex flex-col gap-2'>
                            <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest pl-1 font-roboto">Phone Number</label>
                            <input type="tel" required placeholder='+91 98765 43210' value={data.phoneNumber} name='phoneNumber' onChange={(e) => handleChange(e)} className='bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none p-4 w-full rounded-xl transition-all font-light placeholder:text-zinc-400'/>
                        </div>
                    </div>
                    <div className='flex flex-col gap-2'>
                        <label className="text-xs font-medium text-zinc-500 uppercase tracking-widest pl-1 font-roboto">Tell us about your event</label>
                        <textarea rows="4" placeholder='I am planning a wedding next spring...' value={data.message} name='message' onChange={(e) => handleChange(e)} className='bg-zinc-50 border border-zinc-200 focus:border-amber-500 focus:ring-1 focus:ring-amber-500 outline-none p-4 w-full rounded-xl transition-all font-light resize-none placeholder:text-zinc-400'></textarea>
                    </div>
                    <div className="pt-4">
                        <Button className="w-full md:w-auto px-10 py-6 bg-amber-600 hover:bg-amber-700 text-white rounded-full font-medium tracking-wider uppercase text-sm transition-all shadow-md hover:shadow-lg shadow-amber-600/20 font-roboto">
                            <input type='submit' value="Send Message" className="cursor-pointer" />
                        </Button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Contact