import Image from 'next/image'
import React from 'react'

export default function Items1({ className, Item, title, items }) {
  return (
    <section className='cursor-pointer'>
      <div className={`group h-[350px] ${className} rounded-xl overflow-hidden`}>
        <Image 
          src={Item} 
          alt='items' 
          className='w-full h-full object-cover group-hover:scale-105 duration-500'
        />
      </div>

      <div className='flex justify-between mt-7'>
        <h1 className='text-2xl'>{title}</h1>
        <p className='text-base text-gray-500'>({items} Items)</p>
      </div>
    </section>
  )
}
