"use client"
import { Pagination } from 'antd';
import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

const Paginations = ({ totalItems = 0, currentSkip = 0, limit = 10 }) => {
  const router = useRouter();

  const safeLimit = Number(limit) || 10;
  const safeSkip = Number(currentSkip) || 0;
  const safeTotal = Number(totalItems) || 0;

  const currentPage = Math.floor(safeSkip / safeLimit) + 1;

  const handlePageChange = (page, pageSize) => {
    const newSkip = (page - 1) * pageSize;
    router.push(`?limit=${pageSize}&skip=${newSkip}`);
  };

  if (safeTotal <= safeLimit) return null;

  return (
    <div className="flex justify-center mt-10 mb-20">
      <Pagination
        current={currentPage}
        pageSize={safeLimit}
        total={safeTotal}
        onChange={handlePageChange}
        showSizeChanger={false}
      />
    </div>
  );
};

export default Paginations;
