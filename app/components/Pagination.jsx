"use client";

import React from "react";
import ReactPaginate from "react-paginate";
import { useRouter, useSearchParams } from "next/navigation";

const Pagination = ({ totalItems, currentSkip, limit }) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const pageCount = Math.ceil(totalItems / limit);
  const currentPage = Math.floor(currentSkip / limit);

  const handlePageClick = (selected) => {
    const newSkip = selected.selected * limit;
    router.push(`?limit=${limit}&skip=${newSkip}`);
  };

  if (pageCount <= 1) return null;

  return (
    <div className="flex justify-center mt-10">
      <ReactPaginate
        previousLabel={"◀ Prev"}
        nextLabel={"Next ▶"}
        pageCount={pageCount}
        forcePage={currentPage}
        onPageChange={handlePageClick}
        containerClassName={"flex gap-2"}
        pageClassName={"px-4 py-2 rounded bg-gray-200 hover:bg-gray-300 cursor-pointer"}
        activeClassName={"bg-blue-500 text-white"}
        previousClassName={"px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 cursor-pointer"}
        nextClassName={"px-4 py-2 rounded bg-gray-300 hover:bg-gray-400 cursor-pointer"}
      />
    </div>
  );
};

export default Pagination;