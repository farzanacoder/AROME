import React from 'react'
import CommonHead from '../components/CommonHead'
import SellerCard from '../components/SellerCard'
import Button from '../components/Button'
import Image from 'next/image'

export default function ShopLook() {
  return (
    <section className="my-20">
  <CommonHead className='text-center' Heading="Popular Perfumes"/>
  <p className='text-xl text-center my-3 text-[#5d3754]'>
    Each fragrance crafted to complement unique essence
  </p>

  <div className="container flex w-full h-fit gap-8">

    {/* Left side seller cards */}
    <div className='w-1/2 flex gap-5 mt-10'>
      <SellerCard />
      <SellerCard />
    </div>

    {/* Right side image */}
    <div className='w-1/2 mt-10 h-[420px] rounded-lg overflow-hidden'>
      <Image 
        src="/perfume.jpg" 
        width={1000} 
        height={420} 
        alt="brand logo"
        className="w-full h-full object-cover"
      />
    </div>

  </div>
</section>

  )
}
