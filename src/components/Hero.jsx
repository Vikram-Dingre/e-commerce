import React from "react";

const Hero = () => {
  return (
    <div className="h-[100v] w-[100%] flex items-center jusatify-center mt-16">

        {/* both side container */}
      <div className="flex  items-center justify-evenly p-4  ">
        {/* left side */}

        <div className="max-w-[30%] flex flex-col items-start justify-center gap-8 ">
          <h1 className="text-orange-500 uppercase font-semibold font-lg">
            latest products in 2024
          </h1>
          <h4 className="capitalize text-4xl">digital drone<br/> new vision for you</h4>
          <h5 className="font-normal">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Eum quis iusto, ipsam debitis repellat explicabo neque non, suscipit, distinctio error perferendis culpa dolorem quia dolore assumenda amet dolor vel odit?</h5>
          <button className="pt-2 pb-3 px-4 text-white font-semibold bg-orange-700 capitalize rounded-full content-center text-center hover:bg-black hover:text-white transition-all duration-200">shop now</button>
        </div>
        {/* right side */}
        <img className=" w-[45%]" src="https://drou-electronics-store.myshopify.com/cdn/shop/files/Untitled-1.png?v=1674416538" alt="hero image" />
      </div>
    </div>
  );
};

export default Hero;
