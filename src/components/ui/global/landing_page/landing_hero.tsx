import React from 'react'
import { Input } from '../../input';
import { Button } from '../../button';
import Image from 'next/image';

// type Props = {}

const HeroSection = () => {
  return (
    <section id = "hero-section" className='min-h-1/2 h-1/2 min-w-screen flex flex-col items-center justify-around p-10'>

        <div id="namasteIndia">

            <div className = "w-full text-nowrap">
              <h2 className='text-5xl font-medium text-left mb-5 leading-12 font-font1 '>Namaste, India!<br/>
                  Meet Coinbase 🇮🇳</h2>

              <aside className='text-gray-500 mb-3 font-normal font-font3'>Coinbase is the world's safest and most trusted <br/>
                  platform to buy, sell and manage crypto.</aside>

              <aside className='text-gray-500 mb-5 font-font3'>We're launching soon! Add your email and you'll be the<br/>
                      first to know when you can join.</aside>
              
            </div>

            <div className='w-full'>

              <Input height = {20} type = "email" placeholder='Enter your email' className = "border border-slate-500 rounded-sm p-8 text-2xl mb-5 w-4/4"/>
              <Button type = "submit" className='bg-blue-600 text-white hover:bg-blue-700 rounded-full p-7 '>Get Notified</Button>
            </div>

        </div>

        <div id="firstImage" className='mt-10'>
          <Image src = "/images/landing_page_img1.avif" alt = "Image1" height = {400} width={300}/>
        </div>

    </section>
  )
 }

export default HeroSection;