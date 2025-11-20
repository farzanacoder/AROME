'use client'

import React, { useState, useEffect } from "react";
import List from "@/app/components/List";
import Logo from "@/public/logo.jpg";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { BsEnvelope, BsHandbag } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";
// eslint-disable-next-line no-unused-vars
import { AnimatePresence, motion } from "framer-motion";
import { IoMenu } from "react-icons/io5";
import { RxCross2 } from "react-icons/rx";





export default function Header() {
  let [shoping, setShoping] = useState(false);
  let [menuclick, setMenuClick] = useState(false);

  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [active, setActive] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setActive(false);
    setQuery("");
    setResults([]);
  }, [pathname]);

  useEffect(() => {
    const getProducts = async () => {
      if (query.length < 2) {
        setResults([]);
        return;
      }

      const res = await fetch(`https://dummyjson.com/products/search?q=${query}`);
      const data = await res.json();
      setResults(data.products);
    };

    const delay = setTimeout(getProducts, 400);
    return () => clearTimeout(delay);
  }, [query]);

  return (
    <section className="sticky top-0 z-50 bg-white shadow-md">
      {/* Top Header */}
      <header className=" bg-[#5d3754] hidden lg:flex">
        <div className="py-3 container text-white flex justify-between">
          <p>Order Online Call Us (0123) 456789</p>
          <div className="flex items-center gap-7">
            <div className="flex items-center gap-2.5">
              <HiOutlineLocationMarker />
              <p>Find a Store</p>
            </div>
            <div className="flex items-center gap-2.5">
              <BsEnvelope />
              <p>demo@arome.com</p>
            </div>
          </div>
        </div>
      </header>


      <div className="container flex items-center justify-between">
        <nav className=" items-center gap-4 hidden lg:flex w-[25%] justify-between py-10">
                  <List link="/" list="Home" />
                  <List link="/shop" list="Shop" />
                  <List link="/blognews" list="Blog" />
                  <List link="/pages" list="Pages" />
                  <List link="/contact" list="Contact" />
                </nav>



        <IoMenu
          onClick={() => setMenuClick(true)}
          className="text-xl md:hidden cursor-pointer"
        />
        <AnimatePresence>
          {menuclick && (
            <>
              <motion.div onClick={() => setMenuClick(false)} initial={{ opacity: 0 }} animate={{ opacity: 0.45 }} exit={{ opacity: 0 }} transition={{ duration: 0.3 }} className="fixed inset-0 bg-black/40 z-40" />

              <motion.div initial={{ x: '-100%' }} animate={{ x: 0 }} exit={{ x: '-100%' }} transition={{ duration: 0.4 }} className="z-50 fixed left-0 top-0 h-full bg-white px-4 py-4 w-[250px]">
                <Image className="!w-[170px]" src={Logo} />
                <div className='pt-6 flex justify-between'>
                  <p className="text-base font-semibold">Shop By Categories </p>
                  <button onClick={() => setMenuClick(false)}>
                    <RxCross2 className="text-xl cursor-pointer" />
                  </button>
                </div>

                <nav className="flex flex-col gap-3 p-3">
                  <List link="/" list="Home" />
                  <List link="/shop" list="Shop" />
                  <List link="/blognews" list="Blog" />
                  <List link="/pages" list="Pages" />
                  <List link="/contact" list="Contact" />
                </nav>
                <button className='font-semibold rounded-md w-[220px] py-3 bg-red text-white hover:text-white hover:bg-black hover:border-black text-sm cursor-pointer duration-300'>Login</button>
              </motion.div>
            </>
          )}
        </AnimatePresence>




        <Link href={'/'}>
          <Image src="/logo.jpg" alt="Logo" width={140} height={50} />
        </Link>



        {/* Search */}
        <div className="relative w-[460px]">
          <div className="h-[45px] bg-[#f5f5f5] rounded-full flex items-center justify-between px-4">
            <input
              type="text"
              placeholder="Search Our Store"
              className="border-none outline-none w-full bg-transparent"
              value={query}
              onChange={(e) => { setQuery(e.target.value); setActive(true); }}
              onFocus={() => setActive(true)}
            />
            <CiSearch className="text-2xl cursor-pointer" />
          </div>

          {active && results.length > 0 && (
            <div className="absolute top-14 w-full bg-white shadow-lg rounded-lg p-3 z-50">
              {results.map((item) => (
                <Link
                  key={item.id}
                  href={`/shop/${item.id}`}
                  className="flex items-center gap-3 p-2 hover:bg-gray-100 rounded-lg"
                  onClick={() => setActive(false)}
                >
                  <img src={item.thumbnail} className="w-12 h-12 rounded" />
                  <p className="text-gray-800">{item.title}</p>
                </Link>
              ))}
            </div>
          )}
        </div>





        <div className="flex items-center justify-center gap-3 text-2xl">
          <Link href={'/login'}><GoPerson /></Link>
          <Link href={'/login'}><FaRegHeart /></Link>

          {/* cart animation here */}
          <Link href={'/cart'}>
            <BsHandbag
              onClick={() => setShoping(true)}
              className="hover:text-red-500 duration-300 text-2xl md:text-3xl cursor-pointer"
            />
            <AnimatePresence>
              {shoping && (
                <>
                  <motion.div
                    onClick={() => setShoping(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 0.45 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="fixed inset-0 bg-black z-40"
                  />

                  <motion.div
                    initial={{ x: "100%" }}
                    animate={{ x: 0 }}
                    exit={{ x: "100%" }}
                    transition={{ duration: 0.4 }}
                    className="fixed right-0 top-0 md:w-[390px] w-[300px] h-full bg-white z-50"
                  >
                    <div className="flex justify-between items-center p-4 border-b border-gray-300">
                      <h1 className="font-semibold">Shopping Cart (0)</h1>
                      <button onClick={() => setShoping(false)}>
                        <RxCross2 className="text-xl cursor-pointer" />
                      </button>
                    </div>

                    <div className="flex flex-col items-center justify-center gap-3 mt-28">
                      <Image className='!w-[150px]' src={Logo} />
                      <p className="text-gray-600 text-base font-semibold">
                        Your Cart is currently empty
                      </p>
                      <button className="md:px-10 md:py-2 px-2.5 py-1.5 text-[12px] uppercase md:text-md rounded bg-red-500 text-white hover:bg-red-600 duration-700">
                        Continue Shopping
                      </button>
                    </div>
                  </motion.div>
                </>
              )}
            </AnimatePresence>
          </Link>
        </div>
      </div>
    </section>
  );
}







