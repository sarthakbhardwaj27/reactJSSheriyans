import React from 'react'

function Products({itemName ,imgUrl}) {
  return (
    <div className='bg-zinc-700 h-80 w-48 text-white p-4 m-5 rounded-xl hover:bg-zinc-900'>
        {itemName}
        <img src={imgUrl} alt="" srcset="" className='mt-8 h-40 w-40 object-cover hover:border-solid border-white border cursor-pointer' />
        <button className='h-10 w-20 bg-blue-400 hover:bg-blue-500 cursor-pointer rounded-xl mt-8 ml-10'>Explore</button>
    </div>
  )
}

export default Products