import React from 'react'

export default function Title({title, className}) {
  return (
    <h2 className={`${className} text-xl font-bold`}>{title}</h2>
  )
}
