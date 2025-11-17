import React from 'react'
import CommonHead from '../components/CommonHead'
import CommonPara from '../components/CommonPara'
import Video from '../components/Video'

export default function ScentVideo() {
  return (
    <section className='bg-[#f5ece3] py-24'>
        <div className="container ">

        <div className='flex flex-col items-start '>
          <CommonPara para="Your Signature Scent"/>
        <CommonHead className='w-[30%]' Heading="Find The Perfect Perfume To Express Your Unique Style."/>
        </div>

        <Video/>
        </div>
    </section>
  )
}
