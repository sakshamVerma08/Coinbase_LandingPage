import React from 'react'
import { Input } from '../../ui/input';
import { Button } from '../../ui/button';
import Image from 'next/image';

// type Props = {}

const HeroSection = () => {
  return (
    <section id = "hero-section" className='min-h-1/2 h-1/2 min-w-screen flex flex-col items-center justify-around p-10 md:grid md:items-center md:[grid-template-columns:60%_40%] md:gap-12 lg:[grid-template-columns:62%_38%] lg:gap-16'>

        <div id="namasteIndia" className='sm:w-full sm:text-left'>

            <div className = "w-full text-nowrap">
              <h2 className='text-5xl font-medium text-left mb-5 leading-12 font-font1 '>Namaste, India!<br/>
                  Meet Coinbase 🇮🇳</h2>

              <aside className='text-gray-500 mb-3 font-normal font-font3 w-full text-wrap lg:text-2xl max-w-xl '>Coinbase is the world's safest and most trusted 
                  platform to buy, sell and manage crypto.</aside>

              <aside className='text-gray-500 mb-5 font-font3 w-full text-wrap max-w-xl'>We're launching soon! Add your email and you'll be the
                      first to know when you can join.</aside>
              
            </div>

            <div className='w-full lg:flex lg:justify-between lg:items-center max-w-lg '>

                <form className='flex flex-col sm:flex-row gap-3 sm:items-center'>
              <Input height = {20} type = "email" placeholder='Enter your email' className = "border border-slate-500 rounded-sm p-8 text-2xl mb-5 w-4/4 md:w-full md:px-4 md:py-5"/>
              <Button type = "submit" className='md:shrink-0 md:px-4 md:py-6 bg-blue-600 text-white hover:bg-blue-700 rounded-full p-7 shrink-0 '>Get Notified</Button>
              </form>
            </div>

        </div>

        <div id="firstImage" className='mt-10 lg:mr-0 lg:flex lg:justify-center lg:items-center lg:bg-slate-300 lg:w-1/2'>
          <Image src = "/images/landing_page_img1.avif" alt = "Image1" height = {400} width={300} className='md:w-[320px] lg:w-[360px]'/>
        </div>

    </section>
  )
 }

export default HeroSection;