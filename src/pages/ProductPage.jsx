import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { shopContext } from "../context/ShopContextProvider";
import Navbar from "../components/Navbar";
import { BsCart4, BsCartPlus } from "react-icons/bs";
import Item from "../components/Item";
import Notification from "../components/Notification";
import { FaMinus } from "react-icons/fa";
import { FaPlus } from "react-icons/fa6";

const ProductPage = () => {
  const { id } = useParams();
  const { products, cartItems, addToCart, isDuplicate, setIsDuplicate } =
    useContext(shopContext);
  const [duplicateItem, setIsDuplicateItem] = useState(false);
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [recomended, setRecomended] = useState([]);
  const [icons, setIcons] = useState(false);

  let prodId = Number(id);

  useEffect(() => {
    let alreadyInCart = cartItems?.filter((item) => item.id === prodId);
    let filtered = products?.filter((item) => item.id === prodId);
    console.log(products);

    if (alreadyInCart.length) {
      // console.log("already : ",...alreadyInCart);
      setProduct(...alreadyInCart);
    } else {
      setProduct(...filtered);
    }
  }, [id]);

  useEffect(() => {
    console.log(product);

    setQuantity(product?.quantity);

    console.log(product?.quantity);
  }, [product, id]);

  useEffect(() => {
    let filtered = products.filter((item) => {
      if (item.id !== prodId) {
        return item.category === product?.category;
      }
    });
    console.log(filtered);
    setRecomended(filtered);
  }, [product, id]);

  useEffect(() => {
    let filtered = cartItems.filter((item) => item.id === prodId);
    console.log(filtered);

    if (filtered.length) {
      setIsDuplicateItem(true)
      setIcons(true)
    } else {
      setIsDuplicateItem(false);
      setIcons(false)
    }
  }, [product, cartItems]);

  function hadleQuantity(clickType) {
    if (!icons) {
      if (clickType === "plus") {
        setQuantity((prev) => prev + 1);
      } else if (quantity > 1 && quantity) {
        setQuantity((prev) => prev - 1);
      }
    }
  }

  //   useEffect(() => {

  // let filtered = products.filter((item)=> item.id === id)
  // console.log(filtered);

  // //     setProduct(foundProduct || null); // Ensure null if not found
  //  }, [id]);

  return (
    <>
      {isDuplicate && <Notification />}
      
      <Navbar />
      <div className="">
        {product ? (
          <section className="text-gray-600 body-font overflow-hidden">
            <div className="container px-5 py-24 mx-auto min-h-[100vh] w-[100vw]">
              <div className="lg:w-4/5 mx-auto flex flex-wrap h-full w-full">
                <div
                  className="box-border border-2  border-gray-200 bg-gray-100 lg:w-1/2 w-full  min-h-[50%]  object-cover 
           object-center flex items-center justify-center rounded-xl"
                >
                  <img
                    alt="ecommerce"
                    className="lg:w-1/2 min-w-full  h-[80%] object-cover 
           object-center rounded"
                    src={product?.thumbnail}
                  />
                </div>
                <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
                  <h2 className="text-sm title-font text-gray-500 tracking-widest">
                    BRAND NAME
                  </h2>
                  <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">
                    {product.title}
                  </h1>
                  <div className="flex mb-4">
                    <span className="flex items-center">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-4 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span className="text-gray-600 ml-3">
                        {Math.floor(Math.random() * 10)} Reviews
                      </span>
                    </span>
                    <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                        </svg>
                      </a>
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                        </svg>
                      </a>
                      <a className="text-gray-500">
                        <svg
                          fill="currentColor"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          className="w-5 h-5"
                          viewBox="0 0 24 24"
                        >
                          <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                        </svg>
                      </a>
                    </span>
                  </div>
                  <p className="leading-relaxed">{product.description}</p>
                  <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
                    <div className="flex">
                      <span className="mr-3">Color</span>
                      <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
                      <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
                    </div>
                    <div className="flex ml-6 items-center">
                      <span className="mr-3">Quantity</span>
                      <div className="relative">
                        <div className="flex items-center justify-center gap-2 bordr-2 px-2 py-1 border-2 rounded-md">
                          <span
                            className={`cursor-pointer ${icons && "cursor-not-allowed"}`}
                            onClick={() => hadleQuantity("minus")}
                          >
                            < FaMinus />
                          </span>
                          <span>{quantity}</span>
                          <span
                            className={`cursor-pointer ${icons && "cursor-not-allowed"}`}
                            onClick={() => hadleQuantity("plus")}
                          >
                            
                            <FaPlus/>
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex">
                    <span className="title-font font-medium text-2xl text-gray-900">
                      ${product.price.toFixed(2)}
                    </span>
                    <button
                      className={` text-xl flex items-center justify-center ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded  ${
                        duplicateItem ? "cursor-not-allowed" : "cursor-pointer"
                      }`}
                      onClick={() => {
                        addToCart(
                          product?.id,
                          product?.thumbnail,
                          product?.title,
                          product?.price,
                          quantity,
                          product?.description
                        );
                      }}
                    >
                      <BsCartPlus />
                    </button>
                    <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
                      <svg
                        fill="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-5 h-5"
                        viewBox="0 0 24 24"
                      >
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            <div className="min-w-[100vw] overflow-x-hodden h-full  flex flex-col gap-4 items-center justify-center">
              <h1 className="text-center text-2xl font-semibold">
                ***___Recomended Products___***
              </h1>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 items-center overflow-x-scroll  gap-4 mx-8">
                {recomended.length ? (
                  recomended.map((item) => {
                    return (
                      <Item
                        key={item.id}
                        id={item.id}
                        thumbnail={item.thumbnail}
                        title={item.title}
                        price={item.price}
                        category={item.category}
                        description={item.description}
                      />
                    );
                  })
                ) : (
                  <h1 className="text-2xl w-[100vw] my-16">
                    <center>NO RECOMENDATIONS...</center>
                  </h1>
                )}
              </div>
            </div>
          </section>
        ) : (
          <p>Product not found</p>
        )}
      </div>
    </>
  );
};

export default ProductPage;
