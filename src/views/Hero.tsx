import React from 'react'
import { Badge } from "@/components/ui/badge"
import { Button } from '@/components/ui/button'
import HeroImage from "@/public/hero poster.webp"
import Image from 'next/image'
import { AlignHorizontalDistributeCenterIcon } from 'lucide-react'
const Hero = () => {
  return (
    <section>
        <div className='flex-1 flec-col lg:flex-row gap-y-10 py-6'>
        <Badge className='py-3 px-6 rounded-lg bg-blue-200 text-blue-700'>Badge</Badge>
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mt-6">
        An Industrial Take on Streetwear
        </h1>
        
        <p className="leading-7 [&:not(:first-child)]:mt-6">
        Anyone can beat you but no one can beat your outfit as long as you wear Dine outfits.
    </p>
    <button className='bg-black h-12 px-8 mt-4 '>Start shopping</button>
        </div>
        <div className='flex-1'>
            <Image src={HeroImage} alt='hero'/>
        </div>
    </section>
  )
}

export default Hero