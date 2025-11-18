import Image from 'next/image'
import React from 'react'
import BlogImg from '../../public/blog.jpg'
import { GoPerson } from 'react-icons/go'
import CommonHead from './CommonHead'
import Link from 'next/link'

export default function CommonBlog() {
  return (
    <Link href="/blog" className='w-[45%] cursor-pointer'>
        <div className='overflow-hidden rounded-lg w-full h-[180px] cursor-pointer group'>
        <Image src={BlogImg} width={500} height={100} alt='blog' className='w-full h-full object-cover group-hover:scale-125 duration-500'/>
    </div>


        <div className="flex gap-7 mt-5 mb-2.5">
            <div className="flex gap-2 items-center ">
            <GoPerson />
            <p className=''>Team 90Degree</p>
        </div>

        <div className="flex gap-2 items-center ">
            <GoPerson />
            <p className=''>Feb 28, 2025</p>
        </div>
        </div>

        <CommonHead className='text-xl' Heading='Proper way to apply perfumes 2025'/>
    </Link>
  )
}


