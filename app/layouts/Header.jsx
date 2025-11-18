import React from "react";
import List from "@/app/components/List";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { BsEnvelope, BsHandbag } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";

export default function Header() {
  return (
    <section>
        {/* header part here */}
        <header className=" bg-[#5d3754]">
          <div className="py-3 container text-white flex justify-between">
            <p>Order Online Call Us (0123) 456789</p>

          <div className="flex items-center justify-center gap-7">
            <div className="flex items-center justify-center gap-2.5">
              <HiOutlineLocationMarker />
            <p>Find a Store</p>
          </div>

            <div className="flex items-center justify-center gap-2.5">
            <BsEnvelope />
            <p>demo@arome.com</p>
          </div>
          </div>

          </div>
        </header>




      <div className="container flex items-center justify-between">
        {/* -------- nav ----- */}
        <nav className="flex items-center gap-4 w-[25%] justify-between py-6">
          <List link="/" list="Home" />
          <List link="/shop" list="Shop" />
          <List link="/blog" list="Blog" />
          <List link="/pages" list="Pages" />
          <List link="/contact" list="Contact" />
        </nav>

        {/* -------- logo ----- */}
        <Link href={'/'}>
                 <Image src="/logo.jpg" alt="Logo" width={140} height={50} />
        </Link>


        {/* -------- search and cart ----- */}
       <div className="flex gap-10">
         {/* -------- search ----- */}
        <div className="w-[460px] h-[45px] bg-[#f5f5f5] rounded-full flex items-center justify-between px-4">
          <input
            type="text"
            placeholder="Search Our Store"
            className="border-none outline-none"
          />
          <CiSearch className="text-2xl" />
        </div>

        {/* -------- cart icon ----- */}
        <div className="flex items-center justify-center gap-3 text-2xl">
          <GoPerson />
          <FaRegHeart />
          <BsHandbag />
        </div>
       </div>

      </div>
    </section>
  );
}
