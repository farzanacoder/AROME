import React from 'react'
import { AiOutlineMinus } from 'react-icons/ai'

export default function FooterList({text}) {
  return (
    <div className='flex items-center justify-center gap-2'>
        <AiOutlineMinus />
        <a href="http://" target="_blank" rel="noopener noreferrer" className='text-lg font-medium'>{text}</a>
    </div>
  )
}
