'use client'

import Image from 'next/image'
import React from 'react'

import BannerImage from '../../public/s5.jpg'
import BannerImage1 from '../../public/banner1.jpg'
import BannerImage2 from '../../public/banner2.jpg'

import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Pagination, Navigation, Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Banner() {
  return (
    <section className='my-10'>

      <Swiper
        pagination={{ dynamicBullets: true }}
        navigation={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        modules={[Pagination, Navigation, Autoplay]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image src={BannerImage} alt="Banner Image" className="w-full h-[70vh] object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={BannerImage1} alt="Banner Image" className="w-full h-[70vh] object-cover" />
        </SwiperSlide>

        <SwiperSlide>
          <Image src={BannerImage2} alt="Banner Image" className="w-full h-[70vh] object-cover" />
        </SwiperSlide>
      </Swiper>

      

    </section>
  )
}
