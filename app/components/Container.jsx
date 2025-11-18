import React from 'react'

const Container = ({ className, children }) => {
  return (
    <div className={`max-w-container px-1 md:px-0 mx-auto ${className}`}>
      {children}
    </div>
  )
}

export default Container