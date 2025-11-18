import React from 'react'
import CommonHead from '../components/CommonHead'
import SellerCard from '../components/SellerCard'
import Button from '../components/Button'
import Link from 'next/link';

export default async function PopularScent() {
    const res = await fetch('https://dummyjson.com/products?limit=4', { next: { revalidate: 60 } });
  const data = await res.json();
  const products = data.products;



  return (
    <section className="my-20">
    <div className="container">

      <CommonHead className='text-center' Heading="Popular Perfumes"/>
      <p className='text-xl text-center my-3 text-[#5d3754]'>Each fragrance crafted to complement unique essence</p>

     <div className='mt-10 flex flex-wrap items-center justify-between gap-7'>
              {products.map((product) => (
                <div key={product.id} className="w-[23%]">
                  <SellerCard 
                    title={product.title}
                    price={product.price}
                    image={product.thumbnail}
                  />
                </div>
              ))}
            </div>


     <Link href='/shop' className='flex justify-center mt-12'>
      <Button btn="View All" className=" uppercase"/>
     </Link>

    </div>
      
    </section>
  )
}
