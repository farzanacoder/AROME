import React from 'react'

export default function Icon({icon: Iconn}) {
  return (
    <div className='h-10 w-10 rounded-full cursor-pointer hover:-translate-y-1 duration-500 transition-all bg-white text-[#5d3754] flex items-center justify-center'>
        <Iconn />
    </div>
  )
}
