import React from "react";
import SellerCard from "../../components/SellerCard";
import ScentVideo from "../../layouts/ScentVideo";
import BestSeller from "../../layouts/BestSeller";
import Sort from "../../components/Sort";
import Link from "next/link";
import Pagination from "../../components/Pagination";

export default async function shop({ searchParams }) {

  // Get limit & skip from URL query
  const limit = Number(searchParams?.limit) || 6;
  const skip = Number(searchParams?.skip) || 0;

  // Fetch products 
  const res = await fetch(
    `https://dummyjson.com/products?limit=${limit}&skip=${skip}`,
    { next: { revalidate: 60 } }
  );

  const data = await res.json();
  const products = data.products;

  console.log("limit:", limit);
  console.log("skip:", skip);

  return (
    <section className="mt-20 ">
      <div className="container">
        <Sort />

        <div className=" border-t border-t-[#ededed] flex gap-5 pb-20">
          <div className="w-[20%]">
            <h1>bla bla blaaaaaaaaaaaaaaaaaaaa</h1>
          </div>

          <div className="w-[80%]">
            <div className="mt-10 flex flex-wrap items-center justify-between gap-7">
              {products.map((product) => (
                <div key={product.id}>
                  <Link href={`/shop/${product.id}`}>
                    <SellerCard
                      title={product.title}
                      price={product.price}
                      image={product.thumbnail}
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <Pagination totalItems={data.total} currentSkip={skip} limit={limit} />

      <ScentVideo />
      <BestSeller />
    </section>
  );
}
