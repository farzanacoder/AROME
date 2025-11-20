import React from 'react'
import CommonBlog from '../../components/CommonBlog'

export default function page() {
  return (
    <>
        <div className='flex container flex-wrap gap-5'>
            <CommonBlog/>
        <CommonBlog/>
        <CommonBlog/>
        <CommonBlog/>
        <CommonBlog/>
        <CommonBlog/>
        </div>
    </>
  )
}
