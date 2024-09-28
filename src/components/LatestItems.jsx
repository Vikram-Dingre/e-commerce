import React, { useContext } from 'react'
import Item from './Item';
import { shopContext } from '../context/ShopContextProvider';

const LatestItems = () => {
  const {products} = useContext(shopContext)
  return (
    <div className='max-w-[90%] p-16 mx-auto'>
      <h1 className='text-2xl font-semibold mb-8 text-center -mt-8'>*****_____________Latest Products___________*****</h1>

      <div className="grid lg:grid-cols-3 md:grid-cols-2  grid-cols-1 gap-4">
        {
          products.slice(9,18).map(item =>{
           return(
            <Item key={item.id} id={item.id} thumbnail={item.thumbnail} title={item.title} price={item.price} category={item.category}  description = {item.description} quantity={item.quantity} />
           )
          })  
        }
     
      </div>
    </div>
  )
}

export default LatestItems
