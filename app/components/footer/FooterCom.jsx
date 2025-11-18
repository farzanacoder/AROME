import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function FooterCom() {
  return (
    <section className='border-t border-t-[#633f5b] py-3'>
      <div className='flex justify-between items-center py-10 text-[#d6cdd4]'>
        <Image src={'/footerr.jpg'} width={300} height={50} alt='footer'/>
        <h1>© 2025, ♡ Designed By <Link href={'/'}>farzanacoder</Link></h1>

        <select className='border-2 border-[#ededed] p-2 rounded-lg' name="" id="">
            <option value="">USD $</option>
            <option value="price-low-to-high">USD $ | Afghanistan</option>
            <option value="price-high-to-low">USD $ | Åland Islands</option>
            <option value="newest-first">USD $ | Albania</option>
        </select>
    </div>
    </section>
  )
}

