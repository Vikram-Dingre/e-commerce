import React, { useContext } from 'react'
import { shopContext } from '../context/ShopContextProvider'
import { Link, NavLink } from 'react-router-dom'
import { BsCart4, BsCartPlus } from "react-icons/bs";

const Notification = () => {
  const {isDuplicate,setIsDuplicate} = useContext(shopContext)
  
  return (

   <>
   <div>
   <div style={{background:"rgba(0,0,0,0.8)"}}  className="h-[100vh] w-[100vw] fixed top-0 z-20 cursor-grab" onClick={()=> setIsDuplicate(!isDuplicate) }> </div>
    
    <div style={{background:"rgba(255,255,255,0.9)", borderBottomLeftRadius:"0px"}} className='  rounded-3xl h-[100px] w-[40vw]  z-30 fixed left-[30%] top-[10%] capitalize text-center text-[23px] flex items-center justify-center'>
    ❌ Ooops! item already exists in your cart
    </div>
   <Link to={"/cart"}>
   <button className="capitalize px-2 py-1 bg-red-500 fixed right-[30%] top-[10%]  text-center text-xl flex items-center justify-center rounded-sm z-30 text-white "><span className='hover:scale-[1.2] transition-all duration-75'><BsCart4/></span></button></Link>
   </div>
   </>
  )
}

export default Notification
