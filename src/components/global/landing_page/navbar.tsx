import { AlignJustify, Hamburger } from 'lucide-react';
import Image from 'next/image';
import React from 'react'

// type Props = {}

const Navbar = (props) => {


  return (
    <div className='w-full border-b-[1px] border-slate-200 flex justify-between items-center p-5'>

        <Image src = "/important_svgs/coinbase_logo.svg" alt = "Coinbase Logo" width={130} height={100}/>
        <AlignJustify className='cursor-pointer '/>

    </div>
  )
}

export default Navbar;