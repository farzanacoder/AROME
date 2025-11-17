import React from 'react'
import { IoMdStar } from 'react-icons/io'
import CommonHead from './CommonHead'
import { MdVerified } from 'react-icons/md'

export default function CustomerItem() {
  return (
    <div className='rounded-lg shadow-lg bg-white flex flex-col items-start p-10 w-[30%] mx-auto'>
        <p className='text-lg text-[#616161] mb-6'>“Arome supplements have been a game-changer for me! I feel more energized and healthier than ever. Highly recommend!”</p>
        <div className='flex items-center justify-center gap-1 text-[#5d3754]'>
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
                    <IoMdStar />
         </div>

         <CommonHead Heading="Olivor Brown" className="text-[25px] mt-6 mb-1.5"/>
         <div className="flex gap-2">
            <MdVerified className='text-xl text-[#32c2ab]' />
         <p>Verified Buyer</p>
         </div>
    </div>
  )
}



// Emma Richardson
//  Verified Buyer
// “Arome supplements have been a game-changer for me! I feel more energized and healthier than ever. Highly recommend!”

// "Excellent service and top-notch supplements. The loyalty rewards is a great bonus. Will definitely keep ordering!"
// Sophia Martinez
//  Verified Buyer
// “Arome supplements have been a game-changer for me! I feel more energized and healthier than ever. Highly recommend!”
// Emma Richardson
//  Verified Buyer
// “Arome supplements have been a game-changer for me! I feel more energized and healthier than ever. Highly recommend!”