import React from 'react'

export default function Button({btn , className}) {
  return (
    <button className={`${className} px-9 py-3  bg-[#5d3754] text-white hover:bg-[#7a4f6e] transition duration-300 rounded-lg`}>
      {btn}
    </button>
  )
}
