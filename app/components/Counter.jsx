import React from 'react'
import CommonHead from './CommonHead'
import CommonPara from './CommonPara'

export default function Counter() {
  return (
   <section className='flex my-6 '>
    <div className='border border-dashed rounded-lg border-[#705570] w-[15%] mx-auto py-2 flex flex-col justify-center items-center'>
        <CommonHead Heading="228" className='text-center'/>
        <CommonPara para="DAYS" className='text-center mb-16'/>
        
    </div>
    <div className='border border-dashed rounded-lg border-[#705570] w-[15%] mx-auto py-2 flex flex-col justify-center items-center'>
        <CommonHead Heading="228" className='text-center'/>
        <CommonPara para="DAYS" className='text-center mb-16'/>
        
    </div>
    <div className='border border-dashed rounded-lg border-[#705570] w-[15%] mx-auto py-2 flex flex-col justify-center items-center'>
        <CommonHead Heading="228" className='text-center'/>
        <CommonPara para="DAYS" className='text-center mb-16'/>
        
    </div>
   </section>
  )
}
