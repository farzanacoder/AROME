import React from 'react'
import Banner from '../layouts/Banner'
import Items from '../layouts/Items'
import BestSeller from '../layouts/BestSeller'
import ScentVideo from '../layouts/ScentVideo'
import PopularScent from '../layouts/PopularScent'
import Brand from '../layouts/Brand'
import Quality from '../layouts/Quality'
import ShopLook from '../layouts/ShopLook'
import Customers from '../layouts/Customers'

export default function page() {
  return (
    <>
        <Banner/>
        <Items/>
        <BestSeller/>
        <ScentVideo/>
        <PopularScent/>
        <Brand/>
        <Quality/>
        <ShopLook/>
        <Customers/>
    </>
  )
}
