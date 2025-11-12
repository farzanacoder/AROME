import React from 'react'
import FooterLogo from '@/app/components/footer/FooterLogo'
import Title from '../components/Title'
import FooterList from '../components/footer/FooterList'
import { FiArrowRight } from 'react-icons/fi'

export default function Footer() {
  return (
      <footer className="bg-[#5d3754] py-52">
        <div className=" container text-white flex flex-col lg:flex-row items-start justify-between gap-4">
          <FooterLogo />


        {/* footer item here */}
        <div className='flex flex-col gap-y-4 '>
          <Title title="Useful Links" className="text-white mb-6"/>
          <FooterList text="My Account" />
          <FooterList text="Shopping Cart" />
          <FooterList text="My Wishlist" />
          <FooterList text="Our Store Info" />
        </div>


        {/* footer 2 item here */}
        <div className='flex flex-col gap-y-4'>
          <Title title="Information" className="text-white mb-6"/>
          <FooterList text="My Account" />
          <FooterList text="Shopping Cart" />
          <FooterList text="My Wishlist" />
          <FooterList text="Our Store Info" />
        </div>

        
        {/* footer 3 item here */}
        <div className='flex flex-col gap-y-4'>
          <Title title="Newsletter" className="text-white mb-6"/>
          <p className='text-xl font-medium w-[80%]'>Subscribe to our newsletter to receive news on update.</p>

          <div className='flex text-gray-400 items-center justify-between px-4 border border-gray-400 rounded-lg overflow-hidden'>
            <input type="text" placeholder='Enter your email address' className='py-3 outline-none text-xl w-full'/>
            <FiArrowRight className='text-3xl '/>
        </div>

        </div>
        </div>

      </footer>
  )
}


