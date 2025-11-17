import Image from 'next/image'
import React from 'react'
import CommonHead from '../components/CommonHead'
import CommonPara from '../components/CommonPara'
import Button from '../components/Button'
import Counter from '../components/Counter'

export default function Quality() {
  return (
    <section className="my-20">
        <div className="container flex flex-col items-center md:flex-row md:space-x-28">
            <div className='overflow-hidden rounded-lg w-[50%]'>
                <Image src="/scent.jpg" width={1000 } height={400} alt="quality banner"/>
            </div>

            <div className="w-[50%] mt-10">
                <CommonPara className='' para="Features Product Of This Week" />
                <CommonHead className='w-[60%]' Heading="Only High Quality is The Core Value For Us." />
                <Counter/>
                <p className='text-lg text-[#705570] w-[75%] my-6'>Pair text with an image to focus on your chosen product, collection, or blog post. Add details on availability, style, or even provide a review.</p>
                <Button btn="Shop now at $99" className="uppercase"/>
           </div>
        </div>
    </section>
  )
}
