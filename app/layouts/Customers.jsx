import React from 'react'
import CommonHead from '../components/CommonHead'
import CustomerItem from '../components/CustomerItem'

export default function Customers() {
  return (
    <section className="py-20 bg-[#f8f8f8]">
            <CommonHead className='text-center w-[25%] mx-auto mb-10' Heading="Trusted by Thousands of Satisfied Customers."/>
        <div className="container flex items-center justify-between gap-10 flex-wrap">
            <CustomerItem/>
            <CustomerItem/>
            <CustomerItem/>
        </div>
    </section>
  )
}
