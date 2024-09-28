import React, { useContext, useEffect, useState } from "react";
import { shopContext } from "../context/ShopContextProvider";
import { BsCart4, BsCartPlus } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { NavLink, useNavigate } from "react-router-dom";
import ItemAddedNotification from "./ItemAddedNotification";

const Item = ({ id, thumbnail, title, price, category ,description , quantity = 1}) => {
  const { addToCart, cartItems , products , isAdded , setIsAdded } = useContext(shopContext);
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [isDuplicate, setIsDuplicate] = useState(false);
  const [icons,setIcons] = useState(false)

  const navigate = useNavigate()

  function handleDuplication() {
    let filtered = cartItems.filter((item) => {
      if (item.id === id) {
        return item;
      }
    });

    if(filtered.length){
      setIsDuplicate(true)
      setIcons(true)
    }
    else{
      setIsDuplicate(false)
      setIcons(false)
    }
    
  }

  function handleAdd(){
    if(!isDuplicate){
      setIsAdded(true)
    }
    else setIsAdded(false)
  }

  function hadleQuantity(clickType) {
   if(!icons){
    if (clickType === "plus") {
      setNewQuantity((prev) => prev + 1);
    } else if (newQuantity > 1 && newQuantity) {
      setNewQuantity((prev) => prev - 1);
    }
   }

  }

  useEffect(() => {
    handleDuplication();
    cartItems.map((item) => {
      if (item.id === id) {
        setNewQuantity(item.quantity);
      }
    });
  }, [cartItems]);

  
  return (
    <div className=" w-[250px] flex flex-col gap-4 items- justify-center  p-4 rounded-md border shadow-slate-500 shadow-lg m-6 bg-white" >
      <div className="flex flex-col gap-2 object-center ">

      <img
         onClick={() => navigate(`/product/${id}`)}
          className="hover:scale-[1.1] transition-all duration-150 w-[170px] h-[170px] object-contain object-center cursor-pointer"
          src={thumbnail}
          alt={title}
        />
        
        <h1 className=" text-left">{title}</h1>
        <h2 className=" text-left">{category}</h2>
        <h3 className=" text-left">{price}</h3>
      </div>
      <div className={`flex justify-between items-center w-[100%] `}>
        <div className="flex gap-3 items-center px-3 py-1 border-2 rounded-md ">
          <button
            className={`text-sm ${isDuplicate && "cursor-not-allowed"}`}
            onClick={() => {
              handleAdd();
              handleDuplication();
              hadleQuantity("minus")
            }}
          >
            <FaMinus />
          </button>
          {newQuantity}
          <button
            onClick={() => {
              handleDuplication();
              hadleQuantity("plus");
            }}
            className={`text-sm ${isDuplicate && "cursor-not-allowed"}`}
          >
            <FaPlus />
          </button>
        </div>
        <button
          onClick={() => {
            handleAdd()
            addToCart(id, thumbnail, title, price, newQuantity,description,category);
            handleDuplication()
            
          }}
          className={`w-[35%] bg-black text-white py-2 rounded-xl hover:bg-transparent hover:border hover:border-black hover:text-black transition-all duration-150 linear border flex items-center justify-center text-xl ${
            isDuplicate && "cursor-not-allowed"
          }`}
        >
          {" "}
          <BsCartPlus />
        </button>
      </div>
    </div>
  );
};

export default Item;
