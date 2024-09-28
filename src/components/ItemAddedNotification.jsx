import React, { useContext } from "react";
import { shopContext } from "../context/ShopContextProvider";
import { Link, NavLink } from "react-router-dom";
import { BsCart4, BsCartPlus } from "react-icons/bs";

const ItemAddedNotification = () => {
  const { isAdded, setIsAdded } = useContext(shopContext);

  return (
    <>
      {/* <div style={{background:"rgba(0,0,0,0.8)"}}  className="h-[100vh] w-[100vw] fixed top-0 z-20 cursor-grab" onClick={()=> setIsAdded(!isAdded)}> </div>
    
    <div style={{background:"rgb(195, 195, 195)", borderBottomLeftRadius:"0px"}} className='  rounded-3xl h-[100px] w-[45vw]  z-30 fixed left-[25%] top-[10%] capitalize text-center text-[26px] flex items-center justify-center pb-3 text-green-600'>
      Item Added Successfully!!!
    </div>
   <Link to={"/cart"}>
   <button className="capitalize px-2 py-1 bg-red-500 fixed right-[30%] top-[10%]  text-center text-xl flex items-center justify-center rounded-sm z-30 text-white "><span className='hover:scale-[1.2] transition-all duration-75'><BsCart4/></span></button></Link> */}

      <div
        style={{ background: "rgba(0,0,0,0.8)" }}
        className="h-[100vh] w-[100vw] fixed top-0 z-20 cursor-grab"
        onClick={() => setIsAdded(!isAdded)}
      >
        {" "}
      </div>

      <div
        style={{
          background: "rgba(255,255,255,0.9)",
          borderBottomLeftRadius: "0px",
        }}
        className="  rounded-3xl h-[80px] w-[30vw]  z-30 fixed font-normal left-[35%] top-[10%] capitalize text-center text-[22px] flex items-center justify-center pb-1"
      >
        ✅ Item Added Successfully!!!
      </div>
      <Link to={"/cart"}>
        <button className="capitalize px-2 py-1 bg-red-500 fixed right-[35%] top-[10%]  text-center text-xl flex items-center justify-center rounded-sm z-30 text-white ">
          <span className="hover:scale-[1.2] transition-all duration-75">
            <BsCart4 />
          </span>
        </button>
      </Link>
    </>
  );
};

export default ItemAddedNotification;
