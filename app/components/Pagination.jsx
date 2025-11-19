"use client"
import { Pagination } from 'antd';
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Paginations = ({ totalItems, currentSkip, limit }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(totalItems / limit);
  const currentPage = Math.floor(currentSkip / limit);

  const handlePageClick = (selected) => {
    const newSkip = selected.selected * limit;
    router.push(`?limit=${limit}&skip=${newSkip}`);
  };

  if (pageCount <= 1) return null;

const onShowSizeChange = (current, pageSize) => {
    console.log(current, pageSize);
};  



  return (
    <div className="flex justify-center mt-10 mb-20">
  <Pagination  onChange={onShowSizeChange} align="start" defaultCurrent={1} total={50} />
    </div>
  );
};

export default Paginations;



