import React, { useContext, useEffect, useRef, useState } from "react";
import { BsCart4, BsCartPlus } from "react-icons/bs";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";
import { AiOutlineDelete } from "react-icons/ai";
import { shopContext } from "../context/ShopContextProvider";
import { useNavigate } from "react-router-dom";

const CartItem = ({ id, thumbnail, name, quantity = 1, price}) => {
  const [newQuantity, setNewQuantity] = useState(quantity);
  const [newPrice, setNewPrice] = useState(price);

  const { setTotalPrice, cartItems, handleDelete } = useContext(shopContext);

  const navigate = useNavigate()

  useEffect(() => {
    changeQuantity();
    calcTotal();
  }, [newQuantity, cartItems]);

  function calcTotal() {
    let calculated = cartItems.reduce((acc, item) => {
      return acc + item.price * item.quantity;
    }, 0);
    setTotalPrice(calculated);
  }

  function changeQuantity() {
    cartItems.map((item) => {
      if (item.id === id) {
        item.quantity = newQuantity;
      }
    });
    // we can see the quantity is changed directly in the product

    // cartItems.map((item)=>{
    //   console.log(item);

    // })
  }

  function hadleQuantity(clickType) {
    if (clickType === "plus") {
      setNewQuantity(newQuantity + 1);
    } else if ((newQuantity > 1 && newQuantity) && clickType === "minus") {
      setNewQuantity(newQuantity - 1);
    }
  }

      
  useEffect(()=>{
    cartItems.map(item =>{
      if(item.id === id){
        console.log(item, item.id);
        setNewQuantity(item.quantity)
      }
    })
  },[cartItems])

  return (
    <>
      <div className="grid grid-cols-6 gap-8 w-[100%] overflow-y-scroll">
        <div className="h-[80px] w-[80px] flex  justify-center ">
          <img
          onClick={() => navigate(`/product/${id}`)}
            className="w-full h-full flex items-center object-contain justify-center "
            src={thumbnail}
            alt="image"
          />
        </div>
        <h1 className="text-sm">{name}</h1>
        <div className="">
          <div className="box-border py-1  px-4 border-2  rounded-md flex gap-3 items-center justify-center">
            <button className="text-sm " onClick={() => hadleQuantity("minus")}>
              <FaMinus />
            </button>
            {newQuantity}
            <button onClick={() => hadleQuantity("plus")} className="text-sm ">
              <FaPlus />
            </button>
          </div>
        </div>
        <div className="m-0">{price.toFixed(2)}</div>
        <div className="m-0" value={newQuantity * newPrice}>
          {Math.floor(newQuantity * newPrice).toFixed(2)}
        </div>
        <div
          className="text-xl cursor-pointer"
          onClick={() => handleDelete(id)}
        >
          <AiOutlineDelete />
        </div>
      </div>
    </>
  );
};

export default CartItem;
