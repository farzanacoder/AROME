import React from 'react'

export default function Sort() {
  return (
    <div className='flex justify-between mb-10'>
        <div className='bg-amber-200'>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Modi, voluptatum.
        </div>

        <div className='flex gap-7'>
            <select className='border-2 border-[#ededed] p-2 rounded-lg' name="" id="">
            <option value="">Sort by :</option>
            <option value="price-low-to-high">Price: Low to High</option>
            <option value="price-high-to-low">Price: High to Low</option>
            <option value="newest-first">Newest First</option>
        </select>
        <h1>9 products</h1>
        </div>
    </div>
  )
}
