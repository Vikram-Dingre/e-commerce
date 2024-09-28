import React, { useContext, useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import { shopContext } from "../context/ShopContextProvider";
import Item from "../components/Item";
import CollectionPriceFilter from "../components/CollectionPriceFilter";
import EmptyPage from "../components/EmptyPage";
import Notification from "../components/Notification";
import GoToCartNotification from "../components/GoToCartNotification";
import ItemAddedNotification from "../components/ItemAddedNotification";

const Collection = () => {
  let priceObj = [
    "0-19",
    "20-29",
    "30-39",
    "40-49",
    "50-69",
    "69-89",
    "90-100",
    "100-200",
    "201-300",
    "501-700",
    "901-1000",
    "12000-12999",
  ];

  const { products } = useContext(shopContext);
  const [filterProducts, setFilterProducts] = useState([]);
  const [category, setCategory] = useState([]);
  const [price, setPrice] = useState([...priceObj]);
  const [selectedPrice, setSelectedPrice] = useState("");

  const { inputValue, isDuplicate, setIsduplicate , isAdded, setIsAdded} = useContext(shopContext);

  function searchItems() {
    // console.log(inputValue);

    let filtered = products.filter((item) => {
      if (item.title.toLowerCase().includes(inputValue.toLowerCase())) {
        return item;
      }
    });
    // console.log(filtered);
    setFilterProducts(filtered);
  }
  useEffect(() => {
    searchItems();
  }, [inputValue]);

  function applyFilter(e) {
    let value = e.target.value;

    if (category.includes(value)) {
      setCategory((prev) => prev.filter((item) => item !== value));
    } else {
      setCategory((prev) => [value, ...prev]);
    }

    // if (category.includes(value)) {
    //   let filtered = category.filter((item) => item !== value);
    //   setCategory(filtered);
    // } else {
    //   setCategory([value, ...category]);
    // }

    // OR

    // setCategory((prev) => {
    //   if (prev.includes(value)) return prev.filter((item) => item !== value);
    //   else return [value, ...prev];
    // });
  }

  useEffect(() => {
    if (category.length === 0) {
      setFilterProducts(products);
    } else {
      let filtered = products.filter((item) =>
        category.includes(item.category)
      );
      console.log(filterProducts);
      setFilterProducts(filtered);
    }
  }, [category, products]);

  // useEffect(() => {
  //   if (category.length === 0) {
  //     setFilterProducts(products);
  //   } else {
  //     const filtered = products.filter((item) => category.includes(item.category));
  //     setFilterProducts(filtered);
  //   }
  // }, [category, products]);

  function sortMethod(selectedValue) {
    // console.log(selectedValue);
    let sorted = [...filterProducts];
    switch (selectedValue) {
      case "high-low":
        sorted.sort((a, b) => b.price - a.price);
        // setFilterProducts(sorted)
        break;
      case "low-high":
        sorted.sort((a, b) => a.price - b.price);
        // setFilterProducts(sorted)
        break;
      case "relevant":
        sorted = [...products];
        break;
      // setFilterProducts(sorted)
      default:
        alert("Invalid choice...");
        break;
    }
    setFilterProducts(sorted);
  }

  useEffect(() => {}, [selectedPrice]);

  function handlePriceClick(price) {
    let priceLimits = price.split("-");
    // console.log(priceLimits);

    let filteredPrices = products.filter((item) => {
      return item.price >= priceLimits[0] && item.price <= priceLimits[1];
    });

    console.log(filterProducts);
    setFilterProducts(filteredPrices);
    console.log(filterProducts);

    // console.log(filteredPrices);
  }

  return (
    <>
      <div>
        {isDuplicate && <Notification />}

        {isAdded && <ItemAddedNotification/>}

        <Navbar />

        {!products.length ? (
          <div className="h-[100vh] w-[100vw] flex items-center justify-center">
            <EmptyPage />
          </div>
        ) : (
          <div className="flex w-[100%] h-[100vh] justify-between  pt-[5%] gap-4 overflow-hidden bg-slate-50">
            {/* left side */}
            <div className="left h-[100vh] w-[25%] flex flex-col gap-4 items-start justify-start pt-[4%] p-6 overflow-y-auto">
              <h1 className="uppercase text-3xl font-medium">Filter</h1>
              <div className=" w-[100%]">
                <div className=" border-2 py-4 px-6 rounded-md">
                  <h1 className="text-lg text-left uppercase font-normal mb-4 ">
                    categories
                  </h1>

                  <ul>
                    <li className="m-3 ">
                      <input
                        type="checkbox"
                        id="1"
                        className="mx-3"
                        value={"beauty"}
                        onChange={applyFilter}
                      />
                      <label
                        htmlFor="1"
                        className="cursor-pointer"
                        value={"beauty"}
                      >
                        Beauty
                      </label>
                    </li>
                    <li className="m-3">
                      <input
                        type="checkbox"
                        id="2"
                        className="mx-3"
                        value={"fragrances"}
                        onChange={applyFilter}
                      />
                      <label htmlFor="2" className="cursor-pointer">
                        fragrances
                      </label>
                    </li>
                    <li className="m-3">
                      <input
                        type="checkbox"
                        id="3"
                        className="mx-3"
                        value={"furniture"}
                        onChange={applyFilter}
                      />
                      <label htmlFor="3" className="cursor-pointer">
                        furniture
                      </label>
                    </li>
                    <li className="m-3">
                      <input
                        type="checkbox"
                        id="4"
                        className="mx-3"
                        value={"groceries"}
                        onChange={applyFilter}
                      />
                      <label htmlFor="4" className="cursor-pointer">
                        groceries
                      </label>
                    </li>
                  </ul>
                </div>

                {/* Filter by price */}
                <div className="my-8 text-lg border-2 py-4 px-6 rounded-md">
                  <h1>FILTER BY PRICE</h1>
                  <div className="px-6 py-4">
                    {price.map((price, idx) => {
                      return (
                        <CollectionPriceFilter
                          key={idx}
                          price={price}
                          handlePriceClick={handlePriceClick}
                        />
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
            {/* right side */}

            {!filterProducts.length ? <EmptyPage/> : 
             <div className="pt-[4%] w-[80%] overflow-y-auto p-8">
             <div className="flex justify-between items-center ">
               <h1 className="text-3xl">***____All Collections____***</h1>

               <select
                 name="sort"
                 id="sort"
                 className="border-2 border-black rounded-md p-2 "
                 onChange={(e) => sortMethod(e.target.value)}
               >
                 <option className="text-md" value={"relevant"}>
                   Sort: Relevant
                 </option>
                 <option className="text-md" value={"high-low"}>
                   Sort: high-low
                 </option>
                 <option className="text-md" value={"low-high"}>
                   Sort: low-high
                 </option>
               </select>
             </div>
             <div className="grid lg:grid-cols-3  md:grid-cols-2  grid-cols-1 gap-4">
               {filterProducts.map((item) => {
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
               })}
             </div>
           </div>
            }
           
          </div>
        )}
      </div>
    </>
  );
};

export default Collection;
