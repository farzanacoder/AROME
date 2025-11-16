import React from 'react'
import CommonHead from '../components/CommonHead'
import SellerCard from '../components/SellerCard'

export default function PopularScent() {
  return (
    <section className="my-20">
    <div className="container">

      <CommonHead Heading="Popular Perfumes"/>
      <p className='text-xl text-center my-3 text-[#5d3754]'>Each fragrance crafted to complement unique essence</p>

     <div className='mt-16 flex flex-wrap items-center justify-between gap-7'>
      <SellerCard/>
      <SellerCard/>
      <SellerCard/>
      <SellerCard/>
     </div>

    </div>
      
    </section>
  )
}
