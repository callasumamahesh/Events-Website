'use client'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle } from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import React, { useState } from 'react'
function Login() {
  const [type, setType] = useState('password');
  const [info, setInfo] = useState({
    user:'',
    password:''
  })

  const handleChange = (e) => {
    const {name, value} = e.target;
    setInfo((prev) => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = () => {
    console.log(info, 'This is form data')
  }

  return (
    <div>
        <Card className='max-w-125 m-auto mt-10 p-5'>
            <CardHeader>
                <CardTitle className='text-4xl text-center uppercase'>Admin Login</CardTitle>
            </CardHeader>
            
            <Input type='text' placeholder="Name" name="user" value={info.user} onChange={(e) => handleChange(e)}/>
            <div className='flex items-center gap-2 border rounded-md pr-4 outline-0'>
              <Input type={`${type}`} placeholder="Password" className='border-0' name="password" value={info.password} onChange={(e) => handleChange(e)}/>
              {
                type === 'password' ? 
              <svg xmlns="http://www.w3.org/2000/svg" onClick={() => setType('text')} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-icon lucide-eye cursor-pointer"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"/><circle cx="12" cy="12" r="3"/></svg>  
              :<svg xmlns="http://www.w3.org/2000/svg" onClick={() => setType('password')} width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-eye-off-icon lucide-eye-off cursor-pointer"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"/><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"/><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"/><path d="m2 2 20 20"/></svg>
              }
            </div>
            <Button onClick={handleSubmit} disabled={(info.user && info.password) ? false : true }>Login</Button>
        </Card>
    </div>
  )
}

export default Login