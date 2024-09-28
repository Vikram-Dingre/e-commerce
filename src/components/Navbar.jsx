import React, { useContext, useState } from "react";
import { CiSearch } from "react-icons/ci";
import { IoIosContacts, IoMdContact } from "react-icons/io";
import { ImCross } from "react-icons/im";
import { IoCart, IoCartOutline } from "react-icons/io5";
import { shopContext } from "../context/ShopContextProvider";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const { selectedTab, setSelectedTab,cartItems} = useContext(shopContext);

  const [toggleSearchBar, setToggleSearchBar] = useState(false);
  // console.log(selectedTab);

  const {inputValue,handleChange} = useContext(shopContext)

  return (
    <div className="flex justify-between items-center w-[100%] p-4 fixed top-0 left-0 right-0 z-10 bg-white border-b-2">
      <h1 className="uppercase font-medium ">vikram store</h1>
      <ul className="flex gap-8 items-center justify-center list-none capitalize ">
        <li className="box-border border-b-2 hover:border-b-2  hover:border-black border-transparent transition-all duration-[.2s] ease">
          <NavLink to={"/"}>home</NavLink>
        </li>
        <li className="box-border border-b-2  hover:border-b-2  hover:border-black border-transparent transition-all duration-[.2s] ease">
          <NavLink to={"/Collection"}>Collection</NavLink>
        </li>
        <li className="box-border border-b-2  hover:border-b-2  hover:border-black border-transparent transition-all duration-[.2s] ease">
          <NavLink to={"/about"}>about</NavLink>
        </li>
        <li className="box-border border-b-2  hover:border-b-2  hover:border-black border-transparent transition-all duration-[.2s] ease">
          <NavLink to={"/contact"}>contact</NavLink>
        </li>
      </ul>
      <div className="flex items-center justify-center gap-6 text-2xl">
        <div
          className={`flex absolute top-[20%] right-[35%] ${
            toggleSearchBar ? "visible" : "invisible"
          }`}
        >
          <input
            type="text"
            className={`border-2 border-black rounded-r-none rounded-md text-[16px] w-[350px] px-2 transition-all duration-100 `}
            autoFocus
            placeholder={"Search Here..."}
            value={inputValue}
            onChange={(e)=> handleChange(e.target.value)}
          />
          <span className="bg-orange-500 w-[15%] flex items-center justify-center text-white font-black rounded-e-md p-2">
            <CiSearch />
          </span>
        </div>
        <div
          className="cursor-pointer"
          onClick={() => setToggleSearchBar(!toggleSearchBar)}
        >
          {toggleSearchBar ? <ImCross /> : <CiSearch />}
        </div>
        <IoMdContact />
        <div className="relative">
         <NavLink to={"/cart"}> <IoCart /></NavLink>
          <div className=" h-[17px] w-[17px] rounded-full bg-red-500 text-white absolute -top-[20%] -right-[30%] text-[11px] flex items-center justify-center text-center cursor-pointer">
          {cartItems.length}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
