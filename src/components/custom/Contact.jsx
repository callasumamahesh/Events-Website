'use client'
import React, { useState } from 'react'
import { Card } from '../ui/card'
import { Button } from '../ui/button'

function Contact() {
    const [data, setData] = useState({
        name:'',
        phoneNumber:'',
        message:''
    })

    const handleChange = (e) => {
        console.log(
            'Changing...'
        );
        const {name, value} = e.target;
        console.log(name, value);
        setData((prev) => ({
            ...prev,
            [name]: value
        }))
    }

  return (
    <div className='max-w-135 m-auto mb-8 scroll-mt-40' id='contact-us'>
        <h2 className='text-4xl uppercase text-orange-500 text-center mt-8'>Contact Us</h2>
        <Card className='mt-8'>
            <form action="" className='p-8 flex gap-8 flex-col'>
                <div className=''>
                    <input type="text" required placeholder='Name' value={data.name} name='name' onChange={(e) => handleChange(e)} className='border-2 p-2.5 w-full rounded-sm'/>
                </div>
                <div className=''>
                    <input type="text" required placeholder='Phone Number' value={data.phoneNumber} name='phoneNumber' onChange={(e) => handleChange(e)} className='border-2 p-2.5 w-full rounded-sm'/>
                </div>
                <div className=''>
                    <textarea placeholder='Message' value={data.message} name='message' onChange={(e) => handleChange(e)} className='border-2 p-2.5 w-full rounded-sm'></textarea>
                </div>
                <div>
                    <Button variant='defaultprimary'><input type='submit'/></Button>
                </div>
            </form>
        </Card>
    </div>
  )
}

export default Contact