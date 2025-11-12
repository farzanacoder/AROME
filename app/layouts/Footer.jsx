import React from 'react'
import FooterLogo from '@/app/components/footer/FooterLogo'

export default function Footer() {
  return (
      <footer className="bg-[#5d3754] py-52">
        <div className=" container text-white flex flex-col lg:flex-row items-center justify-center gap-4">
          <FooterLogo />
        </div>
      </footer>
  )
}
