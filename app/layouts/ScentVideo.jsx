import React from 'react'
import CommonHead from '../components/CommonHead'
import CommonPara from '../components/CommonPara'

export default function ScentVideo() {
  return (
    <section className='bg-[#f5ece3] py-24'>
        <div className="container ">
        <CommonHead Heading="Your Signature Scent"/>
        <CommonPara para="Find The Perfect Perfume To
Express Your Unique Style."/>

<div className="flex items-center justify-center mt-10">
    <iframe width="560" height="315" src="https://www.youtube.com/embed/_9VUPq3SxOc?si=PlfkUi0hH4fQjUcA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
</div>    
</div>
    </section>
  )
}
