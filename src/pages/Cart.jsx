import React, { useContext, useState } from "react";
import Navbar from "../components/Navbar";
import { shopContext } from "../context/ShopContextProvider";
import CartItem from "../components/CartItem";
import EmptyPage from "../components/EmptyPage";

const Cart = () => {
  const { totalPrice, cartItems } = useContext(shopContext);
  // console.log(totalPrice)

  return (
    <div className="h-[100vh] ">
      <Navbar />
      {!cartItems.length ? (
        <EmptyPage />
      ) : (
        // Both sides
        <div className="flex w-full h-[100vh] pt-[4%] justify-between items-start overflow-hidden py-4 px-8">
          {/* left side */}
          <div className="p-4 w-[60%] overflow-y-auto h-full ">
            <h1 className="text-2xl font-semiold uppercase text-center m-8">
              *****____your cart____*****
            </h1>
            <div className="flex flex-col gap-8 items-center justify-center border-2  p-8 w-full">
              <div className="grid grid-cols-6  gap-8 items-center w-full">
                <h1>image</h1>
                <h1>Name</h1>
                <h1>Quantity</h1>
                <h1>Price</h1>
                <h1>Total</h1>
                <h1 className="-ml-[15px]">Remove</h1>
              </div>
              {cartItems.map((item, idx) => {
                console.log(item.quantity);
                
                return (
                  <CartItem
                    key={item.id}
                    id={item.id}
                    thumbnail={item.thumbnail}
                    name={item.title}
                    quantity={item.quantity}
                    price={item.price}
                  />
                );
              })}
            </div>
          </div>

          {/* right side */}
          <div className="h-full w-[40%] flex items-center justify-center">
            <div className=" rounded-md p-4 w-[80%]  ">
              <h1 className="uppercase text-2xl m-3 text-center mb-6">
                ****____cart total____****
              </h1>

              <div className="w-[100%]">
                <div className="w-full border-b-2 m-2 p-2 flex justify-between items-center ">
                  <h1 className="uppercase text-sm font-normal">SubTotal</h1>{" "}
                  <span className="text-sm font-extralight text-black ">
                    ₹{totalPrice.toFixed(2)}
                  </span>
                </div>
                <div className="w-full border-b-2 m-2 p-2 flex justify-between items-center ">
                  <h1 className="uppercase text-sm font-normal">
                    Shipping Free
                  </h1>{" "}
                  <span className="text-sm font-extralight text-black ">
                    ₹10.00
                  </span>
                </div>
                <div className="w-full  m-2 p-2 flex justify-between items-center ">
                  <h1 className="uppercase text-sm font-normal">Total </h1>{" "}
                  <span className="text-sm font-extralight text-black ">
                    ₹{(totalPrice - 10.0).toFixed(2)}
                  </span>
                </div>
              </div>
              <button className="uppercase font-light text-center bg-orange-500 p-2 mt-3 rounded-md text-white w-full text-[14px] hover:bg-orange-600">
                Proceed To Checkout
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
