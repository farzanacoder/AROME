import Image from "next/image";
import React from "react";
import CommonHead from "../../components/CommonHead";
import CommonPara from "../../components/CommonPara";
import { GoPerson } from "react-icons/go";
import { LiaFacebookF } from "react-icons/lia";

export default function page() {
  return (
    <section className="py-20 bg-[#f8f8f8]">
      <div className=" container flex flex-col items-center justify-center text-7xl">
        <div className="w-[990px] h-[600px] overflow-hidden rounded-lg">
          <Image
            src="/blog.jpg"
            alt="Under Construction"
            width={990}
            height={600}
            className=""
          />
        </div>

        <div className="flex flex-col items-start w-[50%] mx-auto justify-center ">

          <CommonHead
            className="mt-10 mb-5"
            Heading="Proper way to apply perfumes 2025"
          />


          <div className="flex gap-7 mt-5 mb-2.5 text-lg text-[#636358]">
            <div className="flex gap-2 items-center ">
              <GoPerson />
              <p className="">Team 90Degree</p>
            </div>

            <div className="flex gap-2 items-center ">
              <GoPerson />
              <p className="">Feb 28, 2025</p>
            </div>
          </div>



          <CommonPara
            className="!text-[#636358]"
            para="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. Store your odds and ends in a breezy, beach house style with these stylish agora bins! Handcrafted of 100% jute for a natural, casual feel, these baskets are perfect for plants, laundry, toys…"
          />
          <CommonPara
            className="!text-[#636358]"
            para="As important as dreams are, they arent enough. Dreams don’t take you where you want to go."
          />
          <Image
            src="/blog_d.jpg"
            alt="Under Construction"
            width={990}
            height={600}
            className="my-6 rounded-lg "
          />
          <div className="bg-[#5d3754] text-white p-7 w-[95%] mx-auto rounded-lg mb-6">
            <p className="text-lg">Bethany Hamilton lives in Hawaii — her passion is surfing — her dream is to become a professional surfer. She spends every available minute in the water, even home-schooling so she can have more time to pursue her vision. At 8 years of age she entered her first major competition taking the division championships that year. </p>
          </div>
           <CommonPara
            className="!text-[#636358]"
            para="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don’t look even slightly believable. Store your odds and ends in a breezy, beach house style with these stylish agora bins! Handcrafted of 100% jute for a natural, casual feel, these baskets are perfect for plants, laundry, toys…"
          />

          <div className="flex gap-5 mt-10 text-2xl text-[#5d3754] cursor-pointer">
           <LiaFacebookF/>
            Facebook
          </div>
      
        </div>
      </div>
    </section>
  );
}

Facebook
Twitter
Pin it
Share