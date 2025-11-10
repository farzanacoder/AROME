import Link from 'next/link'
import React from 'react'

export default function List({list}) {
  return (
    <Link href={'/'} className='text-base text-black hover:text-[#1c1c1c] uppercase'>{list}</Link>
  )
}
