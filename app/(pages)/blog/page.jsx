import Image from 'next/image'
import React from 'react'

export default function page() {
  return (
    <div className='py-20 bg-[#f8f8f8] text-center flex flex-col items-center justify-center text-7xl'>
      <Image src="/public/perfume.jpg" alt="Under Construction" width={400} height={400} />
      <h1 className='mt-10'>Blog Page Under Construction 🚧</h1>
    </div>
  )
}
