import React from 'react'
import CommonHead from '../components/CommonHead'
import SellerCard from '../components/SellerCard'
import Button from '../components/Button'
import Image from 'next/image'

export default function ShopLook() {
  return (
    <section className="my-20">
      <CommonHead className='text-center' Heading="Popular Perfumes"/>
      <p className='text-xl text-center my-3 text-[#5d3754]'>Each fragrance crafted to complement unique essence</p>

    <div className="container flex h-fit">

     <div className='mt-10 flex gap-5 w-[60%]'>
        <div className=" ">
            <SellerCard/>
         </div>
        <div className=" ">
            <SellerCard/>
         </div>
     </div>

     <div className='flex mt-10 justify-center w-[40%] rounded-lg overflow-hidden'>
        <Image src="/perfume.jpg" width={800} height={50} alt="brand logo"/>
     </div>

    </div>
      
    </section>
  )
}
