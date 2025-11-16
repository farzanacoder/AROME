import React from "react";

export default function Icon({ Iconn , className}) {
  return (
    <div className={`w-10 h-10  bg-white shadow-lg hover:bg-[#5d3754] hover:text-[#ffffff] rounded-full flex items-center justify-center absolute top-5 -right-5 cursor-pointer hover:scale-110 duration-300 ${className}`}>
      <Iconn />
    </div>
  );
}
