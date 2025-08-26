import React from 'react'

type Props = {}

const LandingHero = (props: Props) => {
  return (
    <section id = "hero-section" className='min-h-1/2 h-1/2 min-w-screen flex flex-col items-center justify-around p-10'>

        <div id="namasteIndia">

            <div>
              <h2 className='text-4xl font-medium text-left mb-5 leading-12 '>Namaste, India!<br/>
                  Meet Coinbase 🇮🇳</h2>

              <aside className='text-slate-500 mb-3'>Coinbase is the world's safest and most trusted <br/>
                  platform to buy, sell and manage crypto.</aside>

              <aside>We're launching soon! Add your email and you'll be the<br/>
                      first to know when you can join.</aside>
              
            </div>

        </div>

    </section>
  )
 }

export default LandingHero;