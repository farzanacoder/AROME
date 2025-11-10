import React from 'react'
import List from '@/app/components/List'
import Image from 'next/image'

export default function Header() {
  return (
    <section>
       <div className="container flex items-center justify-between">
        {/* -------- nav ----- */}
        <nav className='flex items-center gap-4 w-[25%] justify-between py-6'>
          <List list="Home"/>
          <List list="Shop"/>
          <List list="Blog"/>
          <List list="Pages"/>
          <List list="Contact"/>
        </nav>

        {/* -------- logo ----- */}
        <Image src="/logo.jpg" alt="Logo" width={140} height={50} />

        {/* -------- search ----- */}
        <div className='w-[360px] h-[45px] bg-[#f5f5f5] rounded-full flex items-center  px-4'>
          <input type="text" placeholder='Search Our Store' className='border-none outline-none'/>
        </div>



       </div>
    </section>
  )
}
