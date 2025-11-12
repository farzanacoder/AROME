import React from 'react'

export default function Icon({icon: Iconn}) {
  return (
    <div className='h-10 w-10 rounded-full bg-white text-[#5d3754] flex items-center justify-center'>
        <Iconn />
    </div>
  )
}
