import Link from 'next/link'
import React from 'react'

export default function List({list ,link = '/'}) {
  return (
    <Link href={link} className='text-base text-black hover:text-[#1c1c1c] uppercase'>{list}</Link>
  )
}
