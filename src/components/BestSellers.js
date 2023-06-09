import React from 'react'
import Pull from './Pull'
import { pullList } from '../datas/PullData'

function BestSellers() {
  return (
    <section className='bg-repeat bg-fixed flex flex-col items-center py-12 lg:py-24'>
      <p className='text-4xl font-medium lg:text-6xl'>Nos best sellers</p>
      <div className='flex flex-wrap gap-4 justify-center my-8 max-w-2xl lg:my-12 lg:max-w-screen-2xl'>
        {
          pullList.map(({ name, cover, cercle, colors, price, apport, news }, idx) => (
            <Pull
              key={idx + cercle}
              name={name}
              cover={cover}
              cercle={cercle}
              colors={colors}
              price={price}
              apport={apport}
              news={news}
            />
          ))
        }
      </div>
      <a href="# ">
        <button className='transition-all py-2.5 px-6 rounded-full relative active:shadow-[0_0_black] 
        active:translate-x-1 active:translate-y-1 bg-swagg hover:text-white hover:bg-cornflower-blue 
      active:text-white active:bg-cornflower-blue font-semibold shadow-[4px_4px_black] border border-black'>
          Voir tous nos tels
        </button>
      </a>
    </section>
  )
}

export default BestSellers