import React from 'react'
import Icon from './Icon'
import { FaXTwitter } from 'react-icons/fa6'
import { BiLogoInstagram } from 'react-icons/bi'
import { FaFacebookF, FaSnapchat } from 'react-icons/fa'
import { IoLogoPinterest } from 'react-icons/io'

export default function FooterLogo() {
  return (
    <div className='flex flex-col gap-10'>
        <img src="/logo_w.jpg" alt="Footer Logo" width={140} height={50} />

        <p>Arome® was founded on the belief that wellness is more than just a necessity—it's a powerful expression of self-care and vitality.</p>

        <div className='flex items-center justify-center gap-2'>
            <Icon icon={FaXTwitter} />
            <Icon icon={BiLogoInstagram} />
            <Icon icon={FaFacebookF} />
            <Icon icon={IoLogoPinterest} />
            <Icon icon={FaSnapchat} />
        </div>
    </div>
  )
}
