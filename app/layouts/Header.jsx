'use client'

import React, { useState, useEffect } from "react";
import List from "@/app/components/List";
import Image from "next/image";
import { CiSearch } from "react-icons/ci";
import { GoPerson } from "react-icons/go";
import { FaRegHeart } from "react-icons/fa";
import { BsEnvelope, BsHandbag } from "react-icons/bs";
import { HiOutlineLocationMarker } from "react-icons/hi";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
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

    const delay = setTimeout(() => {
      getProducts();
    }, 400);

    return () => clearTimeout(delay);
  }, [query]);

  return (
    <section>
      {/* Top Header */}
      <header className=" bg-[#5d3754]">
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
        {/* Navigation */}
        <nav className="flex items-center gap-4 w-[25%] justify-between py-6">
          <List link="/" list="Home" />
          <List link="/shop" list="Shop" />
          <List link="/blog" list="Blog" />
          <List link="/pages" list="Pages" />
          <List link="/contact" list="Contact" />
        </nav>

        {/* Logo */}
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
            <CiSearch className="text-2xl" />
          </div>

          {/* Dropdown */}
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

        {/* Icons */}
        <div className="flex items-center justify-center gap-3 text-2xl">
          <Link href={'/login'}><GoPerson /></Link>
          <FaRegHeart />
          <BsHandbag />
        </div>
      </div>
    </section>
  );
}
