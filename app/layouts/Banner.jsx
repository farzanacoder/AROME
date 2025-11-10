import Image from 'next/image'
import React from 'react'
import BannerImage from '../../public/s5.jpg'

export default function Banner() {
  return (
    <section>
        <Image src={BannerImage} alt="Banner Image" width={600} height={400} className='w-full'/>
    </section>
  )
}
