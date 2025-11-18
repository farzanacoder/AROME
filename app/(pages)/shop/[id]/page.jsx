import Image from 'next/image';
import React from 'react'

export default async function shopDetails({ params }) {
  
  const { id } = params;

  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const product = await res.json();

  return (
    <section className="container py-20 flex gap-10">
        <div className='w-[40%] h-[360px] bg-[#fbf0ef] overflow-hidden rounded-xl cursor-pointer'>
                <Image src={product.thumbnail} width={270} height={350} alt={product.title} className='w-full h-full object-cover'/>
              </div>


      <div className='w-[60%] mt-10 bg-[#854949]'>
        <h1 className='text-3xl font-bold mb-5'>{product.title}</h1>
        <p className='text-xl mb-3'>${product.price}</p>
        <p className='text-base text-[#555555]'>{product.description}</p>
      </div>
    </section>
  )
}
