import Image from 'next/image'
import React from 'react'
import BlogImg from '../../public/blog.jpg'

export default function CommonBlog() {
  return (
    <div className='overflow-hidden rounded-lg w-[30%] cursor-pointer'>
        <Image src={BlogImg} width={300} height={200} alt='blog' className=''/>
    </div>
  )
}
