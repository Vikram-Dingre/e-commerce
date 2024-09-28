import React, { useContext } from "react";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import TrendingItems from "../components/TrendingItems";
import LatestItems from "../components/LatestItems";
import PopularItems from "../components/PopularItems";
import EmptyPage from "../components/EmptyPage";
import { shopContext } from "../context/ShopContextProvider";
import Notification from "../components/Notification";

const Home = () => {
  const { products, isDuplicate } = useContext(shopContext);
  return (
    <div className="bg-slate-50">
      <div>{isDuplicate && <Notification />}</div>
      <Navbar />
      {!products.length ? (
        <div className="h-[100vh] w-[100vw] flex items-center justify-center">
          <EmptyPage />
        </div>
      ) : (
        <div>
          <Hero />
          <TrendingItems />
          <LatestItems />
          <PopularItems />
        </div>
      )}
    </div>
  );
};

export default Home;
