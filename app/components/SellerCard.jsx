import Image from 'next/image'
import React from 'react'
import { BsHandbag } from 'react-icons/bs'
import { FaRegHeart } from 'react-icons/fa'
import { FiEye } from 'react-icons/fi'
import { IoMdStar } from 'react-icons/io'
import Icon from './Icon'

export default function SellerCard({ title, price, image, discount }) {
  return (
    <div className='w-full relative h-fit group'>
      <div className='w-full h-[360px] overflow-hidden rounded-xl cursor-pointer'>
        <Image src={image} width={270} height={350} alt={title} className='w-full h-full object-cover'/>
      </div>

      {/* Discount badge */}
      {discount && (
        <div className="absolute top-3 left-3">
          <p className='text-base flex items-center justify-center gap-1.5 text-white bg-[#5d3754] w-fit h-fit px-3 rounded-2xl'>
            Save <span>{discount}%</span>
          </p>
        </div>
      )}

      {/* Hover icons */}
      <div className="hidden group-hover:block">
        <Icon Iconn={FiEye} className="top-0 right-5"/>
        <Icon Iconn={FaRegHeart} className="top-[73px] right-5"/>
        <Icon Iconn={BsHandbag} className="top-32 right-5"/>
      </div>

      {/* Product info */}
      <div className="flex items-center justify-center flex-col mt-5">
        <div className='flex items-center justify-center gap-1 text-[#5d3754]'>
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
          <IoMdStar />
        </div>

        <h2 className='text-2xl font-semibold mt-2 text-[#1c1c1c]'>{title}</h2>
        <div className="flex items-center justify-center gap-4 font-bold text-xl">
          <p className='text-[#5d3754] mt-2'>${price}</p>
          <del className='text-[#555555] mt-2'>${price}</del>
        </div>
      </div>
    </div>
  )
}
