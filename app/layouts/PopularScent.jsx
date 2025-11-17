import React from 'react'
import CommonHead from '../components/CommonHead'
import SellerCard from '../components/SellerCard'
import Button from '../components/Button'

export default function PopularScent() {
  return (
    <section className="my-20">
    <div className="container">

      <CommonHead className='text-center' Heading="Popular Perfumes"/>
      <p className='text-xl text-center my-3 text-[#5d3754]'>Each fragrance crafted to complement unique essence</p>

     <div className='mt-10 flex flex-wrap items-center justify-between gap-7'>
  <div className="w-[23%]"><SellerCard /></div>
  <div className="w-[23%]"><SellerCard /></div>
  <div className="w-[23%]"><SellerCard /></div>
  <div className="w-[23%]"><SellerCard /></div>
</div>


     <div className='flex justify-center mt-12'>
      <Button btn="View All" className=" uppercase"/>
     </div>

    </div>
      
    </section>
  )
}
