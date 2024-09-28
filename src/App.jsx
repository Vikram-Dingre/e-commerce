import React, { useEffect, useState } from "react";
import ShopContextProvider from "./context/ShopContextProvider";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Collection from "./pages/collection";
import About from "./pages/About"
import Contact from "./pages/Contact"
import Cart from "./pages/Cart";
import "./App.css"
import ProductPage from "./pages/ProductPage";
// import {products} from './ProductsData'
// import ProductsData from "./ProductsData";

const App = () => {
  return (
    <>
      <ShopContextProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/About" element={<About/>}/>
            <Route path="/contact" element={<Contact/>}/>
            <Route path="/cart" element={<Cart />}/>
            <Route path="/product/:id" element={<ProductPage/>}/>
          </Routes>
        </BrowserRouter>
      </ShopContextProvider>
    </>
  );
};

export default App;
