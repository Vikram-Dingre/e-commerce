import React, { useContext } from 'react'
import { shopContext } from '../context/ShopContextProvider'

const GoToCartNotification = () => {

  const {setIsIconClicked,iconClicked} = useContext(shopContext)

  return (
    <div style={{background:"rgba(0,0,0,0.7)"}}  className="h-[100vh] w-[100vw] fixed top-0 z-50 cursor-grab" onClick={()=> setIsIconClicked(!iconClicked) }>
    <div style={{background:"#dadada"}} className='rounded-md h-[100px] w-[45vw]   absolute left-[25%] top-[12%] capitalize text-center text-3xl flex items-center justify-center'>
    go-to cart to change quantity
  </div>
  </div>
  )
}

export default GoToCartNotification
