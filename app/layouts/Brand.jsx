import Image from 'next/image'
import React from 'react'

export default function Brand() {
  return (
    <section className='bg-[#ecf5e3] py-20'>
       <div className="container flex flex-wrap items-center w-[70%] m-auto gap-8"> 
         <Image src="/brand1.png" width={120} height={200} alt="brand banner"/>
        <Image src="/brand2.png" width={120} height={200} alt="brand banner"/>
        <Image src="/brand3.png" width={120} height={200} alt="brand banner"/>
        <Image src="/brand4.png" width={120} height={200} alt="brand banner"/>
        <Image src="/brand5.png" width={120} height={200} alt="brand banner"/>
        <Image src="/brand6.png" width={120} height={200} alt="brand banner"/>
       </div>
    </section>
  )
}
