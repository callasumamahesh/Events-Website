import React from 'react'
import Logo from '../../../public/eventLogo.png'
import {
    Card
} from "@/components/ui/card"
import Image from 'next/image'
import { Button } from '../ui/button'
function HeroSection() {
    return (
        <section className='m-4 mt-8'>
            <Card className='p-4 pt-16 pb-16 flex flex-row items-center justify-center gap-10'>
                <div className='flex gap-6 flex-col ml-10'>
                    <h2 className='text-5xl uppercase text-orange-500'>Shanmukha</h2>
                    <p className='text-2xl uppercase ml-6'> - CEO of Attulure Events</p>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione hic voluptatum perferendis quibusdam maiores iste soluta nihil laborum commodi voluptates dolorem tempore sit quas, voluptatem praesentium suscipit eum porro architecto?
                    Enim nostrum non repudiandae minima voluptas ut quidem, a provident totam. Sunt a fugit aut deserunt quo illo dolorem laudantium, sed mollitia modi velit voluptate, reprehenderit voluptatem. Reiciendis, facilis nobis.</p>
                    <div className='flex gap-6'>
                    <Button variant='defaultprimary'>Follow on Insta</Button>
                    <Button variant='defaultprimary'>Follow on Insta</Button>
                    </div>
                </div>
                <div className='mr-10 ml-10'>
                    <Image className='h-75 w-200' src={Logo} alt='CEO Image' height={300} width={300}></Image>
                </div>
                
            </Card>
        </section>
    )
}

export default HeroSection