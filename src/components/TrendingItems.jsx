import React, { useContext } from 'react'
import { shopContext } from '../context/ShopContextProvider'
import Item from './Item'

const TrendingItems = () => {

  const {products} = useContext(shopContext)
  

  return (
    <div className='max-w-[90%] p-16  mx-auto'>
      <h1 className='text-2xl font-semibold mb-8 text-center'>*****_____________Trending Products___________*****</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4">
        {
          products.slice(0,9).map(item =>{
           return(
            <Item key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title} price={item.price} category={item.category}  description = {item.description} quantity={item.quantity} />
           )
          })  
        }
      </div>
     
    </div>
  )
}

export default TrendingItems
