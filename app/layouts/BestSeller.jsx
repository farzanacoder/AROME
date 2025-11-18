import React from 'react'
import CommonHead from '../components/CommonHead'
import SellerCard from '../components/SellerCard'

export default async function BestSeller() {
  const res = await fetch('https://dummyjson.com/products?limit=4', { next: { revalidate: 60 } });
  const data = await res.json();
  const products = data.products;

  return (
    <section className="my-20">
      <div className="container">
        <CommonHead className='text-center' Heading="Our Best Sellers" />

        <div className='text-center mt-7 flex justify-center items-center gap-10'>
          <h1 className='text-xl font-bold text-[#555555] border-b border-transparent hover:text-[#5d3754] hover:border-[#5d3754] duration-300 cursor-pointer'>Women</h1>
          <h1 className='text-xl font-bold text-[#555555] border-b border-transparent hover:text-[#5d3754] hover:border-[#5d3754] duration-300 cursor-pointer'>Men</h1>
          <h1 className='text-xl font-bold text-[#555555] border-b border-transparent hover:text-[#5d3754] hover:border-[#5d3754] duration-300 cursor-pointer'>Kid's</h1>
        </div>

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
      </div>
    </section>
  )
}
