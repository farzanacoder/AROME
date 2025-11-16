import React from 'react'

export default function CommonHead({ className, Heading }) {
  return (
    <h1 className={`${className} text-4xl font-bold text-center`}>{Heading}</h1>
  )
}
