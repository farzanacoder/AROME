import React from 'react'
import Items1 from '../components/Items/Items1'
import Itemimg from '../../public/arrax.jpg'
import Itemimg1 from '../../public/arrax1.jpg'
import Itemimg2 from '../../public/11.jpg'

export default function Items() {
  return (
    <section className='my-24'>
        <div className="container">
        <div className='flex justify-between gap-7'>

            <div className='w-[45%] rounded-xl'>
            <Items1 Item={Itemimg} title="Women Perfumes" items={7} className=""/>
            </div>

        <div className="flex w-[55%] gap-7">
            <Items1 Item={Itemimg1} title="Gift Sets" items={8} className=""/>
            <Items1 Item={Itemimg2} title="Men Colognes" items={9} className=""/>
        </div>
        </div>

        </div>

    </section>
  )
}
